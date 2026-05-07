<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <!-- Step 1: Initial Warning -->
    <div v-if="currentStep === 1" class="deactivate-modal">
      <div class="modal-header">
        <div class="header-title-section">
          <div class="warning-icon-circle">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div class="header-text">
            <h2>Deactivate User Account</h2>
            <p>This action cannot be undone</p>
          </div>
        </div>
        <button class="close-btn" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <div class="warning-box">
          <div class="warning-box-header">
            <i class="fas fa-exclamation-circle"></i>
            <h3>Warning: Account Deactivate</h3>
          </div>
          <p class="warning-desc">Once you deactivite your account, there is no going back. Please be certain.</p>
          <ul class="warning-list">
            <li><i class="fas fa-times-circle"></i> All your personal information will be permanently deactivate</li>
            <li><i class="fas fa-times-circle"></i> Your activity history and contributions will be removed</li>
            <li><i class="fas fa-times-circle"></i> You will lose access to all organizations and activities</li>
            <li><i class="fas fa-times-circle"></i> This action cannot be reversed or undone</li>
          </ul>
        </div>

        <div class="info-box">
          <div class="info-box-header">
            <i class="fas fa-info-circle"></i>
            <h3>Before You Continue</h3>
          </div>
          <p>We will check if you have any active activities or pending approvals. If you do, you must complete or transfer them before deleting your account.</p>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-cancel" @click="$emit('close')">Cancel</button>
        <button class="btn-deactivate" @click="currentStep = 2">Continue to Deactivate</button>
      </div>
    </div>

    <!-- Step 2: Active Items Found -->
    <div v-else class="deactivate-modal">
      <div class="modal-header">
        <div class="header-title-section">
          <div class="warning-icon-circle yellow">
            <i class="fas fa-exclamation-circle"></i>
          </div>
          <div class="header-text">
            <h2>Continue Deactivate Account</h2>
            <p>You have active items that need attention</p>
          </div>
        </div>
      </div>

      <div class="modal-body">
        <div class="alert-box orange">
          <div class="alert-box-header">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Active Items Found</h3>
          </div>
          <p>Your account cannot be deleted because you have active activities or pending approvals. Please complete or transfer these items before proceeding.</p>
        </div>

        <div class="items-section">
          <h4>Active Activities (2)</h4>
          <div class="item-card">
            <div class="item-info">
              <span class="item-name">Annual Sports Fest 2025</span>
              <span class="item-status">Status: Ongoing</span>
            </div>
            <div class="badge ongoing">Ongoing</div>
          </div>
          <div class="item-card">
            <div class="item-info">
              <span class="item-name">Leadership Training Workshop</span>
              <span class="item-status">Status: Pending</span>
            </div>
            <div class="badge pending">Pending</div>
          </div>
        </div>

        <div class="items-section">
          <h4>Pending Approvals (2)</h4>
          <div class="item-card">
            <div class="item-info">
              <span class="item-name">Budget Request - Science Club</span>
              <span class="item-status">Status: Pending Review</span>
            </div>
            <div class="badge pending-review">Pending Review</div>
          </div>
          <div class="item-card">
            <div class="item-info">
              <span class="item-name">Activity Proposal - Cultural Night</span>
              <span class="item-status">Status: Under Review</span>
            </div>
            <div class="badge under-review">Under Review</div>
          </div>
        </div>

        <div class="info-box blue-info">
          <div class="info-box-header">
            <i class="fas fa-lightbulb"></i>
            <h3>What You Need To Do</h3>
          </div>
          <ul class="todo-list">
            <li><i class="far fa-check-circle"></i> Complete all ongoing activities</li>
            <li><i class="far fa-check-circle"></i> Review and process all pending approvals</li>
            <li><i class="far fa-check-circle"></i> Transfer responsibilities to another member if needed</li>
            <li><i class="far fa-check-circle"></i> Once everything is cleared, you can delete your account</li>
          </ul>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-understand" @click="$emit('close')">I Understand</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeactivateUser',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentStep: 1
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
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.deactivate-modal {
  background: white;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalScale 0.3s ease-out;
}

@keyframes modalScale {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal-header {
  padding: 24px 32px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title-section {
  display: flex;
  gap: 16px;
  align-items: center;
}

.warning-icon-circle {
  width: 44px;
  height: 44px;
  background-color: #fee2e2;
  color: #ef4444;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
}

.warning-icon-circle.yellow {
  background-color: #fef9c3;
  color: #ca8a04;
}

.header-text h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #1e293b;
}

.header-text p {
  margin: 4px 0 0;
  font-size: 0.875rem;
  color: #64748b;
}

.close-btn {
  background: none;
  border: none;
  color: #64748b;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #1e293b;
}

.modal-body {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  overflow-y: auto;
}

/* Warning & Alert Boxes */
.warning-box, .alert-box {
  border-radius: 12px;
  padding: 24px;
}

.warning-box {
  background-color: #fef2f2;
  border: 1px solid #fee2e2;
}

.alert-box.orange {
  background-color: #fff7ed;
  border: 1px solid #ffedd5;
}

.warning-box-header, .alert-box-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.warning-box-header { color: #b91c1c; }
.alert-box-header { color: #9a3412; }

.warning-box-header h3, .alert-box-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.warning-desc, .alert-box p {
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
}

.warning-desc { color: #b91c1c; }
.alert-box.orange p { color: #9a3412; }

/* Lists */
.warning-list, .todo-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.warning-list li, .todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 500;
}

.warning-list li { color: #b91c1c; }
.todo-list li { color: #1e40af; }

/* Item Sections */
.items-section h4 {
  font-size: 0.9rem;
  color: #1e293b;
  margin: 0 0 12px 0;
  font-weight: 700;
}

.item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 10px;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
}

.item-status {
  color: #64748b;
  font-size: 0.85rem;
}

/* Badges */
.badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.badge.ongoing { background: #fee2e2; color: #991b1b; }
.badge.pending { background: #fef9c3; color: #854d0e; }
.badge.pending-review { background: #fce7f3; color: #9d174d; }
.badge.under-review { background: #fee2e2; color: #991b1b; }

/* Info Boxes */
.info-box {
  border-radius: 12px;
  padding: 24px;
}

.info-box.blue-info {
  background-color: #eff6ff;
  border: 1px solid #dbeafe;
}

.info-box-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1e40af;
  margin-bottom: 10px;
}

.info-box-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.info-box p {
  color: #1e40af;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

/* Actions */
.modal-actions {
  padding: 24px 32px 32px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  border-top: 1px solid #f1f5f9;
}

.btn-cancel {
  padding: 12px 32px;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  cursor: pointer;
  min-width: 120px;
}

.btn-deactivate {
  padding: 12px 32px;
  background-color: #c22910;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.btn-understand {
  padding: 14px 48px;
  background-color: #001fcc;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
}

.btn-understand:hover { background-color: #0019a3; }

@media (max-width: 640px) {
  .modal-actions { flex-direction: column; }
  .btn-cancel, .btn-deactivate, .btn-understand { width: 100%; }
}
</style>
