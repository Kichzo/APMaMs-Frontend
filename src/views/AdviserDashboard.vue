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
          <DashboardCard value="24" label="Total Activities" color="blue" leftIcon="fa-solid fa-layer-group"
            rightIcon="fa-solid fa-arrow-up-right-from-square" />
          <DashboardCard value="5" label="Pending Approvals" color="yellow" leftIcon="fa-regular fa-clock"
            rightIcon="fa-solid fa-clipboard-list" />
          <DashboardCard value="12" label="Active Projects" color="green" leftIcon="fa-solid fa-diagram-project"
            rightIcon="fa-solid fa-cube" />
          <DashboardCard value="18" label="Completed Activities" color="purple" leftIcon="fa-solid fa-square-check"
            rightIcon="fa-solid fa-trophy" />
          <DashboardCard value="₱450,000" label="Total Budget" color="teal" leftIcon="fa-solid fa-wallet"
            rightIcon="fa-solid fa-eye" />
          <DashboardCard value="₱285,000" label="Budget Spent" color="orange" leftIcon="fa-solid fa-coins"
            rightIcon="fa-solid fa-chart-line" />
        </div>

        <div class="dashboard-lower">
          <RecentActivities />
        </div>
        <QuickActions />
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
    AppHeader,      // guys this is header component
    AppSidebar,     // guys this is sidebar component
    DashboardCard,  // guys these are cards
    RecentActivities, // guys this is recent activities component
    UpcomingEvents,   // guys this is upcoming events component
    QuickActions      // guys this is quick actions component
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      isSidebarVisible: true // guys this controls sidebar visibility
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
  height: 100vh;
  overflow: hidden;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
}

/* --- Content Auto-Expansion Logic --- */
.content {
  flex: 1;
  padding: 30pxo;
  overflow-y: auto;
  background-color: #f8fafc;
  transition: all 0.3s ease-in-out; /* Smooth slide when sidebar moves */
}

/* Sidebar styling needs to handle the width transition */
:deep(.sidebar) {
  width: 260px;
  transition: all 0.3s ease;
}

:deep(.sidebar-hidden) {
  margin-left: -260px; /* Slides it out of view completely */
}

/* --- Stats Grid Responsiveness --- */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for desktop */
  gap: 25px;
  margin-bottom: 30px;
}

.page-title h1 {
  font-family: serif;
  font-size: 2.5rem;
  margin-bottom: 5px;
}

/* --- Media Queries for Mobile/Tablet --- */

/* Tablet & Smaller Laptops */
@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Mobile Devices */
@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  .page-title h1 {
    font-size: 1.8rem;
  }

  .stats-grid {
    grid-template-columns: 1fr; /* Single column stack */
    gap: 15px;
  }

  /* On mobile, usually the sidebar should overlay or hide completely */
  :deep(.sidebar) {
    position: absolute;
    z-index: 100;
    height: 100%;
  }
}
</style>