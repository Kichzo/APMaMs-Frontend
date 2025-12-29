<template>
  <div class="report-card">
    <div class="card-header">
      <div class="title-section">
        <h3>Leadership Training Workshop</h3>
        <span class="badge approved">Approved</span>
      </div>
      <div class="meta-grid">
        <div class="meta-item"><span>Office Code:</span> <strong>OSA-2025-001</strong></div>
        <div class="meta-item"><span>Unit/College:</span> <strong>Supreme Student Council</strong></div>
        <div class="meta-item"><span>Department:</span> <strong>Student Council</strong></div>
        <div class="meta-item"><span>Result Code:</span> <strong>OPCR-SA-2025-Q1</strong></div>
      </div>
    </div>

    <div class="approval-section">
      <p class="section-label"><i class="fas fa-check-circle"></i> Approval Status</p>
      <div class="approval-grid">
        <div v-for="role in roles" :key="role.title" class="status-box">
          <span class="role-title">{{ role.title }}</span>
          <p class="name">{{ role.name }}</p>
          <span class="status-pill">Approved</span>
          <span class="date">2025-01-16</span>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <button class="btn-details">View Details</button>
      <button class="btn-edit"><i class="fas fa-edit"></i> Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        { title: 'ADVISER', name: 'Prof. Lisa Garcia' },
        { title: 'DIRECTOR', name: 'Dr. Juan dela Cruz' },
        { title: 'COORDINATOR', name: 'Maria Santos' },
        { title: 'DEAN', name: 'Dr. Ana Reyes' },
        { title: 'OVCSAS', name: 'Dr. Roberto Mendoza' }
      ]
    }
  }
}
</script>

<style scoped>
.report-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; }
.title-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.title-section h3 { font-family: serif; font-size: 1.4rem; margin: 0; }
.badge.approved { background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }

.meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 24px; }
.meta-item { display: flex; flex-direction: column; font-size: 0.8rem; }
.meta-item span { color: #94a3b8; margin-bottom: 2px; }

.approval-section { background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px; }
.section-label { font-weight: 700; font-size: 0.85rem; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
.approval-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }

.status-box { background: #fff; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; display: flex; flex-direction: column; gap: 4px; }
.role-title { font-size: 0.65rem; color: #94a3b8; font-weight: 700; }
.name { font-size: 0.85rem; font-weight: 600; margin: 0; }
.status-pill { font-size: 0.7rem; color: #22c55e; background: #f0fdf4; width: fit-content; padding: 2px 8px; border-radius: 4px; }
.date { font-size: 0.7rem; color: #94a3b8; }

.card-footer { display: flex; gap: 12px; }
.btn-details { background: #0a21c0; color: #fff; border: none; padding: 8px 24px; border-radius: 8px; cursor: pointer; }
.btn-edit { background: #f1f5f9; color: #475569; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; }
</style>