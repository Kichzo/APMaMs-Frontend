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
            <button v-if="role === 'admin'" class="add-plan-btn" @click="showAddPlan = true">
              Create Action Plan
            </button>
          </div>
        </div>

        <div class="fiscal-year-section">
          <div class="fiscal-year-display">
            <span class="label">Fiscal Year 2026</span>
          </div>
        </div>

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
                <div v-if="showImported" class="imported-file-card">
                  <div class="file-info" @click="showFileData = true">
                    <div class="file-icon-box">
                      <i class="fa-regular fa-file-lines"></i>
                    </div>
                    <span class="file-name clickable">Supreme Student Council 2026</span>
                  </div>
<<<<<<< HEAD
                </div>
              </div>
            </template>
=======
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
>>>>>>> dc74d2cfd2aae0eb6234ad2d3c70d6e22d64f5c5

            <!-- FILE CONTENT VIEW (Full width) -->
            <ActionPlanData v-else @back="showFileData = false" />
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
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

/* Fiscal Year Header */
.fiscal-year-section {
  margin-top: 25px;
  margin-bottom: 20px;
  max-width: 240px;
}

.fiscal-year-display {
  display: flex;
  align-items: center;
  font-size: 1.70rem;
  font-family: Arial, sans-serif;
  padding-bottom: 6px;
  border-bottom: 1px solid #cbd5e1;
}

.fiscal-year-display .label {
  font-weight: normal;
  color: #0f172a;
}

/* Main Details Container */
.details-panel {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 16px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
}

/* Empty Placeholder */
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