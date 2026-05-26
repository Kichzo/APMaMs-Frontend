<template>
  <div class="login-page">

    <!-- Back Arrow -->
    <div class="top-nav">
      <button class="back-btn" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
    </div>

    <!-- LOGIN FORM -->
    <div class="login-card">
      <h2 class="title">Action Plan Monitoring System</h2>
      <p class="subtitle">Sign in to your account</p>

      <div v-if="authStore.error" class="error-msg">{{ authStore.error }}</div>

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

        <button type="submit" class="signin-btn" :disabled="authStore.isLoading">
          {{ authStore.isLoading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '/src/stores/authStore'

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    goBack() {
      this.$router.replace({ name: 'Credentials' });
    },
    async handleLogin() {
      if (!this.email || !this.password) {
        alert("Please complete all fields.");
        return;
      }
      if (this.rememberMe) {
        localStorage.setItem("email", this.email);
      }

      try {
        const role = await this.authStore.signIn(this.email, this.password);
        
        if (role === 'admin' || role === 'System Administrator') {
          this.$router.push("/admindashboard");
        } else if (role === 'adviser' || role === 'Adviser/Dean/Coordinator') {
          this.$router.push("/adviserdashboard");
        } else {
          this.$router.push("/userdashboard");
        }
      } catch (e) {
        console.error("Login failed", e);
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

/* Login Card */
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

.error-msg {
  color: #dc2626;
  background: #fee2e2;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
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

.signin-btn:hover:not(:disabled) {
  background: #1d4ed8;
}

.signin-btn:disabled {
  background: #93c5fd;
  cursor: not-allowed;
}
</style>
