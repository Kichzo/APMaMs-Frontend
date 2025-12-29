<template>
    <section class="hero">
        <div class="hero-strip"></div>

        <div class="hero-container">
            <div class="hero-layout">
                <div class="image-panel">
                    <img :src="img2" class="stack-img img-back" alt="Decorative background" />
                    <img :src="img3" class="stack-img img-mid" alt="Decorative middle" />

                    <div class="main-frame">
                        <transition name="fade" mode="out-in">
                            <img :key="currentImageIndex" :src="carouselImages[currentImageIndex]"
                                class="active-slide" alt="Main carousel" />
                        </transition>
                    </div>
                </div>

                <div class="content">
                    <h1>Action Plan: Monitoring and Management System</h1>
                    <p>Centralize and streamline strategic planning, activity management, and monitoring processes for
                        student organizations. Enhance collaboration, improve communication, and ensure alignment with
                        institutional goals.</p>
                    <div class="actions">
                        <button class="primary-btn">Start Planning</button>
                        <button class="secondary-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

       <div class="wave-footer">
            <svg viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,40 C320,150 1120,150 1440,40 L1440,160 L0,160 Z" fill="#001499" />
            </svg>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import local assets from your folder
import img1 from '/src/assets/img1.jpg'
import img2 from '/src/assets/img2.jpg'
import img3 from '/src/assets/img3.jpg'

export default {
    setup() {
        // Use the imported assets in the carousel array
        const carouselImages = [img1, img2, img3]
        
        const currentImageIndex = ref(0)
        let interval = null

        onMounted(() => {
            interval = setInterval(() => {
                currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.length
            }, 3500)
        })
        onBeforeUnmount(() => clearInterval(interval))

        return { 
            carouselImages, 
            currentImageIndex,
            img1,
            img2,
            img3
        }
    }
}
</script>
<style scoped>
/* --- BASE STYLES --- */
.hero {
    position: relative;
    min-height: 85vh;
    display: flex;
    align-items: center;
    padding-top: 80px; /* Space for header */
    padding-bottom: 160px;
    overflow: hidden;
}

.hero-strip {
    position: absolute;
    top: 0;
    left: 60px;
    width: 180px;
    height: 100%;
    background: #001499;
    z-index: 1;
}

.hero-container {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    z-index: 5;
    width: 100%;
}

.hero-layout {
    display: flex;
    align-items: center;
    gap: 40px;
}

/* --- IMAGE PANEL --- */
.image-panel {
    position: relative;
    width: 480px;
    height: 520px;
    flex-shrink: 0;
}

.stack-img {
    position: absolute;
    width: 320px;
    height: 420px;
    object-fit: cover;
    border-radius: 4px;
    opacity: 0.4;
    filter: blur(1px);
}

.img-back { left: -40px; top: 80px; transform: rotate(-4deg); }
.img-mid { left: 160px; top: 60px; transform: rotate(2deg); }

.main-frame {
    position: absolute;
    left: 70px;
    top: 20px;
    width: 360px;
    height: 460px;
    z-index: 10;
    background: #fff;
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: hidden;
}

.active-slide { width: 100%; height: 100%; object-fit: cover; }

/* --- CONTENT --- */
.content { flex: 1; }
.content h1 {
    font-family: 'serif';
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 24px;
    color: #1a1a1a;
}

.content p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 40px;
}

.actions { display: flex; gap: 15px; }

.primary-btn, .secondary-btn {
    padding: 16px 32px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    white-space: nowrap;
}

.primary-btn { background: #001499; color: white; border: none; }
.secondary-btn { background: white; color: #1a1a1a; border: 1px solid #ddd; }

.wave-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 160px;
    z-index: 2;
}

/* --- RESPONSIVE BREAKPOINTS --- */

/* Medium Screens (Tablets / Small Laptops) */
@media (max-width: 1100px) {
    .content h1 { font-size: 2.8rem; }
    .image-panel { transform: scale(0.85); width: 400px; }
    .hero-strip { width: 100px; left: 30px; }
}

/* Tablet Vertical (Stacked Layout) */
@media (max-width: 900px) {
    .hero-layout {
        flex-direction: column-reverse; /* Images move below text or above depending on preference */
        text-align: center;
    }
    .content { padding-left: 0; }
    .actions { justify-content: center; }
    .image-panel { margin: 0 auto; transform: scale(0.9); }
    .hero-strip { display: none; } /* Hide strip to simplify mobile view */
}

/* Small Mobile */
@media (max-width: 600px) {
    .hero { padding-top: 40px; }
    .content h1 { font-size: 2.2rem; }
    .content p { font-size: 1rem; }
    
    /* Shrink the complex image stack to fit small screens */
    .image-panel { 
        width: 100%; 
        height: 350px; 
        transform: scale(0.7); 
        margin-top: -50px;
    }
    .actions { flex-direction: column; width: 100%; }
    .secondary-btn { margin-left: 0; }
}
</style>