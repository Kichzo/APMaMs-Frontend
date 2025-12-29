<template>
  <aside class="sidebar" :class="{ hidden: !visible }">
    <ul class="menu">
  <li
    v-for="item in menuItems"
    :key="item.path"
    :class="{ active: isActive(item.path) }"
    @click="goTo(item.path)"
  >
    <i :class="item.icon"></i>
    <span>{{ item.label }}</span>
  </li>
</ul>

  </aside>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    // TEMP role source
    const role = localStorage.getItem('role') || 'org'

    const menus = {
      admin: [
        { label: 'Dashboard', icon: 'fas fa-th-large', path: '/admindashboard' },
        { label: 'Users', icon: 'fas fa-users', path: '/users' },
        { label: 'Organizations', icon: 'fas fa-building', path: '/organizations' },
        { label: 'Action Plan', icon: 'fas fa-layer-group', path: '/actionplan' },
        { label: 'Activities', icon: 'fas fa-chart-line', path: '/activity' },
        { label: 'Calendar', icon: 'fas fa-calendar-alt', path: '/calendar' }
      ],
      org: [
        { label: 'Dashboard', icon: 'fas fa-th-large', path: '/userdashboard' },
        { label: 'Activity', icon: 'fas fa-chart-line', path: '/activity' },
        { label: 'Action Plan', icon: 'fas fa-layer-group', path: '/actionplan' },
        { label: 'Calendar', icon: 'fas fa-calendar-alt', path: '/calendar' },
        { label: 'Financial', icon: 'fas fa-coins', path: '/financial' },
        { label: 'Organizations', icon: 'fas fa-users', path: '/organizations' },
        { label: 'Report', icon: 'fas fa-file-alt', path: '/report' },
        { label: 'Approvals', icon: 'fas fa-user-check', path: '/approvals' }
      ]
    }

    const menuItems = computed(() => menus[role])

    const isActive = (path) => route.path === path
    const goTo = (path) => router.push(path)

    return { menuItems, isActive, goTo }
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
