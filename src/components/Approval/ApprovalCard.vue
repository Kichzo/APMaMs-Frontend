<template>
  <div class="approval-card">
    <!-- Header -->
    <div class="card-header">
      <h2 @click="$emit('view-details', data)" class="clickable-title">{{ data.title }}</h2>
      <div class="sub-info">
        <span><i class="far fa-chart-bar"></i> {{ data.type }}</span>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="timeline-section">
      <div class="timeline-header">
        <span class="timeline-title"><i class="fas fa-check-circle"></i> Approval Timeline</span>
        <button class="btn-view-details" @click="isExpanded = !isExpanded">
          {{ isExpanded ? 'Collapse' : 'View Details' }} 
          <i :class="isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </button>
      </div>

      <div class="timeline-container">
        <!-- Step 1 -->
        <div class="timeline-step active">
          <div class="step-icon"><i class="fas fa-check"></i></div>
          <span class="step-label">Submitted</span>
        </div>
        <div class="timeline-line active-line"></div>
        
        <!-- Step 2 -->
        <div class="timeline-step active">
          <div class="step-icon"><i class="fas fa-check"></i></div>
          <span class="step-label">Received by Adviser</span>
        </div>
        <div class="timeline-line active-line"></div>
        
        <!-- Step 3 -->
        <div class="timeline-step active">
          <div class="step-icon"><i class="fas fa-check"></i></div>
          <span class="step-label">Under Review</span>
        </div>
        <div class="timeline-line"></div>
        
        <!-- Step 4 -->
        <div class="timeline-step inactive">
          <div class="step-icon"><i class="far fa-user"></i></div>
          <span class="step-label">Adviser Evaluation</span>
        </div>
        <div class="timeline-line"></div>
        
        <!-- Step 5 -->
        <div class="timeline-step inactive">
          <div class="step-icon"><i class="far fa-check-circle"></i></div>
          <span class="step-label">Adviser Approved</span>
        </div>
      </div>

      <!-- Expandable Detailed Timeline -->
      <div v-if="isExpanded" class="detailed-timeline-wrapper">
        <hr class="divider">
        
        <div class="v-timeline">
          <!-- Item 1 -->
          <div class="v-step">
            <div class="v-time">
              <span>May 4 2026</span>
              <span>9:31 PM</span>
            </div>
            <div class="v-icon-col">
              <div class="v-icon active"><i class="fas fa-check"></i></div>
              <div class="v-line active-line"></div>
            </div>
            <div class="v-content">
              <span class="v-label">Submitted</span>
              <span class="v-status complete">Complete</span>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="v-step">
            <div class="v-time">
              <span>May 5 2026</span>
              <span>9:31 AM</span>
            </div>
            <div class="v-icon-col">
              <div class="v-icon active"><i class="fas fa-check"></i></div>
              <div class="v-line active-line"></div>
            </div>
            <div class="v-content">
              <span class="v-label">Received by Adviser</span>
              <span class="v-status complete">Complete</span>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="v-step">
            <div class="v-time">
              <span>May 5 2026</span>
              <span>9:31 AM</span>
            </div>
            <div class="v-icon-col">
              <div class="v-icon active"><i class="fas fa-check"></i></div>
              <div class="v-line"></div>
            </div>
            <div class="v-content">
              <span class="v-label">Under Review <span class="badge-current">• Current</span></span>
              <span class="v-status complete">Complete</span>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="v-step">
            <div class="v-time empty-time"></div>
            <div class="v-icon-col">
              <div class="v-icon inactive"><i class="far fa-user"></i></div>
              <div class="v-line"></div>
            </div>
            <div class="v-content">
              <span class="v-label">Adviser Evaluation</span>
              <span class="v-status pending">Pending</span>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="v-step">
            <div class="v-time empty-time"></div>
            <div class="v-icon-col">
              <div class="v-icon inactive"><i class="far fa-check-circle"></i></div>
            </div>
            <div class="v-content">
              <span class="v-label">Adviser Approved</span>
              <span class="v-status pending">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    }
  }
}
</script>

<style scoped>
.approval-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.card-header h2 {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px 0;
}

.clickable-title {
  cursor: pointer;
  transition: color 0.2s ease;
}

.clickable-title:hover {
  color: #0a21c0;
}

.sub-info {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 6px;
}

.sub-info i {
  color: #64748b;
  font-size: 1rem;
}

.timeline-section {
  margin-top: 24px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.timeline-title {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
}

.timeline-title i {
  color: #0f172a;
  font-size: 1rem;
}

.btn-view-details {
  background: none;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0f172a;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.timeline-container {
  display: flex;
  align-items: flex-start;
  padding: 0 10px;
}

.timeline-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 120px;
}

.step-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #cbd5e1;
  color: #64748b;
  z-index: 2;
  font-size: 0.9rem;
}

.active .step-icon {
  background-color: #22c55e;
  border-color: #22c55e;
  color: #fff;
}

.timeline-step:nth-child(5) .step-icon {
  box-shadow: 0 0 0 4px #dcfce7;
}

.step-label {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
}

.timeline-line {
  flex: 1;
  height: 2px;
  background-color: #cbd5e1;
  margin-top: 15px; /* (32px icon height / 2) - 1px (line center) */
}

.active-line {
  background-color: #22c55e;
}

/* Detailed Timeline Expanded View */
.detailed-timeline-wrapper {
  margin-top: 24px;
}

.divider {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 0 -24px 24px -24px;
}

.v-timeline {
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
}

.v-step {
  display: flex;
  min-height: 80px;
}

.v-time {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #334155;
  padding-right: 20px;
  padding-top: 4px;
  text-align: right;
}

.v-time span {
  display: block;
}

.v-icon-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
}

.v-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  z-index: 2;
  background-color: #fff;
}

.v-icon.active {
  background-color: #22c55e;
  color: #fff;
}

.v-icon.inactive {
  border: 1px solid #cbd5e1;
  color: #94a3b8;
}

.v-line {
  flex: 1;
  width: 2px;
  background-color: #cbd5e1;
  margin-top: -2px;
  margin-bottom: -2px;
}

.v-line.active-line {
  background-color: #22c55e;
}

.v-content {
  flex: 1;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 4px;
}

.v-label {
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
}

.badge-current {
  background-color: #dcfce7;
  color: #16a34a;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 12px;
  font-weight: 700;
}

.v-status {
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
}

.v-status.complete {
  color: #22c55e;
}

.v-status.pending {
  color: #94a3b8;
}

.action-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn-primary-view {
  background-color: #0a21c0;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
}

.btn-primary-view:hover {
  background-color: #081a99;
}
</style>