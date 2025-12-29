<template>
  <div class="form-card">
    <h2 class="form-section-title">Details & Schedule</h2>

    <div class="input-grid">
      <div class="input-block">
        <label>Start Date *</label>
        <div class="input-container">
          <input type="date" v-model="formData.startDate" placeholder="dd/mm/yyyy" />
        </div>
      </div>
      <div class="input-block">
        <label>End Date *</label>
        <div class="input-container">
          <input type="date" v-model="formData.endDate" placeholder="dd/mm/yyyy" />
        </div>
      </div>
    </div>

    <div class="input-grid-three">
      <div class="input-block">
        <label>Venue *</label>
        <input type="text" v-model="formData.venue" placeholder="Enter venue location" />
      </div>
      <div class="input-block">
        <label>Type of Activity *</label>
        <select v-model="formData.activityType">
          <option value="In-Campus">In-Campus</option>
          <option value="Off-Campus">Off-Campus</option>
        </select>
      </div>
      <div class="input-block">
        <label>Expected Participants *</label>
        <input type="number" v-model="formData.participants" placeholder="Number of participants" />
      </div>
    </div>

    <div class="input-block">
      <label>Time Schedule *</label>
      <div v-for="(item, index) in formData.schedules" :key="index" class="time-row">
        <input 
          type="text" 
          v-model="item.time" 
          placeholder="Time (e.g., 9:00 AM - 12:00 PM)" 
          class="time-input" 
        />
        <input 
          type="text" 
          v-model="item.desc" 
          placeholder="Activity Description" 
          class="desc-input" 
        />
      </div>
      <button class="add-btn" @click="addScheduleItem">+ Add Schedule Item</button>
    </div>

    <div class="divider"></div>

    <div class="form-footer">
      <button class="btn-prev" @click="$emit('prev')">
        <i class="fas fa-arrow-left"></i> Previous
      </button>
      <button class="btn-next" @click="$emit('next')">
        Next <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formData'],
  methods: {
    addScheduleItem() {
      this.formData.schedules.push({ time: '', desc: '' });
    }
  }
}
</script>

<style scoped>
.form-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 40px;
}

.form-section-title {
  font-family: 'Times New Roman', serif; /* Matching the serif font in image */
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: #000;
}

.input-block { margin-bottom: 20px; }

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.input-grid-three {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1fr;
  gap: 15px;
}

label {
  display: block;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

input, select {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: #fff;
}

/* Specific styling for the Time Schedule layout */
.time-row {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
}

.time-input { flex: 0.35; }
.desc-input { flex: 1; }

.add-btn {
  background: none;
  border: none;
  color: #3b59ff;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-top: 5px;
}

.divider {
  height: 1px;
  background-color: #f1f5f9;
  margin: 25px 0;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Previous Button: Greyish background, black text */
.btn-prev {
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #000;
  padding: 12px 25px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Next Button: Dark blue background, white text */
.btn-next {
  background-color: #001ba0;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-next:hover { background-color: #001580; }
</style>