<template>


  <!--HMMMMM might use google calendar to sync other stuff-->


  <div class="app-container">
    <!-- guys this is top header, this is content -->
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <!-- guys this is main dashboard layout -->
    <div class="dashboard-layout">
      <!-- guys this is sidebar, this is content -->
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <!-- guys this is main content area -->
      <main class="content">
        <div class="page-header">
          <div class="title-block">
            <h1>Activity Calendar</h1>
            <p>View and Manage Activity Schedules</p>
          </div>
        </div>
        <div class="calendar-page">
          <div class="calendar-layout">
            <CalendarView :events="events" @org-change="selectedOrg = $event" />

            <CalendarUpcomingAct :events="events" :selectedOrg="selectedOrg" />
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

export default {
  components: {
    CalendarView,
    CalendarUpcomingAct,
    AppHeader,
    AppSidebar
  },
  data() {
    return {
      isSidebarVisible: true,
      role: localStorage.getItem('role') || 'org',
      selectedOrg: 'All Organizations',
      events: [
        { id: 1, title: 'Leadership Training', day: 15, org: 'SSC', status: 'approved', date: 'Jan 15' },
        { id: 2, title: 'Coding Bootcamp', day: 18, org: 'CBIT College', status: 'pending', date: 'Jan 18' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      // guys this toggles the sidebar, this is content
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  /* Lock the container to the screen height */
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  /* Prevent the whole page from scrolling */
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  /* This ensures the sidebar and content stay within the remaining height */
  overflow: hidden;
}

/* SideBar Component should be styled internally to be height: 100% */

.content {
  flex: 1;
  width: 100%;
  padding: 30px 40px;
  background-color: #f8fafc;
  box-sizing: border-box;

  /* The Magic Sauce: Enable scrolling only here */
  overflow-y: auto;
  height: 100%;
}

:deep(.sidebar) {
  width: 260px;
  transition: all 0.3s ease;
}

:deep(.sidebar-hidden) {
  margin-left: -260px;
  /* Slides it out of view completely */
}

.calendar-layout {
  display: flex;
  gap: 24px;
  margin-top: 20px;
  /* Prevents sidebar in calendar from shrinking */
  align-items: flex-start;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}

.title-block h1 {
  font-family: serif;
  font-size: 2.2rem;
  margin: 0;
}

.title-block p {
  color: #64748b;
  margin-top: 5px;
}
</style>