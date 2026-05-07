<template>
  <div class="report-card">
    <div class="card-left">
      <div class="icon-container">
        <i class="far fa-file-alt"></i>
      </div>
      <div class="text-content">
        <div class="title-row">
          <h3 class="report-title">{{ report.title }}</h3>
          <span v-if="report.status" class="status-badge" :class="report.status.toLowerCase()">
            {{ report.status }}
          </span>
        </div>
        <p class="report-subtitle">{{ report.subtitle }}</p>
      </div>
    </div>

    <!-- Right side -->
    <div class="card-right">
      <button class="btn-details" @click="$emit('view-details', report)">View Details</button>
      <button class="btn-edit" @click="$emit('edit-request', report)"><i class="fas fa-edit"></i> Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    report: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.report-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
}

.card-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-container {
  width: 44px;
  height: 44px;
  background-color: #e0e7ff;
  color: #3b82f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1.5rem;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.report-title {
  font-family: Arial,sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.status-badge {
  font-family: Arial, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
}

.status-badge.approved {
  background-color: #dcfce7;
  color: #16a34a;
}

.report-subtitle {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #475569;
  margin: 4px 0 0 0;
}

.card-right {
  display: flex;
  gap: 10px;
}

.btn-details {
  font-family: Arial, sans-serif;
  background: #0a21c0;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-edit {
  font-family: Arial, sans-serif;
  background: #cbd5e1;
  color: #334155;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-edit i {
  font-size: 0.8rem;
}
</style>