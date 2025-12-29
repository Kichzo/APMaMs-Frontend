<template> 


<!--UNFINISHED BUT NEED FEW DETAILS GYAPON-->


 <div class="app-container">
    <!-- guys this is top header, this is content -->
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

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
         <div class="calendar-page">
    <div class="calendar-layout">
      <CalendarView 
        :events="events"
        @org-change="selectedOrg = $event"
      />

      <CalendarUpcomingAct
        :events="events"
        :selectedOrg="selectedOrg"
      />
    </div>
  </div>

      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import CalendarView from '/src/components/CalendarView.vue'
import CalendarUpcomingAct from '/src/components/CalendarUpcomingAct.vue'

export default {
  components: { 
    CalendarView, 
    CalendarUpcomingAct,
    AppHeader,
    AppSidebar
 },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      selectedOrg: 'All Organizations',
      events: [
        { id: 1, title: 'Leadership Training', day: 15, org: 'SSC', status: 'approved', date: 'Jan 15' },
        { id: 2, title: 'Coding Bootcamp', day: 18, org: 'CBIT College', status: 'pending', date: 'Jan 18' }
      ]
    }
  }
}
</script>
<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  /* Lock the container to the screen height */
  height: 100vh; 
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden; /* Prevent the whole page from scrolling */
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  /* This ensures the sidebar and content stay within the remaining height */
  overflow: hidden; 
}

/* SideBar Component should be styled internally to be height: 100% */

.content {
  flex: 1;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  
  /* The Magic Sauce: Enable scrolling only here */
  overflow-y: auto; 
  height: 100%;
}

.calendar-layout {
  display: flex;
  gap: 24px;
  margin-top: 20px;
  /* Prevents sidebar in calendar from shrinking */
  align-items: flex-start; 
}

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
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}
</style>