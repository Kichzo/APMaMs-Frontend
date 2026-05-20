<template>
    <div class="report-details-container">
        <!-- HEADER -->
        <header class="details-header">
            <div class="header-left">
                <!-- Clean Back Arrow (Matches Wizard) -->
                <button class="btn-back" @click="$emit('back')">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="title-group">
                    <h2>First SSC Regular Meeting</h2>
                    <p>Detailed Activity Design</p>
                </div>
            </div>
            <div class="header-right">
                <button class="btn-download">
                    <i class="fas fa-download"></i> Download
                </button>

                <button v-if="role === 'org'" class="btn-edit" @click="$emit('open-report')">
                    Edit Report
                </button>
            </div>
        </header>

        <div class="details-content">
            <!-- MAIN COLUMN -->
            <div class="left-column">
                <!-- QUICK INFO PILLS (Updated to be more responsive) -->
                <div class="info-grid">
                    <div class="info-item" v-for="(pill, index) in infoPills" :key="index" :class="{'empty-pill': pill.empty}">
                        <template v-if="!pill.empty">
                            <div class="info-icon"><i :class="pill.icon"></i></div>
                            <div class="info-text">
                                <span class="info-label">{{ pill.label }}</span>
                                <div v-if="pill.type === 'checkbox'" class="checkbox-group">
                                    <span class="info-value">{{ pill.value }}</span>
                                    <div class="check-options">
                                        Yes <input type="checkbox" disabled class="custom-check">
                                        No <input type="checkbox" disabled class="custom-check">
                                    </div>
                                </div>
                                <span class="info-value" v-else>{{ pill.value }}</span>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- CONTENT SECTIONS -->
                <div class="section-card" v-for="section in sections" :key="section.title">
                    <div class="section-header-row">
                        <h3 class="section-title">{{ section.title }}</h3>
                        <button v-if="section.title === 'Comments & Feedback' && (role === 'admin' || role === 'adviser')"
                            class="btn-add-comment" @click="handleAddComment">
                            <i class="fas fa-comment-plus"></i> Add Comment
                        </button>
                    </div>
                    <div class="section-content">
                        <p v-if="section.text" class="section-text">{{ section.text }}</p>
                        <ul v-if="section.list" class="check-list blue-check">
                            <li v-for="item in section.list" :key="item">
                                <i class="fas fa-check-circle"></i> {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- SIDEBAR COLUMN -->
            <aside class="right-column">
                <div class="side-card">
                    <h3 class="side-title">Submission Info</h3>
                </div>

                <div class="side-card attachments-card">
                    <h3 class="side-title">Attachments</h3>
                    <div class="empty-files" style="font-size: 0.85rem; color: #64748b; font-family: Arial, sans-serif;">No files attached</div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'role'],
    computed: {
        infoPills() {
            return [
                { label: 'Activity Title', value: 'First SSC Regular Meeting', icon: 'fas fa-heart-pulse' },
                { label: 'Date Prepared', value: '05/01/2026', icon: 'far fa-calendar-days' },
                { label: 'Office Code', value: 'OVCSAS-OSD-SSC', icon: 'fas fa-border-all' },
                { label: 'Venue', value: 'OSD-SSC Office', icon: 'fas fa-location-dot' },
                { label: 'Unit/College', value: 'Supreme Student Council', icon: 'far fa-building' },
                { label: 'Proposed Budget', value: '₱5,000', icon: 'fas fa-coins' },
                { label: 'Department', value: '', icon: 'far fa-building' },
                { label: 'Budget Source', value: 'OSSD 05- LEADERSHIP AND SKILLS DEVELOPMENT TRAINING', icon: 'far fa-folder' },
                { label: 'Result Code/OPCR/IPCR Code', value: '', icon: 'fas fa-border-all' },
                { label: 'Included in the', value: 'POE', type: 'checkbox', icon: 'fas fa-file-invoice' },
                { label: 'Date of Implementation', value: '', icon: 'far fa-calendar' },
                { label: 'Email Address', value: '', icon: 'far fa-envelope' },
                { empty: true },
                { label: 'Duration (in days)', value: '', icon: 'fas fa-stopwatch' },
            ];
        },
        sections() {
            return [
                { title: 'A. Rationale', text: '' },
                { title: 'B. Objectives', list: ['To evaluate the previous year\'s output and prepare for the 2nd semester\'s student general assembly and Arts Month Celebration'] },
                { title: 'C. Expected Output', list: ['Efficient implementation of planned activities/accomplishment report/attendance sheet'] },
                { title: 'D. Detail of Activities', text: '' },
                { title: 'E. Budgetary Requirements', text: '' },
                { title: 'F. Type of Activity', text: '' },
                { title: 'G. Campus Facilities', text: '' },
                { title: 'H. Sustainable Development Goals Achieved', text: '' },
                { title: 'Comments & Feedback', text: '' }
            ];
        }
    },
    methods: {
        handleAddComment() {
            alert('Add comment feature coming soon!');
        }
    }
}
</script>

<style scoped>
.report-details-container {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  margin-top: 10px;
  max-width: 1200px;
  margin: 10px auto 0;
  animation: fadeIn 0.3s ease-in-out;
}

/* Header */
.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 24px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-back {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #0f172a;
  cursor: pointer;
}

.title-group h2 {
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  color: #0f172a;
  margin: 0;
  font-weight: 700;
}

.title-group p {
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #475569;
  margin: 4px 0 0 0;
  font-weight: 600;
}

.header-right {
  display: flex;
  gap: 12px;
}

.btn-download {
  background: #fff;
  border: 1px solid #cbd5e1;
  color: #334155;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-edit {
  background: #0a21c0;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
}

/* Layout */
.details-content {
  display: flex;
  gap: 24px;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-column {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 10px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.info-icon {
  width: 44px;
  height: 44px;
  background-color: #fce7f3; /* light pink */
  color: #db2777; /* pink */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 2px;
}

.info-value {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
}

/* Section Cards */
.section-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  background: white;
  min-height: 200px;
}

.section-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.section-title {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  color: #0f172a;
  margin: 0;
  font-weight: 700;
}

.section-text {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
}

/* Lists */
.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.check-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #334155;
  font-weight: 600;
}

.blue-check i {
  color: #3b82f6;
  font-size: 1.1rem;
}

/* Checkbox specific styles */
.checkbox-group {
    display: flex;
    align-items: center;
    gap: 30px;
}

.check-options {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.95rem;
    color: #000;
}

.custom-check {
    width: 20px;
    height: 20px;
    border: 1px solid #cbd5e0;
    border-radius: 2px;
    appearance: none;
    -webkit-appearance: none;
    background: white;
    margin-left: 8px;
    cursor: default;
}

/* Right Column Cards */
.side-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  background: white;
}

.side-title {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  color: #0f172a;
  margin: 0 0 16px 0;
  font-weight: 700;
}

.submission-details {
  font-family: Arial, sans-serif;
}

.sub-label {
  font-size: 0.75rem;
  color: #64748b;
  margin: 0 0 4px 0;
}

.sub-value {
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
}

.sub-date {
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0;
}

/* Empty pill for layout */
.empty-pill {
    visibility: hidden;
}

/* Button Add Comment */
.btn-add-comment {
    background: #eef2ff;
    color: #4361ee;
    border: 1px solid #e0e7ff;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
}

.btn-add-comment:hover {
    background: #4361ee;
    color: white;
}

/* MOBILE FIXES */
@media (max-width: 768px) {
    .details-content {
        flex-direction: column;
    }
    
    .right-column {
        width: 100%;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }
}
</style>