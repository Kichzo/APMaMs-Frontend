<template>
    <div class="tools-header">
        <button class="add-user-btn" @click="$emit('add-user')">
            <i class="fas fa-user-plus"></i> Create Account
        </button>
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search by name or organization" class="search-input" />
        </div>
    </div>
</template>

<style scoped>
.tools-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
}

.search-container {
    position: relative;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
}

.search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
}

.search-input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 15px 12px 45px;
    border: 1px solid #cbced2;
    border-radius: 8px;
    font-size: 0.95rem;
    outline: none;
}

.search-input::placeholder {
    color: #94a3b8;
}

.add-user-btn {
    background-color: #0a21c0;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    box-sizing: border-box;
}
</style>