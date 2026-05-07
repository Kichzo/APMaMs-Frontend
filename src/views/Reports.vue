<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="reports-container">
            <div class="header-row" v-if="!showReportDetails && !showReportAccomplishment">
              <div class="title-block">
                <h1>Activity Accomplishment Reports</h1>
                <p>Create detailed accomplishment reports for completed activities with approval tracking</p>
              </div>
              
              <ReportsFilterBar v-if="!showCreateForm" @create-new="isCreateModalVisible = true" />
            </div>

          <section v-if="!showCreateForm && !showReportDetails && !showReportAccomplishment" class="reports-list">
            <ReportCard 
            v-for="report in reports" 
            :key="report.id" 
            :report="report"
            @view-details="handleViewDetails"
            @edit-request="isEditModalVisible = true" />
          </section>

          <CreateReport v-else-if="showCreateForm" @cancel="showCreateForm = false" />
          
          <ReportDetails v-else-if="showReportDetails" @back="showReportDetails = false" />
          
          <ReportAccomplishment v-else-if="showReportAccomplishment" @back="showReportAccomplishment = false" :userRole="role" />
        </div>
      </main>
    </div>

    <!-- Modals -->
    <CreateNewReport v-if="isCreateModalVisible" @close="isCreateModalVisible = false" @create="handleCreateReport" />

    <!-- Edit Request Modal -->
    <div class="modal-overlay" v-if="isEditModalVisible">
      <div class="edit-modal">
        <h3 class="modal-title">Requesting for Edit...</h3>
        <div class="modal-actions">
          <button class="btn-cancel-edit" @click="isEditModalVisible = false">Cancel</button>
          <button class="btn-send-edit" @click="handleSendEdit">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ReportsFilterBar from '/src/components/Report/ReportsFilterBar.vue'
import ReportCard from '/src/components/Report/ReportCard.vue'
import CreateNewReport from '/src/components/Report/CreateNewReport.vue'
import CreateReport from '/src/components/Report/CreateReport.vue'
import ReportDetails from '/src/components/Report/ReportDetails.vue'
import ReportAccomplishment from '/src/components/Report/ReportAccomplishment.vue'

export default {
  name: 'Activity',
  components: {
    AppHeader,
    AppSidebar,
    ReportsFilterBar,
    ReportCard,
    CreateNewReport,
    CreateReport,
    ReportDetails,
    ReportAccomplishment
  },
  data() {
  return {
    role: localStorage.getItem('role') || 'org',
    isSidebarVisible: true,
    isCreateModalVisible: false,
    showCreateForm: false,
    showReportDetails: false,
    showReportAccomplishment: false,
    isEditModalVisible: false,
    reports: [
      {
        id: 1,
        title: "First SSC Regular Meeting",
        status: "Approved",
        subtitle: "Detailed Activity Design"
      },
      {
        id: 2,
        title: "First SSC Regular Meeting",
        status: "",
        subtitle: "Accomplishment Report"
      }
    ]
  }
}, 
 methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleCreateReport() {
      this.isCreateModalVisible = false;
      this.showCreateForm = true;
      this.showReportDetails = false;
      this.showReportAccomplishment = false;
    },
    handleViewDetails(report) {
      if (report.subtitle === "Detailed Activity Design") {
        this.showReportDetails = true;
        this.showReportAccomplishment = false;
        this.showCreateForm = false;
      } else if (report.subtitle === "Accomplishment Report") {
        this.showReportAccomplishment = true;
        this.showReportDetails = false;
        this.showCreateForm = false;
      } else {
        alert("Details view is not available for this report type.");
      }
    },
    handleSendEdit() {
      // Add send logic here
      this.isEditModalVisible = false;
      alert('Edit request sent!');
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

.reports-container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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

.reports-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.edit-modal {
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 30px 0;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn-cancel-edit {
  background: #eef2ff;
  color: #0f172a;
  border: none;
  padding: 10px 32px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-cancel-edit:hover {
  background: #e0e7ff;
}

.btn-send-edit {
  background: #0a21c0;
  color: white;
  border: none;
  padding: 10px 32px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-send-edit:hover {
  background: #081a99;
}
</style>