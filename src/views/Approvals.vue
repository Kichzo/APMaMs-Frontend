<template>

  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="page-container">
          <div class="page-header">
            <h1>Approvals</h1>
            <p>Review and manage approval requests</p>
          </div>

          <ApprovalTabs :currentTab="activeTab" />

          <div class="approvalcard">
            <ApprovalCard v-for="request in requests" :key="request.id" :data="request" />
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script>
import ApprovalTabs from '/src/components/Approval/ApprovalTabs.vue';
import ApprovalCard from '/src/components/Approval/ApprovalCard.vue';
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'

export default {
  name: 'Activity',
  components: {
    AppHeader,
    AppSidebar,
    ApprovalCard,
    ApprovalTabs
  },
  data() {
    return {
      isSidebarVisible: true,
      activeTab: 'Pending',
      requests: [
        {
          id: 1,
          title: 'Annual Research Symposium 2025',
          category: 'Activity Proposal',
          office: 'Research Office',
          description: 'Request for approval of annual research symposium with international speakers and poster presentations.',
          submittedBy: 'Dr. Robert Martinez',
          date: '2024-02-01',
          amount: 'P300,000',
          approvers: 'VP for Finance, University President',
          status: 'Pending'
        },
        {
          id: 2,
          title: 'Alumni Networking Night',
          category: 'Activity Proposal',
          office: 'Research Office',
          description: 'Request for approval of annual research symposium with international speakers and poster presentations.',
          submittedBy: 'Dr. Robert Martinez',
          date: '2024-02-01',
          amount: 'P300,000',
          approvers: 'VP for Finance, University President',
          status: 'Pending'
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleTabChange(tabName) {
      this.activeTab = tabName;
    }
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

.page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Fills the parent content area */
  max-width: 1200px;
  margin: 0 auto;
}

.page-header h1 {
  font-family: serif;
  font-size: 2.2rem;
  margin-bottom: 5px;
}

.page-header p {
  color: #64748b;
  margin-bottom: 25px;
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