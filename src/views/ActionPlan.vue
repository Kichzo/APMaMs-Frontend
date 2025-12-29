<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />

    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="page-title">
          <h1>Action Plan</h1>
          <p>Monitor and manage institutional strategic initiatives</p>
        </div>
        
        <ActionPlanStats />
        
        <div class="action-grid">
          <ActionPlanList 
            :plans="plans" 
            :activePlanId="selectedPlan.id" 
            @select-plan="selectedPlan = $event" 
          />

          <div>
            <ActionPlanHeader :title="selectedPlan.title" :progress="selectedPlan.progress" />
            <KeyMetrics :metrics="metrics" />
            <ActionObjectives :objectives="objectives" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'
import ActionPlanList from '/src/components/ActionPlan/ActionPlanList.vue'
import ActionPlanHeader from '/src/components/ActionPlan/ActionPlanHeader.vue'
import KeyMetrics from '/src/components/ActionPlan/ActionPlanKeyMetrics.vue'
import ActionObjectives from '/src/components/ActionPlan/ActionPlanObjectives.vue'
import ActionPlanStats from '/src/components/ActionPlan/ActionPlanStats.vue'

export default {
  components: {
    AppHeader,
    AppSidebar,
    ActionPlanList,
    ActionPlanHeader,
    KeyMetrics,
    ActionObjectives,
    ActionPlanStats
  },
  data() {
    return {
      isSidebarVisible: true,
      role: localStorage.getItem('role') || 'org',
      plans: [
        {
          id: 1,
          title: 'Academic Excellence Initiative',
          period: '2025–2028',
          status: 'Active',
          progress: 35
        }
      ],
      selectedPlan: {
        id: 1,
        title: 'Academic Excellence Initiative',
        progress: 35
      },
      metrics: [
        { label: 'Completion Rate', value: '35%' },
        { label: 'Budget Utilization', value: '₱2.1M' },
        { label: 'Objectives Met', value: '3 / 12' },
        { label: 'Timeline', value: '8 months' }
      ],
      objectives: [
        { id: 1, title: 'Enhance curriculum activity', progress: 45, status: 'On Track', statusClass: 'green' },
        { id: 2, title: 'Increase research output', progress: 25, status: 'At Risk', statusClass: 'red' }
      ],
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
}
  
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative; /* Required for mobile absolute positioning */
}

/* Sidebar logic exactly as your Dashboard reference */
:deep(.sidebar) {
  width: 260px;
  height: 100%;
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
}

/* This is the magic part that pulls it away so content can fill space */
:deep(.sidebar-hidden) {
  margin-left: -260px;
}

.content {
  flex: 1; /* This pushes the content to fill 100% of the remaining width */
  padding: 40px;
  overflow-y: auto;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.page-title h1 {
  font-family: serif;
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.page-title p {
  color: #888;
  margin-bottom: 40px;
}

.action-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
}
</style>