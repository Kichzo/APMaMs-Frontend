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
 background: #ffffff;
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.blue {
  background: #e0f2fe;
  color: #0284c7;
}

.green {
  background: #dcfce7;
  color: #16a34a;
}

.purple {
  background: #f3e8ff;
  color: #9333ea;
}

.red {
  background: #fee2e2;
  color: #dc2626;
}

.stat-info h2 {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
}

.stat-info p {
  margin: 10px 0 0 0;
  font-size: 0.85rem;
  color: #6b7280;
}
</style>