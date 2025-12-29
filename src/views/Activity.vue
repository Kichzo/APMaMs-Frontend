<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :visible="isSidebarVisible" />

      <main class="content">
        <div class="page-header">
          <div class="title-block">
            <h1>Activity Management</h1>
            <p>Create, manage, and track all organizational activities and proposals</p>
          </div>
          <button class="new-activity-btn">New Activity</button>
        </div>

        <ActivityStats :activities="activities" />
        <ActivityFilters />

        <div class="activity-list-container">
          <nav class="tabs">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              :class="{ active: currentTab === tab.id }"
              @click="currentTab = tab.id"
            >
              {{ tab.label }} ({{ tab.count }})
            </button>
          </nav>

          <div class="activity-items-wrapper">
            <ActivityItemCard 
              v-for="activity in filteredActivities" 
              :key="activity.id" 
              :data="activity" 
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ActivityStats from '/src/components/Activity/ActivityStats.vue';
import ActivityFilters from '/src/components/Activity/ActivityFilters.vue';
import ActivityItemCard from '/src/components/Activity/ActivityItemCard.vue';
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
    role: localStorage.getItem('role') || 'org',
    currentTab: 'all',
    activities: [
      {
        id: 1,
        title: 'Leadership Training Workshop',
        status: 'Approved',
        priority: 'HIGH',
        description: 'Comprehensive leadership development program for student officers',
        organization: 'Student Council',
        date: '18/11/2025',
        location: 'Function Hall',
        participants: 50,
        progress: 75,
        budget: '23,000',
        submittedBy: 'Al Christian Molina',
        submittedAt: '15/10/2025',
        approvedBy: 'VP Uy'
      },
      {
        id: 2,
        title: 'Freshmen Orientation Program',
        status: 'Pending',
        priority: 'MEDIUM',
        description: 'Orientation program for incoming freshmen students',
        organization: 'Academic Affairs',
        date: '05/12/2025',
        location: 'Main Auditorium',
        participants: 300,
        progress: 20,
        budget: '45,000',
        submittedBy: 'Jane Dela Cruz',
        submittedAt: '01/11/2025',
        approvedBy: null
      }
    ]
  }
},
computed: {
  // This replaces your static tabs array
  tabs() {
    return [
      { id: 'all', label: 'All Activities', count: this.activities.length },
      { id: 'pending', label: 'Pending', count: this.activities.filter(a => a.status.toLowerCase() === 'pending').length },
      { id: 'approved', label: 'Approved', count: this.activities.filter(a => a.status.toLowerCase() === 'approved').length },
      { id: 'ongoing', label: 'Ongoing', count: this.activities.filter(a => a.status.toLowerCase() === 'ongoing').length },
      { id: 'completed', label: 'Completed', count: this.activities.filter(a => a.status.toLowerCase() === 'completed').length },
      { id: 'drafts', label: 'Drafts', count: this.activities.filter(a => a.status.toLowerCase() === 'draft').length }
    ];
  },
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
.app-container {
  display: flex;
  flex-direction: column;
  /* Lock to viewport height */
  height: 100vh; 
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden; /* Prevent page-level scrolling */
}

.dashboard-layout {
  display: flex;
  flex: 1; /* Take up remaining height below header */
  width: 100%;
  overflow: hidden; /* Keeps sidebar and content contained */
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

/* UI Component Styles */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;
  margin-bottom: 30px;
}

.title-block h1 {
  font-family: serif; 
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
  white-space: nowrap;
}

.activity-list-container {
  border-top: 1px solid #e2e8f0;
  width: 100%;
}

.tabs {
  display: flex;
  gap: 30px; 
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
  /* Optional: Keep tabs visible while scrolling cards */
  position: sticky;
  top: -40px; /* Offset for the .content padding */
  background: white;
  z-index: 10;
}

.tabs button {
  background: none;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  color: #64748b;
  font-size: 0.95rem;
  position: relative;
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
