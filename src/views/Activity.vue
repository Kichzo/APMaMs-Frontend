<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <!-- 1. THE WIZARD VIEW -->
        <!-- We show this if showWizard is true, regardless of selectedActivity -->
        <ActivityReportWizard v-if="showWizard" @close="showWizard = false" />

        <!-- 2. THE DETAIL VIEW -->
        <!-- We show this if an activity is selected and we aren't in the wizard -->
        <ActivityDetailView v-else-if="selectedActivity" :data="selectedActivity" @back="selectedActivity = null"
          @open-report="showWizard = true" />

        <!-- 3. THE LIST VIEW -->
        <!-- We show this only if BOTH showWizard and selectedActivity are false -->
        <div v-else>
          <div class="page-header">
            <div class="title-block">
              <h1>Activity Management</h1>
              <p>Create, manage, and track all organizational activities and proposals</p>
            </div>
            <!-- Trigger the wizard from the main button too -->
            <button class="new-activity-btn" @click="showWizard = true">
              New Activity
            </button>
          </div>

          <ActivityStats :activities="activities" />
          <ActivityFilters />

          <div class="activity-list-container">
            <nav class="tabs">
              <button v-for="tab in tabs" :key="tab.id" :class="{ active: currentTab === tab.id }"
                @click="currentTab = tab.id">
                {{ tab.label }} ({{ tab.count }})
              </button>
            </nav>

            <div class="activity-items-wrapper">
              <ActivityItemCard v-for="activity in filteredActivities" :key="activity.id" :data="activity"
                @view="selectedActivity = $event" />
            </div>
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
import ActivityDetailView from '/src/components/Activity/ActivityDetailView.vue';
import ActivityReportWizard from '/src/components/Activity/ActivityReportWizard.vue';
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import CreateActivity from '/src/views/CreateActivity.vue';

export default {
  name: 'Activity',
  components: {
    CreateActivity,
    AppHeader,
    AppSidebar,
    ActivityStats,
    ActivityFilters,
    ActivityItemCard,
    ActivityReportWizard,
    ActivityDetailView,
  },
  data() {
    return {
      selectedActivity: null,
      isSidebarVisible: true,
      showWizard: false,
      role: localStorage.getItem('role') || 'org',
      currentTab: 'all',
      activities: [
        {
          id: 1,
          title: 'First SSC Regular Meeting',
          status: 'Approved',
          organization: 'Supreme Student Council',
          date: '05/01/2026 - 09/01/2026',
          participants: 50,
          progress: 0,
          budget: '5,000'
        },
        {
          id: 2,
          title: 'SSC Legislative Meeting',
          status: 'Approved',
          organization: 'Supreme Student Council',
          date: '02/02/2026 - 06/02/2026',
          participants: 50,
          progress: 0,
          budget: '5,000'
        }
      ]
    }
  },
  computed: {
    // This replaces your static tabs array
    tabs() {
      return [
        { id: 'all', label: 'All Activities', count: this.activities.length }
      ];
    },
    filteredActivities() {
      if (this.currentTab === 'all') return this.activities;
      return this.activities.filter(a => a.status.toLowerCase() === this.currentTab);
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
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

/* Sidebar logic exactly as your working reference */
:deep(.sidebar) {
  width: 260px;
  transition: all 0.3s ease;
}

/* This pulls the sidebar off-screen so the flex content fills the space */
:deep(.sidebar-hidden) {
  margin-left: -260px;
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

/* UI Component Styles */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2px;
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

.new-activity-btn {
  background-color: #0a21c0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
}

.activity-list-container {
  border-top: 1px solid #e2e8f0;
  width: 100%;
}

.activity-items-wrapper {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tabs {
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
  /* Optional: Keep tabs visible while scrolling cards */
  position: sticky;
  top: -40px;
  /* Offset for the .content padding */
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
