<template>
  <div class="add-user-page">
    <button class="back-button" @click="$emit('back')">
      <i class="fas fa-arrow-left"></i>
    </button>

    <div class="form-container">
      <div class="form-header">
        <h1>New User</h1>
        <p>Join your student organization on APMaMS</p>
      </div>

      <form @submit.prevent="handleSubmit" class="user-form">
        <div class="form-grid">
          <!-- Row 1: Full Name & Last Name -->
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              v-model="formData.fullName" 
              placeholder="Kian"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              v-model="formData.lastName" 
              placeholder="Estenzo"
              required
            />
          </div>

          <!-- Row 2: Email Address & Organization -->
          <div class="form-group">
            <label for="email">Email Address</label>
            <div class="input-with-icon">
              <i class="far fa-envelope icon"></i>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="you.email@msu.edu.ph"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="organization">Organization</label>
            <div class="input-with-icon custom-dropdown" v-click-outside="closeDropdown">
              <i class="fas fa-graduation-cap icon"></i>
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

          <!-- Row 3: Role & Status -->
          <div class="form-group">
            <label for="role">Role</label>
            <div class="input-with-icon">
              <i class="fas fa-users icon"></i>
              <select id="role" v-model="formData.role" required>
                <option value="" disabled selected>Member</option>
                <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <div class="input-with-icon">
              <select id="status" v-model="formData.status" required>
                <option value="" disabled selected>Active</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <!-- Row 4: Password & Confirm Password -->
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

        <button type="submit" class="submit-button">Create Account</button>
      </form>
    </div>

    <div class="page-footer">
      Mindanao State University at Naawan
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
      roles: ['Member', 'Officer', 'Adviser', 'Admin'],
      dropdownOpen: false
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
.add-user-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Changed from center to allow scrolling from top */
  height: 100%;
  overflow-y: auto;
  background-color: #fcfcfc;
  font-family: Arial, sans-serif;
  padding: 80px 20px; /* Increased top padding for better spacing when scrolled */
  position: relative;
}

.back-button {
  position: absolute;
  top: 40px;
  left: 40px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.2s;
}

.back-button:hover {
  transform: translateX(-5px);
}

.form-container {
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 650px;
  padding: 48px;
}

.form-header {
  margin-bottom: 40px;
}

.form-header h1 {
  font-family: Arial, sans-serif;
  font-size: 2.25rem;
  margin: 0;
  color: #000;
  font-weight: 700;
}

.form-header p {
  color: #666;
  font-size: 1.1rem;
  margin-top: 8px;
}

.user-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #000;
}

.form-group input,
.form-group select {
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: #1a1a1a;
  outline: none;
  transition: all 0.2s;
}

.form-group input::placeholder {
  color: #9ca3af;
}

.form-group input:focus,
.form-group select:focus {
  background-color: #fff;
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon .icon {
  position: absolute;
  left: 16px;
  color: #9ca3af;
  font-size: 1.1rem;
}

.input-with-icon input,
.input-with-icon select {
  padding-left: 48px;
  width: 100%;
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

/* Custom select styling to hide default arrow in some cases or position icon */
/* Custom Dropdown Styles */
.custom-dropdown {
  cursor: pointer;
  user-select: none;
}

.dropdown-selected {
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px 14px 48px;
  font-size: 0.95rem;
  color: #1a1a1a;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s;
  min-height: 50px;
  display: flex;
  align-items: center;
}

.dropdown-selected.placeholder {
  color: #9ca3af;
}

.custom-dropdown:hover .dropdown-selected {
  border-color: #d1d5db;
}

.dropdown-options {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
}

.dropdown-option {
  padding: 12px 16px;
  border-radius: 8px;
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

/* Custom Scrollbar for dropdown */
.dropdown-options::-webkit-scrollbar {
  width: 6px;
}

.dropdown-options::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-options::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}

.dropdown-options::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
}

.terms-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 8px;
}

.terms-checkbox input {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #001fcc;
}

.terms-checkbox label {
  font-size: 0.8rem;
  color: #374151;
  line-height: 1.4;
}

.submit-button {
  background-color: #001fcc;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0, 31, 204, 0.2);
}

.submit-button:hover {
  background-color: #0019a3;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 31, 204, 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

.page-footer {
  margin-top: 40px;
  color: #9ca3af;
  font-size: 0.95rem;
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-container {
    padding: 30px 24px;
  }
  
  .back-button {
    top: 20px;
    left: 20px;
  }
  
  .form-header h1 {
    font-size: 1.75rem;
  }
}
</style>
