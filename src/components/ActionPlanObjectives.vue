<template>
  <div class="objectives-card">
    <div class="panel-header">
      <h3>Action Objectives</h3>
      <button class="add-btn">+ Add Objectives</button>
    </div>

    <div
      v-for="obj in objectives"
      :key="obj.id"
      class="objective"
    >
      <div class="objective-header">
        <span>{{ obj.title }}</span>
        <span class="tag" :class="obj.statusClass">
          {{ obj.status }}
        </span>
      </div>

      <div class="progress-bar">
        <div class="fill" :style="{ width: obj.progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    objectives: Array
  }
}
</script>

<style scoped>
.objectives-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

.objective {
  margin-top: 16px;
}

.objective-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
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
  margin: 0;
}

.add-btn {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #0a21c0;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, border 0.2s ease;
}

.add-btn:hover {
  background: #eef2ff;
  border-color: #c7d2fe;
}


.tag {
  font-size: 0.7rem;
  padding: 2px 10px;
  border-radius: 999px;
  font-weight: 600;
}

.tag.green {
  background: #dcfce7;
  color: #166534;
}

.tag.red {
  background: #fee2e2;
  color: #991b1b;
}

</style>