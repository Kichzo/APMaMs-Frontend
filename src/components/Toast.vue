<template>
    <transition name="toast-slide">
        <div v-if="visible" class="toast-card">
            <div class="toast-content">
                <div class="success-icon-circle">
                    <i class="fas fa-check"></i>
                </div>
                <div class="toast-text">
                    <h3>Success</h3>
                    <p>{{ message }}</p>
                </div>
            </div>

            <button class="btn-close" @click="$emit('close')">
                <i class="fas fa-times"></i>
            </button>

            <div class="progress-bar"></div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        visible: Boolean,
        message: String
    },
    watch: {
        // Watch for when 'visible' becomes true to start the auto-close timer
        visible(newValue) {
            if (newValue) {
                setTimeout(() => {
                    this.$emit('close');
                }, 2000); // Automatically goes out in 2 seconds
            }
        }
    }
}
</script>

<style scoped>
.toast-card {
    position: fixed;
    top: 30px;
    right: 30px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 25px;
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-left: 6px solid #48bb78;
    min-width: 320px;
    z-index: 9999;
    overflow: hidden;
}

.toast-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.success-icon-circle {
    width: 40px;
    height: 40px;
    background: #f0fff4;
    color: #48bb78;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
}

.toast-text h3 {
    margin: 0;
    font-family: serif;
    font-size: 1.1rem;
    color: #1a1a1a;
}

.toast-text p {
    margin: 0;
    color: #718096;
    font-size: 0.85rem;
}

.btn-close {
    background: none;
    border: none;
    color: #cbd5e0;
    cursor: pointer;
    padding: 5px;
    font-size: 1rem;
    transition: color 0.2s;
}

.btn-close:hover {
    color: #4a5568;
}

/* Progress bar animation */
.progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: #48bb78;
    width: 100%;
    animation: drain 2s linear forwards;
}

@keyframes drain {
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
}

/* Slide Transition */
.toast-slide-enter-active {
    transition: all 0.4s ease-out;
}

.toast-slide-leave-active {
    transition: all 0.3s ease-in;
}

.toast-slide-enter-from {
    transform: translateX(100px);
    opacity: 0;
}

.toast-slide-leave-to {
    transform: translateX(100px);
    opacity: 0;
}
</style>