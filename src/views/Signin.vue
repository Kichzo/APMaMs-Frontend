<template>

  <div class="page">
    <!-- guys this is back arrow -->
    <div class="back-arrow" @click="goBack">←</div>

    <!-- guys this is header -->
    <div class="header">
      <h1>APMaMS</h1>
      <p>MSUN Action Plan</p>
    </div>

    <!-- guys this is card container, this is content -->
    <div class="card">
      <h2>Welcome Back</h2>
      <p class="subtitle">Sign in to access your dashboard</p>

      <!-- guys this is form, this is content -->
      <form @submit.prevent="handleLogin">
        <!-- guys this is email field -->
        <div class="field">
          <label>Email Address</label>

          <input type="email" v-model="email" placeholder="you.email@msu.edu.ph" required />
        </div>

        <!-- guys this is password field -->
        <div class="field">
          <label>Password</label>

          <input type="password" v-model="password" placeholder="Enter your password" required />
        </div>

        <!-- guys this is options section, this is content -->
        <div class="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        <p class="temp-note">Temporary buttons (Demo only)</p>

        <!-- guys this is submit button, this is content -->
        <div class="button-group">
          <button type="button" @click="loginAsUser">
            Sign In as User
          </button>

          <button type="button" class="admin-btn" @click="loginAsAdmin">
            Sign In as Admin
          </button>
        </div>


      </form>
    </div>

    <!-- guys this is footer -->
    <footer>Mindanao State University at Naawan</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '', 
      password: '' 
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    // Validation helper
    validateForm() {
      if (!this.email || !this.password) {
        alert("Please fill in both the email and password fields.");
        return false;
      }
      return true;
    },
    showCustomAlert(roleName) {
      // This triggers the browser's native popup
      alert(`Success! Logged in as ${roleName}.`);
    },
    loginAsUser() {
      if (this.validateForm()) {
        localStorage.setItem('role', 'org');
        this.showCustomAlert('Student Organization');
        this.$router.push('/userdashboard');
      }
    },
    loginAsAdmin() {
      if (this.validateForm()) {
        localStorage.setItem('role', 'admin');
        this.showCustomAlert('Administrator');
        this.$router.push('/admindashboard');
      }
    }
  }
}
</script>



<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  font-family: Arial, sans-serif;
}

/* guys this is back arrow style */
.back-arrow {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 20px;
}

/* guys this is header style */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.header p {
  margin: 0;
  font-size: 14px;
  color: #555;
}

/* guys this is card styling */
.card {
  width: 100%;
  max-width: 380px;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-bottom: 4px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.field {
  margin-bottom: 15px;
}

.field label {
  font-size: 14px;
  font-weight: 500;
}

.field input {
  width: 100%;
  margin-top: 6px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

/* guys this is options style */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-bottom: 20px;
}

.options a {
  color: #1a4ed8;
  text-decoration: none;
}

.options a:hover {
  text-decoration: underline;
}

/* guys this is button style */
button {
  width: 100%;
  padding: 10px;
  background: #1a4ed8;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
}

button:hover {
  background: #153fb5;
}

/* guys this is footer style */
footer {
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
}

.temp-note {
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.admin-btn {
  background: #333;
}

.admin-btn:hover {
  background: #222;
}


@media (min-width: 1200px) {
  .header h1 {
    font-size: 28px;
  }

  .card {
    max-width: 420px;
    padding: 28px;
  }
}

/* guys this is tablet media */
@media (max-width: 768px) {
  .page {
    padding: 20px;
  }

  .card {
    width: 100%;
    max-width: 360px;
    padding: 20px;
  }

  .header h1 {
    font-size: 22px;
  }
}

/* guys this is mobile media */
@media (max-width: 480px) {
  .back-arrow {
    top: 15px;
    left: 15px;
    font-size: 18px;
  }

  .header h1 {
    font-size: 20px;
  }

  .header p {
    font-size: 13px;
  }

  .card {
    border-radius: 10px;
    padding: 18px;
  }

  button {
    font-size: 14px;
    padding: 10px;
  }

  footer {
    font-size: 11px;
    text-align: center;
  }
}
</style>

