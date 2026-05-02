<template>
  <div class="panel">
    <div class="panel-header">
      <h3>Action Plan</h3>
    </div>

    <div class="plan-items">
      <ActionPlanCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
        :active="plan.id === activePlanId"
        @select="$emit('select-plan', plan)"
      />
    </div>
  </div>
</template>

<script>
import ActionPlanCard from './ActionPlanCard.vue'

export default {
  components: { ActionPlanCard },
  props: {
    plans: Array,
    activePlanId: Number
  }
}
</script>

<style scoped>
.panel {
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  min-height: 350px;
}

.panel-header {
  padding: 20px 24px;
  border-bottom: 1px solid #9e9e9e;
}

.panel-header h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #111827;
}

.plan-items {
  padding: 10px 0;
}
</style>