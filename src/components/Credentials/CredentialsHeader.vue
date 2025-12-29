<template>
  <!-- Site header -->
  <header class="header">

    <!-- Decorative vertical strip -->
    <div class="header-strip"></div>

    <!-- Header content wrapper -->
    <div class="header-container">

      <!-- Brand / logo -->
      <div class="header-logo">
        <h1 class="logo-title">APMaMS</h1>
        <p class="logo-subtitle">MSUN Action Planning</p>
      </div>

      <!-- Sign-in navigation link -->
      <router-link to="/signin" class="sign-in-link">
        Sign in
      </router-link>

    </div>
  </header>
</template>

<style scoped>
/* Header base styling */
.header {
  position: relative;
  background-color: #fff;
  padding: 40px 0 0;
  z-index: 10;
}

/* Left decorative strip */
.header-strip {
  position: absolute;
  top: 0;
  left: 60px;
  width: 180px;
  height: 100%;
  background: #001499;
  z-index: 1;
}

/* Header layout container */
.header-container {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
}

/* Logo text positioning */
.header-logo {
  margin-left: 195px;
  color: #000;
}

/* Main logo text */
.logo-title {
  font-family: 'serif';
  font-size: 2.2rem;
  line-height: 1;
  margin: 0;
  font-weight: bold;
}

/* Logo subtitle */
.logo-subtitle {
  font-size: 1.1rem;
  margin-top: 5px;
  color: #333;
}

/* Sign-in router link */
.sign-in-link {
  font-size: 1.25rem;
  font-weight: 500;

  color: #000 !important;
  /* Prevents blue or purple link colors */
  text-decoration: none !important;
  /* Removes underline */

  transition: opacity 0.2s ease;
}

/* Link states */
.sign-in-link:hover,
.sign-in-link:focus,
.sign-in-link:active,
.router-link-active {
  color: #000 !important;
  text-decoration: none !important;
  opacity: 0.7;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .header-strip {
    width: 15px;
    left: 0;
  }

  .header-logo {
    margin-left: 25px;
  }

  .header-container {
    padding: 0 20px;
  }
}
</style>
