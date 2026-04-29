<template>
  <transition name="fade-slide">
    <div class="add-card">

      <!-- HEADER -->
      <div class="card-header">
        <span>Add Action Plan</span>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>

      <!-- HEADER LINE -->
      <div class="header-line"></div>

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
    }
  }
}
</script>

<style scoped>

/* CARD */
.add-card {
  width: 520px;
  background: #ffffff;
  border: 1px solid #c5c5c5;
  border-radius: 10px;
  overflow: hidden;
}

/* HEADER */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  font-family: serif;
  font-size: 1.05rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

/* HEADER DIVIDER */
.header-line {
  height: 1px;
  background: #c5c5c5;
}

/* FORM AREA */
.form-content {
  padding: 24px;
  background: #ffffff;
}

.form-group {
  margin-bottom: 22px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-size: 0.95rem;
}

input {
  width: 95%;
  padding: 12px;
  border: 1px solid #b5b5b5;
  border-radius: 12px;
  background: #f4f4f4;
  outline: none;
}

/* SAVE BUTTON */
.actions {
  text-align: right;
}

.save-btn {
  background: #1326b3;
  color: white;
  border: none;
  padding: 10px 36px;
  border-radius: 12px;
  cursor: pointer;
}

/* SUBTLE ANIMATION */
.fade-slide-enter-active {
  transition: all 0.25s ease;
}

.fade-slide-leave-active {
  transition: all 0.2s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

</style>