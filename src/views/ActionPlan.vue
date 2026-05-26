<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="page-header">
          <div class="title-block">
            <h1>Action Plan</h1>
            <p>Monitor and manage institutional strategic initiatives</p>
          </div>
          <button v-if="role === 'admin'" class="add-plan-btn" @click="showAddPlan = true">
            Add Action Plan
          </button>
        </div>

        <div class="action-grid">

          <!-- LEFT PANEL -->
          <div class="left-panel">
            <div class="fiscal-year-display">
              <span class="label">FISCAL YEAR 2026</span>
            </div>
            <div class="archive-dropdown-container">
              <div class="archive-dropdown" @click="isArchiveOpen = !isArchiveOpen">
                <span>View Archives</span>
                <i class="fa-solid" :class="isArchiveOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
              </div>
              <ul v-if="isArchiveOpen" class="archive-list">
                <li>Fiscal Year 2025</li>
                <li>Fiscal Year 2024</li>
                <li>Fiscal Year 2023</li>
              </ul>
            </div>
          </div>

          <!-- RIGHT PANEL -->
          <div class="right-panel">
            <div class="details-panel">
                <template v-if="!showFileData">
                  <div class="details-header">
                    <div class="header-left">
                      <div class="tab">Action Plan</div>
                    </div>
                    <div class="header-actions">
                      <router-link v-if="role === 'org'" :to="{ name: 'CreateActivity' }" class="add-activity-btn">
                        Add Activity
                      </router-link>
                      <button v-if="role === 'org'" class="import-btn" @click="handleImport">
                        <i class="fa-solid fa-download"></i> Import
                      </button>
                    </div>
                  </div>
                  <div class="details-content">
                    <!-- LIST OF IMPORTED FILES -->
                    <div v-if="actionPlans && actionPlans.length === 0" class="empty-state">
                      <p>No action plans have been added yet.</p>
                    </div>
                    <div v-else class="plans-list">
                      <div v-for="plan in actionPlans" :key="plan.id" class="imported-file-card">
                        <div class="file-info" @click="openPlanData(plan)">
                          <div class="file-icon-box">
                            <i class="fa-regular fa-file-lines"></i>
                          </div>
                          <span class="file-name clickable">{{ plan.name || 'Action Plan Document' }}</span>
                        </div>
                        <div class="file-actions">
                          <i class="fa-solid fa-download download-btn" title="Download"></i>
                          <i v-if="role === 'admin'" class="fa-solid fa-trash-can delete-btn" title="Delete"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- FILE CONTENT VIEW (Full width) -->
                <ActionPlanData v-else @back="showFileData = false" />
            </div>
          </div>
        </div>
      </main>
    </div>

    <ActionPlanAdd v-if="showAddPlan" @close="showAddPlan = false" @save="handleSavePlan" />
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ActionPlanData from '../components/ActionPlan/ActionPlanData.vue'
import ActionPlanAdd from '../components/ActionPlan/ActionPlanAdd.vue'
import { mapState, mapActions } from 'pinia';
import { useActionPlanStore } from '/src/stores/actionPlanStore';

export default {
  components: {
    AppHeader,
    AppSidebar,
    ActionPlanData,
    ActionPlanAdd
  },
  data() {
    return {
      isSidebarVisible: true,
      role: localStorage.getItem('role') || 'org',
      showFileData: false,
      isArchiveOpen: false,
      showAddPlan: false,
      selectedPlan: null
    }
  },
  computed: {
    ...mapState(useActionPlanStore, ['actionPlans', 'isLoading'])
  },
  async mounted() {
    await this.fetchActionPlans();
  },
  methods: {
    ...mapActions(useActionPlanStore, ['fetchActionPlans']),
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    },
    openPlanData(plan) {
      this.selectedPlan = plan;
      this.showFileData = true;
    },
    handleImport() {
      // Mock import trigger
    },
    handleSavePlan(plan) {
      console.log('Saved plan:', plan)
      this.showAddPlan = false
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
  position: relative;
  overflow: hidden;
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

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-plan-btn {
  background-color: #0026b9;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.add-plan-btn:hover {
  background-color: #001a8c;
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
  grid-template-columns: 200px 1fr;
  gap: 24px;
  align-items: start;
  margin-top: 20px;
}

/* Left Panel */
.left-panel {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.fiscal-year-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding-bottom: 8px;
  border-bottom: 1px solid #9e9e9e;
  margin-bottom: 12px;
}

.fiscal-year-display .label {
  font-weight: 500;
}

.fiscal-year-display .year {
  font-weight: bold;
}

.archive-dropdown-container {
  position: relative;
}

.archive-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

.archive-dropdown:hover {
  color: #3b82f6;
}

.archive-list {
  list-style: none;
  padding: 0;
  margin: 8px 0 0 0;
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.archive-list li {
  padding: 10px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.archive-list li:hover {
  background: #f1f5f9;
  color: #3b82f6;
}

.archive-list li:not(:last-child) {
  border-bottom: 1px solid #e2e8f0;
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

.header-left {
  display: flex;
  align-items: center;
  height: 100%;
}

.tab {
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #3b82f6;
  /* Blue text */
  border-bottom: 3px solid #3b82f6;
  /* Blue active underline */
  margin-bottom: -1px;
  /* Align border directly over container's bottom border */
}

.header-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.add-activity-btn {
  background: #0026b9; /* Deep blue */
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
  text-decoration: none;
  transition: background 0.2s;
}

.add-activity-btn:hover {
  background: #001a8c;
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
  text-decoration: none;
}


.details-content {
  flex: 1;
  padding: 24px;
}

.imported-file-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #ffffff;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.file-info:hover .file-name {
  color: #3b82f6;
  text-decoration: underline;
}

.file-icon-box {
  width: 40px;
  height: 44px;
  background: #eff6ff;
  color: #2563eb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1.4rem;
}

.file-name {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  transition: color 0.2s;
}

.file-name.clickable {
  cursor: pointer;
}

.file-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.download-btn, .delete-btn {
  font-size: 1.2rem;
  color: #000000;
  cursor: pointer;
  transition: color 0.2s;
}

.download-btn:hover {
  color: #3b82f6;
}

.delete-btn:hover {
  color: #ef4444;
}

.plans-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
}
</style>