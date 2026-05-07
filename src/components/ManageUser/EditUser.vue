<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="edit-user-modal">
      <div class="modal-header">
        <h2>Edit User</h2>
        <button class="close-btn" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="handleSave" class="edit-form">
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              v-model="editedUser.firstName" 
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              v-model="editedUser.lastName" 
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div class="form-group full-width">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="editedUser.email" 
            placeholder="Email Address"
            required
          />
        </div>

        <div class="form-group full-width">
          <label for="organization">Organization</label>
          <input 
            type="text" 
            id="organization" 
            v-model="editedUser.organization" 
            placeholder="Organization"
            required
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="role">Role</label>
            <div class="select-wrapper">
              <select id="role" v-model="editedUser.role" required>
                <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
              </select>
              <i class="fas fa-chevron-down select-arrow"></i>
            </div>
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <div class="select-wrapper">
              <select id="status" v-model="editedUser.status" required>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <i class="fas fa-chevron-down select-arrow"></i>
            </div>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancel</button>
          <button type="submit" class="btn-save">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
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
        status: 'Active'
      })
    }
  },
  data() {
    return {
      editedUser: { ...this.user },
      roles: ['President', 'Vice President', 'Secretary', 'Treasurer', 'Member', 'Officer', 'Adviser', 'Admin']
    }
  },
  methods: {
    handleSave() {
      this.$emit('save', this.editedUser);
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

.edit-user-modal {
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

.edit-form {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1e293b;
}

.form-group input,
.form-group select {
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1e293b;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-wrapper select {
  width: 100%;
  appearance: none;
  padding-right: 40px;
}

.select-arrow {
  position: absolute;
  right: 16px;
  color: #64748b;
  pointer-events: none;
  font-size: 0.8rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 12px;
}

.btn-cancel {
  padding: 12px 24px;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-cancel:hover {
  background-color: #f8fafc;
}

.btn-save {
  padding: 12px 32px;
  background-color: #001fcc;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-save:hover {
  background-color: #0019a3;
}

.btn-save:active {
  transform: translateY(1px);
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .edit-user-modal {
    width: calc(100% - 32px);
    margin: 16px;
  }
}
</style>
