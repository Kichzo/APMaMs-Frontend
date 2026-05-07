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
          <ActionPlanList :plans="plans" :activePlanId="selectedPlan?.id" :role="role" @select-plan="selectPlan"
            @add-plan="showAddForm = true" @edit-plan="handleEditPlan" />

          <!-- RIGHT PANEL -->
          <div class="right-panel">

            <div v-if="selectedPlan" class="details-panel">
                <template v-if="!showFileData">
                  <div class="details-header">
                    <div class="header-left">
                      <i class="fa-solid fa-arrow-left back-icon" @click="goBack"></i>
                      <div class="tab">Action Plan</div>
                    </div>
                    <div class="header-actions">
                      <router-link v-if="role === 'org'" :to="{ name: 'CreateActivity' }" class="add-activity-btn">
                        <i class="fa-solid fa-plus"></i> Add Activity
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
                      <div class="file-actions">
                        <i class="fa-solid fa-download download-btn" title="Download"></i>
                        <i class="fa-solid fa-trash-can delete-btn" title="Delete" @click.stop="showImported = false"></i>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- FILE CONTENT VIEW (Full width) -->
                <ActionPlanData v-else @back="showFileData = false" />
            </div>

            <!-- EMPTY STATE (default) -->
            <div v-else class="empty-placeholder">
            </div>

          </div>
        </div>
      </main>
    </div>

    <ActionPlanAdd v-if="showAddForm" @close="showAddForm = false" @save="handleSavePlan" />
    <ActionPlanEdit v-if="showEditForm" :plan="editingPlan" @close="showEditForm = false" @save="handleUpdatePlan" />
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ActionPlanCard from '../components/ActionPlan/ActionPlanCard.vue'
import ActionPlanList from '../components/ActionPlan/ActionPlanList.vue'
import ActionPlanAdd from '../components/ActionPlan/ActionPlanAdd.vue'
import ActionPlanEdit from '../components/ActionPlan/ActionPlanEdit.vue'
import ActionPlanData from '../components/ActionPlan/ActionPlanData.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    ActionPlanCard,
    ActionPlanList,
    ActionPlanAdd,
    ActionPlanEdit,
    ActionPlanData
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

      selectedPlan: null,
      showAddForm: false,
      showEditForm: false,
      editingPlan: null,
      showImported: (localStorage.getItem('role') || 'org') !== 'org',
      showFileData: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    },
    selectPlan(plan) {
      this.selectedPlan = plan
    },
    goBack() {
      this.selectedPlan = null
    },
    handleSavePlan(newPlan) {
      this.plans.push(newPlan)
    },
    handleEditPlan(plan) {
      this.editingPlan = plan
      this.showEditForm = true
    },
    handleUpdatePlan(updatedPlan) {
      const index = this.plans.findIndex(p => p.id === updatedPlan.id)
      if (index !== -1) {
        this.plans.splice(index, 1, updatedPlan)
      }
      this.showEditForm = false
      this.editingPlan = null
    },
    handleImport() {
      this.showImported = true
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

.header-left {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 24px;
}

.back-icon {
  cursor: pointer;
  font-size: 1.2rem;
  color: #000;
}

.back-icon:hover {
  color: #3b82f6;
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
  background: #3b82f6;
  /* Blue primary color */
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
</style>