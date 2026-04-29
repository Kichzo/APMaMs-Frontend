<template>
  <div class="cards-container">

    <!-- Top Controls -->
    <div class="top-bar">
      <div class="search-wrapper">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search organization" />
      </div>

      <button class="add-org-btn">
        <i class="fas fa-plus"></i>
        Add Organization
      </button>
    </div>

    <!-- Cards Grid -->
    <div class="cards-grid">
      <div v-for="org in organizations" :key="org.id" class="org-card">

        <!-- Header -->
        <div class="card-top">
          <div class="left-section">
            <div class="icon-box" :style="{ backgroundColor: org.headerColor }">
              <i :class="org.icon"></i>
            </div>

            <div>
              <h3 class="org-name">{{ org.name }}</h3>
              <span class="org-type">{{ org.type }}</span>
            </div>
          </div>

          <span class="status-tag">Active</span>
        </div>

        <p class="reg-number">Registered Number: {{ org.regNumber }}</p>

        <!-- Stats -->
        <div class="mini-stats">
          <div class="mini-box">
            <h2>{{ org.members }}</h2>
            <p>Members</p>
          </div>

          <div class="mini-box">
            <h2>{{ org.attachments }}</h2>
            <p>Attachments</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="button-row">
          <button class="btn-primary">View Profile</button>
          <button v-if="showManage" class="btn-secondary">Manage</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrgCards",
  props: {
    organizations: {
      type: Array,
      required: true
    },
    showManage: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 20px;
}

.search-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 10px;
  color: #94a3b8;
}

.search-wrapper input {
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
}

.add-org-btn {
  background: #0a21c0;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.org-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left-section {
  display: flex;
  gap: 15px;
}

.icon-box {
  width: 55px;
  height: 55px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
}

.org-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.org-type {
  background: #eef2ff;
  color: #3730a3;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 999px;
}

.status-tag {
  background: #dcfce7;
  color: #166534;
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 600;
}

.reg-number {
  margin-top: 15px;
  font-size: 0.85rem;
  color: #64748b;
}

.mini-stats {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.mini-box {
  flex: 1;
  background: #f1f5f9;
  padding: 18px;
  border-radius: 10px;
  text-align: center;
}

.mini-box h2 {
  margin: 0;
  font-family: Georgia, serif;
}

.mini-box p {
  margin: 5px 0 0;
  font-size: 0.8rem;
  color: #64748b;
}

.button-row {
  display: flex;
  gap: 15px;
}

.btn-primary {
  flex: 1;
  background: #0a21c0;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
}

.btn-secondary {
  flex: 1;
  background: #cbd5e1;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
}
</style>