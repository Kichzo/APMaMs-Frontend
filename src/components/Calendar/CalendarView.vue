<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div class="month-nav">
        <button class="nav-btn"><i class="fas fa-chevron-left"></i></button>
        <h2>January 2025</h2>
        <button class="nav-btn"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="view-controls">
        <button class="btn-outline"><i class="fas fa-download"></i> Calendar</button>
      </div>
    </div>

    <div class="org-filters">
      <button v-for="org in orgs" :key="org" :class="['filter-chip', { active: selectedOrg === org }]"
        @click="selectedOrg = org">
        {{ org }}
      </button>
    </div>

    <div class="calendar-grid">
      <div v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</div>

      <div v-for="date in 31" :key="date" class="date-cell">
        <span class="date-num">{{ date }}</span>

        <template v-if="selectedOrg === 'All Organizations' || selectedOrg === 'SSC'">
          <div v-if="date === 10" class="event-tag ongoing">Community..</div>
          <div v-if="date === 15" class="event-tag ongoing">Leadership..</div>
        </template>

        <template v-if="selectedOrg === 'All Organizations' || selectedOrg === 'CBIT College'">
          <div v-if="date === 18" class="event-tag pending">Coding Boo..</div>
        </template>

        <template v-if="selectedOrg === 'All Organizations' || selectedOrg === 'CELS College'">
          <div v-if="date === 20" class="event-tag pending">Techn Inno..</div>
        </template>

        <template v-if="selectedOrg === 'All Organizations' || selectedOrg === 'CESS College'">
          <div v-if="date === 28" class="event-tag pending">Business.......</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOrg: 'All Organizations',
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      orgs: ['All Organizations', 'SSC', 'CBIT College', 'CELS College', 'CESS College', 'CMFS College']
    }
  }
}
</script>

<style scoped>
.calendar-container {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  flex: 3;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.month-nav {
  display: flex;
  align-items: center;
  gap: 15px;
}

.month-nav h2 {
  font-family: serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
}

.nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
}

.btn-outline {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  margin-left: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #334155;
}

.org-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 35px;
}

.filter-chip {
  padding: 8px 18px;
  background: #f1f5f9;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-chip.active {
  background: #fff;
  border: 1px solid #e2e8f0;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.day-header {
  text-align: center;
  font-weight: 600;
  padding-bottom: 15px;
  color: #1e293b;
}

.date-cell {
  min-height: 100px;
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  padding: 10px;
  position: relative;
}

.date-num {
  font-size: 0.9rem;
  color: #1e293b;
  font-weight: 500;
}

.event-tag {
  font-size: 0.75rem;
  padding: 4px 6px;
  border-radius: 4px;
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Status Colors from design */
.event-tag.ongoing {
  background: #dbeafe;
  color: #1e40af;
  border-left: 4px solid #3b82f6;
}

.event-tag.pending {
  background: #fef9c3;
  color: #854d0e;
  border-left: 4px solid #eab308;
}
</style>