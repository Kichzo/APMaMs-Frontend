<template>
  <div class="activity-card" :class="{ 'expanded': isExpanded }">
    <!-- Header Row -->
    <div class="card-header-row">
      <div class="card-left">
        <div class="icon-container">
          <i class="fa-regular fa-file-lines"></i>
        </div>
        <h3>{{ data.title }}</h3>
      </div>
      
      <div class="card-right">
        <button class="view-details-btn" @click="toggleExpand">
          {{ isExpanded ? 'Collapse' : 'View Details' }} 
          <i :class="isExpanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
        </button>
      </div>
    </div>

    <!-- Expanded Timeline -->
    <div v-if="isExpanded" class="card-expanded-content">
      <div class="timeline-title">
        <i class="fa-solid fa-certificate verified-icon"></i> Approval Timeline
      </div>
      
      <div class="timeline-scroll-area">
        <div class="timeline-container">
          <!-- Connecting Line -->
          <div class="timeline-line"></div>
          
          <!-- Steps -->
          <div class="timeline-step clickable-step" @click="$emit('view-design', data)">
            <div class="timeline-icon"><i class="fa-regular fa-file-lines"></i></div>
            <div class="timeline-text">
              Detailed Activity Design
              <span v-if="data.designCompleted" class="completed-text">Completed</span>
            </div>
          </div>
          
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Submitted</div>
          </div>

          <!-- New Steps -->
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Reviewed by Adviser</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Reviewed by OSD</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Endorsed by the Vice Chancellor for Student Affairs and Services</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Funds Cleared by Vice Chancellor for Administration and Finance</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Approved by Chancellor</div>
          </div>
          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Recorded by Monitoring and Evaluation Personnel</div>
          </div>

          <div class="timeline-step clickable-step" @click="$emit('view-accomplishment', data)">
            <div class="timeline-icon"><i class="fa-regular fa-file-lines"></i></div>
            <div class="timeline-text">
              Activity Accomplishment Report
              <span v-if="data.reportCompleted" class="completed-text">Completed</span>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Reviewed by Adviser</div>
          </div>

          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Evaluated by Monitoring and Evaluation Personnel</div>
          </div>

          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Submitted</div>
          </div>

          <div class="timeline-step">
            <div class="timeline-icon"><i class="fa-solid fa-check"></i></div>
            <div class="timeline-text">Approved</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityItemCard",
  props: {
    data: Object,
    role: String
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
.activity-card {
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
}

.activity-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  border-color: #a0aec0;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.activity-card.expanded .card-header-row {
  padding-bottom: 16px;
  border-bottom: 1px solid #cbd5e0;
}

.card-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.icon-container {
  width: 48px;
  height: 48px;
  background-color: #dbeafe;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container i {
  color: #1d4ed8;
  font-size: 1.4rem;
}

.card-left h3 {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.35rem;
  font-weight: bold;
  color: #000;
}

.view-details-btn {
  background: none;
  border: none;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.view-details-btn i {
  font-size: 0.8rem;
}

/* EXPANDED TIMELINE */
.card-expanded-content {
  width: 100%;
  padding-top: 24px;
  padding-bottom: 12px;
}

.timeline-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
}

.verified-icon {
  font-size: 1.2rem;
  color: #000;
}

.timeline-scroll-area {
  max-height: 350px;
  overflow-y: auto;
  padding-right: 10px;
}

/* Scrollbar styling for better look */
.timeline-scroll-area::-webkit-scrollbar {
  width: 6px;
}
.timeline-scroll-area::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 4px;
}
.timeline-scroll-area::-webkit-scrollbar-thumb {
  background: #cbd5e0; 
  border-radius: 4px;
}
.timeline-scroll-area::-webkit-scrollbar-thumb:hover {
  background: #a0aec0; 
}

.timeline-container {
  position: relative;
  padding-left: 40px;
}

/* The vertical connecting line */
.timeline-line {
  position: absolute;
  left: 63px; /* 40px padding + 23px (half of 46px icon) */
  top: 10px;
  bottom: 30px;
  width: 2px;
  background-color: #cbd5e0;
  z-index: 0;
}

.timeline-step {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.timeline-step:last-child {
  margin-bottom: 10px;
}

.timeline-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: white;
  border: 1px solid #cbd5e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: #000;
}

.timeline-icon i.fa-check {
  font-size: 1.4rem;
}

.timeline-text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.05rem;
  font-weight: bold;
  color: #000;
  transition: color 0.2s;
}

.clickable-step {
  cursor: pointer;
}

.clickable-step:hover .timeline-text {
  color: #1d4ed8;
  text-decoration: underline;
}

.clickable-step:hover .timeline-icon {
  border-color: #1d4ed8;
  color: #1d4ed8;
}
</style>