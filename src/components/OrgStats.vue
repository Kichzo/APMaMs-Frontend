<template>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="icon-box blue"><i class="fas fa-sitemap"></i></div>
      <div class="stat-info">
        <h2>{{ stats.totalOrgs }}</h2>
        <p>Total Organizations</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="icon-box green"><i class="fas fa-users"></i></div>
      <div class="stat-info">
        <h2>{{ stats.totalMembers }}</h2>
        <p>Total Members</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="icon-box purple"><i class="fas fa-calendar-check"></i></div>
      <div class="stat-info">
        <h2>{{ stats.activeActivities }}</h2>
        <p>Active Activities</p>
      </div>
    </div>
    <div class="stat-card">
      <div class="icon-box orange"><i class="fas fa-coins"></i></div>
      <div class="stat-info">
        <h2>{{ stats.totalBudget }}</h2>
        <p>Total Budget</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrgStats',
  props: {
    stats: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.blue { background: #eff6ff; color: #1e40af; }
.green { background: #f0fdf4; color: #166534; }
.purple { background: #faf5ff; color: #6b21a8; }
.orange { background: #fff7ed; color: #c2410c; }

.stat-info h2 {
  font-family: serif;
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
}

.stat-info p {
  color: #64748b;
  margin: 5px 0 0 0;
  font-size: 0.9rem;
}
</style>