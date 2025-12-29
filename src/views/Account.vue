<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <Toast :visible="showToast" :message="toastMessage" @close="showToast = false" />

    <AccountDelete v-if="isDeleteModalVisible" @close="isDeleteModalVisible = false" @confirm="handleConfirmDelete" />

    <div class="dashboard-body">
      <AppSidebar :class="{ 'sidebar-active': isSidebarVisible }" />

      <main class="main-content">
        <div class="center-wrapper" :class="{ 'editing-mode': isEditing }">
          <div class="content-padding">
            <AccountHeader @back="goBack" />

            <div class="settings-layout">
              <AccountProfileCard :user="userData" @edit="isEditing = true" @delete="isDeleteModalVisible = true" />

              <transition name="slide-fade">
                <AccountForm v-if="isEditing" :user="userData" @cancel="isEditing = false"
                  @save="handleUpdateAccount" />
              </transition>
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
import AccountHeader from '/src/components/Account/AccountHeader.vue'
import AccountProfileCard from '/src/components/Account/AccountProfileCard.vue'
import AccountForm from '/src/components/Account/AccountForm.vue'
import AccountDelete from '/src/components/Account/AccountDelete.vue'
import Toast from '/src/components/Toast.vue'

export default {
  components: {
    AppHeader, AppSidebar, AccountHeader,
    AccountProfileCard, AccountForm, AccountDelete, Toast
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      isSidebarVisible: false,
      isEditing: false,
      isDeleteModalVisible: false,
      showToast: false,       // Controls the Toast visibility
      toastMessage: '',       // Dynamic message for the Toast
      userData: {
        name: 'Kian Estenzo',
        role: 'President',
        org: 'Student Council',
        email: 'kian.estenzo@msunaawan.edu.ph',
        idNumber: '2021-12345',
        college: 'CBIT',
        joinedDate: 'August 2025'
      }
    }
  },
  methods: {
    toggleSidebar() { this.isSidebarVisible = !this.isSidebarVisible },
    goBack() { this.$router.back() },

    handleUpdateAccount(data) {
      // Update logic here...
      this.toastMessage = "Account updated successfully";
      this.showToast = true;
      // The toast will now close itself in 2 seconds OR when X is clicked
    },

    // Handle account deletion
    handleConfirmDelete() {
      // 1. Immediately hide the modal
      this.isDeleteModalVisible = false;

      // 2. Set the custom message
      this.toastMessage = "Account deleted successfully";

      // 3. Show the toast (The Toast.vue internal timer will hide it in 2s)
      this.showToast = true;

    },

    // Reusable toast trigger logic
    triggerToast(message) {
      this.toastMessage = message;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
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
}

.dashboard-body {
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;
}

:deep(.sidebar) {
  width: 260px;
  height: 100%;
  background: white;
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  margin-left: -260px;
  border-right: 1px solid #e0e0e0;
}

:deep(.sidebar.sidebar-active) {
  margin-left: 0;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.center-wrapper {
  max-width: 500px;
  /* Default single card width */
  width: 100%;
  transition: max-width 0.4s ease;
}

/* Expands to fit both card and form side-by-side */
.center-wrapper.editing-mode {
  max-width: 1100px;
}

.settings-layout {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

/* Ensure the card doesn't stretch too much when editing starts */
:deep(.profile-card) {
  flex-shrink: 0;
  width: 420px;
}

/* Smooth transition for the form appearing */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.content-padding {
  padding: 10px 10px;
}
</style>