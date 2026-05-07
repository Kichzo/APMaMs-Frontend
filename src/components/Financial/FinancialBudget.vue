<template>
  <div class="budget-panel">
    <h2 class="panel-title">Budget Allocation</h2>
    
    <div class="allocation-card">
      <div class="card-header">
        <div class="title-row">
          <h3>Palakasan 2026</h3>
          <span class="status-badge pending">Pending</span>
        </div>
        <p class="org-name">Supreme Student Council</p>
      </div>

      <div class="budget-info">
        <div class="budget-column">
          <span class="label">Current Budget</span>
          <span class="amount">P120,000</span>
        </div>
        <div class="budget-column">
          <span class="label">New Total</span>
          <span class="amount">P150,000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialBudget'
}
</script>

<style scoped>
.budget-panel {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}

.panel-title {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #111827;
}

.allocation-card {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 20px 25px;
  background: #ffffff;
}

.card-header {
  margin-bottom: 25px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.title-row h3 {
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-block;
  font-family: Arial, sans-serif;
}

.status-badge.pending {
  background-color: #fef3c7;
  color: #d97706;
}

.org-name {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #475569;
  margin: 0;
}

.budget-info {
  display: flex;
  gap: 80px;
}

.budget-column {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.budget-column .label {
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #111827;
  font-weight: 500;
}

.budget-column .amount {
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  color: #111827;
  font-weight: 700;
}
</style>
