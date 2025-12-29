<template>
  <header class="header">
    <div class="header-strip"></div>
    <div class="header-container">
      <div class="header-logo">
        <h1 class="logo-title">APMaMS</h1>
        <p class="logo-subtitle">MSUN Action Planning</p>
      </div>
      <a href="#" class="sign-in-link">Sign in</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  background-color: #fff;
  padding: 40px 0 0 0; 
  z-index: 10;
}
.header-strip {
  position: absolute;
  top: 0;
  left: 60px; 
  width: 180px;
  height: 100%;
  background: #001499;
  z-index: 1;
}
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
.header-logo {
  margin-left: 195px; /* Positions black text next to strip */
  color: #000;
}
.logo-title { font-family: 'serif'; font-size: 2.2rem; line-height: 1; margin: 0; font-weight: bold; }
.logo-subtitle { font-size: 1.1rem; margin-top: 5px; color: #333; } 
.sign-in-link { font-size: 1.2rem; color: #000; text-decoration: none; font-weight: 500; }
</style>