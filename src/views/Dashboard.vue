<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <div class="dashboard-layout">
      <AppSidebar :visible="isSidebarVisible" />

      <main class="content">
        <div class="page-title">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your organizations.</p>
        </div>

        <div class="stats-grid">
          <DashboardCard
            value="24"
            label="Total Activities"
            color="blue"
            leftIcon="fa-solid fa-layer-group"
            rightIcon="fa-solid fa-arrow-up-right-from-square"
          />
          <DashboardCard
            value="5"
            label="Pending Approvals"
            color="yellow"
            leftIcon="fa-regular fa-clock"
            rightIcon="fa-solid fa-clipboard-list"
          />
          <DashboardCard
            value="12"
            label="Active Projects"
            color="green"
            leftIcon="fa-solid fa-diagram-project"
            rightIcon="fa-solid fa-cube"
          />
          <DashboardCard
            value="18"
            label="Completed Activities"
            color="purple"
            leftIcon="fa-solid fa-square-check"
            rightIcon="fa-solid fa-trophy"
          />
          <DashboardCard
            value="₱450,000"
            label="Total Budget"
            color="teal"
            leftIcon="fa-solid fa-wallet"
            rightIcon="fa-solid fa-eye"
          />
          <DashboardCard
            value="₱285,000"
            label="Budget Spent"
            color="orange"
            leftIcon="fa-solid fa-coins"
            rightIcon="fa-solid fa-chart-line"
          />
        </div>

        <br />

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
import DashboardCard from '/src/components/DashboardCard.vue'
import RecentActivities from '/src/components/RecentActivities.vue'
import UpcomingEvents from '/src/components/UpcomingEvents.vue'
import QuickActions from '/src/components/QuickActions.vue'

export default {
  name: 'Dashboard',
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
/* Base Layout */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Layout */
.dashboard-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Main Content */
.content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background-color: #fff;
}

.page-title h1 {
  font-family: serif;
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.page-title p {
  color: #888;
  margin-bottom: 40px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>