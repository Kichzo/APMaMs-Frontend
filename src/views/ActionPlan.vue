<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="title-block">
          <h1>Action Plan</h1>
          <p>Monitor and manage institutional strategic initiatives</p>
        </div>

        <div class="action-grid">

          <!-- LEFT PANEL -->
          <ActionPlanList
            :plans="plans"
            :activePlanId="selectedPlan?.id"
            @select-plan="selectPlan"
            @add-plan="showAddForm = true"
          />

          <!-- RIGHT PANEL -->
          <div class="right-panel">

            <div v-if="selectedPlan" class="details-panel">
              <div class="details-header">
                <div class="tab">Action Plan</div>
                <div class="header-actions">
                  <button class="add-activity-btn">
                    <i class="fa-solid fa-plus"></i> Add Activity
                  </button>
                  <button class="import-btn">
                    <i class="fa-solid fa-download"></i> Import
                  </button>
                </div>
              </div>
              <div class="details-content">
                <!-- Content gets shown here later -->
              </div>
            </div>

            <!-- EMPTY STATE (default) -->
            <div v-else class="empty-placeholder">
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ActionPlanList from '/src/components/ActionPlan/ActionPlanList.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    ActionPlanList
  },
  data() {
    return {
      isSidebarVisible: true,
      role: localStorage.getItem('role') || 'org',

      plans: [
        { id: 1, title: 'Fiscal Year 2025' },
        { id: 2, title: 'Fiscal Year 2026' },
        { id: 3, title: 'Fiscal Year 2027' }
      ],

      selectedPlan: null
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    },
    selectPlan(plan) {
      this.selectedPlan = plan
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
}

.content {
  flex: 1;
  padding: 30px 40px;
  overflow-y: auto;
  background-color: #f8fafc;
  transition: all 0.3s ease-in-out; 
}

:deep(.sidebar) {
  width: 260px;
  transition: all 0.3s ease;
}

:deep(.sidebar-hidden) {
  margin-left: -260px; 
}

/* Title */
.title-block h1 {
  font-family: Arial, sans-serif;
  font-size: 2.2rem;
  margin: 0;
}

.title-block p {
  color: #64748b;
  font-family: Arial, sans-serif;
  margin-top: 5px;
}

/* Grid */
.action-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: start;
  margin-top: 20px;
}

/* Right side container spacing */
.right-panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}

.empty-placeholder {
  width: 100%;
  height: 350px;
}

/* Details Panel matches the left panel's general borders */
.details-panel {
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #9e9e9e;
  padding: 0 24px;
  height: 60px;
}

.tab {
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #3b82f6; /* Blue text */
  border-bottom: 3px solid #3b82f6; /* Blue active underline */
  margin-bottom: -1px; /* Align border directly over container's bottom border */
}

.header-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.add-activity-btn {
  background: #3b82f6; /* Blue primary color */
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-activity-btn:hover {
  background: #2563eb;
}

.import-btn {
  background: #000000;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.import-btn:hover {
  background: #333333;
}

.details-content {
  flex: 1;
  padding: 24px;
}
</style>