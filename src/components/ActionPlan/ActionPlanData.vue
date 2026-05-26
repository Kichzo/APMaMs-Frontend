<template>
  <div class="action-plan-data">
    <div class="data-header">
      <div class="header-left">
        <i class="fa-solid fa-arrow-left back-icon" @click="$emit('back')"></i>
        <h2 class="title">Supreme Student Council 2026</h2>
      </div>
      <div class="header-actions">
        <button class="download-btn">
          <i class="fa-solid fa-download"></i>
          Download
        </button>
        <router-link v-if="role === 'org'" :to="{ name: 'CreateActivity' }" class="add-activity-btn">
          Add Activity
        </router-link>
      </div>
    </div>

    <div class="table-container">
      <table v-if="tableData && tableData.length > 0" class="data-table">
        <thead>
          <tr v-if="currentPage === 1">
            <th>Timeframe</th>
            <th>Programs and Activities</th>
            <th>Strategic Objectives</th>
            <th>Expected Output</th>
            <th>Office</th>
          </tr>
          <tr v-else>
            <th>Office</th>
            <th>Line Item Budget</th>
            <th>Amount</th>
            <th>Total Budget</th>
            <th>Fund Source</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <template v-if="currentPage === 1">
              <td class="timeframe-col">{{ row.timeframe }}</td>
              <td class="activities-col">{{ row.activities }}</td>
              <td class="objectives-col">{{ row.objectives }}</td>
              <td class="output-col">{{ row.output }}</td>
              <td class="office-col">{{ row.office }}</td>
            </template>
            <template v-else>
              <td class="office-col">{{ row.office }}</td>
              <td class="budget-item-col pre-line">{{ row.lineItemBudget }}</td>
              <td class="amount-col pre-line">{{ row.amount }}</td>
              <td class="total-budget-col">{{ row.totalBudget }}</td>
              <td class="fund-source-col">{{ row.fundSource }}</td>
            </template>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-state">
        <p>No data available for this action plan.</p>
      </div>
    </div>

    <!-- Custom indicator/scrollbar decoration acting as pagination -->
    <div class="scroll-indicator" @click="togglePage">
      <div 
        class="indicator-bar" 
        :style="{ 
          transform: currentPage === 1 ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-out'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useActionPlanStore } from '/src/stores/actionPlanStore';

export default {
  name: 'ActionPlanData',
  data() {
    return {
      currentPage: 1,
      role: localStorage.getItem('role') || 'org'
    }
  },
  computed: {
    ...mapState(useActionPlanStore, {
      tableData: 'actionPlans'
    })
  },
  async mounted() {
    await this.fetchActionPlans();
    console.log('ActionPlanData mounted', this.tableData);
  },
  methods: {
    ...mapActions(useActionPlanStore, ['fetchActionPlans']),
    togglePage(e) {
      const track = e.currentTarget;
      const clickX = e.clientX - track.getBoundingClientRect().left;
      const trackWidth = track.clientWidth;
      
      this.currentPage = clickX > (trackWidth / 2) ? 2 : 1;
    }
  }
}
</script>

<style scoped>
.action-plan-data {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: auto;
  font-family: Arial, sans-serif;
}

.data-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  border-bottom: 1px solid #9e9e9e;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.back-icon {
  font-size: 1.2rem;
  cursor: pointer;
  color: #000000;
  transition: color 0.2s;
}

.back-icon:hover {
  color: #3b82f6;
}

.title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  text-transform: uppercase;
}

.header-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.download-btn {
  background: #ffffff;
  color: #000000;
  border: 1px solid #9e9e9e;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.download-btn:hover {
  background: #f1f5f9;
}

.add-activity-btn {
  background: #0026b9; /* Deep blue from mockup */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  text-decoration: none;
}

.add-activity-btn:hover {
  background: #001a8c;
}

.table-container {
  flex: 1;
  overflow-x: auto;
  overflow-y: auto;
  padding: 24px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.data-table th {
  padding: 12px 16px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #000000;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}

.data-table td {
  padding: 24px 16px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #000000;
  vertical-align: top;
  border-bottom: none;
  background-color: #ffffff; /* Explicit background */
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  margin-top: 20px;
}

/* Page 1 Widths */
.timeframe-col { width: 15%; }
.activities-col { width: 20%; }
.objectives-col { width: 30%; }
.output-col { width: 25%; }
.office-col { width: 10%; } /* shared */

/* Page 2 Widths */
.budget-item-col { width: 35%; }
.amount-col { width: 15%; }
.total-budget-col { width: 15%; }
.fund-source-col { width: 25%; }

.pre-line {
  white-space: pre-line;
}

/* Custom indicator from mockup */
.scroll-indicator {
  height: 8px;
  background: #e2e8f0;
  margin: 0 24px 20px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.indicator-bar {
  width: 50%;
  height: 100%;
  background: #3b82f6;
  border-radius: 4px;
}


</style>
