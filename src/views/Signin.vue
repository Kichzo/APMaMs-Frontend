<template>
  <div class="login-page">

    <!-- Back Arrow -->
    <div v-if="step === 1" class="top-nav">
      <button class="back-btn" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
    </div>
    <div v-if="step === 2" class="top-nav">
      <button class="back-btn" @click="step = 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
    </div>

    <!-- STEP 1: ROLE SELECTION -->
    <div v-if="step === 1" class="role-selection-wrapper">
      <div class="roles-row">
        <div
          class="role-box"
          :class="{ active: selectedRole === 'Student Organization' }"
          @click="selectRole('Student Organization')"
        >
          <h3>Student Organization</h3>
          <p>Manage activities and action plans</p>
        </div>

        <div
          class="role-box"
          :class="{ active: selectedRole === 'OSD Admin' }"
          @click="selectRole('OSD Admin')"
        >
          <h3>OSD Admin</h3>
          <p>System administration and oversight</p>
        </div>

        <div
          class="role-box"
          :class="{ active: selectedRole === 'Adviser/Dean/Coordinator' }"
          @click="selectRole('Adviser/Dean/Coordinator')"
        >
          <h3>Adviser/Dean/Coordinator</h3>
          <p>Review and approve activities</p>
        </div>
      </div>
    </div>

    <!-- STEP 2: LOGIN FORM -->
    <div v-if="step === 2" class="login-card">
      <h2 class="title">Action Plan Monitoring System</h2>
      <p class="subtitle">Sign in to your account</p>

      <p class="selected-role">
        Selected Role: <strong>{{ selectedRole }}</strong>
      </p>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email Address</label>
          <input
            type="email"
            v-model="email"
            placeholder="you.email@msu.edu.ph"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="form-options">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" class="signin-btn">
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",

  data() {
    return {
      email: "",
      password: "",
      selectedRole: "",
      rememberMe: false,
      step: 1, //controls UI
    };
  },

  methods: {
    goBack() {
      this.$router.replace({ name: 'Credentials' });
    },

    selectRole(role) {
      this.selectedRole = role;

      // add a very brief timeout so the active state is seen
      setTimeout(() => {
        this.step = 2; // move to login form
      }, 150);
    },

    goToLogin() {
      if (!this.selectedRole) {
        alert("Please select a role first.");
        return;
      }
      this.step = 2; // move to login form
    },

    validateForm() {
      if (!this.email || !this.password) {
        alert("Please complete all fields.");
        return false;
      }
      return true;
    },

    handleLogin() {
      if (!this.validateForm()) return;

      if (this.rememberMe) {
        localStorage.setItem("email", this.email);
      }

      switch (this.selectedRole) {
        case "Student Organization":
          localStorage.setItem("role", "org");
          this.$router.push("/userdashboard");
          break;
        case "OSD Admin":
          localStorage.setItem("role", "admin");
          this.$router.push("/admindashboard");
          break;
        case "Adviser/Dean/Coordinator":
          localStorage.setItem("role", "adviser");
          this.$router.push("/admindashboard");
          break;
      }
    },
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
}


.top-nav {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 10;
}

.back-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #f3f4f6;
}

/* Role Selection Wrapper */
.role-selection-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 10;
  position: relative;
}

.roles-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* responsive */
}

/* Card style */
.role-box {
  width: 320px;
  height: 160px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  padding: 0 20px;
}

/* Text */
.role-box h3 {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  font-family: Arial, sans-serif;
  color: #111827;
}

.role-box p {
  margin-top: 8px;
  font-size: 13px;
  color: #6b7280;
  font-family: Arial, sans-serif;
}

/* Hover */
.role-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Active (selected) */
.role-box.active {
  border: 1.5px solid #2563eb;
  background: #eef2ff;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
}

/* Login Card (Step 2) */
.login-card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  padding: 40px;
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  z-index: 10;
  position: relative;
}

.title {
  text-align: center;
  margin-bottom: 5px;
  font-size: 24px;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.selected-role {
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  background: #f3f4f6;
  padding: 10px;
  border-radius: 6px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  display: block;
}

.form-group input {
  width: 100%;
  margin-top: 6px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  font-family: inherit;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-options {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 20px;
}

.form-options label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.form-options a {
  color: #2563eb;
  text-decoration: none;
}

.form-options a:hover {
  text-decoration: underline;
}

.signin-btn {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.signin-btn:hover {
  background: #1d4ed8;
}
</style>

