<template>
  <div class="panel">
    <div class="panel-header">
      <h3>Action Plans</h3>
      <button class="add-btn">+</button>
    </div>

    <ActionPlanCard
      v-for="plan in plans"
      :key="plan.id"
      :plan="plan"
      :active="plan.id === activePlanId"
      @select="$emit('select-plan', plan)"
    />
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
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.panel-header h3 {
  font-family: serif;
  font-size: 1.1rem;
}

.add-btn {
  background: #0a21c0;
  color: #fff;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
}

</style>