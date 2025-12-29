<template>
    <div class="profile-card">
        <div class="profile-main">
            <div class="avatar-container">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-identity">
                <h2>{{ user.name }}</h2>
                <p class="role">{{ user.role }}</p>
                <p class="org">{{ user.org }}</p>
            </div>
        </div>

        <ul class="detail-list">
            <li><i class="fas fa-envelope"></i><span>{{ user.email }}</span></li>
            <li><i class="fas fa-id-card"></i><span>{{ user.idNumber }}</span></li>
            <li><i class="fas fa-university"></i><span>{{ user.college }}</span></li>
            <li><i class="fas fa-calendar-alt"></i><span>Joined {{ user.joinedDate }}</span></li>
        </ul>

        <div class="action-buttons">
            <button class="btn btn-primary" @click="$emit('edit')">Edit Profile</button>
            <button class="btn btn-danger" @click="$emit('delete')">Delete Account</button>
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
    font-family: serif;
    font-size: 1.5rem;
    margin: 0;
}

.user-identity .role,
.user-identity .org {
    color: #666;
    font-size: 0.95rem;
    margin: 0;
}

.detail-list {
    list-style: none;
    padding: 0;
    width: 100%;
    margin-bottom: 30px;
}

.detail-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 18px;
    font-size: 0.85rem;
    color: #333;
}

.detail-list li i {
    width: 18px;
    text-align: center;
    font-size: 1rem;
    color: #000;
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
    font-family: serif;
    font-size: 1.1rem;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background-color: #0a21c0;
    color: white;
}

.btn-danger {
    background-color: #d32f2f;
    color: white;
}
</style>