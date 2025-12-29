<template>
  <div class="credentials-page">
    
    <CredentialsHeader />
    
    <main class="main-content">
      <CredentialsHeroSection />
      <CredentialsFeaturesSection />
    </main>

    <CredentialsFooter />
  </div>
</template>

<script>
import CredentialsHeader from '/src/components/Credentials/CredentialsHeader.vue'
import CredentialsHeroSection from '/src/components/Credentials/CredentialsHeroSection.vue'
import CredentialsFeaturesSection from '/src/components/Credentials/CredentialsFeaturesSection.vue'
import CredentialsFooter from '/src/components/Credentials/CredentialsFooter.vue'

export default {
  components: { 
    CredentialsHeader, 
    CredentialsHeroSection,
    CredentialsFeaturesSection,
    CredentialsFooter
  },
}
</script>

<style scoped>
.credentials-page {
  background: #fff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden; /* Prevents unwanted horizontal scrolling on mobile */
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1; /* Ensures content stays above the blue strip */
  /* Remove the negative margin on mobile to avoid overlap issues */
  margin-top: 0; 
}

/* Desktop Styles (Big Screens) */
@media (min-width: 1024px) {
  .main-content {
    margin-top: -10px; /* Restores the specific look you wanted for desktop */
  }
}

/* Tablet Styles */
@media (max-width: 1023px) {
  .background-left-strip {
    width: 80px; /* Shrink the strip so it doesn't crowd the hero text */
  }
}

/* Mobile Styles (Small Screens) */
@media (max-width: 768px) {
  .background-left-strip {
    /* Optionally hide or turn into a top-bar for mobile */
    width: 15px; 
  }

  .main-content {
    padding: 0; /* Let child components handle their own mobile padding */
  }
}
</style>