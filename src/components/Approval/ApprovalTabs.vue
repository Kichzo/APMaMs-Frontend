<template>
  <div class="tabs-container">
    <button class="tab-pill active">Pending (4)</button>
    <button class="tab-pill">Approved (3)</button>
    <button class="tab-pill">Rejected (1)</button>
    <button class="tab-pill">All Request</button>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 6px;
  border-radius: 12px;
  width: fit-content;
}

.tab-pill {
  padding: 10px 35px;
  border: none;
  background: transparent;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.2s;
}

.tab-pill.active {
  background: #0a21c0;
  color: #fff;
}
</style>