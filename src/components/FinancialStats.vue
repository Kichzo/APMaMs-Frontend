<template>
  <div class="stats-row">
    <div class="stat-card">
      <div class="icon-box blue"><i class="fas fa-coins"></i></div>
      <div class="stat-info">
        <h2>P925K</h2>
        <p>Total Allocated</p>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="icon-box green"><i class="fas fa-arrow-down"></i></div>
      <div class="stat-info">
        <h2>P467K</h2>
        <p>Total Spent</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="icon-box purple"><i class="fas fa-wallet"></i></div>
      <div class="stat-info">
        <h2>P458K</h2>
        <p>Remaining Budget</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="icon-box red"><i class="fas fa-receipt"></i></div>
      <div class="stat-info">
        <h2>24</h2>
        <p>Pending Request</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.icon-box {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}
.blue { background: #eff6ff; color: #1e40af; }
.green { background: #f0fdf4; color: #166534; }
.purple { background: #faf5ff; color: #6b21a8; }
.red { background: #fef2f2; color: #991b1b; }

.stat-info h2 { font-family: serif; font-size: 1.8rem; margin: 0; }
.stat-info p { color: #64748b; margin: 4px 0 0 0; font-size: 0.85rem; }
</style>