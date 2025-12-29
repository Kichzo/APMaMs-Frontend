<template>
  <div class="action-stats">
    <div class="stat-card">
      <div class="icon blue">
        <i class="far fa-clock"></i>
      </div>
      <div>
        <h4>3</h4>
        <span>Active Plans</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="icon yellow">
        <i class="far fa-check-circle"></i>
      </div>
      <div>
        <h4>29</h4>
        <span>Total Objectives</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="icon green">
        <i class="fas fa-chart-line"></i>
      </div>
      <div>
        <h4>53%</h4>
        <span>Avg Progress</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="icon purple">
        <i class="far fa-file-alt"></i>
      </div>
      <div>
        <h4>₱23.5M</h4>
        <span>Total Budget</span>
      </div>
    </div>
  </div>

</template>

<style scoped>
.action-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 16px 0 24px;
  width: 100%;
}

.stat-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.stat-card h4 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.stat-card span {
  font-size: 0.75rem;
  color: #6b7280;
}

.icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.icon.blue {
  background: #dbeafe;
  color: #1e3a8a;
}

.icon.yellow {
  background: #fef9c3;
  color: #92400e;
}

.icon.green {
  background: #dcfce7;
  color: #166534;
}

.icon.purple {
  background: #f3e8ff;
  color: #6b21a8;
}
</style>