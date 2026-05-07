<template>
  <div class="filter-bar">
    
    <button class="btn-create" @click="$emit('create-new')">
      <span>Create New Report</span>
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Create Button */
.btn-create {
  background-color: #0a21c0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

</style>