<template>
    <div class="detail-container">
        <!-- HEADER -->
        <header class="view-header">
            <div class="left-head">
                <!-- Clean Back Arrow (Matches Wizard) -->
                <button class="back-arrow-only" @click="$emit('back')">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="header-text">
                    <h1>{{ data.title }}</h1>
                </div>
            </div>
            <div class="right-head">
                <button class="btn-download">
                    <i class="fas fa-download"></i> Download
                </button>

                <button v-if="role === 'org'" class="btn-report-blue" @click="$emit('open-report')">
                    Edit Report
                </button>
            </div>
        </header>

        <div class="report-grid">
            <!-- MAIN COLUMN -->
            <div class="left-column">
                <!-- QUICK INFO PILLS (Updated to be more responsive) -->
                <div class="info-pills-card">
                    <div class="pill" v-for="pill in infoPills" :key="pill.label">
                        <div class="pill-icon"><i :class="pill.icon"></i></div>
                        <div class="pill-data">
                            <label>{{ pill.label }}</label>
                            <span>{{ pill.value }}</span>
                        </div>
                    </div>
                </div>

                <!-- CONTENT SECTIONS -->
                <div class="section-card" v-for="section in sections" :key="section.title">
                    <div class="section-header-row">
                        <h3>{{ section.title }}</h3>
                        <button v-if="section.title === 'Comments & Feedback' && (role === 'admin' || role === 'adviser')"
                            class="btn-add-comment" @click="handleAddComment">
                            <i class="fas fa-comment-plus"></i> Add Comment
                        </button>
                    </div>
                    <div class="section-content">
                        <p v-if="section.text">{{ section.text }}</p>
                        <div v-if="section.list" class="check-list">
                            <div v-for="item in section.list" :key="item" class="check-item">
                                <i class="fas fa-check-circle"></i> {{ item }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SIDEBAR COLUMN -->
            <aside class="right-column">
                <div class="side-card">
                    <h4>Submission Info</h4>
                    <p>Prepared by:<br><strong>Al Christian L. Molina</strong></p>
                    <small>30-12-2023</small>
                </div>
                <div class="side-card">
                    <h4>Approval Status</h4>
                    <div class="status-waiting">Waiting...</div>
                </div>
                <div class="side-card">
                    <h4>Attachments</h4>
                    <div class="empty-files">No files attached</div>
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
                { label: 'Office Code', value: 'OVCSAS-OSD-SSC', icon: 'fas fa-building' },
                { label: 'Date Prepared', value: '05/01/2026 - 09/01/2026', icon: 'fas fa-calendar-alt' },
                { label: 'Unit/College', value: 'Supreme Student Council', icon: 'fas fa-building' },
                { label: 'Venue', value: 'OSD-SSC Office', icon: 'fas fa-map-marker-alt' },
                { label: 'Result Code / OPCR / IPCR Code', value: '', icon: 'fas fa-qrcode' },
                { label: 'Proposed Budget', value: '₱5,000', icon: 'fas fa-wallet' },
                { label: 'Date of Implementation', value: '', icon: 'fas fa-calendar-check' },
                { label: 'Budget Source', value: 'OSKD-01: LEADERSHIP AND SKILLS DEVELOPMENT TRAINING', icon: 'fas fa-folder' },
                { label: 'Email Address', value: '', icon: 'fas fa-envelope' },
                { label: 'Duration', value: '', icon: 'fas fa-clock' },
            ];
        },
        sections() {
            return [
                { title: 'Rationale', text: '' },
                { title: 'Objectives', list: ['To evaluate the previous year\'s output and prepare for the 2nd semester\'s student general assembly and Arts Month Celebration'] },
                { title: 'Expected Output', list: ['Efficient implementation of planned activities/accomplishment report/attendance sheet'] },
                { title: 'Program of Activities', text: '' },
                { title: 'Participants', text: '' },
                { title: 'Budgetary Requirements', text: '' },
                { title: 'Sustainable Development Goals Achieved', text: '' },
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
/* CONTAINER & LAYOUT */
.detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    animation: fadeIn 0.3s ease-in-out;
}

/* DYNAMIC GRID SYSTEM */
.report-grid {
    display: grid;
    /* Sidebar is 320px, but if screen is small, it stacks */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
}

@media (min-width: 1024px) {
    .report-grid {
        grid-template-columns: 1fr 320px;
    }
}

/* HEADER SECTION */
.view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    gap: 20px;
    /* Prevent the entire header from breaking into columns too early */
    flex-wrap: nowrap;
}

.left-head {
    display: flex;
    align-items: center;
    gap: 20px;
    /* Allows title to shrink if needed so buttons stay on the same line */
    min-width: 0;
}

.right-head {
    display: flex !important;
    /* Explicitly use flex */
    flex-direction: row !important;
    /* Force horizontal alignment */
    align-items: center;
    /* Keep them vertically centered */
    gap: 12px;
    /* Space between them */
    flex-wrap: nowrap;
    /* ABSOLUTELY prevent stacking */
    justify-content: flex-end;
    /* Align to the right of the header */
}

/* THE CLEAN ARROW (Matches Wizard) */
.back-arrow-only {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    color: #000;
    display: flex;
    align-items: center;
    padding: 0;
    transition: transform 0.2s;
}


.header-text {
    overflow: hidden;
}

.header-text h1 {
    font-size: clamp(1.2rem, 3vw, 2.2rem);
    font-weight: bold;
    color: #000;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Adds "..." if the title is too long */
}

/* BUTTONS */
.btn-download {
    background: white;
    border: 1px solid #d1d5db;
    color: #374151;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    /* Prevents "Download" text from wrapping */
}

.btn-report-blue {
    background: #001ba0;
    color: white;
    border: none;
    padding: 10px 22px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    /* Prevents "New Report" text from wrapping */
}

.btn-report-blue:hover {
    background: #001580;
}

/* DYNAMIC INFO PILLS */
.info-pills-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    background: white;
    padding: 32px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.pill {
    display: flex;
    gap: 16px;
    align-items: center;
}

.pill-icon {
    width: 44px;
    height: 44px;
    background: #fef2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #be123c;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.pill-data label {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    margin-bottom: 2px;
}

.pill-data span {
    font-weight: 700;
    font-size: 1rem;
    color: #1e293b;
}

/* SECTION CARDS */
.section-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 32px;
    margin-top: 12px;
    min-height: 120px;
}

.section-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.section-card h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
    color: #111827;
}

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

.check-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    color: #374151;
}

.check-item i {
    color: #93c5fd;
    font-size: 1.2rem;
    margin-top: 2px;
}

/* SIDEBAR */
.side-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 20px;
}

.side-card h4 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #111827;
}

/* MOBILE FIXES */
@media (max-width: 768px) {
    .view-header {
        /* Only stack on very small mobile screens */
        flex-wrap: wrap;
    }

    .right-head {
        width: 100%;
        justify-content: flex-start;
        /* Keeps them side-by-side on mobile */
    }
}
</style>