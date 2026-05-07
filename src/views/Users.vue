<template>
    <div class="app-container">
        <AppHeader v-if="!showAddUser" @toggle-sidebar="toggleSidebar" :role="role" />

        <div v-if="!showAddUser" class="dashboard-layout">
            <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />
            <main class="main-content">
                <div class="page-header">
                    <h1>User & Access Management</h1>
                    <p>Manage user accounts, roles, and permissions across the system</p>
                </div>

                <div class="content-container">
                    <UserTools @add-user="showAddUser = true" />

                        <div class="user-list">
                            <UserCard 
                                @edit="openEditUser(user)" 
                                @view="openViewProfile(user)" 
                                @deactivate="openDeactivateUser(user)" 
                            />
                        </div>
                </div>
            </main>
        </div>

        <AddUser v-else @back="showAddUser = false" @submit="handleUserAdded" />

        <!-- Edit User Modal -->
        <EditUser 
            v-if="showEditUser" 
            :user="selectedUser" 
            @close="showEditUser = false" 
            @save="handleUserUpdated" 
        />

        <!-- View Profile Modal -->
        <ViewProfile 
            v-if="showViewProfile" 
            :user="selectedUser" 
            @close="showViewProfile = false" 
            @edit-profile="switchToEdit" 
        />

        <!-- Deactivate User Modal -->
        <DeactivateUser 
            v-if="showDeactivateUser" 
            :user="selectedUser" 
            @close="showDeactivateUser = false" 
            @confirm="handleUserDeactivated" 
        />
    </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import UserTools from '/src/components/ManageUser/UserTools.vue';
import UserCard from '/src/components/ManageUser/UserCard.vue';
import AddUser from '/src/components/ManageUser/AddUser.vue';
import EditUser from '/src/components/ManageUser/EditUser.vue';
import ViewProfile from '/src/components/ManageUser/ViewProfile.vue';
import DeactivateUser from '/src/components/ManageUser/DeactivateUser.vue';

export default {
    data() {
        return {
            isSidebarVisible: true,
            role: localStorage.getItem('role') || 'org',
            showAddUser: false,
            showEditUser: false,
            showViewProfile: false,
            showDeactivateUser: false,
            selectedUser: null
        }
    },
    components: {
        AppHeader,
        AppSidebar,
        UserTools,
        UserCard,
        AddUser,
        EditUser,
        ViewProfile,
        DeactivateUser
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        handleUserAdded(userData) {
            console.log('User added:', userData);
            this.showAddUser = false;
            // Here you would typically refresh the user list
        },
        openEditUser(user) {
            // For now using mock data as UserCard doesn't receive real props yet
            this.selectedUser = user || {
                firstName: 'Kian',
                lastName: 'Estenzo',
                email: 'kian.estenzo@msunaawan.edu.ph',
                organization: 'College of Business and Information Technology',
                role: 'President',
                status: 'Active'
            };
            this.showEditUser = true;
        },
        handleUserUpdated(updatedData) {
            console.log('User updated:', updatedData);
            this.showEditUser = false;
            // Handle update logic here
        },
        openViewProfile(user) {
            this.selectedUser = user || {
                firstName: 'Kian',
                lastName: 'Estenzo',
                email: 'kian.estenzo@msunaawan.edu.ph',
                organization: 'College of Business and Information Technology',
                role: 'President',
                status: 'Active',
                password: '1234'
            };
            this.showViewProfile = true;
        },
        switchToEdit() {
            this.showViewProfile = false;
            this.showEditUser = true;
        },
        openDeactivateUser(user) {
            this.selectedUser = user || { firstName: 'Kian', lastName: 'Estenzo' };
            this.showDeactivateUser = true;
        },
        handleUserDeactivated() {
            console.log('User deactivated:', this.selectedUser);
            this.showDeactivateUser = false;
            // Handle deactivation logic here
        }
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
  font-family:Arial, sans-serif;
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