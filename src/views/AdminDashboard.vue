<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content" :class="{ 'content-expanded': !isSidebarVisible }">
        <!-- Dashboard Header with Calendar Action -->
        <div class="dashboard-header">
          <div class="page-title">
            <h1>Administrative Dashboard</h1>
            <p>Comprehensive oversight and monitoring of all student organizations</p>
          </div>
          <button class="btn-calendar" @click="showCalendarModal = true">
            <i class="far fa-calendar-alt"></i>
            <span>Calendar</span>
          </button>
        </div>

        <!-- Alert Banner -->
        <div class="alert-banner">
          <div class="alert-icon-wrapper">
            <i class="fas fa-exclamation-circle alert-icon"></i>
          </div>
          <div class="alert-content">
            <h3 class="alert-title">Pending approvals ({{ stats.awaiting }})</h3>
            <p class="alert-message">You have {{ stats.awaiting }} items awaiting your review. Action required by end of day.</p>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-label">Awaiting your approval</span>
            <span class="metric-value awaiting-color">{{ stats.awaiting }}</span>
          </div>

          <div class="metric-card">
            <span class="metric-label">Approved this week</span>
            <span class="metric-value approved-color">{{ stats.approved }}</span>
          </div>

          <div class="metric-card">
            <span class="metric-label">Under review</span>
            <span class="metric-value review-color">{{ stats.underReview }}</span>
          </div>
        </div>

        <!-- Pending Approvals Card -->
        <div class="pending-approvals-card">
          <div class="card-header">
            <h2>Your pending approvals</h2>
          </div>
          <div class="pending-list">
            <div
              v-for="(item, index) in pendingApprovals"
              :key="index"
              class="pending-item"
            >
              <div class="item-info">
                <h3 class="item-title">{{ item.title }}</h3>
                <div class="item-subtitle">
                  <span>{{ item.org }}</span>
                  <span class="dot-separator">•</span>
                  <span>{{ item.category }}</span>
                  <span class="dot-separator">•</span>
                  <span class="item-date">{{ item.dateSubmitted }}</span>
                </div>
              </div>
              <div class="item-badge">
                <span>{{ item.statusLabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Activity Calendar Feature Modal -->
    <div v-if="showCalendarModal" class="modal-overlay" @click.self="showCalendarModal = false">
      <div class="modal-container calendar-modal-container">
        <div class="modal-header">
          <div class="modal-title-block">
            <i class="far fa-calendar-alt calendar-header-icon"></i>
            <div>
              <h2>Activity Calendar</h2>
              <p>View and manage activity schedules</p>
            </div>
          </div>
          <button class="modal-close-btn" @click="showCalendarModal = false" title="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body calendar-modal-body">
          <div class="calendar-layout">
            <CalendarView :viewMode="currentViewMode" :events="events" @org-change="selectedOrg = $event" />
            <CalendarUpcomingAct :currentView="currentViewMode" @change-view="currentViewMode = $event" :events="events" :selectedOrg="selectedOrg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import CalendarView from '/src/components/Calendar/CalendarView.vue'
import CalendarUpcomingAct from '/src/components/Calendar/CalendarUpcomingAct.vue'
import { mapState, mapActions } from 'pinia';
import { useActivityStore } from '/src/stores/activityStore';

export default {
  components: {
    AppHeader,
    AppSidebar,
    CalendarView,
    CalendarUpcomingAct
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'admin',
      isSidebarVisible: true,
      showCalendarModal: false,
      currentViewMode: 'month',
      selectedOrg: 'All Organizations',
<<<<<<< HEAD
      stats: {
        awaiting: 4,
        approved: 12,
        underReview: 8
      },
      pendingApprovals: [
        {
          title: 'First SSC Regular Meeting',
          org: 'Supreme Student Council',
          category: 'Accomplishment Report',
          dateSubmitted: 'Submitted Sep 15, 2026',
          statusLabel: 'Awaiting'
        },
        {
          title: 'Coding Bootcamp Planning',
          org: 'IT Club',
          category: 'Action Plan Revision',
          dateSubmitted: 'Submitted Sep 14, 2026',
          statusLabel: 'Awaiting'
        },
        {
          title: 'Tech Summit Registration',
          org: 'Engineering Society',
          category: 'Budget Approval',
          dateSubmitted: 'Submitted Sep 12, 2026',
          statusLabel: 'Awaiting'
        },
        {
          title: 'Leadership Workshop Q4',
          org: 'Academic Excellence',
          category: 'Activity Approval',
          dateSubmitted: 'Submitted Sep 10, 2026',
          statusLabel: 'Awaiting'
        }
      ],
      events: [
        { id: 1, title: 'Leadership Training', day: 15, org: 'SSC', status: 'approved', date: 'Jan 15' },
        { id: 2, title: 'Coding Bootcamp', day: 18, org: 'CBIT College', status: 'pending', date: 'Jan 18' }
      ]
=======
    }
  },
  async mounted() {
    await this.fetchActivities();
  },
  computed: {
    ...mapState(useActivityStore, ['activities']),
    events() {
      return this.activities.map(a => ({
        id: a.id,
        title: a.title,
        org: a.organizations ? a.organizations.name : 'Unknown',
        status: a.status ? a.status.toLowerCase() : 'pending',
        date: a.start_date
      }));
>>>>>>> dc74d2cfd2aae0eb6234ad2d3c70d6e22d64f5c5
    }
  },
  methods: {
    ...mapActions(useActivityStore, ['fetchActivities']),
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
  position: relative;
}

:deep(.sidebar) {
  width: 260px;
  height: 100%;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
}

:deep(.sidebar-hidden) {
  margin-left: -260px;
}

.content {
  flex: 1;
  width: 100%;
  padding: 32px 40px;
  background-color: #f8fafc;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.page-title h1 {
  font-family: Arial, sans-serif;
  font-size: 2.2rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
}

.page-title p {
  color: #6b7280;
  margin-top: 8px;
  font-size: 1.05rem;
}

.btn-calendar {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #1d4ed8;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.925rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(29, 78, 216, 0.2);
  transition: all 0.2s ease;
}

.btn-calendar:hover {
  background-color: #1e40af;
  transform: translateY(-1px);
}

/* Alert Banner */
.alert-banner {
  background-color: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.alert-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert-icon {
  font-size: 1.5rem;
  color: #b45309;
}

.alert-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.alert-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #78350f;
  margin: 0;
}

.alert-message {
  font-size: 0.925rem;
  color: #92400e;
  margin: 0;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

.metric-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
}

.metric-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4b5563;
}

.metric-value {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1;
}

.awaiting-color {
  color: #991b1b;
}

.approved-color {
  color: #166534;
}

.review-color {
  color: #1e40af;
}

/* Pending Approvals Card */
.pending-approvals-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.pending-approvals-card .card-header {
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
}

.pending-approvals-card .card-header h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.pending-list {
  display: flex;
  flex-direction: column;
}

.pending-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.15s ease;
}

.pending-item:last-child {
  border-bottom: none;
}

.pending-item:hover {
  background-color: #f9fafb;
}

.item-info .item-title {
  font-size: 1.025rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
}

.item-info .item-subtitle {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.dot-separator {
  color: #9ca3af;
  font-size: 0.8rem;
}

.item-date {
  color: #6b7280;
}

.item-badge span {
  display: inline-block;
  background-color: #fef3c7;
  color: #92400e;
  font-size: 0.825rem;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 9999px;
}

/* Calendar Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 24px;
}

.calendar-modal-container {
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f8fafc;
}

.modal-title-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.calendar-header-icon {
  font-size: 1.5rem;
  color: #1d4ed8;
}

.modal-title-block h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.modal-title-block p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 2px 0 0 0;
}

.modal-close-btn {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background-color: #e2e8f0;
  color: #0f172a;
}

.calendar-modal-body {
  padding: 24px;
  overflow-y: auto;
}

.calendar-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  .dashboard-header {
    flex-direction: column;
    gap: 16px;
  }

  .btn-calendar {
    width: 100%;
    justify-content: center;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .calendar-layout {
    flex-direction: column;
  }

  :deep(.sidebar) {
    position: absolute;
    z-index: 100;
    height: 100%;
  }
}
</style>