<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-card">
            <header class="modal-header">
                <div class="warning-icon-circle">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="header-text">
                    <h2>Delete Account</h2>
                    <p>This action cannot be undone</p>
                </div>
            </header>

            <div class="modal-body">
                <div class="alert-box danger">
                    <div class="alert-title">
                        <i class="fas fa-exclamation-circle"></i>
                        <span>Warning: Permanent Account Deletion</span>
                    </div>
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <ul class="warning-list">
                        <li><i class="fas fa-times-circle"></i> All your personal information will be permanently
                            deleted</li>
                        <li><i class="fas fa-times-circle"></i> Your activity history and contributions will be removed
                        </li>
                        <li><i class="fas fa-times-circle"></i> You will lose access to all organizations and activities
                        </li>
                        <li><i class="fas fa-times-circle"></i> This action cannot be reversed or undone</li>
                    </ul>
                </div>

                <div class="alert-box info">
                    <div class="alert-title">
                        <i class="fas fa-info-circle"></i>
                        <span>Before You Continue</span>
                    </div>
                    <p>
                        We will check if you have any active activities or pending approvals.
                        If you do, you must complete or transfer them before deleting your account.
                    </p>
                </div>
            </div>

            <footer class="modal-footer">
                <button class="btn-secondary" @click="$emit('close')">Cancel</button>
                <button class="btn-danger-confirm" @click="$emit('confirm')">Continue to Delete</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    methods: {}
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    /* Stays above everything */
}

.modal-card {
    background: white;
    width: 100%;
    max-width: 650px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: modalSlideUp 0.3s ease-out;
}

@keyframes modalSlideUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-header {
    padding: 25px 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #eee;
}

.warning-icon-circle {
    width: 50px;
    height: 50px;
    background: #ffebee;
    color: #d32f2f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
}

.header-text h2 {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
    color: #1a1a1a;
}

.header-text p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
}

.modal-body {
    padding: 25px 30px;
}

.alert-box {
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid;
}

.alert-box.danger {
    background: #fff5f5;
    border-color: #feb2b2;
    color: #c53030;
}

.alert-box.info {
    background: #ebf8ff;
    border-color: #bee3f8;
    color: #2b6cb0;
    margin-bottom: 0;
}

.alert-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 1rem;
}

.warning-list {
    list-style: none;
    padding: 0;
    margin: 15px 0 0 0;
}

.warning-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 0.85rem;
}

.modal-footer {
    padding: 20px 30px;
    background: #fcfcfc;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    border-top: 1px solid #eee;
}

.btn-secondary {
    background: white;
    border: 1px solid #ddd;
    padding: 12px 25px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}

.btn-danger-confirm {
    background: #c53030;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}
</style>