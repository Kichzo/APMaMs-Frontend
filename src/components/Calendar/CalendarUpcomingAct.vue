<template>
  <aside class="upcoming-sidebar">
    <div class="sidebar-card">
      <h3 class="card-title">View Mode</h3>
      <div class="view-mode-list">
        <button :class="['mode-item', { active: currentView === 'month' }]" @click="$emit('change-view', 'month')">
          <i class="far fa-calendar-alt"></i> Month View
        </button>

        <button :class="['mode-item', { active: currentView === 'week' }]" @click="$emit('change-view', 'week')">
          <i class="fas fa-list"></i> Week View
        </button>
      </div>
    </div>

    <div class="sidebar-card">
      <div class="card-header">
        <h3 class="card-title">Upcoming Activities</h3>
        <a href="#" class="view-all">View All →</a>
      </div>
      <div class="activity-stack">
        <div v-for="act in upcoming" :key="act.title" class="mini-activity">
          <p class="mini-title">{{ act.title }}</p>
          <p class="mini-date">{{ act.date }}</p>
        </div>
      </div>
    </div>

    <div class="sidebar-card legend">
      <h3 class="card-title">Status Legend</h3>
      <ul class="legend-list">
        <li><span class="dot blue"></span> Approved</li>
        <li><span class="dot yellow"></span> Pending</li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  // Add props so the sidebar knows which button to highlight
  props: ['currentView'],
  data() {
    return {
      upcoming: [
        { title: 'Community Outreach Program', date: 'Jan 10, 2025' },
        { title: 'Leadership Training Workshop', date: 'Jan 15, 2025' },
        { title: 'Coding Bootcamp', date: 'Jan 18, 2025' },
        { title: 'Tech Innovation Summit', date: 'Jan 20, 2025' },
        { title: 'Business Seminar Program', date: 'Jan 25, 2025' }
      ]
    }
  }
}
</script>

<style scoped>
.upcoming-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

.card-title {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 15px 0;
}

.view-mode-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mode-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  text-align: left;
  color: #64748b;
}

.mode-item.active {
  background: #eff6ff;
  color: #1d4ed8;
  font-weight: 600;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.view-all {
  font-size: 0.8rem;
  color: #1d4ed8;
  text-decoration: none;
}

.activity-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mini-activity {
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
}

.mini-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.mini-date {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}

.legend-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.legend-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #334155;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.green {
  background: #10b981;
}

.blue {
  background: #3b82f6;
}

.yellow {
  background: #eab308;
}

.grey {
  background: #94a3b8;
}
</style>