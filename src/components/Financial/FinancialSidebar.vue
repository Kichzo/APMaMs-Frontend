<template>
  <aside class="sidebar-col">
    <div class="card expense-card">
      <h3>Expense Breakdown</h3>
      <div class="expense-list">
        <div v-for="item in expenses" :key="item.label" class="expense-row">
          <div class="row-info">
            <span>{{ item.label }}</span>
            <strong>P{{ item.amount }}</strong>
          </div>
          <div class="mini-progress">
            <div class="fill" :style="{ width: item.pct + '%', background: item.color }"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="card tx-card">
      <h3>Recent Transaction</h3>
      <div class="tx-list">
        <div v-for="tx in transactions" :key="tx.id" class="tx-row">
          <div class="tx-icon" :class="tx.type">
            <i :class="tx.type === 'income' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
          </div>
          <div class="tx-meta">
            <strong>{{ tx.title }}</strong>
            <span>{{ tx.date }}</span>
          </div>
          <div class="tx-amount" :class="tx.status">
            {{ tx.amount }}
            <span class="status-badge" :class="tx.status.toLowerCase()">{{ tx.status }}</span>
          </div>
        </div>
      </div>
      <a href="#" class="view-all">View All Transactions</a>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      expenses: [
        { label: 'Venue & Facilities', amount: '85,000', pct: 45, color: '#3b82f6' },
        { label: 'Materials & Supplies', amount: '65,000', pct: 35, color: '#a855f7' },
        { label: 'Equipment', amount: '55,000', pct: 25, color: '#22c55e' }
      ],
      transactions: [
        { id: 1, title: 'Leadership Summit', date: 'May 13, 2025', amount: '-P15,000', status: 'Approved', type: 'expense' },
        { id: 2, title: 'Cultural Festival', date: 'May 15, 2025', amount: '-P12,000', status: 'Pending', type: 'expense' },
        { id: 3, title: 'Sponsorship', date: 'May 5, 2025', amount: '+P25,000', status: 'Pending', type: 'income' }
      ]
    }
  }
}
</script>

<style scoped>
.sidebar-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

.card h3 {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

/* Expense Styles */
.expense-row {
  margin-bottom: 15px;
}

.row-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 6px;
}

.mini-progress {
  height: 6px;
  background: #f1f5f9;
  border-radius: 3px;
}

.fill {
  height: 100%;
  border-radius: 3px;
}

/* Transaction Styles */
.tx-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f8fafc;
}

.tx-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tx-icon.expense {
  background: #fee2e2;
  color: #ef4444;
}

.tx-icon.income {
  background: #dcfce7;
  color: #166534;
}

.tx-meta {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tx-meta strong {
  font-size: 0.85rem;
}

.tx-meta span {
  font-size: 0.7rem;
  color: #94a3b8;
}

.tx-amount {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-badge {
  font-size: 0.6rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 2px;
}

.approved {
  background: #dcfce7;
  color: #166534;
}

.pending {
  background: #fef9c3;
  color: #854d0e;
}

.view-all {
  display: block;
  text-align: center;
  font-size: 0.8rem;
  color: #0a21c0;
  text-decoration: none;
  margin-top: 10px;
}
</style>