<template>
    <div class="wizard-container">
        <header class="wizard-header">
            <button class="back-arrow-only" @click="$emit('cancel')">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="header-text">
                <h1>Activity Accomplishment Report</h1>
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
                    
                    <!-- STEP 1: BASIC INFORMATION -->
                    <div v-if="currentStep === 1" class="form-body">
                        <div class="form-section-title"><i class="fas fa-info-circle" style="margin-right: 8px;"></i> Basic Information</div>
                        <div class="form-grid">
                            <div class="input-block">
                                <label>Activity Title *</label>
                                <input v-model="form.title" type="text" placeholder="First SSC Regular Meeting" />
                            </div>
                            <div class="input-block">
                                <label>Control Number *</label>
                                <input v-model="form.controlNumber" type="text" placeholder="MSUN-SSC-ACCOM- -REV" />
                            </div>
                            <div class="input-block">
                                <label>Office Code</label>
                                <input v-model="form.officeCode" type="text" />
                            </div>
                            <div class="input-block">
                                <label>Date Prepared *</label>
                                <input v-model="form.datePrepared" type="date" />
                            </div>
                            <div class="input-block">
                                <label>Unit/College *</label>
                                <select v-model="form.unit">
                                    <option>Supreme Student Council</option>
                                    <option>College of Business and Information Technology</option>
                                    <option>College of Environmental and Life Sciences</option>
                                    <option>College of Education and Social Sciences</option>
                                    <option>College of Marine and Fisheries Sciences</option>
                                    <option>KAABAG</option>
                                    <option>The Marine Echo</option>
                                    <option>Senior Student Society </option>
                                </select>
                            </div>
                            <div class="input-block">
                                <label>Venue *</label>
                                <input v-model="form.venue" type="text" placeholder="Enter venue location" />
                            </div>
                            <div class="input-block">
                                <label>Department *</label>
                                <select v-model="form.department">
                                    <option>Bachelor of Science in Information Technology</option>
                                    <option>Bachelor of Science in Marine Engineering</option>
                                </select>
                            </div>
                            <div class="input-block">
                                <label>Proposed Budget *</label>
                                <div class="input-with-icon-left">
                                    <i class="fas fa-peso-sign"></i>
                                    <input type="number" v-model="form.proposedBudget" placeholder="Enter amount" />
                                </div>
                            </div>
                            <div class="input-block">
                                <label>Result Code/OPCR/IPCR Code *</label>
                                <input v-model="form.resultCode" type="text" placeholder="Enter code" />
                            </div>
                            <div class="input-block">
                                <label>Budget Source *</label>
                                <input v-model="form.budgetSource" type="text" placeholder="Enter budget source" />
                            </div>
                            <div class="input-block">
                                <label>Date of Implementation*</label>
                                <input v-model="form.dateImplementation" type="date" />
                            </div>
                            <div class="input-block">
                                <label>Included in the *</label>
                                <div class="poe-group">
                                    <span>Year:</span>
                                    <input v-model="form.includedInPoeYear" type="text" class="year-input" />
                                    <label class="radio-label">Yes <input type="radio" value="Yes" v-model="form.includedInPoeStatus" class="custom-radio"></label>
                                    <label class="radio-label">No <input type="radio" value="No" v-model="form.includedInPoeStatus" class="custom-radio"></label>
                                </div>
                            </div>
                            <div class="input-block">
                                <label>Email Address *</label>
                                <input v-model="form.email" type="email" placeholder="Enter email address" />
                            </div>
                            <div class="input-block">
                                <label>Duration (in days) *</label>
                                <input v-model="form.durationDays" type="number" placeholder="Enter duration" />
                            </div>
                        </div>

                        <div class="input-block mt-4">
                            <label>Objectives *</label>
                            <div v-for="(obj, idx) in form.objectives" :key="'obj-' + idx" class="dynamic-input-wrapper">
                                <div class="input-with-action">
                                    <input v-model="obj.value" placeholder="Objective 1" />
                                    <button v-if="form.objectives.length > 1" class="delete-btn" @click="removeRow('objectives', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.objectives.push({ value: '' })">+ Add Objectives</button>
                        </div>

                        <div class="input-block mt-4">
                            <label>Narrative Report *</label>
                            <textarea v-model="form.narrativeReport" placeholder="Provide a detailed narrative of the activity implementation"></textarea>
                            <div class="char-counter">{{ form.narrativeReport.length }}/5000 characters</div>
                        </div>
                    </div>

                    <!-- STEP 2: RATING & DOCUMENTATION -->
                    <div v-if="currentStep === 2" class="form-body">
                        <div class="form-section-title"><i class="fas fa-table" style="margin-right: 8px;"></i> Actual Accomplishment</div>
                        
                        <div class="dynamic-table-container">
                            <div class="table-header-grid accom-grid">
                                <div>Objective</div>
                                <div>Expected Output</div>
                                <div>Actual Accomplishment</div>
                                <div>Rating (1-4)</div>
                            </div>
                            <div v-for="(item, idx) in form.accomplishments" :key="'accom-' + idx" class="table-row-grid accom-grid">
                                <input v-model="item.objective" placeholder="Enter objective" />
                                <input v-model="item.expectedOutput" placeholder="Expected Output" />
                                <input v-model="item.actualResult" placeholder="Actual Result" />
                                <div class="input-with-action">
                                    <select v-model="item.rating">
                                        <option>4 - Fully Achieved</option>
                                        <option>3 - Largely Achieved</option>
                                        <option>2 - Partially Achieved</option>
                                        <option>1 - Not Achieved</option>
                                    </select>
                                    <button v-if="form.accomplishments.length > 1" class="delete-btn" @click="removeRow('accomplishments', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <button class="add-link-btn mt-2" @click="form.accomplishments.push({objective: '', expectedOutput: '', actualResult: '', rating: '4 - Outstanding'})">+ Add Row</button>

                        <div class="legend-box mt-4 mb-4">
                            <strong>Legend:</strong><br/>
                            <span class="legend-item">Fully Achieved</span><br/>
                            <span class="legend-item">Largely Achieved</span><br/>
                            <span class="legend-item">Partially Achieved</span><br/>
                            <span class="legend-item">Not Achieved</span>
                        </div>

                        <div class="form-section-title mt-5"><i class="far fa-image" style="margin-right: 8px;"></i> Photo Documentation</div>
                        <div class="upload-dropzone" @click="$refs.photoInput.click()">
                            <input type="file" ref="photoInput" hidden @change="handlePhotoUpload" multiple accept="image/png, image/jpeg" />
                            <div class="upload-icon-circle">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <p>Click to upload photos</p>
                            <span>PNG, JPG up to 100MB each</span>
                        </div>
                    </div>

                    <!-- STEP 3: EVALUATIONS & REMARKS -->
                    <div v-if="currentStep === 3" class="form-body">
                        <div class="form-section-title mb-4"><i class="far fa-check-square" style="margin-right: 8px;"></i> Evaluations and Remarks</div>
                        
                        <div class="input-block mb-4">
                            <label>Summary of Evaluations *</label>
                            <textarea v-model="form.summaryEvaluations" placeholder="Summarize participants evaluations and feedback"></textarea>
                            <div class="char-counter">{{ form.summaryEvaluations.length }}/5000 characters</div>
                        </div>

                        <div class="input-block mb-4">
                            <label>Remarks/Comments/Suggestion:n/a *</label>
                            <textarea v-model="form.remarks" placeholder="Provide remarks, comments, or suggestions"></textarea>
                            <div class="char-counter">{{ form.remarks.length }}/5000 characters</div>
                        </div>

                        <div class="input-block mb-4">
                            <label>Next Steps/ Plan of Action:n/a *</label>
                            <textarea v-model="form.nextSteps" placeholder="Outline next steps and action plans"></textarea>
                            <div class="char-counter">{{ form.nextSteps.length }}/5000 characters</div>
                        </div>

                        <label class="section-label mb-2">Attachments (Optional)</label>
                        <div class="upload-dropzone mt-2" @click="$refs.fileInput.click()">
                            <input type="file" ref="fileInput" hidden @change="handleFileUpload" multiple />
                            <i class="fas fa-cloud-upload-alt upload-icon" style="color: #4a5568;"></i>
                            <p>Click to upload or drag and drop</p>
                            <span>PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (max 10MB)</span>
                        </div>
                    </div>

                    <!-- STEP 4: REVIEW & SUBMIT -->
                    <div v-if="currentStep === 4" class="form-body review-page">
                        
                        <h3 class="review-sub-title">Review & Submit</h3>
                        
                        <h4 class="review-section-heading">Basic Information</h4>
                        <div class="form-grid mb-3">
                            <div class="review-item"><label>Activity Title:</label><p>{{ form.title }}</p></div>
                            <div class="review-item"><label>Control Number:</label><p>{{ form.controlNumber }}</p></div>
                            <div class="review-item"><label>Office Code:</label><p>{{ form.officeCode }}</p></div>
                            <div class="review-item"><label>Date Prepared:</label><p>{{ form.datePrepared }}</p></div>
                            <div class="review-item"><label>Unit/College:</label><p>{{ form.unit }}</p></div>
                            <div class="review-item"><label>Venue:</label><p>{{ form.venue }}</p></div>
                            <div class="review-item"><label>Department:</label><p>{{ form.department }}</p></div>
                            <div class="review-item"><label>Proposed Budget:</label><p>₱ {{ form.proposedBudget }}</p></div>
                            <div class="review-item"><label>Result Code/OPCR/IPCR Code:</label><p>{{ form.resultCode }}</p></div>
                            <div class="review-item"><label>Budget Source:</label><p>{{ form.budgetSource }}</p></div>
                            <div class="review-item"><label>Date Implementation:</label><p>{{ form.dateImplementation }}</p></div>
                            <div class="review-item"><label>Included in the POE:</label><p>Year: {{ form.includedInPoeYear }}, Status: {{ form.includedInPoeStatus }}</p></div>
                            <div class="review-item"><label>Email Address:</label><p>{{ form.email }}</p></div>
                            <div class="review-item"><label>Duration (in days):</label><p>{{ form.durationDays }}</p></div>
                        </div>

                        <div class="review-item full mb-3">
                            <label>Objectives:</label>
                            <div class="review-box" v-for="(obj, i) in form.objectives" :key="'rev-obj-' + i">{{ obj.value }}</div>
                        </div>
                        <div class="review-item full mb-4">
                            <label>Narrative Report:</label>
                            <div class="review-box" style="white-space: pre-wrap; min-height: 80px;">{{ form.narrativeReport }}</div>
                        </div>

                        <h4 class="review-section-heading mt-4">Rating & Documentation</h4>
                        <label class="review-label-small">Actual Accomplishment & Rating</label>
                        <div class="table-header-grid accom-grid mt-2">
                            <div>Objective</div><div>Expected Output</div><div>Actual Accomplishment</div><div>Rating (1-4)</div>
                        </div>
                        <div v-for="(acc, i) in form.accomplishments" :key="'rev-acc-' + i" class="table-row-grid accom-grid no-gap mb-1">
                            <div class="review-box">{{ acc.objective }}</div>
                            <div class="review-box">{{ acc.expectedOutput }}</div>
                            <div class="review-box">{{ acc.actualResult }}</div>
                            <div class="review-box">{{ acc.rating }}</div>
                        </div>

                        <label class="review-label-small mt-4">Photo Documentation</label>
                        <div class="upload-dropzone mt-2" style="background: white;">
                            <div class="upload-icon-circle">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <p>Click to upload photos</p>
                            <span>PNG, JPG up to 100MB each</span>
                        </div>

                        <h4 class="review-section-heading mt-5">Evaluation & Remarks</h4>
                        
                        <div class="review-item full mt-3">
                            <label>Summary of Evaluation/s:</label>
                            <div class="review-box" style="white-space: pre-wrap;">{{ form.summaryEvaluations }}</div>
                        </div>

                        <div class="review-item full mt-3">
                            <label>Remarks/Comments/Suggestions:n/a:</label>
                            <div class="review-box" style="white-space: pre-wrap;">{{ form.remarks }}</div>
                        </div>

                        <div class="review-item full mt-3">
                            <label>Next Steps/Plan of Action:n/a:</label>
                            <div class="review-box" style="white-space: pre-wrap;">{{ form.nextSteps }}</div>
                        </div>

                        <div class="review-item full mt-4">
                            <label>Attachments (Optional):</label>
                            <div class="upload-dropzone mt-2" style="background: white;">
                                <i class="fas fa-cloud-upload-alt upload-icon" style="color: #4a5568;"></i>
                                <p>Click to upload or drag and drop</p>
                                <span>PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (max 10MB)</span>
                            </div>
                        </div>

                        <div class="submit-alert">
                            <div class="alert-header">
                                <i class="fas fa-info-circle"></i>
                                <strong>Before Submitting:</strong>
                            </div>
                            <ul>
                                <li>Review all information for accuracy</li>
                                <li>Ensure all required fields are filled</li>
                                <li>Verify dates and venue availability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- NAVIGATION BUTTONS -->
            <footer class="form-footer">
                <button :class="currentStep === 1 ? 'btn-prev-disabled' : 'btn-prev-active'" :disabled="currentStep === 1" @click="currentStep--">
                    <i class="fas fa-arrow-left"></i> Previous
                </button>

                <div v-if="currentStep === 4" style="display: flex; gap: 10px;">
                    <button class="btn-cancel" @click="$emit('cancel')">Cancel</button>
                    <button class="btn-submit-final" @click="submitForm">Submit for Approval</button>
                </div>
                <button v-else class="btn-next-blue" @click="handleNext">
                    Next <i class="fas fa-arrow-right"></i>
                </button>
            </footer>
        </div>
        <!-- SUCCESS MODAL -->
        <transition name="fade">
            <div v-if="showSuccessModal" class="modal-overlay">
                <div class="success-card">
                    <div class="success-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <h2>Activity Report Submitted</h2>
                    <p>Your activity report has been submitted for approval. You will be notified once it has been
                        reviewed.</p>

                    <button class="btn-go-approvals" @click="goToApprovals">
                        Go to Approvals
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSuccessModal: false,
            currentStep: 1,
            steps: [
                { label: 'Basic Information', icon: 'fas fa-info-circle' },
                { label: 'Rating & Documentation', icon: 'far fa-calendar-alt' },
                { label: 'Evaluation & Remarks', icon: 'fas fa-peso-sign' },
                { label: 'Review & Submit', icon: 'fas fa-check' }
            ],
            form: {
                title: '',
                controlNumber: '',
                officeCode: 'OVCSAS-OSD-SSC',
                datePrepared: '',
                unit: 'Supreme Student Council',
                venue: '',
                department: 'Bachelor of Science in Information Technology',
                proposedBudget: null,
                resultCode: '',
                budgetSource: '',
                dateImplementation: '',
                includedInPoeYear: '',
                includedInPoeStatus: '',
                email: '',
                durationDays: '',
                objectives: [{ value: '' }],
                narrativeReport: '',
                
                accomplishments: [{objective: '', expectedOutput: '', actualResult: '', rating: '4 - Outstanding'}],
                photos: [],

                summaryEvaluations: '',
                remarks: '',
                nextSteps: '',
                attachments: []
            },
        }
    },
    methods: {
        removeRow(field, idx) {
            if (this.form[field].length > 1) {
                this.form[field].splice(idx, 1);
            }
        },
        handleNext() {
            if (this.currentStep < 4) {
                this.currentStep++;
            } else {
                this.submitForm();
            }
        },
        async submitForm() {
            this.showSuccessModal = true;
        },
        goToApprovals() {
            this.showSuccessModal = false;
            this.$emit('close');
        },
        handleFileUpload(event) {
            const files = Array.from(event.target.files);
            this.form.attachments.push(...files);
        },
        handlePhotoUpload(event) {
            const files = Array.from(event.target.files);
            this.form.photos.push(...files);
        }
    }
}
</script>

<style scoped>
.wizard-container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;
    font-family: Arial, Helvetica, sans-serif;
}

.wizard-container input,
.wizard-container select,
.wizard-container textarea,
.wizard-container button {
    font-family: Arial, Helvetica, sans-serif;
}

.wizard-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.back-arrow-only {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #000;
    display: flex;
    align-items: center;
    margin-top: 5px;
}

.header-text h1 {
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0;
}

.header-text p {
    color: #64748b;
    margin: 5px 0 0 0;
}

.stepper-bar {
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 1.5rem 10%;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    margin-bottom: 1.25rem;
    position: relative;
}

.stepper-bar::before {
    content: '';
    position: absolute;
    top: calc(1.5rem + 30px); /* Centers line exactly on the 60px circles */
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
    width: 60px;
    height: 60px;
    background: #f1f5f9;
    border: 5px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    font-size: 1.3rem;
}

.step-item.active .step-circle {
    background: #001ba0;
    color: white;
    border-color: #001ba0;
}

.step-label {
    margin-top: 15px;
    font-weight: bold;
    font-size: 0.9rem;
    color: #000;
}

.form-card {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 40px;
}

.form-section-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #1a1a1a;
}

.section-label {
    font-weight: bold;
    font-size: 1.2rem;
    display: block;
    color: #1a1a1a;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: 100%;
}

.input-block {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    padding: 14px;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    background: #ffffff;
    font-size: 1rem;
    box-sizing: border-box;
    outline: none;
}

.input-block input:focus,
.input-block select:focus,
.input-block textarea:focus {
    border-color: #001ba0;
}

.input-block textarea {
    height: 120px;
    resize: none;
}

.input-with-icon {
    position: relative;
    display: flex;
    align-items: center;
}

.input-with-icon input {
    width: 100%;
    padding-right: 40px;
}

.input-with-icon i {
    position: absolute;
    right: 15px;
    color: #000;
    font-size: 1.1rem;
}

.input-with-icon-left {
    position: relative;
    display: flex;
    align-items: center;
}

.input-with-icon-left input {
    width: 100%;
    padding-left: 35px;
}

.input-with-icon-left i {
    position: absolute;
    left: 15px;
    color: #000;
    font-size: 1rem;
}

.poe-group {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-top: 5px;
}

.year-input {
    width: 80px !important;
    padding: 10px !important;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    margin: 0 !important;
}

.custom-radio {
    width: 18px !important;
    height: 18px !important;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    border: 2px solid #94a3b8;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background-color: white;
}

.custom-radio:checked {
    border-color: #001ba0;
}

.custom-radio:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #001ba0;
    border-radius: 50%;
}

.char-counter {
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 5px;
}

.add-link-btn {
    background: none;
    border: none;
    color: #001ba0;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
    padding: 0;
    margin-top: 8px;
}

.dynamic-input-wrapper {
    width: 100%;
    margin-bottom: 12px;
}

.input-with-action {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}

.delete-btn {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 5px;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-btn:hover {
    color: #dc2626;
}

/* TABLE GRIDS */
.dynamic-table-container {
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    overflow: hidden;
}

.table-header-grid {
    background: #f1f5f9;
    padding: 12px 16px;
    font-weight: bold;
    font-size: 0.85rem;
    color: #1a1a1a;
    display: grid;
    gap: 16px;
    border-bottom: 1px solid #e2e8f0;
}

.table-row-grid {
    padding: 16px;
    display: grid;
    gap: 16px;
    align-items: center;
    background: white;
    border-bottom: 1px solid #e2e8f0;
}

.table-row-grid:last-of-type {
    border-bottom: none;
}

.table-row-grid input, .table-row-grid select {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    font-size: 0.95rem;
    box-sizing: border-box;
    outline: none;
}

.table-row-grid input:focus, .table-row-grid select:focus {
    border-color: #001ba0;
}

.table-row-grid.no-gap {
    padding: 12px 16px;
}

/* Specific Grid Columns */
.accom-grid { grid-template-columns: 1fr 1fr 1fr 0.8fr; }

/* Legend */
.legend-box {
    font-size: 0.85rem;
    color: #475569;
}
.legend-item {
    color: #64748b;
    margin-left: 5px;
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
    background: #f8fafc;
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
    background: #f8fafc;
    color: #334155;
    border: 1px solid #cbd5e0;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;
}

.btn-prev-active:hover {
    background: #f1f5f9;
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
    transition: background 0.2s;
}

.btn-next-blue:hover {
    background: #00158a;
}

.btn-cancel {
    background: #ffffff;
    color: #475569;
    border: 1px solid #cbd5e0;
    padding: 12px 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s;
}

.btn-cancel:hover {
    background: #f8fafc;
}

.btn-submit-final {
    background: #001ba0;
    color: white;
    border: none;
    padding: 12px 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-submit-final:hover {
    background: #00158a;
}

/* Utility */
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
.mt-4 { margin-top: 1.5rem; }
.mt-5 { margin-top: 2rem; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Upload Dropzone */
.upload-dropzone {
    border: 2px dashed #cbd5e0;
    border-radius: 8px;
    padding: 40px;
    text-align: center;
    cursor: pointer;
    background: #fdfdfd;
    transition: background 0.2s;
}

.upload-dropzone:hover {
    background: #f7fafc;
    border-color: #4299e1;
}

.upload-icon {
    font-size: 2rem;
    color: #4a5568;
    margin-bottom: 10px;
}

.upload-icon-circle {
    width: 48px;
    height: 48px;
    background: #e0e7ff;
    color: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin: 0 auto 12px auto;
}

.upload-dropzone p {
    margin: 5px 0;
    font-weight: 500;
}

.upload-dropzone span {
    font-size: 0.8rem;
    color: #718096;
}

/* REVIEW PAGE */
.review-sub-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 20px 0 15px 0;
    color: #1a1a1a;
}

.review-item {
    margin-bottom: 15px;
}

.review-item label {
    font-size: 0.85rem;
    color: #718096;
    display: block;
    margin-bottom: 4px;
}

.review-item p {
    font-weight: 500;
    color: #1a202c;
    margin: 0;
}

.review-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 10px 15px;
    border-radius: 6px;
    min-height: 40px;
    font-size: 0.9rem;
    color: #1a1a1a;
    display: flex;
    align-items: center;
}

.review-section-heading {
    font-size: 1.05rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 5px;
}

.review-label-small {
    font-size: 0.85rem;
    color: #718096;
    display: block;
}

/* Before Submitting Alert */
.submit-alert {
    background-color: #ebf8ff;
    border: 1px solid #bee3f8;
    border-radius: 8px;
    padding: 20px;
    margin-top: 40px;
}

.alert-header {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #2b6cb0;
    margin-bottom: 10px;
}

.submit-alert ul {
    margin-left: 35px;
    font-size: 0.85rem;
    color: #2c5282;
}

.submit-alert li {
    margin-bottom: 4px;
}

/* Modal Overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.success-card {
    background: white;
    padding: 40px;
    border-radius: 24px;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.success-icon {
    width: 60px;
    height: 60px;
    background-color: #c6f6d5;
    color: #38a169;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0 auto 20px;
}

.success-card h2 {
    font-family: Arial, sans-serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #1a1a1a;
}

.success-card p {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 30px;
    padding: 0 20px;
}

.btn-go-approvals {
    background-color: #001aa8;
    color: white;
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-go-approvals:hover {
    background-color: #00158a;
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
    .accom-grid {
        grid-template-columns: 1fr;
    }
}
</style>