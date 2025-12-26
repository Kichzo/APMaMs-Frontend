<template>
  <div class="dashboard-grid">
    <section class="panel recent-activities">
      <div class="panel-header">
        <h2>Recent Activities</h2>
        <a href="#" class="view-all">View All →</a>
      </div>

      <div class="activity-list">
        <div v-for="item in activities" :key="item.id" class="activity-card">
          <div class="card-top">
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p class="org">{{ item.org }}</p>
            </div>
            <span :class="['status-badge', item.status.toLowerCase()]">
              {{ item.status }}
            </span>
          </div>

          <div class="card-meta">
            <span><i class="far fa-calendar"></i> {{ item.date }}</span>
            <span><i class="fas fa-coins"></i> ₱{{ item.budget.toLocaleString() }}</span>
          </div>

          <div v-if="item.progress !== null" class="progress-section">
            <div class="progress-labels">
              <span>Progress</span>
              <span>{{ item.progress }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: item.progress + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel upcoming-events">
      <div class="panel-header">
        <h2>Upcoming Events</h2>
        <a href="#" class="view-all">View All →</a>
      </div>

      <div class="event-list">
        <div v-for="event in events" :key="event.id" class="event-item">
          <div class="event-accent"></div>
          <div class="event-content">
            <h4>{{ event.title }}</h4>
            <p><i class="far fa-calendar"></i> {{ event.date }}</p>
            <p><i class="far fa-clock"></i> {{ event.time }}</p>
            <p><i class="fas fa-map-marker-alt"></i> {{ event.location }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ActivityDashboard',
  data() {
    return {
      activities: [
        { id: 1, title: 'Leadership Training Workshop', org: 'Student Council', date: '18/11/2025', budget: 23000, status: 'Approved', progress: 75 },
        { id: 2, title: 'Environmental Awareness Campaign', org: 'CELS College', date: '02/20/2025', budget: 18000, status: 'Pending', progress: null },
        { id: 3, title: 'Academic Excellence Seminar', org: 'Student Council', date: '02/12/2025', budget: 30000, status: 'Ongoing', progress: 45 },
        { id: 4, title: 'Sports Festival 2025', org: 'Student Council', date: '18/11/2025', budget: 75000, status: 'Approved', progress: 20 }
      ],
      events: [
        { id: 1, title: 'Budget Planning Meeting', date: '20/12/2025', time: '2:00 pm', location: 'TSAC SSC Office' },
        { id: 2, title: 'Activity Proposal Review', date: '25/12/2025', time: '10:00 pm', location: 'TSAC SSC Office' },
        { id: 3, title: 'Strategic Planning Meeting', date: '30/12/2025', time: '7:00 pm', location: 'Function Hall' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  background: transparent;
}

.panel {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 24px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.panel-header h2 {
  font-family: serif;
  font-size: 1.5rem;
}

.view-all {
  color: #0047bb;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Activity Card Styles */
.activity-card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.info h3 { font-size: 1.1rem; margin-bottom: 4px; }
.org { color: #777; font-size: 0.9rem; }

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
}
.status-badge.approved { background: #e8f5e9; color: #2e7d32; }
.status-badge.pending { background: #fffde7; color: #f9a825; }
.status-badge.ongoing { background: #e3f2fd; color: #1976d2; }

.card-meta {
  margin: 15px 0;
  display: flex;
  gap: 20px;
  font-size: 0.85rem;
  color: #666;
}

/* Progress Bar */
.progress-section { margin-top: 15px; }
.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 8px;
}
.progress-bar {
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #0033cc;
  transition: width 0.3s ease;
}

/* Event Styles */
.event-item {
  display: flex;
  background: #f0f4f8;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
}
.event-accent {
  width: 4px;
  background: #0033cc;
}
.event-content {
  padding: 15px;
  font-size: 0.85rem;
}
.event-content h4 { margin-bottom: 8px; font-size: 0.95rem; }
.event-content p { color: #555; margin: 4px 0; }
.event-content i { width: 18px; color: #888; }
</style>