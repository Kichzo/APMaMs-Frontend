<template>
  <div class="filter-bar">
    <div class="search-container">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search activities, organizations, or activities" />
    </div>
    <select class="filter-select">
      <option>All Status</option>
    </select>
    <select class="filter-select">
      <option>All Organizations</option>
    </select>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 12px;
  background: #f8fafc;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 24px;
}

.search-container {
  flex: 2;
  position: relative;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

.search-container i {
  position: absolute;
  left: 10px;
  top: 12px;
  color: #94a3b8;
}

.search-container input {
  width: 100%;
  padding: 8px 8px 8px 35px;
  border: none;
  background: transparent;
}

.filter-select {
  flex: 1;
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: #fff;
}
</style>