<template>
  <div class="quick-actions-container">
    <hr class="section-divider" />

    <section class="quick-actions">
      <h2 class="section-title">Quick Actions</h2>

      <div class="actions-grid">
        <div v-for="action in actions" :key="action.title" class="action-card">
          <div class="icon-box" :style="{ backgroundColor: action.bgColor }">
            <i :class="action.icon"></i>
          </div>

          <div class="action-content">
            <h3>{{ action.title }}</h3>
            <p>{{ action.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'QuickActions',
  data() {
    return {
      actions: [
        {
          title: 'New Proposal',
          desc: 'Create Activity Proposal',
          icon: 'fas fa-edit',
          bgColor: '#d1fae5' // Light Green
        },
        {
          title: 'View Calendar',
          desc: 'Check Schedules',
          icon: 'fas fa-calendar-times',
          bgColor: '#ede9fe' // Light Purple
        },
        {
          title: 'Financial Report',
          desc: 'Track Budget',
          icon: 'fas fa-calculator',
          bgColor: '#fce7f3' // Light Pink
        },
        {
          title: 'Generate Report',
          desc: 'Download Report',
          icon: 'fas fa-file-alt',
          bgColor: '#fef9c3' // Light Yellow
        }
      ]
    }
  }
}
</script>

<style scoped>
.quick-actions-container {
  margin-top: 40px;
  width: 100%;
}

/* Horizontal Line Break */
.section-divider {
  border: none;
  border-top: 1px solid #d1d5db;
  margin-bottom: 30px;
  opacity: 0.6;
}

.section-title {
  font-family: serif;
  /* Matching the serif look in your image */
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #111827;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.action-card {
  background: #f0f7ff;
  /* Soft blue background from image */
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.icon-box {
  width: 45px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #111827;
}

.action-content h3 {
  font-family: serif;
  font-size: 1.1rem;
  margin: 0 0 4px 0;
  color: #111827;
}

.action-content p {
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
}

/* Responsive adjustment */
@media (max-width: 1024px) {
  .actions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>