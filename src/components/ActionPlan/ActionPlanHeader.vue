<template>
  <div class="action-plan-header">
    <div class="header-top">
      <div class="title-wrap">
        <h3>Academic Excellence Initiative 2025–2028</h3>
        <span class="period">Period: 2025–2028</span>
      </div>

      <button class="edit-btn">
        <i class="fas fa-pen"></i>
        Edit Plan
      </button>
    </div>

    <div class="progress-wrap">
      <div class="progress-label">
        <span>Overall Progress</span>
        <span class="percent">35%</span>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width: 35%"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    title: String,
    progress: Number
  }
}
</script>

<style scoped>
.action-plan-header {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  /* ← CRITICAL */
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.title-wrap h3 {
  margin: 0;
  font-family: serif;
  font-size: 1.1rem;
}

.period {
  font-size: 0.8rem;
  color: #6b7280;
}

.edit-btn {
  background: #1e40af;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.75rem;
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;
}

/* 🔥 PROGRESS FIX */
.progress-wrap {
  margin-top: 14px;
  width: 100%;
  /* ← CRITICAL */
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #6b7280;
  margin-bottom: 6px;
}

.progress-bar {
  width: 100%;
  /* ← CRITICAL */
  height: 6px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #f97316;
  border-radius: 999px;
}
</style>