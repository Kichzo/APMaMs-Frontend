<template>
  <section class="panel quick-actions">
    <h2 class="section-title">Quick Actions</h2>

    <div class="actions-grid">
  <router-link 
    v-for="action in actions" 
    :key="action.title" 
    :to="action.link"
    custom 
    v-slot="{ navigate }"
  >
    <div 
      class="action-card" 
      :style="{ backgroundColor: action.bgColor }"
      @click="navigate" 
      role="button"
    >
      <!-- ... rest of your internal card content stays the same ... -->
      <div class="icon-box" :style="{ backgroundColor: action.iconBg }">
        <i :class="action.icon" :style="{ color: action.iconColor }"></i>
      </div>

      <div class="action-content">
        <h3>{{ action.title }}</h3>
        <p>{{ action.desc }}</p>
      </div>
    </div>
  </router-link>
</div>
  </section>
</template>

<script>
export default {
  name: 'QuickActions',
  data() {
    return {
      actions: [
        {
          title: 'View Calendar',
          desc: 'Check Schedules',
          icon: 'fas fa-calendar-day',
          bgColor: '#d8b4fe', // Light Purple
          iconBg: '#9333ea', // Darker purple box
          iconColor: '#ffffff',
          link: '/calendar'
        },
        {
          title: 'Financial Report',
          desc: 'Track Budget',
          icon: 'fas fa-file-invoice-dollar',
          bgColor: '#fbcfe8', // Light Pink
          iconBg: '#ec4899', // Darker pink box
          iconColor: '#ffffff',
          link: '/financial'
        },
        {
          title: 'Generate Report',
          desc: 'Download Report',
          icon: 'fas fa-file-alt',
          bgColor: '#fed7aa', // Light Orange
          iconBg: '#f97316', // Darker orange box
          iconColor: '#ffffff'
        }
      ]
    }
  }
}
</script>

<style scoped>
.panel {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 30px;
}

.section-title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #111827;
}

.actions-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.action-card {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  /* Add opacity for better color matching */
  background-color: var(--bg-color);
}

.action-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.action-content {
  display: flex;
  flex-direction: column;
}

.action-content h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #111827;
}

.action-content p {
  font-size: 0.8rem;
  color: #111827;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
}
</style>