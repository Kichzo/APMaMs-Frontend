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
          <p>Activity Accomplishment Report</p>
        </div>
      </div>
      <div class="header-right">
        <template v-if="userRole === 'org'">
          <button class="btn-download"><i class="fas fa-download"></i> Download</button>
          <button class="btn-edit" @click="isEditModalVisible = true">Edit Report</button>
        </template>
        <template v-else>
          <button class="btn-reject" @click="handleReject"><i class="fas fa-times-circle"></i> Reject</button>
          <button class="btn-approve" @click="handleApprove"><i class="fas fa-check-circle"></i> Approve</button>
        </template>
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
          <h3 class="section-title">Objectives</h3>
          <ul class="check-list blue-check">
            <li><i class="fas fa-check-circle"></i> Develop strategic thinking and planning skills among student leaders</li>
            <li><i class="fas fa-check-circle"></i> Enhance team management and collaboration capabilities</li>
            <li><i class="fas fa-check-circle"></i> Improve communication and public speaking abilities</li>
            <li><i class="fas fa-check-circle"></i> Foster ethical leadership and decision-making skills</li>
          </ul>
        </div>

        <div class="section-card">
          <h3 class="section-title">Narrative Report</h3>
          <p class="section-text">
            This comprehensive leadership training workshop is designed to enhance the leadership capabilities of student officers across all organizations. The program covers essential topics including strategic planning, team management, conflict resolution, effective communication, and ethical leadership. Participants will engage in interactive sessions, case studies, and practical exercises to develop their leadership skills.
          </p>
        </div>

        <div class="section-card">
          <h3 class="section-title">Activity Accomplishment Rating</h3>
          <div class="table-container">
            <table class="accomplishment-table">
              <thead>
                <tr>
                  <th>Objective</th>
                  <th>Expected Output</th>
                  <th>Actual Accomplishment</th>
                  <th>Rating (1-4)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div class="placeholder-box"></div></td>
                  <td><div class="placeholder-box"></div></td>
                  <td><div class="placeholder-box"></div></td>
                  <td><div class="placeholder-box"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Photo Documentation</h3>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Summary of Evaluations</h3>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Remarks/Comments/Suggestion</h3>
        </div>

        <div class="section-card empty-card">
          <h3 class="section-title">Next Steps/Plan of Action</h3>
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
            
            <p class="sub-label" style="margin-top: 12px;">Reviewed By:</p>
            <p class="sub-value">Al Christian L. Molina</p>
            <p class="sub-date">30/12/2025</p>
            
            <p class="sub-label" style="margin-top: 12px;">Evaluated By:</p>
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

    <!-- Signature Modal -->
    <SignatureModal 
      v-if="showSignatureModal" 
      @close="showSignatureModal = false" 
      @submit="handleSignatureSubmit"
    />

    <!-- Reject Modal -->
    <RejectModal 
      v-if="showRejectModal" 
      @close="showRejectModal = false" 
      @submit="handleRejectSubmit"
    />

  </div>
</template>

<script>
import SignatureModal from '/src/components/Approval/SignatureModal.vue';
import RejectModal from '/src/components/Approval/RejectModal.vue';

export default {
  name: 'ReportAccomplishment',
  components: {
    SignatureModal,
    RejectModal
  },
  props: ['userRole'],
  data() {
    return {
      isEditModalVisible: false,
      showSignatureModal: false,
      showRejectModal: false
    }
  },
  methods: {
    handleSendEdit() {
      // Add send logic here
      this.isEditModalVisible = false;
      alert('Edit request sent!');
    },
    handleApprove() {
      this.showSignatureModal = true;
    },
    handleSignatureSubmit(data) {
      console.log('Signature submitted:', data);
      this.showSignatureModal = false;
      alert('Report Approved successfully!');
    },
    handleReject() {
      this.showRejectModal = true;
    },
    handleRejectSubmit(data) {
      console.log('Rejection submitted:', data);
      this.showRejectModal = false;
      alert('Report Rejected!');
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

.btn-approve {
  background: #22c55e;
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-approve:hover {
  background: #16a34a;
}

.btn-reject {
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-reject:hover {
  background: #dc2626;
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
  padding-bottom: 100px;
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

/* Table */
.table-container {
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  overflow: hidden;
}

.accomplishment-table {
  width: 100%;
  border-collapse: collapse;
}

.accomplishment-table th {
  background: #dbeafe; /* Light blue header */
  padding: 10px 12px;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #1e3a8a;
  border-bottom: 1px solid #bfdbfe;
}

.accomplishment-table th:not(:last-child) {
  border-right: 1px solid #bfdbfe;
}

.accomplishment-table td {
  padding: 8px 12px;
  border-right: 1px solid #e2e8f0;
}

.accomplishment-table td:last-child {
  border-right: none;
}

.placeholder-box {
  height: 24px;
  background-color: #e2e8f0;
  border-radius: 4px;
  width: 100%;
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
