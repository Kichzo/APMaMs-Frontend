<template>
  <div class="approval-card">
    
    <!-- TITLE -->
    <h2>{{ data.title }}</h2>

    <!-- SUB INFO -->
    <div class="sub-info">
      <span><i class="fas fa-file-alt"></i> {{ data.type }}</span>
      <span><i class="fas fa-calendar-alt"></i> {{ data.date }}</span>
    </div>

    <!-- APPROVAL STATUS -->
    <div class="approval-section">
     <p class="section-label">
        <i class="fas fa-check-circle"></i> Approval Status
      </p>

      <div class="approver-list">
        <div 
          v-for="(approver, index) in data.approvers" 
          :key="index"
          class="approver-card"
        >
          <p class="role">{{ approver.role }}</p>
          <p class="name">{{ approver.name }}</p>

          <span class="status approved">{{ approver.status }}</span>

          <small>{{ approver.date }}</small>
        </div>
      </div>
    </div>

    <!-- ACTIONS -->
    <div class="card-footer">
      <button class="btn-details">View Details</button>
      <button class="btn-edit"><i class="fas fa-edit"></i>Edit</button>
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
}

h2 {
  font-family: serif;
  margin: 0;
}

.sub-info {
  display: flex;
  gap: 20px;
  color: #64748b;
  margin: 10px 0 20px;
}

.approval-section {
  background: #f1f5f9;
  padding: 16px;
  border-radius: 10px;
  margin-top: 20px; 
}

.section-label {
  font-family: serif;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 15px;
}

.approver-list {
  display: flex;
  gap: 16px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.approver-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px;
  width: 160px;

  display: flex;             
  flex-direction: column;    
  justify-content: space-between; 
}

.approver-card small {
  margin-top: auto;
  font-size: 0.75rem;
  color: #000000;
}

.role {
  font-size: 0.7rem;
  color: #000000;
  text-transform: uppercase;
}

.name {
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 1px;
}

.status {
  display: inline-block;
  align-self: flex-start;
  width: fit-content;

  padding: 4px 12px;
  border-radius: 999px;

  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 5px;
}

.status.approved {
  background: #dcfce7;
  color: #166534;
}

.card-footer {
  display: flex;
  gap: 10px;
  margin-top: 10px;
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