
<template>

    <div class="page">

        <div class="back-arrow" @click="goBack">←</div>

        <div class="header">
            <h1>APMaMS</h1>
            <p>MSUN Action Plan</p>
        </div>

        <div class="card">
            <h2>Welcome Back</h2>
            <p class="subtitle">Sign in to access your dashboard</p>

            <form @submit.prevent="handleLogin">
                <div class="field">
                    <label>Email Address</label>

                    <input
                        type="email"
                        v-model="email"
                        placeholder="you.email@msu.edu.ph"
                        required
                    />
                </div>

                <div class="field">
                    <label>Password</label>
                
                    <input
                        type="password"
                        v-model="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
            
                <div class="options">
                    <label>
                        <input type="checkbox" />
                        Remember me
                        </label>
                    </div>
                <button type="submit">Sign In</button>

            </form>
        </div>
        <footer>Mindanao State University at Naawan</footer>
    </div>
</template>

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

.back-arrow {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 20px;
}

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

footer {
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
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

/* Tablets */
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


<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    },
    handleLogin() {
    this.$router.push('/dashboard')
  }
  }
}


</script>
