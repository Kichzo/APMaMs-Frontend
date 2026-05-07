<template>
  <div class="create-report-form">
    <div class="form-header">
      <h2>Create Accomplishment Report</h2>
    </div>

    <form class="report-form" @submit.prevent="submitForm">
      <!-- Basic Information -->
      <section class="form-section">
        <h3 class="section-title">
          <i class="fas fa-info-circle"></i> Basic Information
        </h3>
        <div class="form-grid">
          <div class="form-group">
            <label>Activity Title *</label>
            <input type="text" placeholder="Enter activity title" required />
          </div>
          <div class="form-group">
            <label>Office Code *</label>
            <input type="text" placeholder="e.g. OSA-2025-001" required />
          </div>
          <div class="form-group">
            <label>Unit/College *</label>
            <input type="text" placeholder="Enter unit or college" required />
          </div>
          <div class="form-group">
            <label>Department *</label>
            <input type="text" placeholder="Enter department" required />
          </div>
          <div class="form-group">
            <label>Result Code/OPCR/IPCR Code *</label>
            <input type="text" placeholder="e.g. OPCR-SX-2025-Q1" required />
          </div>
          <div class="form-group">
            <label>Date of Implementation *</label>
            <div class="input-with-icon">
              <input type="text" placeholder="dd/mm/yyyy" required />
              <i class="far fa-calendar-alt"></i>
            </div>
          </div>
          <div class="form-group">
            <label>Date Prepared *</label>
            <div class="input-with-icon">
              <input type="text" placeholder="dd/mm/yyyy" required />
              <i class="far fa-calendar-alt"></i>
            </div>
          </div>
          <div class="form-group">
            <label>Venue *</label>
            <input type="text" placeholder="Enter venue" required />
          </div>
          <div class="form-group">
            <label>Proposed Budget *</label>
            <input type="text" placeholder="Enter amount" required />
          </div>
          <div class="form-group">
            <label>Budget Source *</label>
            <input type="text" placeholder="e.g. Student Development Fund" required />
          </div>
        </div>
      </section>

      <!-- Objectives and Narrative -->
      <section class="form-section">
        <h3 class="section-title">
          <i class="far fa-file-alt"></i> Objectives and Narrative
        </h3>
        <div class="form-group full-width">
          <label>Objectives *</label>
          <input type="text" placeholder="Objective 1" required />
          <button type="button" class="btn-text-add"><i class="fas fa-plus"></i> Add Objectives</button>
        </div>
        <div class="form-group full-width">
          <label>Narrative Report *</label>
          <textarea placeholder="Provide a detailed narrative of the activity implementation" rows="5" required></textarea>
          <span class="char-count">0/5000 characters</span>
        </div>
      </section>

      <!-- Actual Accomplishment -->
      <section class="form-section">
        <h3 class="section-title">
          <i class="fas fa-table"></i> Actual Accomplishment
        </h3>
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
                <td><input type="text" placeholder="Enter objective" /></td>
                <td><input type="text" placeholder="Expected Output" /></td>
                <td><input type="text" placeholder="Actual Result" /></td>
                <td>
                  <select>
                    <option>4 - Outstanding</option>
                    <option>3 - Very Satisfactory</option>
                    <option>2 - Satisfactory</option>
                    <option>1 - Poor</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn-add-row"><i class="fas fa-plus"></i> Add Row</button>
      </section>

      <!-- Photo Documentation -->
      <section class="form-section">
        <h3 class="section-title">
          <i class="far fa-image"></i> Photo Documentation
        </h3>
        <div class="upload-area">
          <div class="upload-icon">
            <i class="fas fa-cloud-upload-alt"></i>
          </div>
          <p class="upload-title">Click to upload photos</p>
          <p class="upload-subtitle">PNG, JPG up to 10MB each</p>
        </div>
      </section>

      <!-- Evaluations and Remarks -->
      <section class="form-section">
        <h3 class="section-title">
          <i class="far fa-clipboard"></i> Evaluations and Remarks
        </h3>
        <div class="form-group full-width">
          <label>Summary of Evaluations *</label>
          <textarea placeholder="Summarize participants evaluations and feedback" rows="4" required></textarea>
          <span class="char-count">0/5000 characters</span>
        </div>
        <div class="form-group full-width">
          <label>Remarks/Comments/Suggestion *</label>
          <textarea placeholder="Provide remarks, comments, or suggestions" rows="4" required></textarea>
          <span class="char-count">0/5000 characters</span>
        </div>
        <div class="form-group full-width">
          <label>Next Steps/ Plan of Action *</label>
          <textarea placeholder="Outline next steps and action plans" rows="4" required></textarea>
          <span class="char-count">0/5000 characters</span>
        </div>
        <div class="form-group full-width">
          <label>Attachments (Optional)</label>
          <div class="upload-area">
            <div class="upload-icon default-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </div>
            <p class="upload-title">Click to upload or drag and drop</p>
            <p class="upload-subtitle">PDF, DOC, DOCX, XLS, XLSX, PNG, JPG (max 10MB)</p>
          </div>
        </div>
      </section>

      <!-- Signatories -->
      <section class="form-section">
        <h3 class="section-title">
          <i class="fas fa-users"></i> Signatories
        </h3>
        <div class="form-grid three-cols">
          <div class="form-group">
            <label>Prepared By *</label>
            <input type="text" placeholder="Name and Position" required />
          </div>
          <div class="form-group">
            <label>Reviewed By *</label>
            <input type="text" placeholder="Name and Position" required />
          </div>
          <div class="form-group">
            <label>Evaluated By *</label>
            <input type="text" placeholder="Name and Position" required />
          </div>
        </div>
      </section>

      <!-- Form Actions -->
      <div class="form-actions">
        <button type="submit" class="btn-submit">
          <i class="far fa-paper-plane"></i> Submit for Approval
        </button>
        <button type="button" class="btn-cancel-action" @click="$emit('cancel')">Cancel</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateReport',
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted');
    }
  }
}
</script>

<style scoped>
.create-report-form {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  margin-top: 24px;
}

.form-header h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  color: #0f172a;
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.form-section {
  margin-bottom: 32px;
}

.section-title {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  color: #0f172a;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title i {
  font-size: 1.1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-grid.three-cols {
  grid-template-columns: 1fr 1fr 1fr;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group.full-width {
  width: 100%;
  margin-bottom: 20px;
}

label {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
}

input[type="text"],
textarea,
select {
  font-family: Arial, sans-serif;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus,
textarea:focus,
select:focus {
  border-color: #3b82f6;
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon input {
  width: 100%;
  padding-right: 36px;
}

.input-with-icon i {
  position: absolute;
  right: 12px;
  color: #0f172a;
  font-size: 1rem;
}

.btn-text-add {
  background: none;
  border: none;
  color: #3b82f6;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  width: fit-content;
}

.char-count {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #94a3b8;
  text-align: left;
}

/* Table */
.table-container {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
}

.accomplishment-table {
  width: 100%;
  border-collapse: collapse;
}

.accomplishment-table th {
  background: #f1f5f9;
  padding: 12px 16px;
  text-align: left;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
  border-bottom: 1px solid #e2e8f0;
}

.accomplishment-table td {
  padding: 12px 16px;
}

.accomplishment-table td input,
.accomplishment-table td select {
  width: 100%;
}

.btn-add-row {
  background: #0a21c0;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Upload Area */
.upload-area {
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  cursor: pointer;
  transition: background 0.2s;
}

.upload-area:hover {
  background: #f1f5f9;
}

.upload-icon {
  width: 48px;
  height: 48px;
  background: #e0e7ff;
  color: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.upload-icon.default-icon {
  background: #f1f5f9;
  color: #64748b;
}

.upload-title {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #334155;
  margin: 0 0 4px 0;
}

.upload-subtitle {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #94a3b8;
  margin: 0;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 40px;
}

.btn-submit {
  background: #0a21c0;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-cancel-action {
  background: #fff;
  border: 1px solid #cbd5e1;
  color: #475569;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
