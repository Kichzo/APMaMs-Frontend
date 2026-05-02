<template>
    <div class="profile-card">
        <div class="profile-main">
            <div class="avatar-container">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-identity">
                <h2>{{ user.name }}</h2>
                <p class="role">{{ user.role }}</p>
            </div>
        </div>

        <ul class="detail-list">
            <li><i class="fas fa-envelope"></i><span class="detail-text">{{ user.email }}</span></li>
            <li><i class="far fa-building"></i><span class="detail-text">College of Business and Information Technology</span></li>
            <li><i class="fab fa-envira"></i><span class="detail-text">Active</span></li>
            <li><i class="fas fa-address-card"></i><span class="detail-text"></span></li>
        </ul>

        <div class="action-buttons">
            <button class="btn btn-primary" @click="$emit('edit')">Edit Profile</button>
            <button class="btn btn-danger" @click="$emit('delete')">Deleted Account</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: { type: Object, required: true }
    }
}
</script>

<style scoped>
.profile-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-main {
    text-align: center;
    margin-bottom: 30px;
}

.avatar-container {
    font-size: 100px;
    color: #000;
    margin-bottom: 15px;
}

.user-identity h2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
}

.user-identity .role {
    color: #333;
    font-size: 1rem;
    margin: 5px 0 0;
}

.detail-list {
    list-style: none;
    padding: 0;
    width: 100%;
    margin-bottom: 40px;
}

.detail-list li {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 25px;
    font-size: 0.85rem;
    color: #000;
    font-weight: bold;
}

.detail-list li i {
    width: 20px;
    text-align: center;
    font-size: 1.1rem;
    color: #000;
}

.detail-text {
    flex: 1;
}

.action-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.btn {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    border: 2px solid #000;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}

.btn-primary {
    background-color: #00129a;
    color: white;
}

.btn-danger {
    background-color: #c02c1d;
    color: white;
}
</style>