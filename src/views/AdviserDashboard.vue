<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content" :class="{ 'content-expanded': !isSidebarVisible }">
        <div class="page-title">
          <h1>Adviser Dashboard</h1>
          <p>Comprehensive oversight and monitoring of all student organizations</p>
        </div>

        <div class="stats-grid-4">
          <div class="admin-top-card">
            <div class="admin-card-top">
              <div class="admin-card-icon building-icon"><i class="far fa-building"></i></div>
              <span class="admin-card-value">8</span>
            </div>
            <span class="admin-card-label">Total Organizations</span>
          </div>
          
          <div class="admin-top-card">
            <div class="admin-card-top">
              <div class="admin-card-icon user-icon"><i class="far fa-user"></i></div>
              <span class="admin-card-value">1</span>
            </div>
            <span class="admin-card-label">Total Users</span>
          </div>
          
          <div class="admin-top-card">
            <div class="admin-card-top">
              <div class="admin-card-icon clipboard-icon"><i class="fas fa-clipboard-list"></i></div>
              <span class="admin-card-value">3</span>
            </div>
            <span class="admin-card-label">Pending Approvals</span>
          </div>
          
          <div class="admin-top-card">
            <div class="admin-card-top">
              <div class="admin-card-icon layers-icon"><i class="fas fa-layer-group"></i></div>
              <span class="admin-card-value">6</span>
            </div>
            <span class="admin-card-label">Semester Active Activities</span>
          </div>
        </div>

        <div class="dashboard-middle">
          <!-- Pending Approvals Col -->
          <div class="approvals-col">
            <div class="approvals-card">
              <div class="section-header">
                <h2>Pending Approvals</h2>
                <a href="#" class="view-all">View All →</a>
              </div>
              <div class="pending-list">
                <!-- Item 1 -->
                <div class="pending-item">
                  <div class="pi-info">
                    <h3>First SSC Regular Meeting</h3>
                    <span><i class="far fa-file-alt"></i> Detailed Activity Design</span>
                  </div>
                  <button class="btn-view-details"><i class="far fa-eye"></i> View Details</button>
                </div>
                <!-- Item 2 -->
                <div class="pending-item">
                  <div class="pi-info">
                    <h3>First SSC Regular Meeting</h3>
                    <span><i class="far fa-file-alt"></i> Detailed Activity Design</span>
                  </div>
                  <button class="btn-view-details"><i class="far fa-eye"></i> View Details</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Col -->
          <div class="stats-col">
            <div class="system-stats-card">
              <h2>System Statistics</h2>
              
              <div class="stat-row">
                <div class="stat-labels">
                  <span>Action Plans</span>
                  <span>87</span>
                </div>
                <div class="stat-bar-container">
                  <div class="stat-bar blue-bar" style="width: 87%"></div>
                </div>
              </div>

              <div class="stat-row">
                <div class="stat-labels">
                  <span>Activities</span>
                  <span>127</span>
                </div>
                <div class="stat-bar-container">
                  <div class="stat-bar green-bar" style="width: 100%"></div>
                </div>
              </div>

              <div class="stat-row">
                <div class="stat-labels">
                  <span>Completion Rate</span>
                  <span>92%</span>
                </div>
                <div class="stat-bar-container">
                  <div class="stat-bar green-bar" style="width: 92%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-bottom">
          <FinancialStatistics />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import FinancialStatistics from '/src/components/Financial/FinancialStatistics.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    FinancialStatistics
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      isSidebarVisible: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
}

.content {
  flex: 1;
  padding: 30px 40px;
  overflow-y: auto;
  background-color: #ffffff; /* Matches the white background in the image */
  transition: all 0.3s ease-in-out;
}

:deep(.sidebar) {
  width: 250px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.sidebar-hidden) {
  transform: translateX(-100%);
  margin-right: -250px;
}

/* Page Title */
.page-title {
  margin-bottom: 30px;
}

.page-title h1 {
  font-family: serif;
  font-size: 2.2rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
}

.page-title p {
  color: #6b7280;
  margin-top: 8px;
  font-size: 1.05rem;
}

/* Stats Grid 4 Columns */
.stats-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.admin-top-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.admin-card-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.admin-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.building-icon {
  background-color: #e0f2fe;
  color: #0284c7;
}

.user-icon {
  background-color: #fef9c3;
  color: #ca8a04;
}

.clipboard-icon {
  background-color: #fce7f3;
  color: #db2777;
}

.layers-icon {
  background-color: #fee2e2;
  color: #dc2626;
}

.admin-card-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  line-height: 1;
}

.admin-card-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
}

/* Dashboard Middle section */
.dashboard-middle {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
}

.approvals-col {
  flex: 2;
}

.stats-col {
  flex: 1;
}

/* Approvals Card */
.approvals-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.view-all {
  color: #2563eb;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

.view-all:hover {
  text-decoration: underline;
}

.pending-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pending-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 20px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.pi-info h3 {
  margin: 0 0 6px 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827;
}

.pi-info span {
  font-size: 0.85rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-view-details {
  background-color: #10b981;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s;
}

.btn-view-details:hover {
  background-color: #059669;
}

/* System Stats Card */
.system-stats-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  height: 100%;
  box-sizing: border-box;
}

.system-stats-card h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 24px 0;
}

.stat-row {
  margin-bottom: 24px;
}

.stat-row:last-child {
  margin-bottom: 0;
}

.stat-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

.stat-bar-container {
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.stat-bar {
  height: 100%;
  border-radius: 4px;
}

.blue-bar {
  background-color: #3b82f6;
}

.green-bar {
  background-color: #10b981;
}

/* Financial Statistics Bottom */
.dashboard-bottom {
  margin-top: 20px;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .dashboard-middle {
    flex-direction: column;
  }
}

@media (max-width: 992px) {
  .stats-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stats-grid-4 {
    grid-template-columns: 1fr;
  }
  .pending-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .btn-view-details {
    width: 100%;
    justify-content: center;
  }
}
</style>