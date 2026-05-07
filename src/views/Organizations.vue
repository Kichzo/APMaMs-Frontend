<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="main-content-container">
          <div class="page-header">
            <div class="title-block">
              <h1>Organizations</h1>
              <p>Manage and monitor all student organizations at MSUN</p>
            </div>
          </div>

          <OrgStats :stats="summaryStats" />

          <OrgCards 
            :organizations="organizations" 
            :show-manage="canManage"
            :show-add-org="canAddOrg"
            @view-profile="openProfileModal" 
            @manage="openManageModal"
            @add-org="showAddOrgModal = true"
          />
        </div>
      </main>
    </div>

    <!-- Modal overlay -->
    <OrgProfileModal v-if="selectedOrg" :org="selectedOrg" @close="closeProfileModal" />

    <!-- Manage Organization Modal -->
    <OrgManage v-if="showOrgManage" :org="selectedOrgManage" @close="closeManageModal" />

    <!-- Add Organization Modal -->
    <AddOrg v-if="showAddOrgModal" @close="showAddOrgModal = false" />
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import OrgStats from '/src/components/Organizations/OrgStats.vue';
import OrgCards from '/src/components/Organizations/OrgCards.vue';
import OrgProfileModal from '/src/components/Organizations/OrgProfileModal.vue';
import OrgManage from '/src/components/Organizations/OrgManage.vue';
import AddOrg from '/src/components/Organizations/AddOrg.vue';

export default {
  components: {
    AppHeader,
    AppSidebar,
    OrgStats,
    OrgCards,
    OrgProfileModal,
    OrgManage,
    AddOrg
  },
  data() {
    return {
      isSidebarVisible: true,
      role: localStorage.getItem('role') || 'org',
      selectedOrg: null,
      showOrgManage: false,
      showAddOrgModal: false,
      selectedOrgManage: null,
      summaryStats: {
        totalOrgs: 8,
        activeOrgs: 8,
        totalMembers: 1111,
        totalActivities: 6
      },
      organizations: [
        {
          id: 1,
          name: 'Supreme Student Council',
          type: 'Governance',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#2563eb', // Blue
          icon: 'fas fa-university'
        },
        {
          id: 2,
          name: 'College of Business and Information Technology',
          type: 'College',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#eab308', // Yellow
          icon: 'fas fa-briefcase'
        },
        {
          id: 3,
          name: 'College of Environmental and Life Sciences',
          type: 'College',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#16a34a', // Green
          icon: 'fas fa-leaf'
        },
        {
          id: 4,
          name: 'College of Education and Social Sciences',
          type: 'College',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#7600bc', // Violet
          icon: 'fas fa-book'
        },
        {
          id: 5,
          name: 'College of Marine and Fisheries Sciences',
          type: 'College',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#00CCFF', // Sky Blue
          icon: 'fas fa-fish'
        },
        {
          id: 6,
          name: 'KAABAG',
          type: 'Social Welfare',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#06402B', // Dark Green
          icon: 'fas fa-hands-helping'
        },
        {
          id: 7,
          name: 'The Marine Echo',
          type: 'Publication',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#00008B', // Dark Blue
          icon: 'fas fa-newspaper'
        },
        {
          id: 8,
          name: 'Senior Student Society',
          type: 'Senior Officer',
          regNumber: '1239768',
          members: 45,
          attachments: 5,
          headerColor: '#800000', // Maroon
          icon: 'fas fa-user-graduate'
        },
        // Add more organization objects here...
      ]
    }
  },
  computed: {
    canManage() {
      return this.role === 'admin';
    },
    canAddOrg() {
      return this.role === 'admin';
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    openProfileModal(org) {
      this.selectedOrg = org;
    },
    closeProfileModal() {
      this.selectedOrg = null;
    },
    openManageModal(org) {
      this.selectedOrgManage = org;
      this.showOrgManage = true;
    },
    closeManageModal() {
      this.selectedOrgManage = null;
      this.showOrgManage = false;
    }
  }

}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  /* Keeps the main window locked */
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
  /* Prevents the sidebar from scrolling with content */
}

.content {
  flex: 1;
  width: 100%;
  padding: 30px 40px;
  background-color: #f8fafc;
  /* Moved background color here */
  box-sizing: border-box;

  /* THIS IS THE ONLY SCROLLBAR */
  overflow-y: auto;
}

:deep(.sidebar) {
  width: 260px;
  transition: all 0.3s ease;
}
/* This pulls the sidebar off-screen so the flex content fills the space */
:deep(.sidebar-hidden) {
  margin-left: -260px;
}

.main-content-container {
  /* Removed height: 100% and overflow to stop double scroll */
  width: 100%;
  max-width: 1200px;
  /* Optional: keeps content from getting too wide */
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.title-block h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
}
</style>