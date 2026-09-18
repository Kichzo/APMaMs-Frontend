<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <transition name="modal-scale">
      <div class="add-card">
        <!-- HEADER -->
        <div class="card-header">
          <span>Add Action Plan</span>
          <button class="close-btn" @click="$emit('close')">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- FORM -->
        <div class="form-content">
          <div class="form-group">
            <label>Title</label>
            <input 
              type="text" 
              v-model="title"
              placeholder="Enter action plan title"
            />
          </div>

          <div class="form-group">
            <label>Period</label>
            <input 
              type="text" 
              v-model="period"
              placeholder="Enter period time"
            />
          </div>

          <div class="modal-actions">
            <button type="button" class="btn-cancel" @click="$emit('close')">Cancel</button>
            <button type="button" class="btn-save" @click="savePlan">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      period: ''
    }
  },
  methods: {
    savePlan() {
      if (!this.title || !this.period) return

      this.$emit('save', {
        id: Date.now(),
        title: this.title,
        period: this.period,
        status: 'Active',
        progress: 0
      })

      this.title = ''
      this.period = ''
      this.$emit('close')
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

.add-card {
  width: 550px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #f1f5f9;
}

.card-header span {
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: #1e293b;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #64748b;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #1e293b;
}

.form-content {
  padding: 32px 40px;
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  margin-bottom: 12px;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #1e293b;
}

input {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #001fcc;
}

input::placeholder {
  color: #a0a0a0;
}

.modal-actions {
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 32px;
  box-sizing: border-box;
}

.btn-cancel {
  flex: 1;
  padding: 12px;
  text-align: center;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;
}

.btn-cancel:hover {
  background-color: #f8fafc;
}

.btn-save {
  flex: 1;
  padding: 12px;
  text-align: center;
  background-color: #001fcc;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-sizing: border-box;
}

.btn-save:hover {
  background-color: #0019a3;
}

.btn-save:active {
  transform: translateY(1px);
}

/* ANIMATION */
.modal-scale-enter-active, .modal-scale-leave-active {
  transition: all 0.3s ease;
}
.modal-scale-enter-from, .modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>