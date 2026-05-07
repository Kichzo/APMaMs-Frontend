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

        <!-- Signature Method -->
        <div class="form-section">
          <label>Select Signature Method <span class="required">*</span></label>
          <div class="method-options">
            <div 
              class="method-card digital-card" 
              :class="{ active: signatureMethod === 'digital' }"
              @click="signatureMethod = 'digital'"
            >
              <div class="method-icon-wrap digital-icon">
                <i class="fas fa-pen"></i>
              </div>
              <h4>Digital Signature</h4>
              <p>Type your full name to sign electronically</p>
            </div>
            
            <div 
              class="method-card wet-card" 
              :class="{ active: signatureMethod === 'wet' }"
              @click="signatureMethod = 'wet'"
            >
              <div class="method-icon-wrap wet-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h4>Wet Signature</h4>
              <p>Print and sign the document manually</p>
            </div>
          </div>
        </div>

        <div v-if="signatureMethod === 'digital'">
          <!-- Full Name Input -->
          <div class="form-section">
            <label>Type your Full Name <span class="required">*</span></label>
            <input type="text" v-model="fullName" placeholder="Enter your full name" class="full-name-input" />
          </div>

          <!-- Signature Options: Draw or Upload -->
          <div class="form-section signature-tabs-section">
            <div class="signature-tabs">
              <button 
                class="sig-tab" 
                :class="{ active: digitalSignatureType === 'draw' }"
                @click="digitalSignatureType = 'draw'"
              >
                <i class="fas fa-pen"></i> Draw Signature
              </button>
              <button 
                class="sig-tab" 
                :class="{ active: digitalSignatureType === 'upload' }"
                @click="digitalSignatureType = 'upload'"
              >
                <i class="fas fa-upload"></i> Upload Signature
              </button>
            </div>
          </div>

          <!-- Signature Canvas -->
          <div class="form-section" v-if="digitalSignatureType === 'draw'">
            <label>Signature <span class="required">*</span></label>
            <div class="signature-canvas-container">
              <!-- Real canvas could go here -->
              <canvas ref="sigCanvas" class="sig-canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" @mouseleave="stopDrawing"></canvas>
              
              <div class="canvas-actions">
                <button class="btn-save-sig">Save</button>
                <button class="btn-clear-sig" @click="clearSignature">Clear</button>
              </div>
            </div>
          </div>

          <!-- Signature Upload -->
          <div class="form-section" v-if="digitalSignatureType === 'upload'">
            <label>Upload Signature <span class="required">*</span></label>
            <div class="upload-container">
              <input type="file" id="sigUpload" accept="image/*" class="sig-upload-input" @change="handleFileUpload" />
              <label for="sigUpload" class="upload-label">
                <div v-if="!uploadedSignature" class="upload-prompt">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <span>Click to upload or drag and drop</span>
                  <p class="upload-sub">PNG, JPG up to 2MB</p>
                </div>
                <div v-else class="upload-preview">
                  <img :src="uploadedSignature" alt="Signature Preview" />
                  <button class="btn-remove-upload" @click.prevent="removeUploadedSignature">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </label>
            </div>
          </div>

          <!-- Legal Notice -->
          <div class="legal-notice">
            <div class="notice-icon">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="notice-text">
              <h4>Legal Notice</h4>
              <p>By typing your name you agree that this electronic signature has the same legal effect as a handwritten signature.</p>
            </div>
          </div>
        </div>
        
        <div v-else class="wet-sig-info-box">
          <div class="wet-sig-header">
            <i class="fas fa-copy"></i>
            <h4>Wet Signature Process</h4>
          </div>
          <ol class="wet-sig-steps">
            <li>Download the approval document.</li>
            <li>Print the document</li>
            <li>Sign the document with your handwritten signature</li>
            <li>Scan or take a clear photo of the signed document</li>
            <li>Upload the signed document to complete the approval</li>
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
      signatureMethod: 'digital',
      digitalSignatureType: 'draw',
      fullName: '',
      isDrawing: false,
      ctx: null,
      uploadedSignature: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCanvas();
    });
  },
  watch: {
    signatureMethod(newVal) {
      if (newVal === 'digital' && this.digitalSignatureType === 'draw') {
        this.$nextTick(() => {
          this.initCanvas();
        });
      }
    },
    digitalSignatureType(newVal) {
      if (newVal === 'draw') {
        this.$nextTick(() => {
          this.initCanvas();
        });
      }
    }
  },
  methods: {
    initCanvas() {
      const canvas = this.$refs.sigCanvas;
      if (canvas) {
        this.ctx = canvas.getContext('2d');
        // Set canvas physical size to match styled size for correct drawing coords
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#0f172a';
      }
    },
    startDrawing(e) {
      if (!this.ctx) return;
      this.isDrawing = true;
      this.draw(e);
    },
    draw(e) {
      if (!this.isDrawing || !this.ctx) return;
      const rect = this.$refs.sigCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
    },
    stopDrawing() {
      if (!this.isDrawing || !this.ctx) return;
      this.isDrawing = false;
      this.ctx.beginPath();
    },
    clearSignature() {
      const canvas = this.$refs.sigCanvas;
      if (canvas && this.ctx) {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedSignature = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeUploadedSignature() {
      this.uploadedSignature = null;
      const input = document.getElementById('sigUpload');
      if (input) input.value = '';
    },
    handleSubmit() {
      if (this.signatureMethod === 'digital') {
        if (!this.fullName.trim()) {
          alert("Please enter your full name.");
          return;
        }
        if (this.digitalSignatureType === 'upload' && !this.uploadedSignature) {
          alert("Please upload your signature.");
          return;
        }
      }
      this.$emit('submit', {
        method: this.signatureMethod,
        digitalType: this.digitalSignatureType,
        name: this.fullName,
        signatureData: this.digitalSignatureType === 'upload' ? this.uploadedSignature : 'canvas_data'
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

/* Form Sections */
.form-section {
  margin-bottom: 24px;
}

.form-section label {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
}

.required {
  color: #ef4444;
}

/* Signature Methods */
.method-options {
  display: flex;
  gap: 16px;
}

.method-card {
  flex: 1;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: #fff;
}

.method-card.digital-card.active {
  background-color: #eff6ff;
  border-color: #3b82f6;
}

.method-card.wet-card.active {
  background-color: #f0fdf4;
  border-color: #22c55e;
}

.method-icon-wrap {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 12px auto;
  font-size: 1.2rem;
}

.digital-icon {
  background-color: #f1f5f9;
  color: #64748b;
}

.method-card.digital-card.active .digital-icon {
  background-color: #2563eb;
  color: #fff;
}

.wet-icon {
  background-color: #f1f5f9;
  color: #64748b;
}

.method-card.wet-card.active .wet-icon {
  background-color: #16a34a;
  color: #fff;
}

.method-card h4 {
  margin: 0 0 6px 0;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #0f172a;
}

.method-card p {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.4;
}

/* Input Field */
.full-name-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #0f172a;
  box-sizing: border-box;
}

.full-name-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Canvas Area */
.signature-canvas-container {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: #fff;
  position: relative;
  overflow: hidden;
}

.sig-canvas {
  width: 100%;
  height: 150px;
  display: block;
  cursor: crosshair;
}

.canvas-actions {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  gap: 10px;
}

.btn-save-sig {
  background-color: #16a34a;
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 16px;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-clear-sig {
  background-color: #fff;
  color: #64748b;
  border: 1px solid #cbd5e1;
  padding: 6px 16px;
  border-radius: 16px;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-clear-sig:hover {
  background-color: #f8fafc;
}

/* Legal Notice */
.legal-notice {
  background-color: #fefce8;
  border: 1px solid #fef08a;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.notice-icon {
  color: #d97706;
  font-size: 1.2rem;
  margin-top: 2px;
}

.notice-text h4 {
  margin: 0 0 8px 0;
  color: #d97706;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
}

.notice-text p {
  margin: 0;
  color: #d97706;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  line-height: 1.4;
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

/* Signature Tabs */
.signature-tabs-section {
  margin-bottom: 16px;
}

.signature-tabs {
  display: flex;
  background: #f8fafc;
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
}

.sig-tab {
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.sig-tab.active {
  background: white;
  color: #0f172a;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.sig-tab i {
  font-size: 1rem;
}

/* Upload Container */
.upload-container {
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  background: #f8fafc;
  position: relative;
  transition: border-color 0.2s;
}

.upload-container:hover {
  border-color: #94a3b8;
}

.sig-upload-input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.upload-label {
  display: block;
  cursor: pointer;
  padding: 30px;
  text-align: center;
}

.upload-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #64748b;
}

.upload-prompt i {
  font-size: 2rem;
  color: #94a3b8;
  margin-bottom: 8px;
}

.upload-prompt span {
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
}

.upload-sub {
  font-size: 0.75rem !important;
  color: #94a3b8 !important;
  margin: 0;
}

.upload-preview {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
}

.upload-preview img {
  max-width: 100%;
  max-height: 120px;
  object-fit: contain;
}

.btn-remove-upload {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ef4444;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.btn-remove-upload:hover {
  background: #dc2626;
}
</style>
