<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <!-- 1. THE WIZARD VIEW -->
        <!-- We show this if showWizard is true, regardless of selectedActivity -->
        <ActivityReportWizard v-if="showWizard" @close="showWizard = false" @submit-design="onDesignSubmitted" />

        <!-- 2. THE ACCOMPLISHMENT WIZARD VIEW -->
        <AccomReportWizard v-else-if="showAccomWizard" @cancel="showAccomWizard = false" />

        <!-- 3. THE DETAIL VIEW -->
        <!-- We show this if an activity is selected and we aren't in the wizard -->
        <ActivityDetailView v-else-if="selectedActivity && activeViewType === 'design'" :data="selectedActivity" :role="role" @back="selectedActivity = null"
          @open-report="showWizard = true" />

        <!-- 4. THE ACCOMPLISHMENT VIEW -->
        <ActivityAccomView v-else-if="selectedActivity && activeViewType === 'accomplishment'" :data="selectedActivity" :userRole="role" @back="selectedActivity = null" @open-accom-report="showAccomWizard = true" />

        <!-- 5. THE LIST VIEW -->
        <!-- We show this only if BOTH wizards and selectedActivity are false -->
        <div v-else>
          <div class="page-header">
            <div class="title-block">
              <h1>Activity Management</h1>
              <p>Create, manage, and track all organizational activities and proposals</p>
            </div>
            <button class="calendar-btn" @click="$router.push({ name: 'Calendar' })">
              Calendar
            </button>
          </div>

          <div class="filter-container">
            <div class="search-input-wrapper">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search activities, organizations, or activities" />
            </div>
            <div class="select-wrapper">
              <select>
                <option>All Organizations</option>
                <option>SSC</option>
                <option>CBIT</option>
                <option>CESS</option>
                <option>CELS</option>
                <option>CMFS</option>
                <option>KAABAG</option>
                <option>TME</option>
                <option>SenSo</option>
              </select>
            </div>
          </div>

          <div class="activity-list-container">
            <nav class="tabs">
              <button v-for="tab in tabs" :key="tab.id" :class="{ active: currentTab === tab.id }"
                @click="currentTab = tab.id">
                {{ tab.label }}
              </button>
            </nav>

            <div class="activity-items-wrapper">
              <ActivityItemCard v-for="activity in filteredActivities" :key="activity.id" :data="activity"
                @view-design="openDesign" @view-accomplishment="openAccomplishment" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ActivityItemCard from '/src/components/Activity/ActivityItemCard.vue';
import ActivityDetailView from '/src/components/Activity/ActivityDetailView.vue';
import ActivityReportWizard from '/src/components/Activity/ActivityReportWizard.vue';
import ActivityAccomView from '/src/components/Activity/ActivityAccomView.vue';
import AccomReportWizard from '/src/components/Activity/AccomReportWizard.vue';
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'

export default {
  name: 'Activity',
  components: {
    AppHeader,
    AppSidebar,
    ActivityItemCard,
    ActivityReportWizard,
    ActivityDetailView,
    ActivityAccomView,
    AccomReportWizard
  },
  data() {
    return {
      selectedActivity: null,
      activeViewType: null, // 'design' or 'accomplishment'
      isSidebarVisible: true,
      showWizard: false,
      showAccomWizard: false,
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
        { id: 'all', label: 'All Activities' }
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
    onDesignSubmitted() {
      this.showWizard = false;
      if (this.selectedActivity) {
        // Mark the activity as designCompleted
        const activity = this.activities.find(a => a.id === this.selectedActivity.id);
        if (activity) {
          activity.designCompleted = true;
        }
        this.selectedActivity = null; // Go back to the list view
      }
    },
    openDesign(activity) {
      this.selectedActivity = activity;
      this.activeViewType = 'design';
    },
    openAccomplishment(activity) {
      this.selectedActivity = activity;
      this.activeViewType = 'accomplishment';
    }
  }
};
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
  font-size: 2.2rem;
  margin: 0;
}

.title-block p {
  color: #64748b;
  margin-top: 5px;
}

.calendar-btn {
  background-color: #00129a;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.calendar-btn:hover {
  background-color: #000c66;
}

.filter-container {
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 4px solid #f1f5f9;
  border-radius: 12px;
  padding: 24px 30px;
  margin: 20px 0;
  gap: 16px;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  padding: 14px 16px;
}

.search-input-wrapper i {
  color: #a0aec0;
  margin-right: 12px;
}

.search-input-wrapper input {
  border: none;
  outline: none;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
}

.search-input-wrapper input::placeholder {
  font-family: Arial, Helvetica, sans-serif;
}

.select-wrapper select {
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  padding: 14px 30px 14px 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
  color: #000;
  outline: none;
  background: white;
  min-width: 220px;
  cursor: pointer;
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
  color: #3b59ff;
  font-weight: bold;
}

.tabs button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #3b59ff;
}
</style>

