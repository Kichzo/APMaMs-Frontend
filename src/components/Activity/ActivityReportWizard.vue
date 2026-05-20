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
                    
                    <!-- STEP 1: BASIC INFORMATION -->
                    <div v-if="currentStep === 1" class="form-body">
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
                                <input type="number" v-model="form.proposedBudget" placeholder="₱ Enter amount" />
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
                                <input type="date" v-model="form.dateImplementation" />
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
                                <input v-model="form.durationDays" type="number" placeholder="" />
                            </div>
                        </div>

                        <div class="input-block mt-4">
                            <label>A. Rationale *</label>
                            <textarea v-model="form.rationale" placeholder="Provide a detailed description of the activity"></textarea>
                            <div class="char-counter">{{ form.rationale.length }}/5000 characters</div>
                        </div>

                        <div class="input-block mt-4">
                            <label>B. Objectives *</label>
                            <div v-for="(obj, idx) in form.objectives" :key="'obj-' + idx" class="dynamic-input-wrapper">
                                <div class="input-with-action">
                                    <input v-model="obj.value" placeholder="Enter objective" />
                                    <button v-if="form.objectives.length > 1" class="delete-btn" @click="removeRow('objectives', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.objectives.push({ value: '' })">+ Add Objectives</button>
                        </div>

                        <div class="input-block mt-4">
                            <label>C. Expected Output *</label>
                            <div v-for="(out, idx) in form.outputs" :key="'out-' + idx" class="dynamic-input-wrapper">
                                <div class="input-with-action">
                                    <input v-model="out.value" placeholder="Enter expected output" />
                                    <button v-if="form.outputs.length > 1" class="delete-btn" @click="removeRow('outputs', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.outputs.push({ value: '' })">+ Add Expected Output</button>
                        </div>
                    </div>

                    <!-- STEP 2: DETAILS & BUDGETARY -->
                    <div v-if="currentStep === 2" class="form-body">
                        <label class="section-label">D. Details of Activities *</label>
                        
                        <label class="section-label-sub mt-4">Program of Activities *</label>
                        <div class="form-grid mb-3">
                            <div class="input-block">
                                <input v-model="form.programDay" placeholder="e.g. Day 1" />
                            </div>
                            <div class="input-block">
                                <input type="date" v-model="form.programDate" />
                            </div>
                        </div>
                        
                        <div class="dynamic-table-container">
                            <div class="table-header-grid program-grid">
                                <div>DATE/TIME</div>
                                <div>ACTIVITY</div>
                                <div>PERSON-IN-CHARGE</div>
                            </div>
                            <div v-for="(item, idx) in form.program" :key="'prog-' + idx" class="table-row-grid program-grid">
                                <input v-model="item.time" placeholder="Time (e.g. , 9:00 AM - 12:00 PM)" />
                                <input v-model="item.description" placeholder="Enter Activity Description" />
                                <div class="input-with-action">
                                    <input v-model="item.pic" placeholder="Enter person-in-charge" />
                                    <button v-if="form.program.length > 1" class="delete-btn" @click="removeRow('program', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <button class="add-link-btn" @click="form.program.push({time: '', description: '', pic: ''})">+ Add Schedule Item</button>

                        <label class="section-label-sub mt-5">Participants *</label>
                        <div class="dynamic-table-container mt-2">
                            <div v-for="(part, idx) in form.participants" :key="'part-' + idx" class="table-row-grid participants-grid mb-2">
                                <input v-model="part.name" placeholder="Enter name" />
                                <div class="input-with-action">
                                    <input v-model="part.position" placeholder="Enter position" />
                                    <button v-if="form.participants.length > 1" class="delete-btn" @click="removeRow('participants', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <button class="add-link-btn" @click="form.participants.push({name: '', position: ''})">+ Add Participants</button>

                        <label class="section-label mt-5">E. Budgetary Requirements *</label>
                        <div class="dynamic-table-container mt-3">
                            <div class="table-header-grid budget-grid">
                                <div>ITEM/S</div>
                                <div>PARTICULARS</div>
                                <div>AMOUNT</div>
                                <div>BUDGET SOURCE</div>
                            </div>
                            <div v-for="(item, idx) in form.budgetItems" :key="'budget-' + idx" class="table-row-grid budget-grid">
                                <input v-model="item.name" placeholder="Enter item" />
                                <input v-model="item.particulars" placeholder="Enter particular name" />
                                <input type="number" v-model="item.amount" placeholder="₱ Enter amount" />
                                <div class="input-with-action">
                                    <input v-model="item.source" placeholder="Enter budget source" />
                                    <button v-if="form.budgetItems.length > 1" class="delete-btn" @click="removeRow('budgetItems', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                        <button class="add-link-btn" @click="form.budgetItems.push({name: '', particulars: '', amount: null, source: ''})">+ Add Schedule Item</button>
                    </div>

                    <!-- STEP 3: FACILITIES & GOALS -->
                    <div v-if="currentStep === 3" class="form-body">
                        <label class="section-label mb-3">F. Type of Activity *</label>
                        <div class="input-block small-width">
                            <select v-model="form.activityType">
                                <option value="In-Campus">In-Campus</option>
                                <option value="Out-Campus">Out-Campus</option>
                            </select>
                        </div>

                        <div v-if="form.activityType === 'In-Campus'" class="in-campus-wrapper mt-4">
                            <div class="type-hint mb-3"><i>Fill-out below for In-Campus Activity only:</i></div>
                            
                            <label class="section-label-sub mb-2">Venue/s</label>
                            <div class="dynamic-table-container">
                                <div class="table-header-grid venue-grid">
                                    <div>VENUE</div>
                                    <div>SPECIFIED DATE</div>
                                    <div>DURATION</div>
                                    <div>REMARKS</div>
                                    <div>SIGNATURE</div>
                                </div>
                                <div v-for="(venue, idx) in form.venues" :key="'venue-' + idx" class="table-row-grid venue-grid">
                                    <input v-model="venue.name" placeholder="Enter venue location" />
                                    <input type="date" v-model="venue.date" />
                                    <input v-model="venue.duration" placeholder="e.g. 1:00AM-4:00PM" />
                                    <input v-model="venue.remarks" placeholder="Enter remarks" />
                                    <div class="input-with-action">
                                        <input class="sig-box" readonly />
                                        <button v-if="form.venues.length > 1" class="delete-btn" @click="removeRow('venues', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.venues.push({name: '', date: '', duration: '', remarks: ''})">+ Add Row</button>

                            <label class="section-label-sub mt-5 mb-2">G. Campus Facilities</label>
                            <div class="dynamic-table-container">
                                <div class="table-header-grid facility-grid">
                                    <div>QUANTITY</div>
                                    <div>DESCRIPTION</div>
                                    <div>DURATION</div>
                                    <div>REMARKS</div>
                                    <div>SIGNATURE</div>
                                </div>
                                <div v-for="(fac, idx) in form.facilities" :key="'fac-' + idx" class="table-row-grid facility-grid">
                                    <input type="number" v-model="fac.qty" />
                                    <input v-model="fac.name" placeholder="Enter description" />
                                    <input v-model="fac.duration" placeholder="e.g. 1:00AM-4:00PM" />
                                    <input v-model="fac.remarks" placeholder="Enter remarks" />
                                    <div class="input-with-action">
                                        <input class="sig-box" readonly />
                                        <button v-if="form.facilities.length > 1" class="delete-btn" @click="removeRow('facilities', idx)" title="Remove"><i class="fas fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <button class="add-link-btn" @click="form.facilities.push({qty: 0, name: '', duration: '', remarks: ''})">+ Add Row</button>
                        </div>

                        <label class="section-label mt-5 mb-3">H. Sustainable Development Goals Achieved *</label>
                        <div class="sdg-grid">
                            <div v-for="n in 17" :key="'sdg-' + n" class="checkbox-item">
                                <input type="checkbox" :id="'sdg' + n" :value="n" v-model="form.selectedSDGs" />
                                <label :for="'sdg' + n">SDG {{ n }} - {{ getSDGLabel(n) }}</label>
                            </div>
                        </div>

                        <label class="section-label mt-5 mb-3">Attachments (Optional)</label>
                        <div class="upload-dropzone" @click="$refs.fileInput.click()">
                            <input type="file" ref="fileInput" hidden @change="handleFileUpload" multiple />
                            <i class="fas fa-cloud-upload-alt upload-icon"></i>
                            <p>Click to upload or drag and drop</p>
                            <span>PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (max 10MB)</span>
                        </div>

                        <div class="tags-section mt-5">
                            <label class="section-label mb-3">Tags College</label>
                            <div class="checkbox-list">
                                <label class="checkbox-item-custom" v-for="tag in availableTags" :key="tag">
                                    <input type="checkbox" :value="tag" v-model="form.tags" />
                                    <span class="checkmark"></span>
                                    <span class="checkbox-label">{{ tag }}</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- STEP 4: REVIEW -->
                    <div v-if="currentStep === 4" class="form-body review-page">
                        
                        <h3 class="review-sub-title">Basic Information</h3>
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
                            <label>A. Rationale:</label>
                            <div class="review-box">{{ form.rationale }}</div>
                        </div>
                        <div class="review-item full mb-3">
                            <label>B. Objectives:</label>
                            <div class="review-box" v-for="(obj, i) in form.objectives" :key="'rev-obj-' + i">{{ obj.value }}</div>
                        </div>
                        <div class="review-item full mb-4">
                            <label>C. Expected Output:</label>
                            <div class="review-box" v-for="(out, i) in form.outputs" :key="'rev-out-' + i">{{ out.value }}</div>
                        </div>

                        <h3 class="review-sub-title">Details & Budgetary</h3>
                        <label class="review-label-small">D. Details of Activities</label>
                        <p class="review-note">Program of Activities ({{ form.programDay }} - {{ form.programDate }})</p>
                        
                        <div class="table-header-grid program-grid mt-2">
                            <div>DATE/TIME</div><div>ACTIVITY</div><div>PERSON-IN-CHARGE</div>
                        </div>
                        <div v-for="(p, i) in form.program" :key="'rev-prog-' + i" class="table-row-grid program-grid no-gap mb-1">
                            <div class="review-box">{{ p.time }}</div>
                            <div class="review-box">{{ p.description }}</div>
                            <div class="review-box">{{ p.pic }}</div>
                        </div>

                        <label class="review-label-small mt-4">Participants</label>
                        <div v-for="(part, i) in form.participants" :key="'rev-part-' + i" class="table-row-grid participants-grid no-gap mb-1">
                            <div class="review-box">{{ part.name }}</div>
                            <div class="review-box">{{ part.position }}</div>
                        </div>

                        <label class="review-label-small mt-4">E. Budgetary Requirements</label>
                        <div class="table-header-grid budget-grid mt-2">
                            <div>ITEM/S</div><div>PARTICULARS</div><div>AMOUNT</div><div>BUDGET SOURCE</div>
                        </div>
                        <div v-for="(b, i) in form.budgetItems" :key="'rev-bud-' + i" class="table-row-grid budget-grid no-gap mb-1">
                            <div class="review-box">{{ b.name }}</div>
                            <div class="review-box">{{ b.particulars }}</div>
                            <div class="review-box">₱ {{ b.amount }}</div>
                            <div class="review-box">{{ b.source }}</div>
                        </div>

                        <h3 class="review-sub-title mt-5">Facilities & Goals</h3>
                        <div class="review-item"><label>F. Type of Activity:</label><p>{{ form.activityType }}</p></div>

                        <div v-if="form.activityType === 'In-Campus'">
                            <p class="review-note mt-3">Venue/s</p>
                            <div class="table-header-grid venue-grid">
                                <div>VENUE</div><div>SPECIFIED DATE</div><div>DURATION</div><div>REMARKS</div><div>SIGNATURE</div>
                            </div>
                            <div v-for="(v, i) in form.venues" :key="'rev-ven-' + i" class="table-row-grid venue-grid no-gap mb-1">
                                <div class="review-box">{{ v.name }}</div>
                                <div class="review-box">{{ v.date }}</div>
                                <div class="review-box">{{ v.duration }}</div>
                                <div class="review-box">{{ v.remarks }}</div>
                                <div class="review-box">Signature</div>
                            </div>

                            <p class="review-note mt-4">G. Campus Facilities</p>
                            <div class="table-header-grid facility-grid">
                                <div>QUANTITY</div><div>DESCRIPTION</div><div>DURATION</div><div>REMARKS</div><div>SIGNATURE</div>
                            </div>
                            <div v-for="(f, i) in form.facilities" :key="'rev-fac-' + i" class="table-row-grid facility-grid no-gap mb-1">
                                <div class="review-box">{{ f.qty }}</div>
                                <div class="review-box">{{ f.name }}</div>
                                <div class="review-box">{{ f.duration }}</div>
                                <div class="review-box">{{ f.remarks }}</div>
                                <div class="review-box">Signature</div>
                            </div>
                        </div>

                        <div class="review-item full mt-4">
                            <label>H. Sustainable Development Goal Achieved</label>
                            <div class="checkbox-item mt-2" v-for="sdg in form.selectedSDGs" :key="sdg">
                                <input type="checkbox" checked disabled>
                                <span>SDG {{ sdg }} - {{ getSDGLabel(sdg) }}</span>
                            </div>
                        </div>

                        <div class="review-item full mt-4">
                            <label>Attachments (Optional):</label>
                            <p v-if="form.attachments.length === 0">No files uploaded.</p>
                            <ul v-else>
                                <li v-for="file in form.attachments" :key="file.name">{{ file.name }}</li>
                            </ul>
                        </div>

                        <div class="review-item full mt-4" v-if="form.tags.length > 0">
                            <label>Tags College:</label>
                            <div class="checkbox-item mt-2" v-for="tag in form.tags" :key="tag">
                                <input type="checkbox" checked disabled>
                                <span>{{ tag }}</span>
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
            availableTags: [
                'Supreme Student Council',
                'College of Business and Information Technology',
                'College of Environmental and Life Sciences',
                'College of Education and Social Sciences',
                'College of Marine and Fisheries Sciences',
                'KAABAG',
                'The Marine Echo',
                'Senior Student Society'
            ],
            steps: [
                { label: 'Basic Information', icon: 'fas fa-info-circle' },
                { label: 'Details & Budgetary', icon: 'fas fa-file-invoice-dollar' },
                { label: 'Facilities & Goals', icon: 'fas fa-bullseye' },
                { label: 'Review & Submit', icon: 'fas fa-check-circle' }
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
                rationale: '',
                objectives: [{ value: '' }],
                outputs: [{ value: '' }],
                
                programDay: '',
                programDate: '',
                program: [{ time: '', description: '', pic: '' }],
                participants: [{ name: '', position: '' }],
                budgetItems: [{ name: '', particulars: '', amount: null, source: '' }],
                
                activityType: 'In-Campus',
                venues: [{ name: '', date: '', duration: '', remarks: '' }],
                facilities: [{ qty: 0, name: '', duration: '', remarks: '' }],
                
                selectedSDGs: [],
                attachments: [],
                tags: []
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
            this.$emit('submit-design');
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
    font-size: 1rem;
    display: block;
    color: #1a1a1a;
}

.section-label-sub {
    font-weight: bold;
    font-size: 0.95rem;
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
}

.input-block textarea {
    height: 120px;
    resize: none;
}

.poe-group {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-top: 10px;
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
}

.table-header-grid {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    padding: 12px 16px;
    font-weight: bold;
    font-size: 0.75rem;
    color: #1a1a1a;
    display: grid;
    gap: 16px;
}

.table-row-grid {
    border: 1px solid #e2e8f0;
    border-top: none;
    padding: 16px;
    display: grid;
    gap: 16px;
    align-items: center;
    background: white;
}

.table-row-grid:last-of-type {
    border-radius: 0 0 6px 6px;
}

.table-row-grid input {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    font-size: 0.95rem;
    box-sizing: border-box;
}

.table-row-grid.no-gap {
    padding: 12px 16px;
}

/* Specific Grid Columns */
.program-grid { grid-template-columns: 1fr 1fr 1fr; }
.participants-grid { grid-template-columns: 1fr 1fr; border-top: 1px solid #e2e8f0; border-radius: 6px; }
.budget-grid { grid-template-columns: 1fr 1.5fr 1fr 1fr; }
.venue-grid { grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr; }
.facility-grid { grid-template-columns: 0.5fr 1.5fr 1fr 1fr 1fr; }

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
.small-width { max-width: 300px; }

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* SDG Checkbox Grid */
.sdg-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 40px;
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

/* Checkbox Styles for Tags College */
.checkbox-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
}

.checkbox-item-custom {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-weight: normal;
    color: #718096;
    font-size: 0.95rem;
    margin-bottom: 0;
}

.checkbox-item-custom input {
    display: none;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
}

.checkbox-item-custom input:checked + .checkmark {
    background-color: #3b82f6;
    border-color: #3b82f6;
}

.checkbox-item-custom input:checked + .checkmark::after {
    content: '\2713';
    color: white;
    font-size: 14px;
}

.checkbox-item-custom input:checked ~ .checkbox-label {
    color: #000;
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

.review-label-small {
    font-size: 0.85rem;
    font-weight: bold;
    color: #1a1a1a;
    margin: 15px 0 5px 0;
    display: block;
}

.review-note {
    font-size: 0.85rem;
    color: #718096;
    margin: 5px 0 10px 0;
}

.sig-box {
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    height: 45px;
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
    .program-grid, .budget-grid, .venue-grid, .facility-grid, .participants-grid {
        grid-template-columns: 1fr;
    }
}
</style>