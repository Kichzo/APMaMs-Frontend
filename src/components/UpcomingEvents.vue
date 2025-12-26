<template>
  <div class="dashboard-body">
    <div class="main-column">
      <section class="panel activities-panel">
        <div class="panel-header">
          <h2>Recent Activities</h2>
          <a href="#" class="view-all-link">View All →</a>
        </div>

        <div class="activity-cards-container">
          <div v-for="item in activities" :key="item.id" class="activity-card">
            <div class="card-top-row">
              <div class="title-group">
                <h3>{{ item.title }}</h3>
                <span class="organization-label">{{ item.org }}</span>
              </div>
              <span :class="['status-chip', item.status.toLowerCase()]">
                {{ item.status }}
              </span>
            </div>

            <div class="meta-info-row">
              <span><i class="far fa-calendar-alt"></i> {{ item.date }}</span>
              <span><i class="fas fa-wallet"></i> ₱{{ item.budget.toLocaleString() }}</span>
            </div>

            <div v-if="item.progress !== null" class="progress-container">
              <div class="progress-text">
                <span>Progress</span>
                <span>{{ item.progress }}%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" :style="{ width: item.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <aside class="side-column">
      <section class="panel events-panel">
        <div class="panel-header">
          <h2>Upcoming Events</h2>
          <a href="#" class="view-all-link">View All →</a>
        </div>

        <div class="events-list">
          <div v-for="event in events" :key="event.id" class="event-card">
            <div class="event-indicator"></div>
            <div class="event-details">
              <h4>{{ event.title }}</h4>
              <p><i class="far fa-calendar"></i> {{ event.date }}</p>
              <p><i class="far fa-clock"></i> {{ event.time }}</p>
              <p><i class="fas fa-map-marker-alt"></i> {{ event.location }}</p>
            </div>
          </div>
        </div>
      </section>
    </aside>
  </div>
</template>

<style scoped>
/* Layout Container */
.dashboard-body {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 10px;
}

.main-column {
  flex: 2.5; /* Takes up most of the width */
}

.side-column {
  flex: 1; /* Narrower column for events */
  position: sticky;
  top: 20px;
}

/* Shared Panel Styling */
.panel {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.panel-header h2 {
  font-family: serif; /* Matches Dashboard title style */
  font-size: 1.4rem;
  font-weight: 600;
}

.view-all-link {
  color: #2563eb;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
}

/* Activity Cards */
.activity-card {
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.title-group h3 { font-size: 1.05rem; margin-bottom: 2px; }
.organization-label { color: #64748b; font-size: 0.85rem; }

.status-chip {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
}
.status-chip.approved { background: #dcfce7; color: #166534; }
.status-chip.pending { background: #fef9c3; color: #854d0e; }
.status-chip.ongoing { background: #dbeafe; color: #1e40af; }

.meta-info-row {
  display: flex;
  gap: 24px;
  font-size: 0.85rem;
  color: #475569;
  margin-bottom: 16px;
}

/* Progress Section */
.progress-track {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
}
.progress-fill {
  height: 100%;
  background: #1d4ed8; /* Matching the blue in the reference */
  transition: width 0.4s ease;
}

/* Event Cards */
.event-card {
  display: flex;
  background: #f8fafc;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
}

.event-indicator {
  width: 4px;
  background: #1d4ed8;
}

.event-details {
  padding: 12px 16px;
}

.event-details h4 { font-size: 0.95rem; margin-bottom: 6px; }
.event-details p { font-size: 0.8rem; color: #64748b; margin: 4px 0; }
.event-details i { width: 16px; margin-right: 4px; }
</style>