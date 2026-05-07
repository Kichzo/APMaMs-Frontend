<template>
  <div class="quick-actions-container">
    <h3 class="label">Quick Actions</h3>
    <div class="actions-grid">
      <div v-for="action in actions" :key="action.title" class="action-card">
        <div class="icon-box" :style="{ backgroundColor: action.bgColor }">
          <i :class="action.icon"></i>
        </div>
        <div class="action-info">
          <h4>{{ action.title }}</h4>
          <p>{{ action.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        { title: 'New Proposal', desc: 'Create Activity Proposal', icon: 'fas fa-pen-square', bgColor: '#d1fae5' },
        { title: 'View Calendar', desc: 'Check Schedules', icon: 'fas fa-calendar-times', bgColor: '#ede9fe' },
        { title: 'Financial Report', desc: 'Track Budget', icon: 'fas fa-calculator', bgColor: '#fce7f3' },
        { title: 'Generate Report', desc: 'Download Report', icon: 'fas fa-list-alt', bgColor: '#fef9c3' }
      ]
    }
  }
}
</script>

<style scoped>
.label {
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 1.1rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.action-card {
  background: #eff6ff;
  /* Light blue tint from image */
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.action-info h4 {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
}

.action-info p {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: #64748b;
}
</style>