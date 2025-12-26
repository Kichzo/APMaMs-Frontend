<template>
  <div class="app-container">
    <!-- TOP BAR -->
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <!-- BODY -->
    <div class="dashboard-layout">
      <!-- LEFT SIDEBAR -->
      <AppSidebar :visible="isSidebarVisible" />

      <!-- MAIN CONTENT -->
      <main class="content">
      <div class="profile-settings-page">
    <header class="settings-header">
      <button class="back-btn" @click="$emit('back')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="header-text">
        <h1>Profile Settings</h1>
        <p>Manage your account information and preferences</p>
      </div>
    </header>

    <div class="profile-card">
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

      <div class="action-buttons">
        <button class="btn btn-primary">Edit Profile</button>
        <button class="btn btn-danger">Deleted Account</button>
      </div>
    </div>
  </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'

export default {
  name: 'DashboardLayout',
  components: {
    AppHeader,
    AppSidebar
  },
  data() {
    return {
      isSidebarVisible: false // sidebar is invisible by default
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
/* Base Layout */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Dashboard layout */
.dashboard-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Main Content */
.content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background-color: #fff;
  display: flex;
  justify-content: center; /* horizontally center content */
  align-items: flex-start; /* top align the content */
  transition: margin-left 0.3s ease; /* smooth transition when sidebar toggles */
}

/* Optional: adjust content margin if sidebar is visible */
.sidebar + .content {
  margin-left: 0; /* no extra margin needed if using flex */
}


.profile-settings-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Header Styling */
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
  font-family: serif; /* Matches reference image 4 */
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
}

.header-text p {
  color: #888;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
}

/* Card Styling */
.profile-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-main {
  text-align: center;
  margin-bottom: 30px;
}

.avatar-container {
  font-size: 100px; /* Large user icon */
  color: #000;
  line-height: 1;
  margin-bottom: 15px;
}

.user-identity h2 {
  font-family: serif;
  font-size: 1.5rem;
  margin: 0;
}

.user-identity .role {
  color: #666;
  margin: 5px 0 0 0;
  font-size: 0.95rem;
}

.user-identity .org {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

/* Detail List Styling */
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

/* Button Styling */
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
  background-color: #0a21c0; /* Deep blue from image 4 */
  color: white;
}

.btn-danger {
  background-color: #d32f2f; /* Red from image 4 */
  color: white;
}
</style>
