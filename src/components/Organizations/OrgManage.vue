<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="org-manage-modal">
      <div class="modal-header">
        <h2>Add New Organization</h2>
        <button class="close-btn" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <form class="org-form">
          <div class="form-row">
            <div class="form-group">
              <label>Organization Name *</label>
              <input type="text" placeholder="Enter organization name" />
            </div>
            <div class="form-group">
              <label>Registration Number *</label>
              <div class="select-wrapper">
                <select>
                  <option value="" disabled selected>Select category</option>
                  <option>Academic</option>
                  <option>Non-Academic</option>
                </select>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Date of Application *</label>
              <input type="text" placeholder="dd/mm/yyyy" />
            </div>
            <div class="form-group">
              <label>Nature of Organization *</label>
              <div class="select-wrapper">
                <select>
                  <option value="" disabled selected>Select nature of organization</option>
                  <option>Religious</option>
                  <option>Cultural</option>
                  <option>Social</option>
                </select>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div class="form-group full-width">
            <label>Objectives of the organizations *</label>
            <textarea placeholder="Enter the objectives" maxlength="500"></textarea>
            <span class="char-count">0/500</span>
          </div>

          <div class="attachment-section">
            <label>Attachment</label>
            <div class="upload-area">
              <i class="fas fa-cloud-upload-alt upload-icon"></i>
              <p class="upload-text">Click to upload or drag and drop</p>
              <p class="upload-hint">PDF and DOCX</p>
            </div>
          </div>

          <div class="requirements-box">
            <div class="requirements-header">
              <i class="fas fa-info-circle"></i>
              <h3>Requirements to be attached:</h3>
            </div>
            <ul class="requirements-list">
              <li>Amendments of the constitution-and-by-laws (CBL) - if there's any</li>
              <li>Revision of vision-mission statement (if there's any)</li>
              <li>List of current members</li>
              <li>Plan of activities & projects with budgetary requirement for the current school year</li>
              <li>Financial statement of previous semester and photocopy of bankbook</li>
              <li>Accomplishment report of the previous school year</li>
            </ul>
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button class="btn-deactivate">Deactivate Organiazton</button>
        <div class="footer-right">
          <button class="btn-cancel" @click="$emit('close')">Cancel</button>
          <button class="btn-save">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrgManage',
  props: {
    org: {
      type: Object,
      required: false
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

.org-manage-modal {
  background: white;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

.modal-header h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: #64748b;
  font-size: 1.25rem;
  cursor: pointer;
}

.modal-body {
  padding: 32px;
  flex: 1;
  overflow-y: auto;
}

.org-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e293b;
}

.form-group input, 
.form-group select, 
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.char-count {
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 0.8rem;
  color: #64748b;
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-wrapper select {
  width: 100%;
  appearance: none;
  padding-right: 40px;
}

.select-wrapper i {
  position: absolute;
  right: 16px;
  color: #64748b;
  pointer-events: none;
  font-size: 0.8rem;
}

/* Attachment Section */
.attachment-section label {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.upload-area {
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.upload-area:hover {
  background-color: #f8fafc;
}

.upload-icon {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 12px;
}

.upload-text {
  font-weight: 500;
  color: #64748b;
  margin: 0;
}

.upload-hint {
  font-size: 0.8rem;
  color: #94a3b8;
  margin: 4px 0 0 0;
}

/* Requirements Box */
.requirements-box {
  background-color: #eff6ff;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  padding: 24px;
}

.requirements-header {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1e40af;
  margin-bottom: 16px;
}

.requirements-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.requirements-list li {
  position: relative;
  padding-left: 20px;
  color: #1e40af;
  font-size: 0.9rem;
  font-weight: 500;
}

.requirements-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Footer */
.modal-footer {
  padding: 24px 32px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-deactivate {
  padding: 12px 24px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

.footer-right {
  display: flex;
  gap: 12px;
}

.btn-cancel {
  padding: 12px 32px;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
}

.btn-save {
  padding: 12px 32px;
  background-color: #001fcc;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .modal-footer {
    flex-direction: column;
    gap: 16px;
  }
  
  .btn-deactivate, .footer-right {
    width: 100%;
  }
  
  .footer-right {
    flex-direction: column;
  }
}
</style>
