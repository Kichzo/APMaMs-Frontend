<template>
  <div class="approval-card">
    <div class="card-header">
      <div class="header-info">
        <h3>{{ data.title }}</h3>
        <p class="category">{{ data.category }} • {{ data.office }}</p>
      </div>
      <span class="status-badge">{{ data.status }}</span>
    </div>

    <p class="description">{{ data.description }}</p>

    <div class="details-grid">
      <div class="detail-item">
        <label>Submitted By</label>
        <span>{{ data.submittedBy }}</span>
      </div>
      <div class="detail-item">
        <label>Date Submitted</label>
        <span>{{ data.date }}</span>
      </div>
      <div class="detail-item">
        <label>Budget Amount</label>
        <span>{{ data.amount }}</span>
      </div>
    </div>

    <div class="card-footer">
      <div class="approvers">
        <i class="fas fa-users"></i>
        <span>Approvers: {{ data.approvers }}</span>
      </div>
      <div class="actions">
        <button class="btn approve">Approve</button>
        <button class="btn reject">Reject</button>
        <button class="btn details">View Details</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // This must match the name you used in the parent: :data="request"
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.approval-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); /* Soft shadow like the image */
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.header-info h3 {
  font-family: serif; /* Serifa/Times style from image */
  font-size: 1.3rem;
  margin: 0;
  color: #1a1a1a;
}

.category {
  color: #64748b;
  font-size: 0.85rem;
  margin: 4px 0 0;
}

.status-badge {
  background: #fffbeb; /* Light yellow for Pending */
  color: #b45309;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;
}

.description {
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 15px 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for metadata */
  padding: 15px 0;
  border-top: 1px solid #f1f5f9;
}

.detail-item label {
  display: block;
  font-size: 0.7rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  margin-bottom: 4px;
}

.detail-item span {
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e293b;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
}

.approvers {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #64748b;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.approve {
  background-color: #22c55e; /* Green approve button */
  color: white;
}

.reject {
  background-color: #ef4444; /* Red reject button */
  color: white;
}

.details {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  color: #64748b;
}
</style>