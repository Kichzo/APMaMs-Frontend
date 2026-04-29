<template>
  <div class="card">
    <div class="card-header">
      <i :class="[leftIcon, 'card-icon']"></i>
    </div>

    <div class="card-body">
      <span class="value">{{ value }}</span>
      <span class="label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    value: String,
    label: String,
    leftIcon: String
  }
}
</script>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 24px;
  color: #111827;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 1.3rem;
  color: #111827;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
  font-family: inherit;
  line-height: 1.2;
}

.label {
  font-size: 0.9rem;
  color: #4b5563;
  font-weight: 600;
  margin-top: 6px;
  font-family: inherit;
}
</style>
