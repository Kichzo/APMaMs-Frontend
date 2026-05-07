<template>
  <div class="action-plan-data">
    <div class="data-header">
      <div class="header-left">
        <i class="fa-solid fa-arrow-left back-icon" @click="$emit('back')"></i>
        <h2 class="title">ACTION PLAN FOR THE FISCAL YEAR 2026</h2>
      </div>
      <button class="download-btn">
        <i class="fa-solid fa-download"></i>
        Download
      </button>
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
      <div v-else class="no-data">
        No data found.
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
export default {
  name: 'ActionPlanData',
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    tableData() {
      return [
        {
          timeframe: 'January 1st week',
          activities: 'First Regular SSC Meeting',
          objectives: "To evaluate the previous year's output and prepare for the 2nd semester's student general assembly and Arts Month Celebration",
          output: 'Efficient implementation of planned activities/ accomplishment report/ attendance sheet',
          office: 'OSD-SSC',
          lineItemBudget: 'snacks for 50 persons @ P75 each',
          amount: '5,000',
          totalBudget: '5,000',
          fundSource: 'OSSD 05- LEADERSHIP AND SKILLS DEVELOPMENT TRAINING'
        },
        {
          timeframe: 'February 1st week',
          activities: 'SSC Legislative Meeting',
          objectives: 'To conduct regular scrutiny and updates of the SSC Constitution and By-Laws and craft resolution proposals for FEMSUSSCO',
          output: 'Enhanced student policies/ accomplishment report/ attendance sheet/approved legislations and proposals',
          office: 'OSD-SSC',
          lineItemBudget: 'snacks for 50 persons @ P75 each',
          amount: '5,000',
          totalBudget: '5,000',
          fundSource: 'SSC CONTRIBUTION'
        },
        {
          timeframe: 'Whole Month of February',
          activities: 'Coordination in the conduct of the National Arts Month Celebration',
          objectives: 'To enhance the aesthetic skills, creativity, and cultural sensitivity of MSUN students through various arts activities and cultural performances',
          output: 'Development of Creativity and Cultural sensitivity skills/ accomplishment report/ attendance sheet',
          office: 'OSD-SSC',
          lineItemBudget: 'snacks for 100 persons @ P75 each',
          amount: '7,500',
          totalBudget: '7,500',
          fundSource: 'OSSD 05- ARTS MONTH'
        },
        {
          timeframe: 'February 3rd week',
          activities: 'FEMSUSSCO general assembly',
          objectives: "To provide MSUN SSC officers the avenue of collaborating with other MSU system student leaders and implement policies that improve students' academic performance and alleviate students' lived experiences in college",
          output: 'Enhanced Student leadership skills/accomplishment report/ attendance sheet',
          office: 'OSD-SSC',
          lineItemBudget: 'Registration fee of P3,500 X 3\n\nPer diem\n\nTransportation',
          amount: '10,500\n\n5,900\n\n3,000',
          totalBudget: '19,400',
          fundSource: 'OSSD 05-FEMSUSSCO'
        }
      ]
    }
  },
  mounted() {
    console.log('ActionPlanData mounted', this.tableData);
  },
  methods: {
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

.download-btn {
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
  gap: 8px;
  transition: background 0.2s;
}

.download-btn:hover {
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

.no-data {
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-style: italic;
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
