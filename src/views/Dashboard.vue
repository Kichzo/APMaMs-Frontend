<template>
  <div class="app-container">
    <!-- guys this is top header, this is content -->
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <!-- guys this is main dashboard layout -->
    <div class="dashboard-layout">
      <!-- guys this is sidebar, this is content -->
      <AppSidebar :visible="isSidebarVisible" />

      <!-- guys this is main content area -->
      <main class="content">
        <!-- guys this is page title, this is content -->
        <div class="page-title">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your organizations.</p>
        </div>

        <!-- guys these are the stats cards, this is content -->
        <div class="stats-grid">
          <!-- guys this is total activities card -->
          <DashboardCard
            value="24"
            label="Total Activities"
            color="blue"
            leftIcon="fa-solid fa-layer-group"
            rightIcon="fa-solid fa-arrow-up-right-from-square"
          />
          <!-- guys this is pending approvals card -->
          <DashboardCard
            value="5"
            label="Pending Approvals"
            color="yellow"
            leftIcon="fa-regular fa-clock"
            rightIcon="fa-solid fa-clipboard-list"
          />
          <!-- guys this is active projects card -->
          <DashboardCard
            value="12"
            label="Active Projects"
            color="green"
            leftIcon="fa-solid fa-diagram-project"
            rightIcon="fa-solid fa-cube"
          />
          <!-- guys this is completed activities card -->
          <DashboardCard
            value="18"
            label="Completed Activities"
            color="purple"
            leftIcon="fa-solid fa-square-check"
            rightIcon="fa-solid fa-trophy"
          />
          <!-- guys this is total budget card -->
          <DashboardCard
            value="₱450,000"
            label="Total Budget"
            color="teal"
            leftIcon="fa-solid fa-wallet"
            rightIcon="fa-solid fa-eye"
          />
          <!-- guys this is budget spent card -->
          <DashboardCard
            value="₱285,000"
            label="Budget Spent"
            color="orange"
            leftIcon="fa-solid fa-coins"
            rightIcon="fa-solid fa-chart-line"
          />
        </div>

        <br />

        <!-- guys this is dashboard lower section, this is content -->
        <div class="dashboard-lower">
          <RecentActivities />
        </div>

        <!-- guys this is quick actions section, this is content -->
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
    AppHeader,      // guys this is header component
    AppSidebar,     // guys this is sidebar component
    DashboardCard,  // guys these are cards
    RecentActivities, // guys this is recent activities component
    UpcomingEvents,   // guys this is upcoming events component
    QuickActions      // guys this is quick actions component
  },
  data() {
    return {
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
/* guys this is base layout styling */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* guys this is dashboard layout container */
.dashboard-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* guys this is main content styling */
.content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background-color: #fff;
}

/* guys this is page title styling */
.page-title h1 {
  font-family: serif;
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.page-title p {
  color: #888;
  margin-bottom: 40px;
}

/* guys these are stats cards grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>
