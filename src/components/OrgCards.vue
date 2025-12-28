<template>
  <div class="cards-container">
    <div class="search-wrapper">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search organization..." />
    </div>

    <div class="cards-grid">
      <div v-for="org in organizations" :key="org.id" class="org-card">
        <div class="card-header" :style="{ backgroundColor: org.headerColor }">
          <div class="org-icon">
            <i :class="org.icon"></i>
          </div>
          <div class="org-title-group">
            <h3>{{ org.name }}</h3>
            <span class="org-type">{{ org.type }}</span>
          </div>
          <span class="status-tag">{{ org.status }}</span>
        </div>

        <div class="card-content">
          <p class="org-description">{{ org.description }}</p>
          
          <div class="leadership-details">
            <div class="detail-block">
              <span class="detail-label">President</span>
              <span class="detail-value">{{ org.president }}</span>
            </div>
            <div class="detail-block">
              <span class="detail-label">Established</span>
              <span class="detail-value">{{ org.established }}</span>
            </div>
          </div>

          <div class="card-stats-row">
            <div class="stat-item">
              <span class="stat-num">{{ org.members }}</span>
              <span class="stat-text">Members</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">{{ org.activities }}</span>
              <span class="stat-text">Activities</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">{{ org.budget }}</span>
              <span class="stat-text">Budget</span>
            </div>
          </div>

          <div class="card-footer-info">
            <div class="contact-link">
              <i class="fas fa-envelope"></i>
              <span>{{ org.email }}</span>
            </div>
            <div class="contact-link">
              <i class="fas fa-phone"></i>
              <span>{{ org.phone }}</span>
            </div>
          </div>

          <button class="action-btn-primary">View Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrgCards',
  props: {
    organizations: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 30px;
  color: #64748b;
}

.search-wrapper i {
  margin-right: 10px;
}

.search-wrapper input {
  border: none;
  outline: none;
  font-size: 0.95rem;
  width: 100%;
  color: #333;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.org-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.org-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 20px;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
}

.org-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 15px;
}

.org-title-group h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.org-type {
  font-size: 0.8rem;
  opacity: 0.9;
}

.status-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-content {
  padding: 24px;
}

.org-description {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 20px;
  line-height: 1.5;
  height: 2.8rem; /* Keeps cards uniform if descriptions are 2 lines */
  overflow: hidden;
}

.leadership-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.detail-block {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-bottom: 4px;
}

.detail-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}

.card-stats-row {
  display: flex;
  justify-content: space-between;
  background: #f8fafc;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
}

.stat-text {
  font-size: 0.75rem;
  color: #64748b;
}

.card-footer-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.contact-link {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #64748b;
}

.contact-link i {
  margin-right: 10px;
  color: #94a3b8;
}

.action-btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #0a21c0;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn-primary:hover {
  background-color: #0818a8;
}
</style>