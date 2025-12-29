<template>
  <aside class="sidebar" :class="{ hidden: !visible }">
    <ul class="menu">
      <li :class="{ active: isActive('/dashboard') }" @click="goTo('/dashboard')">
        <i class="fas fa-th-large"></i>
        <span>Dashboard</span>
      </li>

      <li :class="{ active: isActive('/activity') }" @click="goTo('/activity')">
        <i class="fas fa-chart-line"></i>
        <span>Activity</span>
      </li>

      <li :class="{ active: isActive('/actionplan') }" @click="goTo('/actionplan')">
        <i class="fas fa-layer-group"></i>
        <span>Action Plan</span>
      </li>

      <li :class="{ active: isActive('/calendar') }" @click="goTo('/calendar')">
        <i class="fas fa-calendar-alt"></i>
        <span>Calendar</span>
      </li>

      <li :class="{ active: isActive('/financial') }" @click="goTo('/financial')">
        <i class="fas fa-coins"></i>
        <span>Financial</span>
      </li>

      <li :class="{ active: isActive('/organizations') }" @click="goTo('/organizations')">
        <i class="fas fa-users"></i>
        <span>Organizations</span>
      </li>

      <li :class="{ active: isActive('/report') }" @click="goTo('/report')">
        <i class="fas fa-file-alt"></i>
        <span>Report</span>
      </li>

      <li :class="{ active: isActive('/approvals') }" @click="goTo('/approvals')">
        <i class="fas fa-user-check"></i>
        <span>Approvals</span>
      </li>
    </ul>
  </aside>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const isActive = (path) => route.path === path;
    const goTo = (path) => router.push(path);

    return { isActive, goTo };
  }
}
</script>

<style scoped>
/* Sidebar inside AppSidebar.vue */
.sidebar {
  width: 250px;
  background: #fff;
  padding-top: 20px;
  border-right: 1px solid #f0f0f0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(0);
}

.sidebar.hidden {
  transform: translateX(-100%);
}


.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: #333;
  cursor: pointer;
  font-size: 0.95rem;
}

.menu li i {
  width: 18px;
  text-align: center;
  color: #666;
}

.menu li.active {
  background: #f4f8ff;
  color: #4361ee;
}

.menu li.active i {
  color: #4361ee;
}

.menu li:hover {
  background: #fafafa;
}
</style>
