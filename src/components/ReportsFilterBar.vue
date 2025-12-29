<template>
    <div class="filter-bar">
        <div class="tabs">
            <button class="tab active">Approved Reports</button>
            <button class="tab">Rejected Reports</button>
            <button class="tab">Logs</button>
        </div>
        <button class="btn-create">
            <i class="fas fa-plus"></i> Create New Report
        </button>
    </div>
</template>

<style scoped>
.filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tabs {
    display: flex;
    gap: 10px;
    background: #f1f5f9;
    padding: 6px;
    border-radius: 12px;
}

.tab {
    padding: 10px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #475569;
    background: transparent;
    transition: 0.2s;
}

.tab.active {
    background: #0a21c0;
    color: #fff;
}

.btn-create {
    padding: 12px 24px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background: #fff;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>