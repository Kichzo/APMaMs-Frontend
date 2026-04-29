<template>
  <section class="panel upcoming-events">
    <div class="panel-header">
      <h2>Upcoming Events</h2>
      <a href="#" class="view-all">View All</a>
    </div>

    <div class="event-list">
      <div v-for="event in events" :key="event.id" class="event-item">
        <div class="event-accent"></div>
        <div class="event-content">
          <h4>{{ event.title }}</h4>
          <p><i class="fa-solid fa-calendar"></i> {{ event.date }}</p>
          <p><i class="fa-solid fa-clock"></i> {{ event.time }}</p>
          <p><i class="fa-solid fa-location-dot"></i> {{ event.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UpcomingEvents',
  data() {
    return {
      events: [
        { id: 1, title: 'SSC Legislative Meeting', date: '20/12/2025', time: '2:00 pm', location: 'TSAC SSC Office' },
        { id: 2, title: 'Coordination in the conduct of the', date: '25/12/2025', time: '10:00 pm', location: 'TSAC SSC Office' },
        { id: 3, title: 'FEMSUSSCO General Assembly', date: '30/12/2025', time: '7:00 pm', location: 'Function Hall' }
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

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.panel-header h2 {
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  color: #111827;
  margin: 0;
  font-weight: 700;
}

.view-all {
  color: #2563eb;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: Arial, sans-serif;
}

.event-item {
  display: flex;
  background: #eff6ff; 
  border-radius: 6px;
  margin-bottom: 16px;
  overflow: hidden;
}

.event-accent {
  width: 4px;
  background: #1e3a8a; /* Dark blue margin */
}

.event-content {
  padding: 16px;
  font-size: 0.85rem;
}

.event-content h4 {
  margin: 0 0 10px 0;
  font-size: 0.95rem;
  font-family: Arial, sans-serif;
  font-weight: 700;
  color: #111827;
}

.event-content p {
  color: #6b7280;
  margin: 6px 0;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
}

.event-content i {
  width: 24px;
  color: #94a3b8;
  font-size: 1rem;
}
</style>