<template>
    <div class="app-container">
    <!-- guys this is top header, this is content -->
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <!-- guys this is main dashboard layout -->
    <div class="dashboard-layout">
      <!-- guys this is sidebar, this is content -->
      <AppSidebar :visible="isSidebarVisible" />

      <!-- guys this is main content area -->
      <main class="content">
  <div class="page-header">
    <div class="title-block">
      <h1>Activity Management</h1>
      <p>Create, manage, and track all organizational activities and proposals</p>
    </div>
    <button class="new-activity-btn">New Activity</button>
  </div>

  <ActivityStats />
  <ActivityFilters />

  <div class="activity-list-container">
    <nav class="tabs">
      <button class="active">All Activities (8)</button>
      <button>Pending (1)</button>
      <button>Approved (2)</button>
      <button>Ongoing (2)</button>
      <button>Completed (2)</button>
      <button>Drafts (1)</button>
      </nav>
    <ActivityItemCard v-for="i in 3" :key="i" />
  </div>
      </main>
    </div>
  </div>
</template>

<script>
import ActivityStats from '/src/components/ActivityStats.vue';
import ActivityFilters from '/src/components/ActivityFilters.vue';
import ActivityItemCard from '/src/components/ActivityItemCard.vue';
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'

export default {
  name: 'Activity',
  components: {
    AppHeader,
    AppSidebar,
    ActivityStats,
    ActivityFilters,
    ActivityItemCard
  },
  data() {
    return {
      currentTab: 'all',
      tabs: [
        { id: 'all', label: 'All Activities', count: 8 },
        { id: 'pending', label: 'Pending', count: 1 },
        { id: 'approved', label: 'Approved', count: 2 },
        { id: 'ongoing', label: 'Ongoing', count: 2 },
        { id: 'completed', label: 'Completed', count: 1 },
        { id: 'drafts', label: 'Drafts', count: 1 }
      ],
      // This data structure matches the design requirements for the ActivityItemCard
      activities: [
        {
          id: 1,
          title: 'Leadership Training Workshop',
          description: 'Comprehensive leadership development program for student officers',
          org: 'Student Council',
          date: '18/11/2025',
          location: 'Function Hall',
          participants: 50,
          status: 'Approved',
          priority: 'HIGH',
          progress: 75,
          budget: 23000,
          author: 'Al Christian Molina',
          submittedAt: '15/10/2025',
          approver: 'VP Uy'
        }
        // Add more activity objects here...
      ]
    };
  },
  computed: {
    filteredActivities() {
      if (this.currentTab === 'all') return this.activities;
      return this.activities.filter(a => a.status.toLowerCase() === this.currentTab);
    }
  },
  methods: {
    handleSearch(query) {
      console.log("Searching for:", query);
    },
    handleFilter(filterData) {
      console.log("Filtering by:", filterData);
    }
  }
};
</script>

<style scoped>
/* Change: Main container allows horizontal growth */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Change: Ensures the layout takes up 100% width without side gaps */
.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
}

/* Change: flex: 1 ensures it fills all available space; 
   width: 100% prevents centered "column" constraints */
.content {
  flex: 1;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box; /* Ensures padding doesn't cause overflow */
}

/* Change: justify-content space-between stretches title and button to edges */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;
  margin-bottom: 30px;
}

.title-block h1 {
  font-family: serif; /* Matches image_495e05.png typography */
  font-size: 2.2rem;
  margin: 0;
}

.title-block p {
  color: #64748b;
  margin-top: 5px;
}

.new-activity-btn {
  background-color: #0a21c0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

/* Change: Removed margin-top to let it sit flush if needed */
.activity-list-container {
  border-top: 1px solid #e2e8f0;
  width: 100%;
}

/* Change: Tabs now align to the start of the full-width container */
.tabs {
  display: flex;
  gap: 30px; 
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
}

.tabs button {
  background: none;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  color: #64748b;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.2s ease;
}

.tabs button.active {
  color: #0a21c0;
  font-weight: 600;
}

.tabs button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #0a21c0;
}
</style>