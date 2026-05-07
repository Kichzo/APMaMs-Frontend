<template>
  <div class="panel">
    <div class="panel-header">
      <h3>Action Plan</h3>
      <i v-if="role === 'admin'" class="fa-solid fa-plus add-icon" @click="$emit('add-plan')"></i>
    </div>

    <div class="plan-items">
      <ActionPlanCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
        :active="plan.id === activePlanId"
        :role="role"
        @select="$emit('select-plan', plan)"
        @edit="$emit('edit-plan', $event)"
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
    activePlanId: Number,
    role: String
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-header h3 {
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  color: #000000;
}

.add-icon {
  font-size: 1.2rem;
  cursor: pointer;
  color: #000000;
  transition: transform 0.2s ease;
}

.add-icon:hover {
  transform: scale(1.1);
  color: #3b82f6;
}

.plan-items {
  padding: 10px 0;
}
</style>