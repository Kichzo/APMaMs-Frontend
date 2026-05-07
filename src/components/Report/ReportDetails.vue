<template>
  <div class="report-details-container">
    <!-- Header -->
    <div class="details-header">
      <div class="header-left">
        <button class="btn-back" @click="$emit('back')">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="title-group">
          <h2>First SSC Regular Meeting</h2>
          <p>Detailed Activity Design</p>
        </div>
      </div>
      <div class="header-right">
        <button class="btn-download"><i class="fas fa-download"></i> Download</button>
        <button class="btn-edit" @click="isEditModalVisible = true">Edit Activity</button>
      </div>
    </div>

    <!-- Content Layout -->
    <div class="details-content">
      <!-- Left Column -->
      <div class="left-column">
        
        <!-- Info Grid -->
        <div class="info-grid">
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-building"></i></div>
            <div class="info-text">
              <span class="info-label">Office Code</span>
              <span class="info-value">OVCSAS-OSD-SSC</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="far fa-calendar-alt"></i></div>
            <div class="info-text">
              <span class="info-label">Date Prepared</span>
              <span class="info-value">05/01/2026 - 09/01/2026</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="far fa-building"></i></div>
            <div class="info-text">
              <span class="info-label">Unit/College</span>
              <span class="info-value">Supreme Student Council</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="info-text">
              <span class="info-label">Venue</span>
              <span class="info-value">OSD-SSC Office</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-qrcode"></i></div>
            <div class="info-text">
              <span class="info-label">Result Code/OPCR/IPCR Code</span>
              <span class="info-value"></span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-coins"></i></div>
            <div class="info-text">
              <span class="info-label">Proposed Budget</span>
              <span class="info-value">₱5,000</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="far fa-calendar-check"></i></div>
            <div class="info-text">
              <span class="info-label">Date of Implementation</span>
              <span class="info-value">09/01/2026</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-wallet"></i></div>
            <div class="info-text">
              <span class="info-label">Budget Source</span>
              <span class="info-value">OSD-01 - LEADERSHIP AND SKILLS<br>DEVELOPMENT TRAINING</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="far fa-envelope"></i></div>
            <div class="info-text">
              <span class="info-label">Email Address</span>
              <span class="info-value">ssc@msumaawan.edu.ph</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="far fa-clock"></i></div>
            <div class="info-text">
              <span class="info-label">Duration</span>
              <span class="info-value">5 days</span>
            </div>
          </div>
        </div>

        <!-- Sections -->
        <div class="section-card">
          <h3 class="section-title">Rationale</h3>
          <p class="section-text">
            This comprehensive leadership training workshop is designed to enhance the leadership capabilities of student officers across all organizations. The program covers essential topics including strategic planning, team management, conflict resolution, effective communication, and ethical leadership. Participants will engage in interactive sessions, case studies, and practical exercises to develop their leadership skills.
          </p>
        </div>

        <div class="section-card">
          <h3 class="section-title">Objectives</h3>
          <ul class="check-list blue-check">
            <li><i class="fas fa-check-circle"></i> Develop strategic thinking and planning skills among student leaders</li>
            <li><i class="fas fa-check-circle"></i> Enhance team management and collaboration capabilities</li>
            <li><i class="fas fa-check-circle"></i> Improve communication and public speaking abilities</li>
            <li><i class="fas fa-check-circle"></i> Foster ethical leadership and decision-making skills</li>
          </ul>
        </div>

        <div class="section-card">
          <h3 class="section-title">Expected Output</h3>
          <ul class="check-list light-blue-check">
            <li><div class="circle-check"></div> Develop strategic thinking and planning skills among student leaders</li>
            <li><div class="circle-check"></div> Enhance team management and collaboration capabilities</li>
            <li><div class="circle-check"></div> Improve communication and public speaking abilities</li>
            <li><div class="circle-check"></div> Foster ethical leadership and decision-making skills</li>
          </ul>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Program of Activities</h3>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Participants</h3>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Budgetary Requirements</h3>
        </div>

        <div class="section-card">
          <h3 class="section-title">Sustainable Development Goals Achieved</h3>
          <div class="sdg-list">
            <label class="sdg-item"><input type="checkbox" disabled /> No Poverty</label>
            <label class="sdg-item"><input type="checkbox" disabled /> Zero Hunger</label>
            <label class="sdg-item"><input type="checkbox" disabled /> Good Health and Well being</label>
            <label class="sdg-item"><input type="checkbox" disabled /> Quality Education</label>
            <label class="sdg-item"><input type="checkbox" disabled /> Gender Equality</label>
            <label class="sdg-item"><input type="checkbox" disabled /> Clean Water and Sanitation</label>
          </div>
        </div>

        <div class="section-card">
          <h3 class="section-title">Comments & Feedback</h3>
          <div class="comment-item">
            <div class="comment-avatar">HAM</div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-name">Miss Beautiful Hazel</span>
                <span class="comment-role">Secy</span>
                <span class="comment-date">29/11/2025</span>
              </div>
              <p class="comment-text">Excellent proposal! The objectives are well-defined and the budget is reasonable. Approved for implementation.</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column -->
      <div class="right-column">
        
        <div class="side-card">
          <h3 class="side-title">Submission Info</h3>
          <div class="submission-details">
            <p class="sub-label">Prepared By:</p>
            <p class="sub-value">Al Christian L. Molina</p>
            <p class="sub-date">30/12/2025</p>
          </div>
        </div>

        <div class="side-card">
          <h3 class="side-title">Approval Status</h3>
          <div class="status-box">
            Waiting...
          </div>
        </div>

        <div class="side-card attachments-card">
          <h3 class="side-title">Attachments</h3>
          <div class="attachment-list">
            <div class="attachment-item">
              <div class="att-icon"><i class="far fa-file-pdf"></i></div>
              <div class="att-info">
                <p class="att-name">Activity Proposal.pdf</p>
                <p class="att-size">2.4 MB • PDF</p>
              </div>
              <button class="btn-download-icon"><i class="fas fa-download"></i></button>
            </div>
            <div class="attachment-item">
              <div class="att-icon"><i class="far fa-file-excel"></i></div>
              <div class="att-info">
                <p class="att-name">Budget Breakdown.xlsx</p>
                <p class="att-size">156 KB • Excel</p>
              </div>
              <button class="btn-download-icon"><i class="fas fa-download"></i></button>
            </div>
            <div class="attachment-item">
              <div class="att-icon"><i class="far fa-file-image"></i></div>
              <div class="att-info">
                <p class="att-name">Venue Layout.png</p>
                <p class="att-size">890 KB • Image</p>
              </div>
              <button class="btn-download-icon"><i class="fas fa-download"></i></button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Edit Request Modal -->
    <div class="modal-overlay" v-if="isEditModalVisible">
      <div class="edit-modal">
        <h3 class="modal-title">Requesting for Edit...</h3>
        <div class="modal-actions">
          <button class="btn-cancel-edit" @click="isEditModalVisible = false">Cancel</button>
          <button class="btn-send-edit" @click="handleSendEdit">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportDetails',
  data() {
    return {
      isEditModalVisible: false
    }
  },
  methods: {
    handleSendEdit() {
      // Add send logic here
      this.isEditModalVisible = false;
      alert('Edit request sent!');
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
}

.empty-card {
  padding-bottom: 80px;
}

.section-title {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  color: #0f172a;
  margin: 0 0 16px 0;
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

.circle-check {
  width: 18px;
  height: 18px;
  background-color: #dbeafe; /* very light blue */
  border-radius: 50%;
}

/* SDG List */
.sdg-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sdg-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #334155;
  font-weight: 600;
}

.sdg-item input[type="checkbox"] {
  width: 16px;
  height: 16px;
}

/* Comments */
.comment-item {
  display: flex;
  gap: 16px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
}

.comment-name {
  font-weight: 700;
  color: #0f172a;
}

.comment-role {
  color: #64748b;
}

.comment-date {
  color: #94a3b8;
  margin-left: auto;
}

.comment-text {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #475569;
  margin: 0;
  line-height: 1.5;
}

/* Right Column Cards */
.side-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
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

.status-box {
  background-color: #f8fafc;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}

/* Attachments */
.attachment-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.attachment-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #eff6ff;
  border-radius: 8px;
}

.att-icon {
  width: 36px;
  height: 36px;
  background-color: #dbeafe;
  color: #3b82f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.att-info {
  flex: 1;
}

.att-name {
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 2px 0;
}

.att-size {
  font-family: Arial, sans-serif;
  font-size: 0.7rem;
  color: #64748b;
  margin: 0;
}

.btn-download-icon {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 1rem;
}

.btn-download-icon:hover {
  color: #334155;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.edit-modal {
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 30px 0;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn-cancel-edit {
  background: #eef2ff;
  color: #0f172a;
  border: none;
  padding: 10px 32px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-cancel-edit:hover {
  background: #e0e7ff;
}

.btn-send-edit {
  background: #0a21c0;
  color: white;
  border: none;
  padding: 10px 32px;
  border-radius: 20px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-send-edit:hover {
  background: #081a99;
}
</style>
