<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
let isSticky = ref(false)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const scrollY = window.scrollY

  if (scrollY > 0) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }
}
</script>

<template>
  <div class="nav-header" :class="{ sticky: isSticky }">
    <div class="left-menu">
      <div class="menu-item">菜单项1</div>
      <div class="menu-item">菜单项2</div>
      <div class="menu-item">菜单项3</div>
    </div>
    <div class="right-menu">
      <div class="menu-item">菜单项4</div>
      <div class="menu-item">菜单项5</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.sticky {
  background-color: white;
  color: black;
}

.left-menu {
  display: flex;
}

.menu-item {
  margin-right: 10px;
}

.right-menu {
  display: flex;
}

.menu-item:last-child {
  margin-right: 0;
}
</style>
