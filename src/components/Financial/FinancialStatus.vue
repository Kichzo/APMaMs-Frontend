<template>
  <div class="budget-panel">
    <h3 class="panel-title">Organization Budget Status</h3>

    <div class="org-list">
      <div v-for="org in organizations" :key="org.name" class="org-item">
        <div class="org-header">
          <span class="org-name">{{ org.name }}</span>
          <span class="usage-label">{{ org.percentage }}% Used</span>
        </div>

        <div class="progress-bg">
          <div class="progress-fill" :style="{ width: org.percentage + '%', background: org.color }"></div>
        </div>

        <div class="budget-details">
          <div class="detail-item">
            <span>Allocated</span>
            <strong>P{{ org.allocated }}</strong>
          </div>
          <div class="detail-item spent">
            <span>Spent</span>
            <strong>P{{ org.spent }}</strong>
          </div>
          <div class="detail-item remaining">
            <span>Remaining</span>
            <strong>P{{ org.remaining }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organizations: [
        { name: 'Supreme Student Council', percentage: 45, color: '#22c55e', allocated: '250,000', spent: '112,000', remaining: '137,500' },
        { name: 'College of Business and Information Technology', percentage: 60, color: '#22c55e', allocated: '85,000', spent: '51,000', remaining: '34,000' },
        { name: 'College of Environmental Sciences', percentage: 30, color: '#22c55e', allocated: '180,000', spent: '54,000', remaining: '126,000' },
        { name: 'KAABAG', percentage: 70, color: '#f59e0b', allocated: '200,000', spent: '140,000', remaining: '60,000' }
      ]
    }
  }
}
</script>

<style scoped>
.budget-panel {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
}

.panel-title {
  font-family: serif;
  font-size: 1.25rem;
  margin-bottom: 25px;
}

.org-item {
  margin-bottom: 30px;
  border-bottom: 1px solid #f8fafc;
  padding-bottom: 20px;
}

.org-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.org-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 0.95rem;
}

.usage-label {
  color: #64748b;
  font-size: 0.85rem;
}

.progress-bg {
  height: 6px;
  background: #f1f5f9;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
}

.budget-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.detail-item span {
  color: #94a3b8;
  font-size: 0.7rem;
}

.detail-item strong {
  color: #334155;
}

.detail-item.spent strong {
  color: #ef4444;
}

.detail-item.remaining strong {
  color: #22c55e;
}
</style>