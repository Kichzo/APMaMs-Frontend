<template>
  <div class="tabs-container">
    <button class="tab-pill active">Pending</button>
    <button class="tab-pill">Approved</button>
    <button class="tab-pill">Rejected</button>
    <button class="tab-pill">All Request</button>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  background: #f8fafc;          /* softer background like your UI */
  border: 1px solid #e2e8f0;
  padding: 6px;
  border-radius: 14px;
  width: 98%;                 /* 👈 take full width */
  gap: 6px;   
}

.tab-pill {
  flex: 1;                     /* 👈 equal width tabs */
  padding: 12px 0;             /* 👈 vertical only */
  border: none;
  background: transparent;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease;
  text-align: center;
}

.tab-pill.active {
  background: #0a21c0;
  color: #fff;
  box-shadow: 0 2px 6px rgba(10, 33, 192, 0.2); /* 👈 subtle depth */
}

.tab-pill:hover {
  background: #e2e8f0;
}

</style>