<template>
  <div class="plan-item" :class="{ active }" @click="$emit('select')">
    <h4 class="title">{{ plan.title }}</h4>
    <i class="fa-solid fa-trash delete-icon" title="Delete" @click.stop="$emit('delete', plan.id)"></i>
  </div>
</template>

<script>
export default {
  props: {
    plan: Object,
    active: Boolean
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
  font-family: Arial, sans-serif;
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

.delete-icon {
  color: #ef4444; /* Subtle red */
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s;
  padding: 4px;
}

.delete-icon:hover {
  color: #b91c1c; /* Darker red on hover */
}
</style>