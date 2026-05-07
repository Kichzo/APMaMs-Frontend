<template>
  <div class="activity-card">

    <div class="card-header">
      <div>
        <h3>{{ data.title }}</h3>
        <span class="status approved">{{ data.status }}</span>
      </div>

      <div class="card-actions">
        <button class="btn-action btn-download-small" @click.stop="$emit('download', data)">
          <i class="fas fa-download"></i> Download
        </button>
        <button class="btn-action view-btn" @click="$emit('view', data)">
          View Details
        </button>
      </div>
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
    data: Object,
    role: String
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

.card-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn-action {
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.view-btn {
  background: #1d4ed8;
  color: white;
  border: none;
}

.btn-download-small {
  background: white;
  border: 1px solid #d1d5db;
  color: #374151;
}

.btn-edit-small {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #475569;
}

.activity-meta {
  display: flex;
  gap: 25px;
  margin-top: 12px;
  font-size: 14px;
  color: #475569;
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