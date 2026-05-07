<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="view-profile-modal">
      <div class="modal-header">
        <h2>User Profile</h2>
        <button class="close-btn" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="profile-content">
        <div class="profile-header">
          <div class="avatar-large">KE</div>
          <h1 class="user-name">Kian Estenzo</h1>
          <p class="user-email">kian.estenzo@msunaawan.edu.ph</p>
        </div>

        <div class="profile-details">
          <div class="detail-row">
            <div class="detail-label">Role</div>
            <div class="detail-value">President</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Organization</div>
            <div class="detail-value">College of Business and Information Technology</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Account Status</div>
            <div class="detail-value status-active">Active</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Password</div>
            <div class="detail-value">1234</div>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-close" @click="$emit('close')">Close</button>
          <button class="btn-edit" @click="$emit('edit-profile')">Edit Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        firstName: 'Kian',
        lastName: 'Estenzo',
        email: 'kian.estenzo@msunaawan.edu.ph',
        organization: 'College of Business and Information Technology',
        role: 'President',
        status: 'Active',
        password: '1234'
      })
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.view-profile-modal {
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  animation: modalScale 0.3s ease-out;
}

@keyframes modalScale {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal-header {
  padding: 24px 32px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #1e293b;
}

.close-btn {
  background: none;
  border: none;
  color: #64748b;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #1e293b;
}

.profile-content {
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-header {
  text-align: center;
  margin-bottom: 40px;
}

.avatar-large {
  width: 100px;
  height: 100px;
  background-color: #3b59ff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 auto 20px;
  box-shadow: 0 4px 12px rgba(59, 89, 255, 0.3);
}

.user-name {
  font-family: Arial, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
}

.user-email {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}

.profile-details {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
  padding-left: 20px;
}

/* Vertical line separator */
.profile-details::before {
  content: '';
  position: absolute;
  left: 150px;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #e2e8f0;
}

.detail-row {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 40px;
  align-items: center;
}

.detail-label {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
}

.detail-value {
  font-size: 1rem;
  color: #1e293b;
  font-weight: 600;
}

.status-active {
  color: #059669;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
}

.btn-close {
  padding: 12px 32px;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  min-width: 120px;
}

.btn-close:hover {
  background-color: #f8fafc;
}

.btn-edit {
  padding: 12px 32px;
  background-color: #001fcc;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  min-width: 140px;
}

.btn-edit:hover {
  background-color: #0019a3;
}

.btn-edit:active {
  transform: translateY(1px);
}

@media (max-width: 640px) {
  .detail-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .profile-details::before {
    display: none;
  }
  
  .profile-details {
    padding-left: 0;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .btn-close, .btn-edit {
    width: 100%;
  }
}
</style>
