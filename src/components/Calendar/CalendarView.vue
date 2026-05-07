<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div class="month-nav">
        <!-- Changed to changeStep to handle both view modes -->
        <button class="nav-btn" @click="changeStep(-1)">
          <i class="fas fa-chevron-left"></i>
        </button>

        <!-- Logic to show a date range if in Week View, otherwise show Month -->
        <h2 v-if="viewMode === 'month'">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
        <h2 v-else>Week of {{ monthNames[visibleDays[0].month] }} {{ visibleDays[0].dayNum }}</h2>

        <button class="nav-btn" @click="changeStep(1)">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="view-controls">
        <button class="btn-outline"><i class="fas fa-download"></i> Calendar</button>
      </div>
    </div>

    <!-- Organization Filters -->
    <div class="org-filters">
      <button v-for="org in orgs" :key="org" :class="['filter-chip', { active: selectedOrg === org }]"
        @click="selectedOrg = org">
        {{ org }}
      </button>
    </div>

    <!-- Unified Calendar Grid -->
    <div class="calendar-grid" :class="{ 'week-view': viewMode === 'week' }">
      <!-- Weekday Headers (Always shown) -->
      <div v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</div>

      <!-- Only show blanks in Month View -->
      <template v-if="viewMode === 'month'">
        <div v-for="blank in firstDayOfMonth" :key="'blank-' + blank" class="date-cell empty"></div>
      </template>

      <!-- Dynamic Date Cells (Handles both Month and Week) -->
      <div v-for="dateObj in visibleDays" :key="dateObj.fullDate" class="date-cell">
        <span class="date-num">{{ dateObj.dayNum }}</span>

        <!-- Event Logic -->
        <div v-for="event in filteredEvents(dateObj.dayNum, dateObj.month)" :key="event.title"
          :class="['event-tag', event.status]">
          {{ event.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    viewMode: {
      type: String,
      default: 'month'
    },
    events: Array
  },
  data() {
    return {
      // !!! IMPORTANT: NO viewMode here !!!
      currentDate: new Date(),
      selectedOrg: 'All Organizations',
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
      orgs: ['All Organizations', 'SSC', 'CBIT College', 'CELS College', 'CESS College', 'CMFS College'],
    }
  },
  computed: {
    currentMonth() { return this.currentDate.getMonth(); },
    currentYear() { return this.currentDate.getFullYear(); },
    daysInMonth() { return new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); },
    firstDayOfMonth() { return new Date(this.currentYear, this.currentMonth, 1).getDay(); },

    visibleDays() {
      // This refers to the PROP now
      if (this.viewMode === 'month') {
        return Array.from({ length: this.daysInMonth }, (_, i) => ({
          dayNum: i + 1,
          month: this.currentMonth,
          fullDate: `${this.currentYear}-${(this.currentMonth + 1).toString().padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`
        }));
      } else {
        // WEEK VIEW: Logic to get the 7 days of the current week
        const startOfWeek = new Date(this.currentDate);
        startOfWeek.setDate(this.currentDate.getDate() - this.currentDate.getDay());

        return Array.from({ length: 7 }, (_, i) => {
          const d = new Date(startOfWeek);
          d.setDate(startOfWeek.getDate() + i);
          return {
            dayNum: d.getDate(),
            month: d.getMonth(),
            fullDate: `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
          };
        });
      }
    }
  },
  methods: {
    changeStep(step) {
      if (this.viewMode === 'month') {
        this.currentDate = new Date(this.currentYear, this.currentMonth + step, 1);
      } else {
        const newDate = new Date(this.currentDate);
        newDate.setDate(this.currentDate.getDate() + (step * 7));
        this.currentDate = newDate;
      }
    },
    filteredEvents(day, month) {
      const monthStr = month.toString().padStart(2, '0');
      const dayStr = day.toString().padStart(2, '0');
      const dateKey = `${this.currentYear}-${monthStr}-${dayStr}`;

      return this.events.filter(event => {
        const matchDate = event.date === dateKey;
        const matchOrg = this.selectedOrg === 'All Organizations' || event.org === this.selectedOrg;
        return matchDate && matchOrg;
      });
    }
  }
}
</script>

<style scoped>
/* Main Container */
.calendar-container {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  flex: 3;
}

/* Header & Nav */
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
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
}

.nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  padding: 5px;
}

.btn-outline {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #334155;
}

/* Filters */
.org-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 35px;
  overflow-x: auto;
  padding-bottom: 5px;
}

.filter-chip {
  padding: 8px 18px;
  background: #f1f5f9;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #475569;
  cursor: pointer;
  white-space: nowrap;
}

.filter-chip.active {
  background: #fff;
  border: 1px solid #e2e8f0;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Grid Layout */
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
  min-height: 110px;
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  padding: 10px;
  transition: background 0.2s;
}

.date-cell.empty {
  border: none;
  background: transparent;
}

.date-num {
  font-size: 0.9rem;
  color: #1e293b;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
}

/* Tags */
.event-tag {
  font-size: 0.72rem;
  padding: 4px 6px;
  border-radius: 4px;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

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