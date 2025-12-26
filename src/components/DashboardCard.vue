<template>
  <div class="card" :class="color">
    <div class="card-header">
      <i :class="leftIcon + ' card-icon'"></i>
      <i :class="rightIcon + ' card-action'"></i>
    </div>

    <div class="card-body">
      <span class="value">{{ value }}</span>
      <br />
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
    color: String,
    leftIcon: String,
    rightIcon: String
  }
}
</script>

<style scoped>
.card {
  border-radius: 14px;
  padding: 20px;
  color: #fff;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-icon {
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.25);
  padding: 8px;
  border-radius: 8px;
}

.card-action {
  font-size: 0.95rem;
  opacity: 0.85;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Hover (scoped-safe) */
.card:hover :deep(.card-action) {
  transform: translateX(4px) translateY(-2px);
  opacity: 1;
}

/* Gradients */
.blue   { background: linear-gradient(135deg, #3f51ff, #2a36d9); }
.yellow { background: linear-gradient(135deg, #cddc39, #afb42b); }
.green  { background: linear-gradient(135deg, #00c853, #009624); }
.purple { background: linear-gradient(135deg, #9c27b0, #6a1b9a); }
.teal   { background: linear-gradient(135deg, #26a69a, #00695c); }
.orange { background: linear-gradient(135deg, #ffa726, #ef6c00); }

.value {
  font-size: 2rem;
  font-weight: 600;
}

.label {
  font-size: 0.85rem;
  opacity: 0.9;
}
</style>
