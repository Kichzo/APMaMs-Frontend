<template>
    <div class="wizard-container">
        <header class="wizard-header">
            <button class="back-arrow-only" @click="$emit('close')">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="header-text">
                <h1>Detailed Activity Design</h1>
                <p>Fill in the details to submit your activity report</p>
            </div>
        </header>

        <!-- STEPPER BAR -->
        <div class="stepper-bar">
            <div v-for="(step, index) in steps" :key="index" class="step-item"
                :class="{ active: currentStep >= index + 1 }">
                <div class="step-circle">
                    <i :class="step.icon"></i>
                </div>
                <span class="step-label">{{ step.label }}</span>
            </div>
        </div>

        <!-- FORM CARD -->
        <div class="form-card">
            <transition name="fade" mode="out-in">
                <div :key="currentStep" class="step-content">
                    <h2 class="form-section-title">{{ steps[currentStep - 1].label }}</h2>

                    <!-- STEP 1: BASIC INFORMATION (Merged from image_3e1c9e.png) -->
                    <div v-if="currentStep === 1" class="form-body">
                        <!-- Activity Title (Full Width) -->
                        <div class="input-block">
                            <label>Activity Title *</label>
                            <input v-model="form.title" type="text" placeholder="First SSC Regular Meeting" />
                        </div>

                        <!-- Grid for Office Code and Unit -->
                        <div class="form-grid">
                            <div class="input-block">
                                <label>Office Code</label>
                                <input v-model="form.officeCode" type="text" readonly />
                            </div>
                            <div class="input-block">
                                <label>Unit/College *</label>
                                <select v-model="form.unit">
                                    <option>Supreme Student Council</option>
                                </select>
                            </div>
                        </div>

                        <!-- Grid for Result Code and Email -->
                        <div class="form-grid">
                            <div class="input-block">
                                <label>Result Code/OPCR/IPCR Code *</label>
                                <input v-model="form.resultCode" type="text" placeholder="Enter code" />
                            </div>
                            <div class="input-block">
                                <label>Email Address *</label>
                                <input v-model="form.email" type="email" placeholder="Enter email address" />
                            </div>
                        </div>

                        <!-- Rationale -->
                        <div class="input-block">
                            <label>Rationale *</label>
                            <textarea v-model="form.rationale"
                                placeholder="Provide a detailed description of the activity"></textarea>
                            <div class="char-counter">{{ form.rationale.length }}/5000 characters</div>
                        </div>

                        <!-- Dynamic Objectives -->
                        <div class="input-block">
                            <label>Objectives *</label>
                            <div v-for="(obj, idx) in form.objectives" :key="'obj-' + idx"
                                class="dynamic-input-wrapper">
                                <input v-model="form.objectives[idx]"
                                    placeholder="To evaluate the previous year's output..." />
                            </div>
                            <button class="add-link-btn" @click="form.objectives.push('')">+ Add Objectives</button>
                        </div>

                        <!-- NEW: Expected Output (Added right after Objectives) -->
                        <div class="input-block">
                            <label>Expected Output *</label>
                            <div v-for="(out, idx) in form.outputs" :key="'out-' + idx" class="dynamic-input-wrapper">
                                <input v-model="form.outputs[idx]"
                                    placeholder="Efficient implementation of planned activities/accomplishment report/attendance sheet." />
                            </div>
                            <button class="add-link-btn" @click="form.outputs.push('')">+ Add Expected Output</button>
                        </div>

                        <!-- Optional subtle divider to match image_3e1c9e.png bottom -->
                        <hr class="form-divider" />
                    </div>
                </div>
            </transition>

            <!-- NAVIGATION BUTTONS -->
            <footer class="form-footer">
                <button :class="currentStep === 1 ? 'btn-prev-disabled' : 'btn-prev-active'"
                    :disabled="currentStep === 1" @click="currentStep--">
                    <i class="fas fa-arrow-left"></i> Previous
                </button>

                <button class="btn-next-blue" @click="handleNext">
                    {{ currentStep === 4 ? 'Submit' : 'Next' }} <i class="fas fa-arrow-right"></i>
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 1,
            steps: [
                { label: 'Basic Information', icon: 'fas fa-info-circle' },
                { label: 'Details & Schedules', icon: 'fas fa-calendar-alt' },
                { label: 'Budgetary Requirements', icon: 'fas fa-ruble-sign' },
                { label: 'Review & Submit', icon: 'fas fa-check' }
            ],
            form: {
                title: '',
                officeCode: 'OVCSAS-OSD-SSC',
                unit: 'Supreme Student Council',
                resultCode: '',
                email: '',
                rationale: '',
                objectives: [''],
                outputs: ['']
            }
        }
    },
    methods: {
        handleNext() {
            if (this.currentStep < 4) {
                this.currentStep++;
            } else {
                console.log("Submitting form:", this.form);
            }
        }
    }
}
</script>

<style scoped>
/* Inherited your working styles exactly */
.wizard-container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
}

.wizard-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.back-arrow-only {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #000;
    display: flex;
    align-items: center;
}

.header-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    margin: 0;
}

.stepper-bar {
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 2.5rem 10%;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    margin-bottom: 2rem;
    position: relative;
}

.stepper-bar::before {
    content: '';
    position: absolute;
    top: 45%;
    left: 15%;
    right: 15%;
    height: 2px;
    background: #e2e8f0;
    z-index: 1;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    flex: 1;
}

.step-circle {
    width: 44px;
    height: 44px;
    background: #f1f5f9;
    border: 4px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
}

.step-item.active .step-circle {
    background: #001ba0;
    color: white;
}

.form-card {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 40px;
}

.form-divider {
    border: 0;
    border-top: 1px solid #e2e8f0;
    margin: 20px 0;
}

.form-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    margin-bottom: 30px;
    color: #1a1a1a;
}

/* NEW: GRID & INPUT STYLES TO MATCH image_3e1c9e.png */
.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    /* Increased gap for a cleaner look */
    width: 100%;
}

.input-block {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* Ensures the block fills the column */
}

.input-block label {
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 8px;
    color: #334155;
}

.input-block input,
.input-block select,
.input-block textarea {
    width: 100%;
    /* This is the key to widening the boxes */
    padding: 14px;
    /* Slightly larger padding for a premium feel */
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    background: #ffffff;
    font-size: 1rem;
    /* Slightly larger font for readability */
    box-sizing: border-box;
    /* Crucial: ensures padding doesn't push width past 100% */
}

.input-block textarea {
    height: 120px;
    resize: none;
}

.input-block:first-child {
    width: 100%;
}

.char-counter {
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 5px;
}

.add-link-btn {
    background: none;
    border: none;
    color: #2563eb;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
    padding: 0;
    margin-top: 5px;
}

.dynamic-input-wrapper {
    width: 100%;
    margin-bottom: 12px;
}

/* FOOTER & BUTTONS */
.form-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 25px;
    border-top: 1px solid #f1f5f9;
}

.btn-prev-disabled {
    background: #f1f5f9;
    color: #94a3b8;
    border: 1px solid #e2e8f0;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    cursor: not-allowed;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-prev-active {
    background: #ffffff;
    color: #334155;
    border: 1px solid #cbd5e0;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-next-blue {
    background: #001ba0;
    color: white;
    border: none;
    padding: 12px 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 768px) {
    .form-grid {
        grid-template-columns: 1fr;
    }

    .stepper-bar {
        padding: 1.5rem 5%;
    }

    .step-label {
        display: none;
    }
}
</style>