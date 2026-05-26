<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content" :class="{ 'content-expanded': !isSidebarVisible }">
        <div class="page-title">
          <h1>Administrative Dashboard</h1>
          <p>Comprehensive oversight and monitoring of all student organizations</p>
        </div>

        <div class="calendar-page">
          <div class="calendar-layout">
            <!-- We send 'currentViewMode' DOWN to the Grid -->
            <CalendarView :viewMode="currentViewMode" :events="events" @org-change="selectedOrg = $event" />

            <!-- We send 'currentViewMode' DOWN and listen for 'change-view' UP -->
            <CalendarUpcomingAct :currentView="currentViewMode" @change-view="currentViewMode = $event" :events="events"
              :selectedOrg="selectedOrg" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import CalendarView from '/src/components/Calendar/CalendarView.vue'
import CalendarUpcomingAct from '/src/components/Calendar/CalendarUpcomingAct.vue'
import { mapState, mapActions } from 'pinia';
import { useActivityStore } from '/src/stores/activityStore';

export default {
  components: {
    AppHeader,
    AppSidebar,
    CalendarView,
    CalendarUpcomingAct
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'OSD Admin',
      isSidebarVisible: true,
      currentViewMode: 'month',
      selectedOrg: 'All Organizations',
    }
  },
  async mounted() {
    await this.fetchActivities();
  },
  computed: {
    ...mapState(useActivityStore, ['activities']),
    events() {
      return this.activities.map(a => ({
        id: a.id,
        title: a.title,
        org: a.organizations ? a.organizations.name : 'Unknown',
        status: a.status ? a.status.toLowerCase() : 'pending',
        date: a.start_date
      }));
    }
  },
  methods: {
    ...mapActions(useActivityStore, ['fetchActivities']),
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
}

.content {
  flex: 1;
  width: 100%;
  padding: 30px 40px;
  background-color: #f8fafc;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
}

:deep(.sidebar) {
  width: 250px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.sidebar-hidden) {
  transform: translateX(-100%);
  margin-right: -250px;
}

.page-title {
  margin-bottom: 30px;
}

.page-title h1 {
  font-family: Arial, sans-serif;
  font-size: 2.2rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
}

.page-title p {
  color: #6b7280;
  margin-top: 8px;
  font-size: 1.05rem;
}

.calendar-layout {
  display: flex;
  gap: 24px;
  margin-top: 20px;
  align-items: flex-start;
}

/* --- Media Queries for Mobile/Tablet --- */
@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  .page-title h1 {
    font-size: 1.8rem;
  }

  .calendar-layout {
    flex-direction: column;
  }

  :deep(.sidebar) {
    position: absolute;
    z-index: 100;
    height: 100%;
  }
}
</style>