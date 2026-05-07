<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">&times;</button>
      
      <div class="modal-header">
        <div class="icon-box">
          <i class="fas fa-city"></i>
        </div>
        <div class="header-info">
          <h2>{{ org.name }}</h2>
          <span class="status-badge">Registered</span>
          <div class="reg-number-large">{{ org.regNumber || '1239768504' }}</div>
        </div>
      </div>

      <div class="modal-tabs">
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'Overview' }"
          @click="activeTab = 'Overview'">
          Overview
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'Members' }"
          @click="activeTab = 'Members'">
          Members
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'Attachments' }"
          @click="activeTab = 'Attachments'">
          Attachments
        </button>
      </div>

      <div class="tab-content" v-if="activeTab === 'Overview'">
        <div class="info-grid">
          <div class="info-panel left-panel">
            <div class="info-group">
              <span class="label">Name of Organization:</span>
              <span class="value">{{ org.name }}</span>
            </div>
            
            <div class="info-group">
              <span class="label">Registration Number:</span>
              <span class="value">{{ org.regNumber || '1239768504' }}</span>
            </div>
            
            <div class="info-group">
              <span class="label">Date of Application:</span>
              <span class="value">January 08, 2025</span>
            </div>
            
            <div class="info-group">
              <span class="label">Nature of Organization:</span>
              <span class="value">Academic Related</span>
            </div>
          </div>
          
          <div class="info-panel right-panel">
            <div class="info-group">
              <span class="label">Objectives of the Organization</span>
              <!-- Empty space for objectives -->
            </div>
          </div>
        </div>
      </div>
      
      <!-- Members Tab Content -->
      <div class="tab-content members-tab" v-if="activeTab === 'Members'">
        <div class="members-header">
          <div class="member-col">Name</div>
          <div class="member-col">Contact Number</div>
        </div>
        <div class="members-list">
          <div class="member-row" v-for="(member, idx) in membersList" :key="idx">
            <div class="member-col">{{ member.name }}</div>
            <div class="member-col">{{ member.contact }}</div>
          </div>
        </div>
      </div>
      
      <!-- Attachments Tab Content -->
      <div class="tab-content attachments-tab" v-if="activeTab === 'Attachments'">
        <div class="attachments-container">
          <div class="attachment-item" v-for="(file, idx) in attachmentsList" :key="idx">
            <div class="attachment-left">
              <div class="file-icon-wrapper">
                <i class="far fa-file-alt"></i>
              </div>
              <span class="file-name">{{ file }}</span>
            </div>
            <div class="attachment-actions">
              <i class="fas fa-download action-icon"></i>
              <i v-if="role === 'admin'" class="fas fa-trash action-icon"></i>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'OrgProfileModal',
  props: {
    org: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      activeTab: 'Overview',
      membersList: [
        { name: 'Al Christian L. Molina', contact: '0934-546-6789' },
        { name: 'Kian Christian S. Estenzo', contact: '0934-546-6789' },
        { name: 'Hazel Anne P. Mapula', contact: '0934-546-6789' },
        { name: 'Pya Sue Sacay', contact: '0934-546-6789' },
        { name: 'Joanna Kristel Asagra', contact: '0934-546-6789' },
        { name: 'Louren Mar Chio', contact: '0934-546-6789' },
        { name: 'Vale Sayniel Junio', contact: '0934-546-6789' },
        { name: 'Enelrad Cuteron', contact: '0934-546-6789' },
      ],
      attachmentsList: [
        'SSC CBL',
        'Revision of Vision and Mission',
        'List of Members',
        'Activities and Projects with Budgetary Requirements 2026',
        'Financial Statement 2025',
        'Accomplishment Report 2025'
      ]
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  padding: 40px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 25px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #111827;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  margin-bottom: 30px;
}

.icon-box {
  width: 70px;
  height: 70px;
  background: #0052cc;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
}

.header-info h2 {
  margin: 0 0 10px 0;
  font-size: 1.8rem;
  color: #111827;
}

.status-badge {
  background: #dcfce7;
  color: #166534;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 15px;
}

.reg-number-large {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827;
}

.modal-tabs {
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 30px;
}

.tab-btn {
  background: none;
  border: none;
  padding: 10px 25px;
  font-size: 1rem;
  color: #64748b;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  font-family: Arial, sans-serif;
}

.tab-btn.active {
  color: #2563eb;
  border-bottom-color: #2563eb;
  font-weight: 600;
}

.info-grid {
  display: flex;
  gap: 20px;
}

.info-panel {
  flex: 1;
  background: #f8fafc;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.left-panel {
  flex: 1;
}

.right-panel {
  flex: 1;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-weight: 700;
  color: #111827;
  font-size: 0.95rem;
}

.value {
  color: #334155;
  font-size: 0.95rem;
}

/* Members Tab Styling */
.members-tab {
  padding: 10px 40px;
}

.members-header {
  display: flex;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 25px;
}

.members-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px; /* Space for the scrollbar */
}

.member-row {
  display: flex;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #111827;
  font-weight: 600;
}

.member-col {
  flex: 1;
  text-align: center;
}

/* Attachments Tab Styling */
.attachments-tab {
  padding: 10px;
}

.attachments-container {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 320px;
  margin: 0 auto;
  width: 95%;
}

.attachment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid #cbd5e1;
}

.attachment-item:last-child {
  border-bottom: none;
}

.attachment-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.file-icon-wrapper {
  width: 38px;
  height: 38px;
  background: #eff6ff;
  color: #2563eb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
}

.file-name {
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
}

.attachment-actions {
  display: flex;
  gap: 20px;
}

.action-icon {
  cursor: pointer;
  color: #111827;
  font-size: 1.1rem;
}

.action-icon:hover {
  opacity: 0.7;
}
</style>
