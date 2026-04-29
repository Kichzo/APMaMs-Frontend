<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="reports-container">
            <div class="header-row">
              <div class="title-block">
                <h1>Activity Accomplishment Reports</h1>
                <p>Create detailed accomplishment reports for completed activities with approval tracking</p>
              </div>
              
              <ReportsFilterBar />
            </div>
          <section class="reports-list">
            <ReportCard 
            v-for="report in reports" 
            :key="report.id" 
            :report="report" />
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ReportsFilterBar from '/src/components/Report/ReportsFilterBar.vue'
import ReportCard from '/src/components/Report/ReportCard.vue'

export default {
  name: 'Activity',
  components: {
    AppHeader,
    AppSidebar,
    ReportsFilterBar,
    ReportCard
  },
 data() {
  return {
    isSidebarVisible: true,
    reports: [
      {
        id: 1,
        title: "First SSC Regular Meeting",
        status: "Waiting..."
      },
    ]
  }
}, 
 methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
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
  align-items: flex-start;
  gap: 20px;
}

.title-block h1 {
  font-family: serif;
  font-size: 2.2rem;
  margin: 0;
}

.title-block p {
  color: #64748b;
  margin: 4px 0 0 0;
}

.reports-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
}
</style>