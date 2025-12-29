<template>
    <header class="header">
        <div class="header-left">
            <button class="menu-toggle" @click="$emit('toggle-sidebar')">
                <span></span><span></span><span></span>
            </button>

            <div class="brand">
                <div class="brand-main">APMaMS</div>
                <div class="brand-sub">MSUN</div>
            </div>
        </div>

        <router-link to="/account" class="user-profile">
            <div class="user-profile">
                <div class="user-avatar">
                    <i class="fas fa-user"></i>
                </div>

                <div class="user-info">
                    <span class="user-name">{{ userName }}</span>
                    <span class="user-role">{{ roleLabel }}</span>
                </div>


                <i class="fas fa-chevron-down dropdown-icon"></i>
            </div>
        </router-link>

    </header>
</template>

<script>
export default {
    props: {
        userName: {
            type: String,
            default: 'User'
        },
        role: {
            type: String,
            required: true // 'admin' | 'org'
        }
    },
    computed: {
        roleLabel() {
            return this.role === 'admin'
                ? 'System Administrator'
                : 'Student Organization'
        }
    }
}
</script>


<style scoped>
.header {
    background: #edf4ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 20px;
}

.brand-main {
    font-weight: bold;
    font-size: 1.4rem;
    color: #1a1a1a;
    font-family: serif;
}

.brand-sub {
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: #333;
}

.user-profile {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.user-profile:hover {
    opacity: 0.9;
}

/* Avatar */
.user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

/* Text */
.user-info {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
}

.user-name {
    font-size: 0.85rem;
    font-weight: 600;
}

.user-role {
    font-size: 0.7rem;
    color: #444;
}

/* Dropdown */
.dropdown-icon {
    font-size: 0.75rem;
    margin-left: 4px;
}

/* Menu Toggle (Hamburger) */
.menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.menu-toggle span {
    width: 22px;
    height: 2px;
    background: #333;
    display: block;
}
</style>
