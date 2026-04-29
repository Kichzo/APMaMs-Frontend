<template>
  <div class="stats-grid">

    <div class="stat-card">
      <div class="stat-left">
        <div class="icon-box blue">
          <i class="fas fa-building"></i>
        </div>
      </div>
      <div class="stat-right">
        <h2>{{ stats.totalOrgs }}</h2>
        <p>Total Organizations</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-left">
        <div class="icon-box green">
          <i class="fas fa-users"></i>
        </div>
      </div>
      <div class="stat-right">
        <h2>{{ stats.activeOrgs }}</h2>
        <p>Active Organizations</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-left">
        <div class="icon-box purple">
          <i class="fas fa-user-group"></i>
        </div>
      </div>
      <div class="stat-right">
        <h2>{{ stats.totalMembers }}</h2>
        <p>Total Members</p>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-left">
        <div class="icon-box red">
          <i class="fas fa-chart-line"></i>
        </div>
      </div>
      <div class="stat-right">
        <h2>{{ stats.totalActivities }}</h2>
        <p>Total Activities</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OrgStats",
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
  margin-bottom: 35px;
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

.stat-right h2 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
}

.stat-right p {
  margin: 5px 0 0 0;
  font-size: 0.85rem;
  color: #6b7280;
}
</style>