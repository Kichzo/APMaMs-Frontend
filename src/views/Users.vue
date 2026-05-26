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

                        <div v-if="users && users.length === 0" class="empty-state">
                            <p>No users registered yet.</p>
                        </div>
                        <div v-else class="user-list">
                            <UserCard 
                                v-for="user in users" 
                                :key="user.id" 
                                :user="user"
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
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '/src/stores/userStore';

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
    async mounted() {
        await this.fetchUsers();
    },
    computed: {
        ...mapState(useUserStore, ['users', 'isLoading'])
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
        ...mapActions(useUserStore, ['fetchUsers', 'updateUser', 'addUser']),
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        async handleUserAdded(userData) {
            try {
                await this.addUser(userData);
                this.showAddUser = false;
                alert("User added successfully!");
            } catch (err) {
                alert("Failed to add user: " + err.message);
            }
        },
        openEditUser(user) {
            this.selectedUser = user;
            this.showEditUser = true;
        },
        async handleUserUpdated(updatedData) {
            try {
                // Ensure we pass only properties that exist in DB
                const { id, first_name, last_name, email, role, status, organization } = updatedData;
                await this.updateUser(id, { first_name, last_name, email, role, status });
                this.showEditUser = false;
                alert("User updated successfully!");
            } catch (err) {
                alert("Failed to update user: " + err.message);
            }
        },
        openViewProfile(user) {
            this.selectedUser = user;
            this.showViewProfile = true;
        },
        switchToEdit() {
            this.showViewProfile = false;
            this.showEditUser = true;
        },
        openDeactivateUser(user) {
            this.selectedUser = user;
            this.showDeactivateUser = true;
        },
        async handleUserDeactivated() {
            try {
                await this.updateUser(this.selectedUser.id, { status: 'Inactive' });
                this.showDeactivateUser = false;
                alert("User deactivated successfully!");
            } catch (err) {
                alert("Failed to deactivate user: " + err.message);
            }
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

.empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    color: #64748b;
    font-size: 1.1rem;
    font-style: italic;
    background: #f8fafc;
    border: 1px dashed #cbd5e1;
    border-radius: 12px;
}
</style>