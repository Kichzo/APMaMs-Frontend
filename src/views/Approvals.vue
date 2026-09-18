<template>

  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="page-container">
          <div v-if="!showReportAccomplishment">
            <div class="title-block">
              <h1>Approvals</h1>
              <p>Review and manage approval requests</p>
            </div>

            <div class="approvalcard">
              <ApprovalCard v-for="request in requests" :key="request.id" :data="request" @view-details="handleViewDetails" />
            </div>
          </div>

          <ActivityAccomView v-else :userRole="role" @back="showReportAccomplishment = false" />
        </div>

      </main>
    </div>
  </div>
</template>

<script>
import ApprovalCard from '/src/components/Approval/ApprovalCard.vue';
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ActivityAccomView from '/src/components/Activity/ActivityAccomView.vue'
import { mapState, mapActions } from 'pinia';
import { useApprovalStore } from '/src/stores/approvalStore';

export default {
  name: 'Approvals',
  components: {
    AppHeader,
    AppSidebar,
    ApprovalCard,
    ActivityAccomView
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      isSidebarVisible: true,
      activeTab: 'Pending',
      showReportAccomplishment: false
    };
  },
  async mounted() {
    await this.fetchApprovals();
  },
  computed: {
    ...mapState(useApprovalStore, {
      requests: 'approvals',
      isLoading: 'isLoading'
    })
  },
  methods: {
    ...mapActions(useApprovalStore, ['fetchApprovals']),
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleTabChange(tabName) {
      this.activeTab = tabName;
    },
    handleViewDetails(report) {
      this.showReportAccomplishment = true;
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
  padding: 30px 40px;
  overflow-y: auto;
  background-color: #f8fafc;
  transition: all 0.3s ease-in-out; 
  /* Smooth slide sync with sidebar */
  box-sizing: border-box;
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

.page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Fills the parent content area */
  max-width: 1200px;
  margin: 0 auto;
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

.approvalcard {
  flex: 1;
  padding-right: 10px;
  /* Space for scrollbar */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>