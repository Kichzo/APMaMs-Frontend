<template>
  <div class="user-card">
    <div class="card-header">
      <div class="avatar-section">
        <div class="avatar">KE</div>
        <div class="user-info">
          <h3>Kian Estenzo</h3>
          <p>kian.estenzo@msunaawan.edu.ph</p>
        </div>
      </div>
      <div class="status-badge active">Active</div>
    </div>

    <div class="card-details">
      <div class="detail-group">
        <label>Role</label>
        <p>President</p>
      </div>
      <div class="detail-group">
        <label>Organization</label>
        <p>College of Business and Information Technology</p>
      </div>
    </div>

    <div class="card-actions">
      <button class="action-btn edit"><i class="fas fa-pen"></i> Edit User</button>
      <button class="action-btn view"><i class="fas fa-eye"></i> View Profile</button>
      <button class="action-btn delete"><i class="fas fa-trash"></i> Delete User</button>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 25px;
  max-width: 500px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
}

.avatar-section {
  display: flex;
  gap: 15px;
}

.avatar {
  width: 60px;
  height: 60px;
  background-color: #3b59ff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
}

.user-info h3 {
  font-family: serif;
  font-size: 1.3rem;
  margin: 0 0 5px 0;
  color: #1a1a1a;
}

.user-info p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}

.status-badge {
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge.active {
  background-color: #dcfce7;
  color: #166534;
}

.detail-group {
  margin-bottom: 15px;
}

.detail-group label {
  display: block;
  font-size: 0.8rem;
  color: #94a3b8;
  margin-bottom: 5px;
}

.detail-group p {
  margin: 0;
  font-weight: 600;
  color: #1a1a1a;
}

.card-actions {
  display: flex;
  gap: 20px;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0;
}

.action-btn.edit {
  color: #1a1a1a;
}

.action-btn.view {
  color: #1a1a1a;
}

.action-btn.delete {
  color: #ef4444;
}
</style>