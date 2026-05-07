<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <transition name="modal-scale">
      <div class="edit-card">
        <!-- HEADER -->
        <div class="card-header">
          <span>Edit Action Plan</span>
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

          <div class="actions">
            <button class="save-btn" @click="savePlan">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: this.plan.title || '',
      period: this.plan.period || ''
    }
  },
  methods: {
    savePlan() {
      if (!this.title || !this.period) return

      this.$emit('save', {
        ...this.plan,
        title: this.title,
        period: this.period
      })
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
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.edit-card {
  width: 550px;
  background: #ffffff;
  border: 1px solid #999;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #999;
}

.card-header span {
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #000;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #000;
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
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
}

input {
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #c5c5c5;
  border-radius: 14px;
  background: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
}

input::placeholder {
  color: #a0a0a0;
}

.actions {
  text-align: right;
  margin-top: 32px;
}

.save-btn {
  background: #001b94;
  color: white;
  border: none;
  padding: 12px 48px;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.save-btn:hover {
  background: #001575;
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
