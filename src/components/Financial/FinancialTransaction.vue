<template>
  <div class="transaction-panel">
    <h2 class="panel-title">All Transaction</h2>
    
    <div class="table-responsive">
      <table class="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Organization</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tx, index) in transactions" :key="index">
            <td>{{ tx.date }}</td>
            <td>{{ tx.activity }}</td>
            <td>{{ tx.org }}</td>
            <td>{{ tx.category }}</td>
            <td :class="tx.amount.startsWith('+') ? 'text-green' : 'text-red'">
              {{ tx.amount }}
            </td>
            <td>
              <span :class="['status-badge', tx.status.toLowerCase()]">
                {{ tx.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        { date: 'May 13, 2025', activity: 'Leadership Summit', org: 'SSC', category: 'Venue Rental', amount: '-P15,000', status: 'Approved' },
        { date: 'May 12, 2025', activity: 'Tech Workshop', org: 'CBIT', category: 'Equipment', amount: '-P8,500', status: 'Approved' },
        { date: 'May 11, 2025', activity: 'Cultural Festival', org: 'CESS', category: 'Materials', amount: '-P12,000', status: 'Pending' },
        { date: 'May 10, 2025', activity: 'Sports Tournament', org: 'CELS', category: 'Prizes', amount: '-P18,000', status: 'Approved' },
        { date: 'May 9, 2025', activity: 'Sponsorship', org: 'TME', category: 'Income', amount: '+P25,000', status: 'Approved' },
        { date: 'May 8, 2025', activity: 'Blood Donation', org: 'KAABAG', category: 'Supplies', amount: '-P4,500', status: 'Approved' },
        { date: 'May 7, 2025', activity: 'Career Seminar', org: 'SSC', category: 'Speaker Fee', amount: '-P10,000', status: 'Approved' },
        { date: 'May 6, 2025', activity: 'Environmental Campaign', org: 'CELS', category: 'Transportation', amount: '-P6,000', status: 'Pending' },
      ]
    }
  }
}
</script>

<style scoped>
.transaction-panel {
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
  margin-bottom: 30px;
  color: #111827;
}

.table-responsive {
  overflow-x: auto;
}

.transaction-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
}

.transaction-table th {
  text-align: left;
  padding: 15px 10px;
  color: #111827;
  font-weight: 600;
  border-bottom: 1px solid #f1f5f9;
}

.transaction-table td {
  padding: 20px 10px;
  color: #4b5563;
  border-bottom: 1px solid #f1f5f9;
}

.transaction-table tr:last-child td {
  border-bottom: none;
}

.text-red {
  color: #ef4444 !important;
  font-weight: 600;
}

.text-green {
  color: #10b981 !important;
  font-weight: 600;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  text-align: center;
  min-width: 80px;
}

.status-badge.approved {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.pending {
  background-color: #fef3c7;
  color: #92400e;
}
</style>