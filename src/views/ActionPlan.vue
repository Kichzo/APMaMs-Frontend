<template>

<!-- NEED LITTLE DETAILS-->


    <div class="app-container">
    <!-- guys this is top header, this is content -->
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <!-- guys this is main dashboard layout -->
    <div class="dashboard-layout">
      <!-- guys this is sidebar, this is content -->
      <AppSidebar :visible="isSidebarVisible" />

      <!-- guys this is main content area -->
      <main class="content">
        <div class="page-title">
          <h1>Action Plan</h1>
          <p>Monitor and manage institutional strategic initiatives</p>
        </div>
        <ActionPlanStats />
  <div class="action-grid">

    <!-- LEFT -->
    <ActionPlanList
      :plans="plans"
      :activePlanId="selectedPlan.id"
      @select-plan="selectedPlan = $event"
    />

    <!-- RIGHT -->
    <div>
      <ActionPlanHeader
        :title="selectedPlan.title"
        :progress="selectedPlan.progress"
      />

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
import ActionPlanList from '/src/components/ActionPlanList.vue'
import ActionPlanHeader from '/src/components/ActionPlanHeader.vue'
import KeyMetrics from '/src/components/ActionPlanKeyMetrics.vue'
import ActionObjectives from '/src/components/ActionPlanObjectives.vue'
import ActionPlanStats from '/src/components/ActionPlanStats.vue'

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
      ]
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* guys this is dashboard layout container */
.dashboard-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* guys this is main content styling */
.content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background-color: #fff;
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