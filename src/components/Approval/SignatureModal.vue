<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      
      <!-- Header -->
      <div class="modal-header">
        <h2>Signature Required</h2>
        <button class="btn-close" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="modal-body">
        <!-- Approval Summary Box -->
        <div class="summary-box">
          <div class="summary-icon">
            <i class="fas fa-info-circle"></i>
          </div>
          <div class="summary-text">
            <h4>Approval Summary</h4>
            <p><strong>Approving:</strong> {{ reportTitle }} | {{ reportType }}</p>
            <p><strong>Organization:</strong> {{ organization }}</p>
          </div>
        </div>

        <div class="wet-sig-info-box">
          <div class="wet-sig-header">
            <i class="fas fa-copy"></i>
            <h4>Wet Signature Process</h4>
          </div>
          <ol class="wet-sig-steps">
            <li>The document has been approved successfully.</li>
            <li>The approved document will be printed for physical signing.</li>
            <li>Organization representatives must personally deliver the document to the approvers’ offices for wet signature completion.</li>
          </ol>
        </div>

      </div>

      <!-- Footer Action -->
      <div class="modal-footer">
        <button class="btn-complete" @click="handleSubmit">Complete Approval</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SignatureModal',
  props: {
    reportTitle: {
      type: String,
      default: 'First SSC Regular Meeting'
    },
    reportType: {
      type: String,
      default: 'Activity Accomplishment Report'
    },
    organization: {
      type: String,
      default: 'Supreme Student Council'
    }
  },
  data() {
    return {
      signatureMethod: 'wet',
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        method: this.signatureMethod,
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.modal-card {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 30px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h2 {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  color: #0f172a;
  font-weight: 700;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #64748b;
  cursor: pointer;
  transition: color 0.2s;
}

.btn-close:hover {
  color: #0f172a;
}

.modal-body {
  padding: 24px 30px;
  overflow-y: auto;
  flex: 1;
}

/* Approval Summary Box */
.summary-box {
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.summary-icon {
  color: #1e40af;
  font-size: 1.2rem;
  margin-top: 2px;
}

.summary-text h4 {
  margin: 0 0 8px 0;
  color: #1e40af;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
}

.summary-text p {
  margin: 0 0 4px 0;
  color: #1e40af;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
}

/* Footer */
.modal-footer {
  padding: 20px 30px;
  border-top: 1px solid #e2e8f0;
}

.btn-complete {
  width: 100%;
  background-color: #0a21c0;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-complete:hover {
  background-color: #081a99;
}

.wet-sig-info-box {
  background-color: #d1fae5;
  border: 1px solid #6ee7b7;
  border-radius: 8px;
  padding: 20px 24px;
  margin-top: 10px;
}

.wet-sig-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #16a34a;
  margin-bottom: 16px;
}

.wet-sig-header i {
  font-size: 1.2rem;
}

.wet-sig-header h4 {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
}

.wet-sig-steps {
  margin: 0;
  padding-left: 24px;
  color: #16a34a;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  line-height: 1.8;
  font-weight: 600;
}

.wet-sig-steps li {
  margin-bottom: 4px;
}

</style>
