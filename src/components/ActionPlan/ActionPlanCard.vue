<template>
  <div class="plan-card" :class="{ active }" @click="$emit('select')">
    <h4>{{ plan.title }}</h4>
    <span class="year">{{ plan.period }}</span>
    <span class="status">{{ plan.status }}</span>

    <div class="progress-bar">
      <div class="fill" :style="{ width: plan.progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: Object,
    active: Boolean
  }
}
</script>

<style scoped>
.plan-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background 0.2s ease, border 0.2s ease;
}

.plan-card:hover {
  background: #f8fafc;
}

.plan-card.active {
  background: #e0ecff;
  border-color: #3b82f6;
}

.plan-card h4 {
  font-size: 0.95rem;
  margin: 0;
}

.year {
  font-size: 0.75rem;
  color: #64748b;
}

.status {
  font-size: 0.7rem;
  background: #dcfce7;
  color: #166534;
  padding: 2px 8px;
  border-radius: 999px;
  float: right;
}

.progress-bar {
  height: 6px;
  background: #e5e7eb;
  border-radius: 4px;
  margin-top: 8px;
}

.fill {
  height: 100%;
  background: #f97316;
  border-radius: 4px;
}
</style>