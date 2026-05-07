<template>
  <div class="plan-item" :class="{ active }" @click="$emit('select')">
    <h4 class="title">{{ plan.title }}</h4>
    <i v-if="role === 'admin'" class="fa-solid fa-pen edit-icon" title="Edit" @click.stop="$emit('edit', plan)"></i>
  </div>
</template>

<script>
export default {
  props: {
    plan: Object,
    active: Boolean,
    role: String
  }
}
</script>

<style scoped>
.plan-item {
  padding: 12px 24px;
  margin: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.plan-item.active {
  background: #001b94; /* Dark blue from the image */
}

.plan-item h4 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.85rem;
  font-weight: bold;
  margin: 0;
  color: #111827;
  flex: 1; /* Pushes the trash icon to the right */
  text-align: left;
}

.plan-item.active h4 {
  color: #ffffff;
}

.edit-icon {
  color: #3b82f6; /* Blue icon for edit */
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s;
  padding: 4px;
}

.edit-icon:hover {
  color: #1d4ed8;
}
</style>