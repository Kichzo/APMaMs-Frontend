<template>
  <section class="panel recent-activities">
    <div class="panel-header">
      <h2>Recent Activities</h2>
      <a href="#" class="view-all">View All</a>
    </div>

    <div class="activity-list">
      <div v-for="item in activities" :key="item.id" class="activity-card">
        
        <!-- TITLE -->
        <h3 class="activity-title"><i class="fas fa-tasks" style="color: #6b7280; margin-right: 8px;"></i>{{ item.title }}</h3>

        <!-- META INFO -->
        <div class="activity-meta">
          <span><i class="far fa-building"></i> {{ item.org }}</span>
          <span><i class="far fa-calendar"></i> {{ item.date }}</span>
          <span><i class="fas fa-coins"></i> P {{ item.budget.toLocaleString() }}</span>
        </div>
      
        <!-- PROGRESS -->
        <div v-if="item.progress !== null" class="progress-section">
          <div class="progress-labels">
            <span>Progress</span>
            <span>{{ item.progress }}%</span>
          </div>
          
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: item.progress + '%' }">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentActivities',
  data() {
    return {
      activities: [
        { id: 1, title: 'First SSC Regular Meeting', org: 'Supreme Student Council', date: '05/01/2026 - 09/01/2026', budget: 5000, progress: 75 },
        { id: 2, title: 'SSC Legislative Meeting', org: 'Supreme Student Council', date: '05/01/2026 - 09/01/2026', budget: 5000, progress: 75 },
        { id: 3, title: 'Coordination in the conduct of National Art Month', org: 'Supreme Student Council', date: '05/01/2026 - 09/01/2026', budget: 5000, progress: 75 },
        { id: 4, title: 'FEMSUSSCO General Assembly', org: 'Supreme Student Council', date: '05/01/2026 - 09/01/2026', budget: 5000, progress: 75 },
      ]
    }
  }
}
</script>

<style scoped>
.panel {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 30px;
  height: 100%;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.panel-header h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  color: #111827;
  margin: 0;
  font-weight: 700;
}

.view-all {
  color: #2563eb;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: Arial, sans-serif;
}

.activity-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}

.activity-title {
  font-family: Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 14px 0;
  color: #111827;
}

.activity-meta {
  display: flex;
  gap: 25px;
  font-size: 0.8rem;
  color: #4b5563;
  align-items: center;
  flex-wrap: wrap;
  font-family: Arial, sans-serif;
}

.activity-meta i {
  margin-right: 6px;
  color: #6b7280;
  font-size: 1rem;
}

.progress-section {
  margin-top: 20px;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 8px;
  color: #111827;
  font-family: Arial, sans-serif;
  font-weight: 500;
}

.progress-bar {
  height: 6px;             
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #0000a0; /* dark blue like screenshot */        
  border-radius: 999px;
  transition: width 0.3s ease;
}
</style>