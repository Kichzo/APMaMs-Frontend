<template>








<!-- NEED TWEAKSSSS -->










  <div class="app-container">
    <!-- guys this is top bar / header, this is content -->
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <!-- guys this is main dashboard body -->
    <div class="dashboard-body">
      <!-- guys this is sidebar, this is content -->
      <AppSidebar v-if="isSidebarVisible" />

      <!-- guys this is main content area, this is content -->
      <main class="main-content" :class="{ 'full-width': !isSidebarVisible }">
        <!-- guys this is center wrapper for centering page content -->
        <div class="center-wrapper">
          <!-- guys this is profile settings page, this is content -->
          <div class="profile-settings-page">
            <!-- guys this is header of profile settings -->
            <header class="settings-header">
              <button class="back-btn" @click="$emit('back')">
                <i class="fas fa-arrow-left"></i>
              </button>
              <div class="header-text">
                <h1>Profile Settings</h1>
                <p>Manage your account information and preferences</p>
              </div>
            </header>

            <!-- guys this is profile card, this is content -->
            <div class="profile-card">
              <!-- guys this is main profile info -->
              <div class="profile-main">
                <div class="avatar-container">
                  <i class="fas fa-user-circle"></i>
                </div>
                
                <div class="user-identity">
                  <h2>Kian Estenzo</h2>
                  <p class="role">President</p>
                  <p class="org">Student Council</p>
                </div>
              </div>

              <!-- guys this is user details list -->
              <ul class="detail-list">
                <li>
                  <i class="fas fa-envelope"></i>
                  <span>kian.estenzo@msunaawan.edu.ph</span>
                </li>
                <li>
                  <i class="fas fa-id-card"></i>
                  <span>2021-12345</span>
                </li>
                <li>
                  <i class="fas fa-university"></i>
                  <span>College of Business and Information Technology</span>
                </li>
                <li>
                  <i class="fas fa-calendar-alt"></i>
                  <span>Joined August 2025</span>
                </li>
              </ul>

              <!-- guys these are action buttons, this is content -->
              <div class="action-buttons">
                <button class="btn btn-primary">Edit Profile</button>
                <button class="btn btn-danger">Deleted Account</button>
              </div>
            </div>
          </div> <!-- guys end profile-settings-page -->
        </div> <!-- guys end center-wrapper -->
      </main>
    </div> <!-- guys end dashboard-body -->
  </div> <!-- guys end app-container -->
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'

export default {
  name: 'DashboardLayout',
  components: {
    AppHeader,  // guys top header component
    AppSidebar  // guys left sidebar component
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      isSidebarVisible: false // guys sidebar is hidden by default
    }
  },
  methods: {
    toggleSidebar() {
      // guys toggle sidebar visibility, this is content
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>

<style scoped>
/* guys base layout */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* guys main dashboard body */
.dashboard-body {
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;
}

/* guys main content area */
.main-content {
  flex: 1;
  overflow-y: auto;
  transition: all 0.3s ease;
  background-color: #fff;
  padding: 40px;
  display: flex;
  justify-content: center; /* guys always center inner content */
}

/* guys full width when sidebar hidden */
.main-content.full-width {
  width: 100vw;
  padding: 40px 20px;
}

/* guys center wrapper */
.center-wrapper {
  max-width: 500px;
  width: 100%;
}

/* guys profile settings page */
.profile-settings-page {
  max-width: 500px;
  width: 100%;
  padding: 20px;
}

/* guys header styling */
.settings-header {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 30px;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding-top: 5px;
}

.header-text h1 {
  font-family: serif;
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
}

.header-text p {
  color: #888;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
}

/* guys profile card styling */
.profile-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 10px 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* guys profile main info */
.profile-main {
  text-align: center;
  margin-bottom: 30px;
}

.avatar-container {
  font-size: 100px;
  color: #000;
  line-height: 1;
  margin-bottom: 15px;
}

.user-identity h2 {
  font-family: serif;
  font-size: 1.5rem;
  margin: 0;
}

.user-identity .role,
.user-identity .org {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

/* guys detail list styling */
.detail-list {
  list-style: none;
  padding: 0;
  width: 100%;
  margin-bottom: 30px;
}

.detail-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 18px;
  font-size: 0.85rem;
  color: #333;
}

.detail-list li i {
  width: 18px;
  text-align: center;
  font-size: 1rem;
  color: #000;
}

/* guys action buttons styling */
.action-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-family: serif;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-primary {
  background-color: #0a21c0;
  color: white;
}

.btn-danger {
  background-color: #d32f2f;
  color: white;
}
</style>
