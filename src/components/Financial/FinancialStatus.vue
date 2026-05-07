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
              <i class="fas fa-copy doc-icon"></i>
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

        <div class="budget-breakdown-box">
          <h4 class="breakdown-title">Budget Breakdown</h4>
          <table class="breakdown-table">
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
      </div>
    </template>
  </div>
</template>

<script>
export default {
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
      ]
    }
  },
  methods: {
    selectOrg(org) {
      this.selectedOrg = org;
      this.$emit('org-selected', true);
    },
    clearOrg() {
      this.selectedOrg = null;
      this.$emit('org-selected', false);
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

.doc-icon {
  color: #001ba0;
  font-size: 1.8rem;
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

.budget-breakdown-box {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 25px;
  height: 400px; /* added height so the box resembles the empty box in image */
}

.breakdown-title {
  font-family: Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 25px 0;
}

.breakdown-table {
  width: 100%;
  border-collapse: collapse;
}

.breakdown-table th {
  text-align: left;
  font-family: Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
  padding-bottom: 10px;
}

.breakdown-table td {
  padding: 10px 0;
}
</style>