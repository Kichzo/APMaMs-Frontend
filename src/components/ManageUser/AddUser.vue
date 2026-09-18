<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="add-user-modal">
      <div class="modal-header">
        <h2>Create User Account</h2>
      </div>

      <form @submit.prevent="handleSubmit" class="user-form">
        <div class="form-grid">
          <!-- Row 1: Full Name & Last Name -->
          <div class="form-group">
            <label for="fullName">First Name</label>
            <input 
              type="text" 
              id="fullName" 
              v-model="formData.fullName" 
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              v-model="formData.lastName" 
              placeholder="Last Name"
              required
            />
          </div>

          <!-- Row 2: Email Address -->
          <div class="form-group full-width">
            <label for="email">Email Address</label>
            <div class="input-with-icon">
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="you.email@msu.edu.ph"
                required
              />
            </div>
          </div>

          <!-- Row 3: Organization -->
          <div class="form-group full-width">
            <label for="organization">Organization</label>
            <div class="input-with-icon custom-dropdown" v-click-outside="closeDropdown">
              <div 
                class="dropdown-selected" 
                :class="{ 'placeholder': !formData.organization }"
                @click="toggleDropdown"
              >
                {{ formData.organization || 'Select Organization' }}
              </div>
              <div v-if="dropdownOpen" class="dropdown-options">
                <div 
                  v-for="org in organizations" 
                  :key="org" 
                  class="dropdown-option"
                  @click="selectOrganization(org)"
                >
                  {{ org }}
                </div>
              </div>
              <i class="fas fa-chevron-down icon-right dropdown-arrow" :class="{ 'open': dropdownOpen }"></i>
            </div>
          </div>

          <!-- Row 4: Role & Status -->
          <div class="form-group">
            <label for="role">Role</label>
            <div class="input-with-icon custom-dropdown" v-click-outside="closeRoleDropdown">
              <div 
                class="dropdown-selected" 
                :class="{ 'placeholder': !formData.role }"
                @click="toggleRoleDropdown"
              >
                {{ formData.role || 'Select Role' }}
              </div>
              <div v-if="roleDropdownOpen" class="dropdown-options">
                <div 
                  v-for="role in roles" 
                  :key="role" 
                  class="dropdown-option"
                  @click="selectRole(role)"
                >
                  {{ role }}
                </div>
              </div>
              <i class="fas fa-chevron-down icon-right dropdown-arrow" :class="{ 'open': roleDropdownOpen }"></i>
            </div>
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <div class="select-wrapper">
              <select id="status" v-model="formData.status" required>
                <option value="" disabled selected>Active</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <i class="fas fa-chevron-down select-arrow"></i>
            </div>
          </div>

          <!-- Row 5: Password & Confirm Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-with-icon">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
                v-model="formData.password" 
                placeholder="Create Password"
                required
              />
              <i 
                :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'" 
                class="icon-right" 
                @click="showPassword = !showPassword"
              ></i>
            </div>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <div class="input-with-icon">
              <input 
                :type="showConfirmPassword ? 'text' : 'password'" 
                id="confirmPassword" 
                v-model="formData.confirmPassword" 
                placeholder="Confirm Password"
                required
              />
              <i 
                :class="showConfirmPassword ? 'far fa-eye-slash' : 'far fa-eye'" 
                class="icon-right" 
                @click="showConfirmPassword = !showConfirmPassword"
              ></i>
            </div>
          </div>
        </div>

        <div class="terms-checkbox">
          <input type="checkbox" id="terms" v-model="formData.agreeToTerms" required />
          <label for="terms">
            I agree to the Terms of Service and Privacy Policy, and confirm that I am affiliated with a recognized student organization at MSUN
          </label>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">Cancel</button>
          <button type="submit" class="btn-save">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return {
      formData: {
        fullName: '',
        lastName: '',
        email: '',
        organization: '',
        role: '',
        status: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      },
      showPassword: false,
      showConfirmPassword: false,
      organizations: [
        'Supreme Student Council', 
        'College of Business and Information Technology', 
        'College of Environmental and Life Sciences',
        'College of Education and Social Sciences',
        'College of Marine and Fisheries Sciences',
        'KAABAG', 
        'The Marine Echo', 
        'Senior Student Society'
      ],
      roles: ['Student Officer', 'OSD', 'Adviser', 'Dean', 'Activity Coordinator','Offices'],
      dropdownOpen: false,
      roleDropdownOpen: false
    }
  },
  directives: {
    'click-outside': {
      beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectOrganization(org) {
      this.formData.organization = org;
      this.dropdownOpen = false;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    toggleRoleDropdown() {
      this.roleDropdownOpen = !this.roleDropdownOpen;
    },
    selectRole(role) {
      this.formData.role = role;
      this.roleDropdownOpen = false;
    },
    closeRoleDropdown() {
      this.roleDropdownOpen = false;
    },
    handleSubmit() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      this.$emit('submit', this.formData);
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

.add-user-modal {
  background: white;
  width: 100%;
  max-width: 620px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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

.user-form {
  padding: 28px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 20px;
}

.full-width {
  grid-column: span 2;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  width: 100%;
  box-sizing: border-box;
}

.form-group input::placeholder {
  color: #9ca3af;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.input-with-icon .icon-right {
  position: absolute;
  right: 16px;
  color: #9ca3af;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.2s;
}

.input-with-icon .icon-right:hover {
  color: #374151;
}

.custom-dropdown {
  cursor: pointer;
  user-select: none;
}

.dropdown-selected {
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.95rem;
  color: #1e293b;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s;
  min-height: 45px;
  display: flex;
  align-items: center;
}

.dropdown-selected.placeholder {
  color: #9ca3af;
}

.dropdown-options {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 180px;
  overflow-y: auto;
  padding: 6px;
}

.dropdown-option {
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #374151;
  transition: all 0.2s;
}

.dropdown-option:hover {
  background-color: #f3f4f6;
  color: #2563eb;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  pointer-events: none;
}

.dropdown-arrow.open {
  transform: translateY(-50%) rotate(180deg);
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.select-wrapper select {
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

.terms-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 4px;
}

.terms-checkbox input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #001fcc;
}

.terms-checkbox label {
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.4;
}

.modal-actions {
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 12px;
  box-sizing: border-box;
}

.btn-cancel {
  flex: 1;
  padding: 12px;
  text-align: center;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;
}

.btn-cancel:hover {
  background-color: #f8fafc;
}

.btn-save {
  flex: 1;
  padding: 12px;
  text-align: center;
  background-color: #001fcc;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-sizing: border-box;
}

.btn-save:hover {
  background-color: #0019a3;
}

.btn-save:active {
  transform: translateY(1px);
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .full-width {
    grid-column: span 1;
  }
  .add-user-modal {
    width: calc(100% - 32px);
    margin: 16px;
  }
}
</style>
