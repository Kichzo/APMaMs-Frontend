<template>
  <div class="org-stats-grid">
    <button
      v-for="org in orgList"
      :key="org.code"
      class="org-stat-card"
      :class="{ active: selectedOrg === org.code }"
      @click="selectOrg(org.code)"
      :title="'Filter by ' + org.fullName"
    >
      <div class="icon-box" :style="{ backgroundColor: org.bg, color: org.color }">
        <i :class="org.icon"></i>
      </div>
      <div class="stat-info">
        <h2 class="org-code">{{ org.code }}</h2>
        <p class="org-name">{{ org.fullName }}</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FinancialStats',
  props: {
    selectedOrg: {
      type: String,
      default: 'All Organization'
    }
  },
  data() {
    return {
      orgList: [
        { code: 'SSC', fullName: 'Supreme Student Council', icon: 'fas fa-university', bg: '#2563eb', color: '#ffffff' },
        { code: 'CBIT', fullName: 'College of Business and Information Technology', icon: 'fas fa-briefcase', bg: '#eab308', color: '#ffffff' },
        { code: 'CESS', fullName: 'College of Education and Social Sciences', icon: 'fas fa-university', bg: '#f3e8ff', color: '#9333ea' },
        { code: 'CELS', fullName: 'College of Environmental and Life Sciences', icon: 'fas fa-university', bg: '#dcfce7', color: '#16a34a' },
        { code: 'CMFS', fullName: 'College of Marine and Fisheries Sciences', icon: 'fas fa-university', bg: '#e0e7ff', color: '#4338ca' },
        { code: 'SenSo', fullName: 'Senior Student Society', icon: 'fas fa-university', bg: '#fee2e2', color: '#dc2626' },
        { code: 'KAABAG', fullName: 'KAABAG Community', icon: 'fas fa-university', bg: '#ffedd5', color: '#c2410c' },
        { code: 'TME', fullName: 'The Marine Echo', icon: 'fas fa-university', bg: '#f1f5f9', color: '#475569' }
      ]
    }
  },
  methods: {
    selectOrg(code) {
      if (this.selectedOrg === code) {
        this.$emit('select-org', 'All Organization');
      } else {
        this.$emit('select-org', code);
      }
    }
  }
}
</script>

<style scoped>
.org-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.org-stat-card {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  width: 100%;
}

.org-stat-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.org-stat-card.active {
  border-color: #3b59ff;
  background-color: #eff6ff;
  box-shadow: 0 6px 18px rgba(59, 89, 255, 0.15);
}

.icon-box {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.org-code {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

.org-name {
  margin: 4px 0 0 0;
  font-size: 0.78rem;
  color: #64748b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Arial, sans-serif;
  font-weight: 600;
}

@media (max-width: 1100px) {
  .org-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .org-stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>