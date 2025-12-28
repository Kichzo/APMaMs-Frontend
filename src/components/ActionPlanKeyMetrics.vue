<template>
  <div class="metrics-grid">
    <div v-for="metric in metrics" :key="metric.label" class="metric">
      <span class="metric-label">{{ metric.label }}</span>
      <strong>{{ metric.value }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    metrics: Array
  }
}
</script>

<style scoped>
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 20px;
}

.metric {
  background: #f8fafc;
  border-radius: 10px;
  padding: 14px;
}

.metric-label {
  font-size: 0.75rem;
  color: #64748b;
  display: block;
}

.metric strong {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>