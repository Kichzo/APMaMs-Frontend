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
                    <h2 class="form-section-title">
                        {{ currentStep === 2 ? 'Details & Schedule' : steps[currentStep - 1].label }}
                    </h2>

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
                                <div class="input-with-action">
                                    <input v-model="obj.value"
                                        placeholder="To evaluate the previous year's output and prepare for the 2nd semester's student general assembly and Arts Month Celebration." />
                                    <button v-if="form.objectives.length > 1" class="delete-btn" @click="removeRow('objectives', idx)" title="Remove">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.objectives.push({ value: '' })">+ Add Objectives</button>
                        </div>

                        <!-- Expected Output -->
                        <div class="input-block">
                            <label>Expected Output *</label>
                            <div v-for="(out, idx) in form.outputs" :key="'out-' + idx" class="dynamic-input-wrapper">
                                <div class="input-with-action">
                                    <input v-model="out.value"
                                        placeholder="Efficient implementation of planned activities/accomplishment report/attendance sheet." />
                                    <button v-if="form.outputs.length > 1" class="delete-btn" @click="removeRow('outputs', idx)" title="Remove">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.outputs.push({ value: '' })">+ Add Expected Output</button>
                        </div>

                        <!-- Optional subtle divider to match image_3e1c9e.png bottom -->
                        <hr class="form-divider" />
                    </div>

                    <!-- STEP 2: DETAILS & SCHEDULES -->
                    <div v-if="currentStep === 2" class="form-body">

                        <!-- Dates Row -->
                        <div class="form-grid">
                            <div class="input-block">
                                <label>Date Prepared *</label>
                                <div class="dual-input">
                                    <input type="date" v-model="form.datePreparedStart" />
                                    <input type="date" v-model="form.datePreparedEnd" />
                                </div>
                            </div>
                            <div class="input-block">
                                <label>Date of Implementation*</label>
                                <input type="date" v-model="form.dateImplementation" />
                            </div>
                        </div>

                        <!-- Program of Activities (3-column grid) -->
                        <div class="input-block">
                            <label>Program of Activities *</label>
                            <div v-for="(item, idx) in form.program" :key="'prog-' + idx" class="form-grid-3">
                                <input v-model="item.time" placeholder="Time (e.g. , 9:00 AM - 12:00 PM)" />
                                <input v-model="item.description" placeholder="Activity Description" />
                                <div class="input-with-action">
                                    <input v-model="item.pic" placeholder="Person-In-Charge" />
                                    <button v-if="form.program.length > 1" class="delete-btn" @click="removeRow('program', idx)" title="Remove">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.program.push({})">+ Add Schedule Item</button>
                        </div>

                        <!-- Participants Row -->
                        <div class="form-grid-2-1">
                            <div class="input-block">
                                <label>Participants *</label>
                                <div v-for="(part, idx) in form.participants" :key="'part-' + idx" class="dual-input mb-2">
                                    <input v-model="part.name" placeholder="Enter name" />
                                    <div class="input-with-action">
                                        <input v-model="part.position" placeholder="Enter position" />
                                        <button v-if="form.participants.length > 1" class="delete-btn" @click="removeRow('participants', idx)" title="Remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <button class="add-link-btn" @click="form.participants.push({ name: '', position: '' })">+ Add Participants</button>
                            </div>
                            <div class="input-block">
                                <label>Expected Participants *</label>
                                <input type="number" v-model="form.expectedCount" placeholder="50" />
                            </div>
                        </div>

                        <!-- Type of Activity & In-Campus Section -->
                        <div class="activity-type-section">
                            <div class="form-grid">
                                <div class="input-block">
                                    <label>Type of Activity *</label>
                                    <select v-model="form.activityType">
                                        <option value="In-Campus">In-Campus</option>
                                        <option value="Off-Campus">Off-Campus</option>
                                    </select>
                                </div>
                                <div class="type-hint">
                                    <i>Fill-out below for In-Campus only:</i>
                                </div>
                            </div>

                            <!-- Venue/Campus Facilities Grid (5-column layout) -->
                            <div class="five-col-grid" v-for="(venue, idx) in form.venues" :key="'venue-' + idx">
                                <div class="input-block"><label v-if="idx === 0">Venue *</label><input
                                        v-model="venue.name" placeholder="Enter venue location" /></div>
                                <div class="input-block"><label v-if="idx === 0">Specific Date *</label><input
                                        type="date" v-model="venue.date" /></div>
                                <div class="input-block"><label v-if="idx === 0">Duration *</label><input
                                        v-model="venue.duration" placeholder="e.g. 1:00PM-4:00PM" /></div>
                                <div class="input-block"><label v-if="idx === 0">Remarks *</label><input
                                        v-model="venue.remarks" placeholder="Enter remarks" /></div>
                                <div class="input-block"><label v-if="idx === 0">Signature *</label>
                                    <div class="input-with-action">
                                        <input class="sig-box" readonly />
                                        <button v-if="form.venues.length > 1" class="delete-btn" @click="removeRow('venues', idx)" title="Remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button class="add-link-btn mb-4" style="margin-top: -10px;" @click="form.venues.push({})">+ Add Row</button>

                            <div class="five-col-grid" v-for="(fac, idx) in form.facilities" :key="'fac-' + idx">
                                <div class="input-block"><label v-if="idx === 0">Campus Facilities *</label><input
                                        v-model="fac.name" placeholder="Enter campus facilities" /></div>
                                <div class="input-block"><label v-if="idx === 0">Quantity *</label><input type="number"
                                        v-model="fac.qty" /></div>
                                <div class="input-block"><label v-if="idx === 0">Duration *</label><input
                                        v-model="fac.duration" placeholder="e.g. 1:00AM-4:00PM" /></div>
                                <div class="input-block"><label v-if="idx === 0">Remarks *</label><input
                                        v-model="fac.remarks" placeholder="Enter remarks" /></div>
                                <div class="input-block"><label v-if="idx === 0">Signature *</label>
                                    <div class="input-with-action">
                                        <input class="sig-box" readonly />
                                        <button v-if="form.facilities.length > 1" class="delete-btn" @click="removeRow('facilities', idx)" title="Remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button class="add-link-btn" style="margin-top: -10px;" @click="form.facilities.push({})">+ Add Row</button>
                        </div>

                        <hr class="form-divider" />
                    </div>

                    <!-- STEP 3: BUDGETARY REQUIREMENTS -->
                    <div v-if="currentStep === 3" class="form-body">
                        <!-- Proposed Budget -->
                        <div class="input-block small-width">
                            <label>Proposed Budget *</label>
                            <input type="number" v-model="form.proposedBudget" placeholder="Enter amount" />
                        </div>

                        <!-- Budget Items Grid -->
                        <div class="budget-items-section">
                            <div class="four-col-grid" v-for="(item, idx) in form.budgetItems" :key="'budget-' + idx">
                                <div class="input-block">
                                    <label v-if="idx === 0">Item/s *</label>
                                    <input v-model="item.name" placeholder="Enter item name" />
                                </div>
                                <div class="input-block">
                                    <label v-if="idx === 0">Particulars *</label>
                                    <input v-model="item.particulars" placeholder="Enter particulars name" />
                                </div>
                                <div class="input-block">
                                    <label v-if="idx === 0">Amount *</label>
                                    <input type="number" v-model="item.amount" placeholder="Enter amount" />
                                </div>
                                <div class="input-block">
                                    <label v-if="idx === 0">Budget Source *</label>
                                    <div class="input-with-action">
                                        <input v-model="item.source" placeholder="Enter budget source" />
                                        <button v-if="form.budgetItems.length > 1" class="delete-btn" @click="removeRow('budgetItems', idx)" title="Remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.budgetItems.push({})">+ Add Row</button>
                        </div>

                        <!-- SDG Section -->
                        <div class="sdg-section">
                            <label class="section-label">Sustainable Development Goals Achieved *</label>
                            <div class="sdg-grid">
                                <div v-for="n in 17" :key="'sdg-' + n" class="checkbox-item">
                                    <input type="checkbox" :id="'sdg' + n" :value="n" v-model="form.selectedSDGs" />
                                    <label :for="'sdg' + n">SDG {{ n }} - {{ getSDGLabel(n) }}</label>
                                </div>
                            </div>
                        </div>

                        <!-- File Upload -->
                        <div class="input-block">
                            <label>Attachments (Optional)</label>
                            <div class="upload-dropzone" @click="$refs.fileInput.click()">
                                <input type="file" ref="fileInput" hidden @change="handleFileUpload" multiple />
                                <i class="fas fa-cloud-upload-alt upload-icon"></i>
                                <p>Click to upload or drag and drop</p>
                                <span>PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (max 10MB)</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="currentStep === 4" class="form-body review-page">

                        <!-- BASIC INFORMATION -->
                        <h3 class="review-sub-title">Basic Information</h3>
                        <div class="form-grid">
                            <div class="review-item"><label>Activity Title:</label>
                                <p>{{ form.title }}</p>
                            </div>
                            <div class="review-item"><label>Office Code:</label>
                                <p>{{ form.officeCode }}</p>
                            </div>
                        </div>
                        <div class="form-grid">
                            <div class="review-item"><label>Unit/College:</label>
                                <p>{{ form.unit }}</p>
                            </div>
                            <div class="review-item"><label>Result Code/OPCR/IPCR Code:</label>
                                <p>{{ form.resultCode }}</p>
                            </div>
                        </div>
                        <div class="review-item full"><label>Email Address:</label>
                            <p>{{ form.email }}</p>
                        </div>

                        <div class="review-item full">
                            <label>Rationale:</label>
                            <div class="review-box">{{ form.rationale }}</div>
                        </div>
                        <div class="review-item full">
                            <label>Objectives:</label>
                            <div class="review-box" v-for="(obj, i) in form.objectives" :key="'rev-obj-' + i">{{ obj.value }}
                            </div>
                        </div>
                        <div class="review-item full">
                            <label>Expected Output:</label>
                            <div class="review-box" v-for="(out, i) in form.outputs" :key="'rev-out-' + i">{{ out.value }}
                            </div>
                        </div>

                        <!-- DETAILS & SCHEDULES -->
                        <h3 class="review-sub-title">Details & Schedules</h3>
                        <div class="form-grid">
                            <div class="review-item"><label>Date Prepared:</label>
                                <p>{{ form.datePreparedStart }} to {{ form.datePreparedEnd }}</p>
                            </div>
                            <div class="review-item"><label>Date of Implementation:</label>
                                <p>{{ form.dateImplementation }}</p>
                            </div>
                        </div>

                        <label class="review-label-small">Program of Activities</label>
                        <div v-for="(p, i) in form.program" :key="'rev-prog-' + i" class="form-grid-3 mb-2">
                            <div class="review-box">{{ p.time }}</div>
                            <div class="review-box">{{ p.description }}</div>
                            <div class="review-box">{{ p.pic }}</div>
                        </div>

                        <div class="form-grid-2-1">
                            <div class="review-item">
                                <label>Participants</label>
                                <div v-for="(part, i) in form.participants" :key="'rev-part-' + i" class="dual-input mb-2">
                                    <div class="review-box">{{ part.name }}</div>
                                    <div class="review-box">{{ part.position }}</div>
                                </div>
                            </div>
                            <div class="review-item">
                                <label>Expected Participants:</label>
                                <p>{{ form.expectedCount }}</p>
                            </div>
                        </div>
                        <div class="review-item"><label>Type of Activity:</label>
                            <p>{{ form.activityType }}</p>
                        </div>

                        <!-- IN-CAMPUS ONLY SECTION (Venue & Facility) -->
                        <p class="review-note">Fill-out below for In-Campus only:</p>

                        <div v-for="(v, i) in form.venues" :key="'rev-ven-' + i" class="five-col-grid mb-2">
                            <div class="review-item"><label v-if="i === 0">Venue</label>
                                <div class="review-box">{{ v.name }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Specific Date</label>
                                <div class="review-box">{{ v.date }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Duration</label>
                                <div class="review-box">{{ v.duration }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Remarks</label>
                                <div class="review-box">{{ v.remarks }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Signature</label>
                                <div class="review-box">Signature</div>
                            </div>
                        </div>

                        <div v-for="(f, i) in form.facilities" :key="'rev-fac-' + i" class="five-col-grid mb-2">
                            <div class="review-item"><label v-if="i === 0">Campus Facility</label>
                                <div class="review-box">{{ f.name }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Quantity</label>
                                <div class="review-box">{{ f.qty }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Duration</label>
                                <div class="review-box">{{ f.duration }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Remarks</label>
                                <div class="review-box">{{ f.remarks }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Signature</label>
                                <div class="review-box">Signature</div>
                            </div>
                        </div>

                        <!-- BUDGET & REQUIREMENTS -->
                        <h3 class="review-sub-title">Budget & Requirements</h3>
                        <div class="review-item"><label>Proposed Budget:</label>
                            <p>₱ {{ form.proposedBudget }}</p>
                        </div>

                        <div v-for="(b, i) in form.budgetItems" :key="'rev-bud-' + i" class="four-col-grid mb-2">
                            <div class="review-item"><label v-if="i === 0">Item/s:</label>
                                <div class="review-box">{{ b.name }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Particulars:</label>
                                <div class="review-box">{{ b.particulars }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Amount:</label>
                                <div class="review-box">{{ b.amount }}</div>
                            </div>
                            <div class="review-item"><label v-if="i === 0">Budget Source:</label>
                                <div class="review-box">{{ b.source }}</div>
                            </div>
                        </div>

                        <div class="review-item full">
                            <label>Sustainable Development Goal Achieved</label>
                            <div class="checkbox-item" v-for="sdg in form.selectedSDGs" :key="sdg">
                                <input type="checkbox" checked disabled>
                                <span>SDG {{ sdg }} - {{ getSDGLabel(sdg) }}</span>
                            </div>
                        </div>

                        <div class="review-item full">
                            <label>Attachments (Optional):</label>
                            <p v-if="form.attachments.length === 0">No files uploaded.</p>
                            <ul v-else>
                                <li v-for="file in form.attachments" :key="file.name">{{ file.name }}</li>
                            </ul>
                        </div>

                        <div class="submit-alert">
                            <div class="alert-header">
                                <i class="fas fa-info-circle"></i>
                                <strong>Before Submitting:</strong>
                            </div>
                            <ul>
                                <li>Review all information for accuracy</li>
                                <li>Ensure all required fields are filled</li>
                                <li>Check budget calculations</li>
                                <li>Verify dates and venue availability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>


            <!-- NAVIGATION BUTTONS -->
            <footer class="form-footer">
                <button :class="currentStep === 1 ? 'btn-prev-disabled' : 'btn-prev-active'"
                    :disabled="currentStep === 1" @click="currentStep--">
                    <i class="fas fa-arrow-left"></i> Previous
                </button>

                <div v-if="currentStep === 4" style="display: flex; gap: 10px;">
                    <button class="btn-cancel" @click="$emit('close')">Cancel</button>
                    <button class="btn-next-blue" @click="submitForm">Submit for Approval</button>
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
                { label: 'Details & Schedules', icon: 'fas fa-calendar-alt' },
                { label: 'Budgetary Requirements', icon: 'fas fa-coins' },
                { label: 'Review & Submit', icon: 'fas fa-check' }
            ],
            form: {
                title: '',
                officeCode: 'OVCSAS-OSD-SSC',
                unit: 'Supreme Student Council',
                resultCode: '',
                email: '',
                rationale: '',
                objectives: [{ value: '' }],
                outputs: [{ value: '' }],
                datePreparedStart: '',
                datePreparedEnd: '',
                dateImplementation: '',
                program: [{ time: '', description: '', pic: '' }],
                participants: [{ name: '', position: '' }],
                expectedCount: 50,
                activityType: 'In-Campus',
                venues: [{ name: '', date: '', duration: '', remarks: '' }],
                facilities: [{ name: '', qty: 0, duration: '', remarks: '' }],
                proposedBudget: null,
                budgetItems: [{ name: '', particulars: '', amount: null, source: '' }],
                selectedSDGs: [],
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
            // Logic to send data to your database would go here
            // e.g., await axios.post('/api/reports', this.form);

            // On success, show the modal
            this.showSuccessModal = true;
        },
        goToApprovals() {
            this.$router.push('/approvals');
            this.$emit('close');
        },
        getSDGLabel(n) {
            const labels = [
                "No Poverty", "Zero Hunger", "Good Health and Well-being",
                "Quality Education", "Gender Equality", "Clear Water and Sanitation",
                "Affordable and Clean Energy", "Decent Work and Economic Growth",
                "Industry, Innovation and Infrastructure", "Reduced Inequalities",
                "Sustainable Cities and Communities", "Responsible Consumption and Production",
                "Climate Action", "Life Below Water", "Life on Land",
                "Peace, Justice and Strong Institutions", "Partnership for the Goals"
            ];
            return labels[n - 1];
        },
        handleFileUpload(event) {
            const files = Array.from(event.target.files);
            this.form.attachments.push(...files);
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
    font-size: 2.2rem;
    font-weight: bold;
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
    font-size: 1.4rem;
    font-weight: bold;
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

.btn-cancel {
    background: #000000;
    color: white;
    border: none;
    padding: 12px 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

/* Custom Grids for Step 2 */
.form-grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin-bottom: 10px;
}

/* 2/3 and 1/3 split for Participants vs Count */
.form-grid-2-1 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
}

/* The 5-column layout for Venue and Facilities */
.five-col-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr 1fr;
    gap: 12px;
    margin-bottom: 8px;
    align-items: flex-end;
}

/* Dual input wrapper (for the date range boxes) */
.dual-input {
    display: flex;
    gap: 10px;
    width: 100%;
}

.dual-input > * {
    flex: 1;
    min-width: 0;
}

/* Activity Type Section Styling */
.activity-type-section {
    margin-top: 30px;
}

.type-hint {
    display: flex;
    align-items: center;
    height: 100%;
    padding-top: 20px;
    font-size: 0.9rem;
    color: #1a1a1a;
}

/* Special styling for the Signature box placeholder */
.sig-box {
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    height: 45px;
}

.mb-4 {
    margin-bottom: 1.5rem;
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

/* 4-column budget grid */
.four-col-grid {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr;
    gap: 15px;
    margin-bottom: 10px;
    align-items: flex-end;
}

.small-width {
    max-width: 300px;
}

/* SDG Checkbox Grid */
.sdg-section {
    margin: 30px 0;
}

.section-label {
    font-weight: bold;
    display: block;
    margin-bottom: 15px;
}

.sdg-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* Two columns like the image */
    gap: 12px 40px;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    color: #4a5568;
}

.checkbox-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
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

.upload-dropzone p {
    margin: 5px 0;
    font-weight: 500;
}

.upload-dropzone span {
    font-size: 0.8rem;
    color: #718096;
}

.review-sub-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 20px 0 15px 0;
    color: #2d3748;
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
}

.review-box {
    background: #f1f5f9;
    /* Light grey background like your reference */
    border: 1px solid #e2e8f0;
    padding: 10px 15px;
    border-radius: 6px;
    min-height: 40px;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: #4a5568;
}

.review-divider {
    border: 0;
    border-top: 1px solid #edf2f7;
    margin: 30px 0;
}

/* Before Submitting Alert */
.submit-alert {
    background-color: #ebf8ff;
    /* Light blue */
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

.review-page {
    padding-bottom: 20px;
}

.review-label-small {
    font-size: 0.8rem;
    color: #4a5568;
    margin: 15px 0 5px 0;
    display: block;
}

.review-note {
    font-style: italic;
    font-size: 0.85rem;
    color: #718096;
    margin: 20px 0 10px 0;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

/* Ensure the signature boxes in the 5-col grid look like the image */
.five-col-grid .review-box:last-child {
    color: #cbd5e0;
    /* Faded "Signature" text */
    text-align: center;
}

/* Modal Overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    /* Dimmed background */
    backdrop-filter: blur(4px);
    /* Slight blur effect */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Success Card */
.success-card {
    background: white;
    padding: 40px;
    border-radius: 24px;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Checkmark Circle */
.success-icon {
    width: 60px;
    height: 60px;
    background-color: #c6f6d5;
    /* Light green */
    color: #38a169;
    /* Dark green */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0 auto 20px;
}

.success-card h2 {
    font-family:Arial, sans-serif;
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

/* Primary Blue Button */
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

    .five-col-grid,
    .form-grid-3,
    .form-grid-2-1 {
        grid-template-columns: 1fr;
    }
}
</style>