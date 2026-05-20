<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="dashboard-container">
          <div class="page-header">
            <div class="title-block">
              <h1>Financial Management</h1>
              <p>Track budgets, expenses, and financial reports across all organizations</p>
            </div>
            <select class="org-dropdown" v-model="selectedOrg">
              <option value="All Organization">All Organization</option>
              <option value="SSC">SSC</option>
              <option value="CBIT">CBIT</option>
              <option value="CELS">CELS</option>
              <option value="CESS">CESS</option>
              <option value="CMFS">CMFS</option>
              <option value="KAABAG">KAABAG</option>
              <option value="TME">TME</option>
              <option value="SenSo">SenSo</option>
            </select>
          </div>

          <FinancialStats />

          <div class="nav-tabs">
            <button class="tab" :class="{ active: activeTab === 'Overview' }" @click="activeTab = 'Overview'">Overview</button>
            <button class="tab" :class="{ active: activeTab === 'Statistics' }" @click="activeTab = 'Statistics'">Statistics</button>
          </div>

          <div class="content-grid full-width" v-if="activeTab === 'Overview'">
            <FinancialStatus :external-selected-org="selectedOrg" @update-org="selectedOrg = $event" @org-selected="isOrgSelected = $event" />
          </div>
          <div v-else-if="activeTab === 'Statistics'">
            <FinancialStatistics />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import FinancialStats from '/src/components/Financial/FinancialStats.vue'
import FinancialStatus from '/src/components/Financial/FinancialStatus.vue'
import FinancialStatistics from '/src/components/Financial/FinancialStatistics.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    FinancialStats,
    FinancialStatus,
    FinancialStatistics,
  },
  data() {
    return {
      isSidebarVisible: true,
      selectedOrg: 'All Organization',
      activeTab: 'Overview',
      isOrgSelected: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  }
}
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  /* Take up remaining height below header */
  width: 100%;
  overflow: hidden;
  /* Keeps sidebar and content contained */
}

.content {
  flex: 1;
  width: 100%;
  padding: 30px 40px;
  background-color: #f8fafc;
  box-sizing: border-box;

  /* Scrollable logic */
  overflow-y: auto;
  height: 100%;
}

:deep(.sidebar) {
  width: 260px;
  height: 100%;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
}

/* This pulls the sidebar off-screen so the flex content fills the space */
:deep(.sidebar-hidden) {
  margin-left: -260px;
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* Adds bottom padding so content isn't cut off when scrolling */
  padding-bottom: 60px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.title-block h1 {
  font-family: Arial, sans-serif;
  font-size: 2.2rem;
  margin: 0;
}

.title-block p {
  color: #64748b;
  margin-top: 5px;
}

.org-dropdown {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
  outline: none;
}

.nav-tabs {
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
}

.tab {
  background: none;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  color: #64748b;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  position: relative;
}

.tab.active {
  color: #3b59ff;
  font-weight: bold;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #3b59ff;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.content-grid.full-width {
  grid-template-columns: 1fr;
}
</style>