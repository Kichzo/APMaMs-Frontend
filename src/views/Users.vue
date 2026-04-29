<template>
    <div class="app-container">
        <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

        <div class="dashboard-layout">
            <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />
            <main class="main-content">
                <div class="page-header">
                    <h1>User & Access Management</h1>
                    <p>Manage user accounts, roles, and permissions across the system</p>
                </div>

                <div class="content-container">
                    <UserTools />

                    <div class="user-list">
                        <UserCard />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import UserTools from '/src/components/ManageUser/UserTools.vue';
import UserCard from '/src/components/ManageUser/UserCard.vue';

export default {
    data() {
        return {
            isSidebarVisible: true,
            role: localStorage.getItem('role') || 'org',
        }
    },
    components: {
        AppHeader,
        AppSidebar,
        UserTools,
        UserCard
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

/* Sidebar logic exactly as your working reference */
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

.main-content {
    flex: 1;
    padding: 30px 40px;
    overflow-y: auto;
    background-color: #f8fafc;
    transition: all 0.3s ease-in-out; /* Smooth slide when sidebar moves */
}

.page-header {
    margin-bottom: 30px;
}

.page-header h1 {
  font-family: serif;
  font-size: 2.2rem;
  margin: 0;
}

.page-header p {
  color: #64748b;
  margin-top: 5px;
}

.content-container {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 30px;
    min-height: 600px;
    /* Ensure container has height even with few items */
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}
</style>