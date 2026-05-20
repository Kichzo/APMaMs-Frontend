<template>
  <div class="budget-panel">
    <template v-if="!selectedOrg">
      <h3 class="panel-title">Organization Budget Status</h3>

      <div class="org-list">
        <div v-for="org in organizations" :key="org.name" class="org-item clickable" @click="selectOrg(org)">
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
    </template>
    
    <template v-else-if="selectedOrg && !selectedDoc">
      <div class="org-detail-view">
        <div class="detail-header">
          <i class="fas fa-arrow-left back-btn" @click="clearOrg"></i>
          <h3 class="detail-title">{{ selectedOrg.name }}</h3>
        </div>
        
        <div class="document-list">
          <div class="document-item clickable-doc" v-for="(doc, idx) in orgDocuments" :key="idx" @click="selectDoc(doc)">
            <div class="doc-info">
              <div class="file-icon-box">
                <i class="fa-regular fa-file"></i>
              </div>
              <span class="doc-name">{{ doc }}</span>
            </div>
            <i class="fas fa-download download-icon"></i>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="selectedDoc">
      <div class="doc-detail-view">
        <div class="doc-header">
          <div class="doc-title-area">
            <i class="fas fa-arrow-left back-btn" @click="clearDoc"></i>
            <h3 class="detail-title">{{ selectedDoc }}</h3>
          </div>
          <button class="download-btn">
            <i class="fas fa-download"></i> Download
          </button>
        </div>

        <div class="doc-info-section">
          <div class="info-block">
            <span class="info-label">Total Budget</span>
            <span class="info-value-large">P5000</span>
          </div>
          <div class="info-block">
            <span class="info-label">Budget Source</span>
            <span class="info-value">OSSD 05- LEADERSHIP AND SKILLS DEVELOPMENT TRAINING</span>
          </div>
        </div>

        <div class="data-box budget-breakdown-box">
          <h4 class="box-title">Budget Breakdown</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>Item/s</th>
                <th>Particulars</th>
                <th>Amount</th>
                <th>Budget Source</th>
              </tr>
            </thead>
            <tbody>
              <!-- Data rows would go here -->
            </tbody>
          </table>
        </div>

        <!-- All Transaction Box -->
        <div class="data-box">
          <h4 class="box-title">All Transaction</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tx, idx) in allTransactions" :key="'tx-'+idx">
                <td>{{ tx.date }}</td>
                <td>{{ tx.activity }}</td>
                <td>{{ tx.category }}</td>
                <td :class="tx.type === 'income' ? 'text-green' : 'text-red'">{{ tx.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Budget Allocation Box -->
        <div class="data-box">
          <h4 class="box-title">Budget Allocation</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Current Budget</th>
                <th>Total Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(alloc, idx) in budgetAllocations" :key="'alloc-'+idx">
                <td>{{ alloc.activity }}</td>
                <td>{{ alloc.currentBudget }}</td>
                <td>{{ alloc.totalAmount }}</td>
                <td class="text-orange">{{ alloc.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    externalSelectedOrg: {
      type: String,
      default: 'All Organization'
    }
  },
  watch: {
    externalSelectedOrg: {
      immediate: true,
      handler(newVal) {
        if (newVal === 'All Organization') {
          if (this.selectedOrg !== null) {
            this.selectedOrg = null;
            this.selectedDoc = null;
          }
        } else {
          const orgMap = {
            'SSC': 'Supreme Student Council',
            'CBIT': 'College of Business and Information Technology',
            'CELS': 'College of Environmental Sciences', // Mapping CELS to College of Environmental Sciences
            'CESS': 'College of Environmental Sciences', 
            'KAABAG': 'KAABAG',
            'CMFS': 'CMFS',
            'TME': 'TME',
            'SenSo': 'SenSo'
          };
          const mappedName = orgMap[newVal] || newVal;
          const org = this.organizations.find(o => o.name === mappedName) || { name: mappedName, percentage: 0, color: '#9ca3af', allocated: '0', spent: '0', remaining: '0' };
          
          if (!this.selectedOrg || this.selectedOrg.name !== org.name) {
            this.selectedOrg = org;
            this.selectedDoc = null;
            this.$emit('org-selected', true);
          }
        }
      }
    }
  },
  data() {
    return {
      selectedOrg: null,
      selectedDoc: null,
      organizations: [
        { name: 'Supreme Student Council', percentage: 45, color: '#22c55e', allocated: '250,000', spent: '112,000', remaining: '137,500' },
        { name: 'College of Business and Information Technology', percentage: 60, color: '#22c55e', allocated: '85,000', spent: '51,000', remaining: '34,000' },
        { name: 'College of Environmental Sciences', percentage: 30, color: '#22c55e', allocated: '180,000', spent: '54,000', remaining: '126,000' },
        { name: 'KAABAG', percentage: 70, color: '#f59e0b', allocated: '200,000', spent: '140,000', remaining: '60,000' }
      ],
      orgDocuments: [
        'First SSC Regular Meeting',
        'SSC Legislative Meeting',
        'Coordination in the conduct of National Art Month',
        'FEMSUSSCO General Assembly'
      ],
      allTransactions: [
        { date: 'May 13, 2025', activity: 'Leadership Summit', category: 'Venue Rental', amount: '-P15,000', type: 'expense' },
        { date: 'May 12, 2025', activity: 'Tech Workshop', category: 'Equipment', amount: '-P8,500', type: 'expense' },
        { date: 'May 11, 2025', activity: 'Cultural Festival', category: 'Materials', amount: '-P12,000', type: 'expense' },
        { date: 'May 10, 2025', activity: 'Sports Tournament', category: 'Prizes', amount: '-P18,000', type: 'expense' },
        { date: 'May 9, 2025', activity: 'Sponsorship', category: 'Income', amount: '+P25,000', type: 'income' },
        { date: 'May 8, 2025', activity: 'Blood Donation', category: 'Supplies', amount: '-P4,500', type: 'expense' },
        { date: 'May 7, 2025', activity: 'Career Seminar', category: 'Speaker Fee', amount: '-P10,000', type: 'expense' },
        { date: 'May 6, 2025', activity: 'Environmental Campaign', category: 'Transportation', amount: '-P6,000', type: 'expense' }
      ],
      budgetAllocations: [
        { activity: 'Palakasan 2024', currentBudget: 'P120,000', totalAmount: 'P150,000', status: 'Pending' }
      ]
    }
  },
  methods: {
    selectOrg(org) {
      this.selectedOrg = org;
      this.$emit('org-selected', true);
      
      const reverseMap = {
        'Supreme Student Council': 'SSC',
        'College of Business and Information Technology': 'CBIT',
        'College of Environmental Sciences': 'CELS',
        'KAABAG': 'KAABAG'
      };
      this.$emit('update-org', reverseMap[org.name] || org.name);
    },
    clearOrg() {
      this.selectedOrg = null;
      this.$emit('org-selected', false);
      this.$emit('update-org', 'All Organization');
    },
    selectDoc(doc) {
      this.selectedDoc = doc;
    },
    clearDoc() {
      this.selectedDoc = null;
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
  font-family: Arial, sans-serif;
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

.clickable {
  cursor: pointer;
  transition: opacity 0.2s;
}

.clickable:hover {
  opacity: 0.7;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cbd5e1;
  margin-bottom: 20px;
}

.back-btn {
  cursor: pointer;
  font-size: 1.2rem;
  color: #111827;
}

.detail-title {
  font-family: Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.document-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.doc-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.file-icon-box {
  width: 36px;
  height: 36px;
  background-color: #dbeafe;
  color: #001ba0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 1.2rem;
}

.doc-name {
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
}

.download-icon {
  cursor: pointer;
  color: #111827;
  font-size: 1.1rem;
}

.clickable-doc {
  cursor: pointer;
  transition: opacity 0.2s;
}

.clickable-doc:hover {
  opacity: 0.7;
}

.doc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #cbd5e1;
}

.doc-title-area {
  display: flex;
  align-items: center;
  gap: 15px;
}

.download-btn {
  background-color: #001ba0;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-family: Arial, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.doc-info-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-label {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
}

.info-value-large {
  font-family: Arial, sans-serif;
  font-size: 2rem;
  color: #001ba0;
  font-weight: 400;
}

.info-value {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
}

.data-box {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 20px;
}

.budget-breakdown-box {
  height: 400px;
}

.box-title {
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 25px 0;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  text-align: left;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e8f0;
}

.data-table td {
  padding: 15px 0;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  color: #475569;
  border-bottom: 1px solid #f1f5f9;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.text-red {
  color: #ef4444 !important;
  font-weight: 600;
}

.text-green {
  color: #22c55e !important;
  font-weight: 600;
}

.text-orange {
  color: #f59e0b !important;
  font-weight: 600;
}
</style>