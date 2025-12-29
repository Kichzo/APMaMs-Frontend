<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="dashboard-container">
          <div class="page-header">
            <div class="header-text">
              <h1>Financial Management</h1>
              <p>Track budgets, expenses, and financial reports across all organizations</p>
            </div>
            <div class="org-dropdown">
              <span>All Organization</span>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>

          <FinancialStats />

          <div class="nav-tabs">
            <button class="tab active">Overview</button>
            <button class="tab">Transaction</button>
            <button class="tab">Budget Allocation</button>
            <button class="tab">Statistic</button>
          </div>

          <div class="content-grid">
            <FinancialStatus />

            <FinancialSidebar />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import FinancialQuickAct from '/src/components/Financial/FinancialQuickAct.vue'
import FinancialStats from '/src/components/Financial/FinancialStats.vue'
import FinancialStatus from '/src/components/Financial/FinancialStatus.vue'
import FinancialSidebar from '/src/components/Financial/FinancialSidebar.vue'


export default {
  components: {
    AppHeader,
    AppSidebar,
    FinancialQuickAct,
    FinancialStats,
    FinancialStatus,
    FinancialSidebar,
  },
  data() {
    return {
      isSidebarVisible: true,
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
  /* Lock to viewport height */
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  /* Prevent page-level scrolling */
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
  padding: 40px;
  background-color: #fff;
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

.header-text h1 {
  font-family: serif;
  font-size: 2.2rem;
  margin: 0 0 5px 0;
  color: #1a1a1a;
}

.header-text p {
  color: #64748b;
  margin: 0;
  font-size: 0.95rem;
}

.org-dropdown {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
}

.nav-tabs {
  display: flex;
  gap: 12px;
}

.tab {
  padding: 8px 24px;
  border-radius: 20px;
  /* Rounded pill shape */
  border: 1px solid #e2e8f0;
  background: white;
  cursor: pointer;
  font-weight: 500;
  color: #64748b;
  font-family: serif;
}

.tab.active {
  background: #0a21c0;
  color: white;
  border-color: #0a21c0;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* 2/3 for Main, 1/3 for Sidebar */
  gap: 24px;
}
</style>