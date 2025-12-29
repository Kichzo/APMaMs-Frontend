<template>





LA PA NAHUMAN






    <div class="app-container">
        <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />
        <div class="dashboard-layout">
            <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

            <main class="content">
                <div class="create-wrapper">
                    <header class="page-header-inline">
                        <button class="back-btn" @click="$router.push('/activity')">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <div class="title-text">
                            <h1>Create New Activity</h1>
                            <p>Step {{ currentStep }} of 4</p>
                        </div>
                    </header>

                    <div class="stepper-box">
                        <div class="step">
                            <div :class="['step-circle', { active: currentStep >= 1 }]">
                                <i class="fas fa-exclamation-circle"></i>
                            </div>
                            <span class="step-label">Basic Information</span>
                        </div>

                        <div :class="['step-connector', { active: currentStep >= 2 }]"></div>

                        <div class="step">
                            <div :class="['step-circle', { active: currentStep >= 2 }]">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <span class="step-label">Details & Schedules</span>
                        </div>

                        <div :class="['step-connector', { active: currentStep >= 3 }]"></div>

                        <div class="step">
                            <div :class="['step-circle', { active: currentStep >= 3 }]">
                                <i class="fas fa-ruble-sign"></i>
                            </div>
                            <span class="step-label">Budget & Requirements</span>
                        </div>

                        <div :class="['step-connector', { active: currentStep >= 4 }]"></div>

                        <div class="step">
                            <div :class="['step-circle', { active: currentStep >= 4 }]">
                                <i class="fas fa-check"></i>
                            </div>
                            <span class="step-label">Review & Submit</span>
                        </div>
                    </div>
                    <keep-alive>
                        <component :is="currentComponent" :formData="formData" @next="currentStep++"
                            @prev="currentStep--" />
                    </keep-alive>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import StepBasicInfo from '/src/components/CreateActivity/StepBasicInfo.vue'
import StepDetailsSchedule from '/src/components/CreateActivity/StepDetailsSchedule.vue'

export default {
    components: { AppHeader, AppSidebar, StepBasicInfo, StepDetailsSchedule },
    data() {
        return {
            currentStep: 1,
            formData: {
                title: '',
                category: '',
                organization: '',
                priority: 'Medium',
                description: '',
                objectives: [''], // Starts with one empty field
                outputs: [''],
            }
        }
    },
    computed: {
        currentComponent() {
            // This ensures the right component shows up as you click Next/Previous
            switch (this.currentStep) {
                case 1: return 'StepBasicInfo';
                case 2: return 'StepDetailsSchedule';
                case 3: return 'StepBudget'; // Placeholder for your next step
                case 4: return 'StepReview'; // Placeholder for the final step
                default: return 'StepBasicInfo';
            }
        }
    },
    methods: {
        toggleSidebar() { this.isSidebarVisible = !this.isSidebarVisible }
    }
}
</script>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
    /* Lock to viewport height */
    height: 100vh;
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
    /* Prevent page-level scrolling */
}

.dashboard-layout {
    display: flex;
    flex: 1;
    /* Take up remaining height below header */
    width: 100%;
    overflow: hidden;
    /* Keeps sidebar and content contained */
}

.content {
    flex: 1;
    /* This ensures it expands to fill 100% of the remaining width */
    padding: 40px;
    overflow-y: auto;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    /* Smooth slide sync with sidebar */
    box-sizing: border-box;
}

.step-connector.active {
    background: #3b59ff;
}

.step-circle.blue {
    background: #3b59ff;
    color: white;
}

.step-circle.grey {
    background: #e2e8f0;
    color: #64748b;
}

.create-wrapper {
    max-width: 950px;
    margin: 0 auto;
    padding: 20px;
}

.page-header-inline {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.back-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}

.title-text h1 {
    font-family: serif;
    font-size: 2rem;
    margin: 0;
}

.title-text p {
    color: #666;
    margin: 0;
    font-size: 0.9rem;
}

/* Stepper Styling */
.stepper-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Vertical center */
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 30px 40px;
    margin-bottom: 30px;
}

.step-connector {
    height: 2px;
    background: #e2e8f0;
    flex: 1;
    margin: 0 15px;
    /* Add horizontal space */
    /* Remove the negative margin-top */
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex: 1;
}

.step-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.step-circle.blue {
    background: #3b59ff;
    color: white;
}

.step-circle.grey {
    background: #e2e8f0;
    color: #64748b;
}

.step span {
    font-size: 0.7rem;
    font-weight: bold;
    color: #475569;
}

.step-connector {
    height: 2px;
    background: #e2e8f0;
    flex: 1;
    margin-top: -20px;
}

/* Form Styling */
.form-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 40px;
}

.form-section-title {
    font-family: serif;
    font-size: 1.3rem;
    margin-bottom: 25px;
}

.input-block {
    margin-bottom: 25px;
}

.input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

label {
    display: block;
    font-weight: bold;
    font-size: 0.85rem;
    margin-bottom: 8px;
}

input,
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    font-size: 0.9rem;
}

textarea {
    height: 150px;
    resize: none;
}

.priority-options {
    display: flex;
    gap: 20px;
}

.add-btn {
    background: none;
    border: none;
    color: #3b59ff;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}

.form-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #f1f5f9;
}

.btn-prev-outline {
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    color: #94a3b8;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: bold;
}

.btn-next-solid {
    background: #001ba0;
    color: white;
    border: none;
    padding: 12px 40px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
}
</style>