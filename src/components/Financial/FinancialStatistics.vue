<template>
  <div class="statistics-container">
    
    <div class="stats-grid">
      <!-- Left Column: Donut Chart -->
      <div class="card left-card">
        <h3 class="chart-title">Expense Breakdown by Category</h3>
        
        <div class="donut-chart-container">
          <div class="donut-chart">
            <div class="donut-inner"></div>
          </div>
        </div>
        
        <div class="legend">
          <div class="legend-item">
            <span class="dot" style="background: #3b82f6;"></span> 
            Venue & Facilities
          </div>
          <div class="legend-item">
            <span class="dot" style="background: #f472b6;"></span> 
            Materials & Supplies
          </div>
          <div class="legend-item">
            <span class="dot" style="background: #22c55e;"></span> 
            Equipment
          </div>
          <div class="legend-item">
            <span class="dot" style="background: #f97316;"></span> 
            Transportation
          </div>
          <div class="legend-item">
            <span class="dot" style="background: #ef4444;"></span> 
            Food & Catering
          </div>
        </div>
      </div>
      
      <!-- Right Column: Transparency Score & Line Chart -->
      <div class="right-column">
        
        <!-- Transparency Score -->
        <div class="card transparency-card">
          <h3 class="chart-title">Transparency Score</h3>
          <div class="score-value">85%</div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: 85%;"></div>
          </div>
          <div class="score-label">Excellent Financial Health</div>
        </div>
        
        <!-- Line Chart -->
        <div class="card line-chart-card">
          <h3 class="chart-title">Expense Breakdown by Category</h3>
          
          <div class="line-chart-container">
            <svg viewBox="0 0 500 250" class="line-chart">
              <!-- Grid lines & Y Axis -->
              <line x1="50" y1="200" x2="500" y2="200" stroke="#cbd5e1" stroke-dasharray="4" />
              <text x="40" y="205" font-size="10" fill="#64748b" text-anchor="end">11500</text>
              
              <line x1="50" y1="150" x2="500" y2="150" stroke="#cbd5e1" stroke-dasharray="4" />
              <text x="40" y="155" font-size="10" fill="#64748b" text-anchor="end">12375</text>
              
              <line x1="50" y1="100" x2="500" y2="100" stroke="#cbd5e1" stroke-dasharray="4" />
              <text x="40" y="105" font-size="10" fill="#64748b" text-anchor="end">13250</text>
              
              <line x1="50" y1="50" x2="500" y2="50" stroke="#cbd5e1" stroke-dasharray="4" />
              <text x="40" y="55" font-size="10" fill="#64748b" text-anchor="end">14125</text>

              <line x1="50" y1="0" x2="500" y2="0" stroke="#cbd5e1" stroke-dasharray="4" />
              <text x="40" y="5" font-size="10" fill="#64748b" text-anchor="end">15000</text>

              <!-- X Axis labels -->
              <text x="70" y="220" font-size="10" fill="#64748b" text-anchor="middle">Jan</text>
              <text x="140" y="220" font-size="10" fill="#64748b" text-anchor="middle">Feb</text>
              <text x="220" y="220" font-size="10" fill="#64748b" text-anchor="middle">Mar</text>
              <text x="300" y="220" font-size="10" fill="#64748b" text-anchor="middle">Apr</text>
              <text x="380" y="220" font-size="10" fill="#64748b" text-anchor="middle">May</text>
              <text x="460" y="220" font-size="10" fill="#64748b" text-anchor="middle">Jun</text>

              <!-- Blue Line (Budgeted) -->
              <path d="M 50 200 C 100 120, 180 140, 240 135 C 280 130, 290 100, 310 50 C 330 45, 400 60, 460 0" fill="none" stroke="#2563eb" stroke-width="2" />
              
              <!-- Orange Line (Actual) -->
              <path d="M 60 205 C 80 120, 140 120, 240 150 C 300 160, 310 50, 340 40 C 380 45, 420 30, 460 15" fill="none" stroke="#ea580c" stroke-width="2" />
            </svg>
            
            <div class="line-legend">
              <div class="legend-item"><span class="dot" style="background: #3b82f6;"></span> Budgeted</div>
              <div class="legend-item"><span class="dot" style="background: #f97316;"></span> Actual</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialStatistics'
}
</script>

<style scoped>
.statistics-container {
  width: 100%;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}

.left-card {
  display: flex;
  flex-direction: column;
}

.chart-title {
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 40px 0;
  color: #111827;
}

/* Donut Chart */
.donut-chart-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.donut-chart {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  /* Colors corresponding to the mockup */
  background: conic-gradient(
    #ef4444 0% 5%,      /* Food & Catering */
    #3b82f6 5% 40%,     /* Venue & Facilities */
    #f97316 40% 65%,    /* Transportation */
    #22c55e 65% 85%,    /* Equipment */
    #f472b6 85% 100%    /* Materials & Supplies */
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.donut-inner {
  width: 160px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 50%;
}

/* Legends */
.legend {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #334155;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

/* Right Column */
.right-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Transparency Score */
.transparency-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: none;
  box-shadow: none;
  background: transparent;
  padding: 0;
}

.transparency-card .chart-title {
  margin-bottom: 10px;
}

.score-value {
  font-family: Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #2563eb;
  line-height: 1;
  margin-bottom: 10px;
}

.progress-bar-container {
  width: 200px;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-bar {
  height: 100%;
  background: #2563eb;
  border-radius: 4px;
}

.score-label {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #334155;
}

/* Line Chart */
.line-chart-card {
  flex: 1;
}

.line-chart-container {
  position: relative;
  width: 100%;
}

.line-chart {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.line-legend {
  display: flex;
  justify-content: center;
  gap: 30px;
}
</style>
