<template>

<!--UNFINISHED BUT SMALL TWEAKS-->


    <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <div class="dashboard-layout">
      <AppSidebar :visible="isSidebarVisible" />

      <main class="content">
  <div class="main-content-container">
    <div class="page-header">
      <div class="header-text">
        <h1>Organizations</h1>
        <p>Manage and monitor all student organizations at MSUN</p>
      </div>
      <div class="org-dropdown">
        <span>All Organization</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>

    <OrgStats :stats="summaryStats" />

    <OrgCards :organizations="organizations" />
  </div>
            </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import OrgStats from '/src/components/OrgStats.vue';
import OrgCards from '/src/components/OrgCards.vue';

export default {
  components: {
    AppHeader,
    AppSidebar,
    OrgStats,
    OrgCards
  },
  data() {
    return {
      summaryStats: {
        totalOrgs: 8,
        totalMembers: 334,
        activeActivities: 27,
        totalBudget: 'P1045K'
      },
      organizations: [
        {
          id: 1,
          name: 'Supreme Student Council',
          type: 'Governance',
          description: 'The official student government body representing all students of MSUN.',
          president: 'Kian Estenzo',
          established: '2001',
          members: 45,
          activities: 5,
          budget: 'P250K',
          email: 'ssc@msun.edu.ph',
          phone: '+63 912 345 6789',
          status: 'Active',
          headerColor: '#1e40af', // Blue
          icon: 'fas fa-university'
        },
        {
          id: 2,
          name: 'College of Business and Information Technology',
          type: 'College',
          description: 'The official student government body representing all students of CBIT.',
          president: 'Al Christian Molina',
          established: '2005',
          members: 32,
          activities: 3,
          budget: 'P85K',
          email: 'cbit@msun.edu.ph',
          phone: '+63 912 345 6789',
          status: 'Active',
          headerColor: '#eab308', // Yellow
          icon: 'fas fa-briefcase'
        },
        {
          id: 3,
          name: 'College of Environmental and Life Sciences',
          type: 'College',
          description: 'The official student government body representing all students of CELS.',
          president: 'Kent V. Mapula',
          established: '2008',
          members: 58,
          activities: 4,
          budget: 'P180K',
          email: 'cels@msun.edu.ph',
          phone: '+63 912 345 6789',
          status: 'Active',
          headerColor: '#16a34a', // Green
          icon: 'fas fa-leaf'
        },
        // Add more organization objects here...
      ]
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
  overflow: hidden; /* Keeps the main window locked */
}

.dashboard-layout {
  display: flex;
  flex: 1; 
  width: 100%;
  overflow: hidden; /* Prevents the sidebar from scrolling with content */
}

.content {
  flex: 1;
  width: 100%;
  padding: 40px;
  background-color: #f8fafc; /* Moved background color here */
  box-sizing: border-box;
  
  /* THIS IS THE ONLY SCROLLBAR */
  overflow-y: auto; 
}

.main-content-container {
  /* Removed height: 100% and overflow to stop double scroll */
  width: 100%;
  max-width: 1200px; /* Optional: keeps content from getting too wide */
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
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
</style>