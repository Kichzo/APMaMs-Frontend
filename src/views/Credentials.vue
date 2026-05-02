<template>
  <div class="credentials-page">

    <!-- Top navigation / branding -->
    <CredentialsHeader />

    <!-- Main page content -->
    <main class="main-content">
      <CredentialsHeroSection class="fade-section delay-1" />
      <CredentialsFeaturesSection class="fade-section delay-2" />
    </main>


    <!-- Page footer -->
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
/* Root layout wrapper */
.credentials-page {
  background: #fff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  /* Prevent horizontal scroll caused by wide sections */
  display: flex;
  flex-direction: column;
  animation: pageFade 0.6s ease-out forwards;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Main content grows to push footer to the bottom */
.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
  /* Keeps content above decorative background elements */
  margin-top: 0;
  /* Neutral default for mobile */
}

.fade-section {
  opacity: 0;
  transform: translateY(12px);
  animation: sectionFade 0.7s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.1s;
}

.delay-2 {
  animation-delay: 0.25s;
}

@keyframes sectionFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes pageFade {
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Desktop-only adjustment for visual alignment */
@media (min-width: 1024px) {
  .main-content {
    margin-top: -10px;
    /* Fine-tuned spacing for large screens */
  }
}

/* Tablet breakpoint adjustments */
@media (max-width: 1023px) {
  .background-left-strip {
    width: 80px;
    /* Prevents visual crowding on mid-sized screens */
  }
}

/* Mobile-specific layout behavior */
@media (max-width: 768px) {
  .background-left-strip {
    width: 15px;
    /* Minimizes decorative strip on small screens */
  }

  .main-content {
    padding: 0;
    /* Child components control their own spacing */
  }
}
</style>
