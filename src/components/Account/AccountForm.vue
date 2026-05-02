<template>
    <div class="settings-form-container">
        <div class="form-tabs">
            <button :class="['tab-btn', { active: activeTab === 'profile' }]" @click="activeTab = 'profile'">
                Profile Information
            </button>
            <button :class="['tab-btn', { active: activeTab === 'security' }]" @click="activeTab = 'security'">
                Security
            </button>
        </div>

        <div v-if="activeTab === 'profile'" class="tab-content">
            <div class="form-grid">
                <div class="form-row">
                    <div class="input-group">
                        <label>First Name</label>
                        <input type="text" value="Kian" />
                    </div>
                    <div class="input-group">
                        <label>Last Name</label>
                        <input type="text" value="Estenzo" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label>Email Address</label>
                        <input type="email" value="kian.estenzo@msunaawan.edu.ph" />
                    </div>
                    <div class="input-group">
                        <label>Organization</label>
                        <input type="text" value="College of Business and Information Technology" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label>Role</label>
                        <input type="text" value="President" />
                    </div>
                    <div class="input-group">
                        <label>Status</label>
                        <select>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <div class="input-group full-width">
                    <label>Bio</label>
                    <textarea placeholder="Tell us about yourself..."></textarea>
                </div>
            </div>

            <div class="form-actions-aligned">
                <button class="btn-cancel" @click="$emit('cancel')">Cancel</button>
                <button class="btn-update" @click="handleUpdate">Save Changes</button>
            </div>
        </div>

        <div v-if="activeTab === 'security'" class="tab-content">
            <div class="input-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
            </div>
            <div class="input-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
            </div>
            <div class="input-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
            </div>

            <div class="requirements-box">
                <h4>Password Requirements:</h4>
                <ul>
                    <li>At least 8 characters long</li>
                    <li>Contains uppercase and lowercase letters</li>
                    <li>Contains at least one number</li>
                    <li>Contains at least one special character</li>
                </ul>
            </div>

            <div class="form-actions">
                <button class="btn-cancel" @click="$emit('cancel')">Cancel</button>
                <button class="btn-update" @click="handleUpdate">Update Password</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'security'
        }
    },
    methods: {
        handleUpdate() {
            // 1. Instead of alert(), we tell the parent we are done.
            // We pass the success message back to the parent.
            this.$emit('save', { message: 'Password updated successfully!' });

            // 2. The parent will now handle closing the form and showing the Toast.
        }
    }
}
</script>

<style scoped>
.settings-form-container {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    flex: 1;
}

.form-tabs {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #eee;
    margin-bottom: 25px;
    padding-bottom: 15px;
}

.tab-btn {
    background: none;
    border: none;
    padding: 10px 40px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    color: #111827;
    border-radius: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.tab-btn.active {
    background-color: #2b4cff;
    color: white;
}

.form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.input-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: bold;
    margin-bottom: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.input-group input,
.input-group textarea,
.input-group select {
    padding: 12px 15px;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.95rem;
    color: #1a1a1a;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
}

.input-group textarea {
    height: 180px;
    resize: none;
}

.requirements-box {
    background-color: #e3efff;
    padding: 20px;
    border-radius: 8px;
    margin: 25px 0;
}

.requirements-box h4 {
    color: #00129a;
    margin-top: 0;
    font-size: 0.95rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.requirements-box ul {
    padding-left: 20px;
    color: #00129a;
    font-size: 0.85rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.requirements-box li {
    margin-bottom: 5px;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

.form-actions-aligned {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 20px;
}

.btn-cancel {
    background: #fff;
    border: 1px solid #cbd5e0;
    padding: 12px 35px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #111827;
}

.btn-update {
    background: #00129a;
    color: white;
    border: none;
    padding: 12px 35px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

::placeholder {
    color: #a0aec0;
    font-style: normal;
}
</style>