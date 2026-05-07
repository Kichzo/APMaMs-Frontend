<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <!-- Header -->
      <div class="modal-header">
        <div class="header-text">
          <h2>Select Approved DAD</h2>
          <p>Select an approved detailed design activity for accomplishment report</p>
        </div>
        <button class="btn-close" @click="$emit('close')"><i class="fas fa-times"></i></button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <p class="section-title">Activities Selected </p>
        
        <div class="activities-list">
          <div 
            v-for="activity in activities" 
            :key="activity.id"
            class="activity-item" 
            :class="{ selected: selectedActivityId === activity.id }"
            @click="selectedActivityId = activity.id"
          >
            <div class="icon-container">
              <i class="far fa-file-alt"></i>
            </div>
            <div class="activity-details">
              <div class="title-row">
                <h3>{{ activity.title }}</h3>
                <span v-if="activity.status" class="status-badge approved">{{ activity.status }}</span>
              </div>
              <div class="info-row">
                <span class="info-item"><i class="far fa-calendar"></i> {{ activity.date }}</span>
                <span v-if="activity.participants" class="info-item"><i class="fas fa-user-friends"></i> {{ activity.participants }}</span>
                <span v-else class="info-item"><i class="fas fa-user-friends"></i></span>
                <span class="info-item"><i class="fas fa-coins"></i> {{ activity.budget }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <button class="btn-cancel" @click="$emit('close')">Cancel</button>
        <button class="btn-save" @click="$emit('create')">Create Report</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateNewReport',
  data() {
    return {
      selectedActivityId: 1,
      activities: [
        {
          id: 1,
          title: 'First SSC Regular Meeting',
          status: 'Approved',
          date: '05/01/2026 - 09/01/2026',
          participants: '50 participants',
          budget: '5,000'
        },
        {
          id: 2,
          title: 'SSC Legislative Meeting',
          status: 'Approved',
          date: '02/02/2026 - 06/02/2026',
          participants: '50 participants',
          budget: '5,000'
        },
        {
          id: 3,
          title: 'Coordination in the conduct of the National Arts Month Celebration',
          status: 'Approved',
          date: '01/02/2026 - 28/02/2026',
          participants: '100 participants',
          budget: '7,500'
        },
        {
          id: 4,
          title: 'FEMSUSSCO General Assembly',
          status: 'Approved',
          date: '16/02/2026 - 20/02/2026',
          participants: '',
          budget: '19,400'
        }
      ]
    }
  }
}
</script>

<style scoped>
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

.modal-content {
  background: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.header-text h2 {
  font-family: Arial, sans- serif;
  font-size: 1.5rem;
  margin: 0;
  color: #0f172a;
}

.header-text p {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #475569;
  margin: 6px 0 0 0;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #64748b;
  cursor: pointer;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.section-title {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 350px;
  overflow-y: auto;
  padding-right: 4px;
}

/* Optional: Custom scrollbar styling for a cleaner look */
.activities-list::-webkit-scrollbar {
  width: 6px;
}
.activities-list::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}
.activities-list::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.activities-list::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.activity-item:hover:not(.selected) {
  background-color: #f8fafc;
}

.activity-item.selected {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

.icon-container {
  width: 36px;
  height: 36px;
  background-color: #e0e7ff;
  color: #3b82f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 1.2rem;
}

.activity-item:not(.selected) .icon-container {
  background-color: #f1f5f9;
  color: #3b82f6;
}

.activity-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.title-row h3 {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
}

.status-badge {
  font-family: Arial, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
}

.status-badge.approved {
  background-color: #dcfce7;
  color: #16a34a;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.info-item {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
}

.btn-cancel {
  font-family: Arial, sans-serif;
  background: #fff;
  border: 1px solid #cbd5e1;
  color: #475569;
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-save {
  font-family: Arial, sans-serif;
  background: #0a21c0; /* Green */
  border: none;
  color: #fff;
  padding: 10px 32px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
