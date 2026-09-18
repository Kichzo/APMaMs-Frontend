<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="dashboard-container">
          <!-- Main Financial View (All Organizations) -->
          <template v-if="selectedOrg === 'All Organization'">
            <div class="page-header">
              <div class="title-block">
                <h1>Financial Management</h1>
                <p>Track budgets, expenses, and financial reports across all organizations</p>
              </div>
            </div>

            <FinancialStats :selected-org="selectedOrg" @select-org="selectedOrg = $event" />
          </template>

          <!-- Inside Organization View (When an Organization is Clicked) -->
          <template v-else>
            <div class="org-view-panel">
              <div class="org-view-header">
                <i class="fas fa-arrow-left back-btn" @click="selectedOrg = 'All Organization'" title="Back to All Organizations"></i>
                <h2 class="org-view-title">{{ getOrgFullName(selectedOrg) }}</h2>
              </div>

              <div class="nav-tabs">
                <button class="tab" :class="{ active: activeTab === 'Overview' }" @click="activeTab = 'Overview'">Overview</button>
                <button class="tab" :class="{ active: activeTab === 'Statistics' }" @click="activeTab = 'Statistics'">Statistics</button>
              </div>

              <div class="org-view-content">
                <div v-if="activeTab === 'Overview'">
                  <FinancialStatus :external-selected-org="selectedOrg" :hide-header="true" @update-org="selectedOrg = $event" @org-selected="isOrgSelected = $event" />
                </div>
                <div v-else-if="activeTab === 'Statistics'">
                  <FinancialStatistics />
                </div>
              </div>
            </div>
          </template>
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
    getOrgFullName(code) {
      const map = {
        'SSC': 'Supreme Student Council',
        'CBIT': 'College of Business and Information Technology',
        'CESS': 'College of Education and Social Sciences',
        'CELS': 'College of Environmental and Life Sciences',
        'CMFS': 'College of Marine and Fisheries Sciences',
        'SenSo': 'Senior Student Society',
        'KAABAG': 'KAABAG Community',
        'TME': 'The Marine Echo'
      };
      return map[code] || code;
    }
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

.org-view-panel {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px 30px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.org-view-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
}

.back-btn {
  cursor: pointer;
  font-size: 1.25rem;
  color: #111827;
  transition: transform 0.2s ease, color 0.2s ease;
}

.back-btn:hover {
  transform: translateX(-3px);
  color: #2563eb;
}

.org-view-title {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.org-view-content {
  margin-top: 20px;
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