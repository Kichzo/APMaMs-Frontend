<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content" :class="{ 'content-expanded': !isSidebarVisible }">
        <div class="page-title">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your organizations.</p>
        </div>

        <div class="stats-grid">
          <DashboardCard value="24" label="Total Activities" leftIcon="fa-solid fa-shapes" />
          <DashboardCard value="5" label="Pending Approvals" leftIcon="fa-regular fa-clock" />
          <DashboardCard value="12" label="Active Projects" leftIcon="fa-solid fa-check-double" />
          <DashboardCard value="18" label="Completed Activities" leftIcon="fa-solid fa-list-check" />
          <DashboardCard value="P450,000" label="Total Budget" leftIcon="fa-solid fa-coins" />
          <DashboardCard value="P285,000" label="Budget Spent" leftIcon="fa-solid fa-money-bill-transfer" />
        </div>

        <div class="dashboard-lower">
          <div class="left-column">
            <RecentActivities />
          </div>
          <div class="right-column">
            <UpcomingEvents />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import DashboardCard from '/src/components/Dashboard/DashboardCard.vue'
import RecentActivities from '/src/components/Dashboard/RecentActivities.vue'
import UpcomingEvents from '/src/components/Dashboard/UpcomingEvents.vue'
import QuickActions from '/src/components/Dashboard/QuickActions.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    DashboardCard,
    RecentActivities,
    UpcomingEvents,
    QuickActions
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'Student Organization',
      isSidebarVisible: true
    }
  },
  methods: {
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
  /* Lock the container to the screen height */
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  /* This ensures the sidebar and content stay within the remaining height */
  overflow: hidden;
}

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
}

.page-title {
  margin-bottom: 30px;
}

.page-title h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: #111827;
}

.page-title p {
  color: #64748b;
  margin-top: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* --- Stats Grid Responsiveness --- */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

/* Layout for lower dashboard */
.dashboard-lower {
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  gap: 24px;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* --- Media Queries for Mobile/Tablet --- */
@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-lower {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  .page-title h1 {
    font-size: 1.8rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  :deep(.sidebar) {
    position: absolute;
    z-index: 100;
    height: 100%;
  }
}
</style>