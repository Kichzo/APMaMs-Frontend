<template>
  <div class="activity-card">

    <div class="card-header">
      <div>
        <h3>{{ data.title }}</h3>
        <span class="status approved">{{ data.status }}</span>
      </div>

      <button class="view-btn" @click="$emit('view', data)">
        View Details
      </button>
    </div>

    <div class="activity-meta">
      <span><i class="fas fa-university"></i> {{ data.organization }}</span>
      <span><i class="fas fa-calendar-alt"></i> {{ data.date }}</span>
      <span><i class="fas fa-users"></i> {{ data.participants }} participants</span>
      <span><i class="fas fa-coins"></i> {{ data.budget }}</span>
    </div>

    <div class="progress-section">
      <label>Progress</label>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: data.progress + '%' }"></div>
      </div>
      <span class="progress-percent">{{ data.progress }}%</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "ActivityItemCard",
  props: {
    data: Object
  }
};
</script>

<style scoped>
.activity-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 18px;
  background: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
}

.status {
  margin-left: 10px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
}

.status.approved {
  background: #dcfce7;
  color: #15803d;
}

.activity-meta {
  display: flex;
  gap: 25px;
  margin-top: 12px;
  font-size: 14px;
  color: #475569;
}

.view-btn {
  background: #1d4ed8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.progress-section {
  margin-top: 15px;
}

.progress-bar {
  height: 6px;
  background: #e2e8f0;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
}

.progress-fill {
  height: 6px;
  background: #1d4ed8;
  border-radius: 10px;
}

.progress-percent {
  float: right;
  font-size: 12px;
  color: #64748b;
}
</style>