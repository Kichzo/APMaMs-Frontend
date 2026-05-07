<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      
      <!-- Header -->
      <div class="modal-header">
        <div class="header-icon">
          <div class="icon-circle">
            <i class="fas fa-exclamation"></i>
          </div>
        </div>
        <div class="header-text">
          <h2>Reject Activity</h2>
          <p>You are about to reject: <strong>{{ activityTitle }}</strong></p>
        </div>
      </div>
      
      <div class="divider"></div>

      <!-- Body -->
      <div class="modal-body">
        <div class="form-group">
          <label>Reason for Rejection <span class="required">*</span></label>
          <textarea 
            v-model="reason" 
            placeholder="Please provide a detailed reason for rejecting this activity"
            maxlength="500"
            rows="6"
          ></textarea>
          <div class="char-count">{{ reason.length }}/500</div>
        </div>

        <div class="form-group inline-group">
          <label>Rejected By:</label>
          <input type="text" v-model="rejectedBy" placeholder="Enter name" />
        </div>
      </div>

      <div class="divider"></div>

      <!-- Footer -->
      <div class="modal-footer">
        <button class="btn-cancel" @click="$emit('close')">Cancel</button>
        <button class="btn-confirm" @click="handleConfirm">Confirm Rejection</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'RejectModal',
  props: {
    activityTitle: {
      type: String,
      default: 'Activity Title'
    }
  },
  data() {
    return {
      reason: '',
      rejectedBy: ''
    }
  },
  methods: {
    handleConfirm() {
      if (!this.reason.trim()) {
        alert("Please provide a reason for rejection.");
        return;
      }
      if (!this.rejectedBy.trim()) {
        alert("Please enter the name of the person rejecting.");
        return;
      }
      this.$emit('submit', {
        reason: this.reason,
        rejectedBy: this.rejectedBy
      });
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
  backdrop-filter: blur(2px);
}

.modal-card {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Header */
.modal-header {
  display: flex;
  align-items: center;
  padding: 24px 30px;
  gap: 16px;
}

.header-icon {
  background-color: #fca5a5; /* Light red */
  border-radius: 12px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.icon-circle {
  border: 2px solid #991b1b; /* Dark red border */
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #991b1b;
  font-weight: bold;
  font-size: 1.1rem;
}

.header-text h2 {
  margin: 0 0 4px 0;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  color: #0f172a;
  font-weight: 700;
}

.header-text p {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #0f172a;
  font-weight: 600;
}

.divider {
  height: 1px;
  background-color: #e2e8f0;
  width: 100%;
}

/* Body */
.modal-body {
  padding: 24px 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.required {
  color: #ef4444;
}

textarea {
  width: 100%;
  padding: 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #334155;
  resize: none;
  box-sizing: border-box;
}

textarea:focus {
  outline: none;
  border-color: #94a3b8;
  box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.2);
}

textarea::placeholder {
  color: #94a3b8;
}

.char-count {
  text-align: right;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 6px;
  font-weight: 600;
}

/* Inline Group for Rejected By */
.inline-group {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 0;
}

.inline-group label {
  margin-bottom: 0;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
}

.inline-group input {
  flex: 1;
  max-width: 250px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #334155;
}

.inline-group input:focus {
  outline: none;
  border-color: #94a3b8;
  box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.2);
}

/* Footer */
.modal-footer {
  padding: 24px 30px;
  display: flex;
  gap: 16px;
  justify-content: center;
}

.modal-footer button {
  flex: 1;
  padding: 14px 24px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.btn-cancel {
  background-color: #e5e7eb;
  color: #0f172a;
}

.btn-cancel:hover {
  background-color: #d1d5db;
}

.btn-confirm {
  background-color: #c23321;
  color: white;
}

.btn-confirm:hover {
  background-color: #a02a1b;
}
</style>
