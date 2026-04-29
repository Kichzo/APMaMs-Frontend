<template>
  <div class="org-card">

    <!-- Header -->
    <div class="card-header">
      <div class="left-section">
        <div 
          class="org-icon" 
          :style="{ backgroundColor: org.headerColor }"
        >
          <i :class="org.icon"></i>
        </div>

        <div class="org-title-group">
          <h3>{{ org.name }}</h3>
          <span class="org-type">{{ org.type }}</span>
          <p class="reg-number">
            Registered Number: {{ org.regNumber }}
          </p>
        </div>
      </div>

      <span 
        class="status-tag"
        :class="{ active: org.status === 'Active' }"
      >
        {{ org.status }}
      </span>
    </div>

    <!-- Content -->
    <div class="card-content">

      <div class="stats-box">
        <div class="stat-item">
          <h2>{{ org.members }}</h2>
          <span>Members</span>
        </div>

        <div class="stat-item">
          <h2>{{ org.attachments }}</h2>
          <span>Attachments</span>
        </div>
      </div>

      <div class="button-group">
        <button class="btn-primary">View Profile</button>
        <button class="btn-secondary">Manage</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "OrgCard",
  props: {
    org: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

/* Card */

.org-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.25s ease;
}

.org-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

/* Header */

.card-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;
}

.left-section {
  display: flex;
  gap: 15px;
}

.org-icon {
  width: 55px;
  height: 55px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffffff;
}

.org-title-group h3 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
}

.org-type {
  font-size: 0.8rem;
  color: #64748b;
}

.reg-number {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 4px;
}

.status-tag {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #f1f5f9;
  color: #334155;
}

.status-tag.active {
  background: #dcfce7;
  color: #166534;
}

/* Content */

.card-content {
  padding: 24px;
}

.stats-box {
  display: flex;
  justify-content: space-between;
  background: #f1f5f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-item h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
}

.stat-item span {
  font-size: 0.8rem;
  color: #64748b;
}

/* Buttons */

.button-group {
  display: flex;
  gap: 12px;
}

.btn-primary {
  flex: 1;
  padding: 12px;
  background-color: #1e3a8a;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary {
  flex: 1;
  padding: 12px;
  background-color: #cbd5e1;
  color: #0f172a;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

</style>