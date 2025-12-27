<template>
  <div class="stats-row">
    <div v-for="stat in stats" :key="stat.label" class="mini-card">
      <div class="icon-wrap" :style="{ backgroundColor: stat.bg }">
        <i :class="stat.icon"></i>
      </div>
      <div class="stat-info">
        <span class="count">{{ stat.value }}</span>
        <span class="label">{{ stat.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { value: 8, label: 'Total Activities', icon: 'fas fa-list-ul', bg: '#e0f2fe' },
        { value: 1, label: 'Pending Approval', icon: 'far fa-clock', bg: '#fef9c3' },
        { value: 2, label: 'Ongoing', icon: 'fas fa-play-circle', bg: '#dcfce7' },
        { value: 1, label: 'Completed', icon: 'far fa-check-circle', bg: '#fce7f3' }
      ]
    }
  }
}
</script>

<style scoped>
.stats-row {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.mini-card {
  flex: 1;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.count { 
  font-weight: bold; 
  font-size: 1.2rem; 
  display: block; 
}

.label { 
  font-size: 0.8rem; 
  color: #6b7280; 
}

</style>