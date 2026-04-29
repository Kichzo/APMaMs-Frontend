<template>
  <div class="report-card">

    <!-- Title -->
    <h3 class="report-title">
      {{ report.title }}
    </h3>

    <!-- Approval Section -->
    <div class="approval-section">
      <p class="section-label">
        <i class="fas fa-check-circle"></i> Approval Status
      </p>

      <div class="approval-box">
        {{ report.status }}
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <button class="btn-details">View Details</button>
      <button class="btn-edit"><i class="fas fa-edit"></i>Edit</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    report: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.report-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

/* Title */
.report-title {
  font-family: serif;
  font-size: 1.3rem;
  margin-bottom: 16px;
}

/* Approval Section */
.approval-section {
  background: #f1f5f9;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 16px;
}

.section-label {
  font-family: serif;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Waiting Box */
.approval-box {
  background: #e2e8f0;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  font-weight: 600;
  color: #334155;
  font-size: 1.1rem;
}

/* Footer */
.card-footer {
  display: flex;
  gap: 10px;
}

.btn-details {
  font-family: serif;
  background: #0a21c0;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-edit {
  font-family: serif;
  background: #e2e8f0;
  color: #334155;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>