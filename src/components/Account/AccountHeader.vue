<template>
    <header class="settings-header">
        <button class="back-btn" @click="$emit('back')">
            <i class="fas fa-arrow-left"></i>
        </button>
        <div class="header-text">
            <h1>Profile Settings</h1>
            <p>Manage your account information and preferences</p>
        </div>
    </header>
</template>

<style scoped>
.settings-header {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 30px;
}

.back-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding-top: 5px;
}

.header-text h1 {
    font-family: Arial, sans-serif;
    font-size: 1.8rem;
    margin: 0;
    font-weight: 700;
}

.header-text p {
    color: #888;
    font-size: 0.9rem;
    margin: 5px 0 0 0;
}
</style>