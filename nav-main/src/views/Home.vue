<script setup lang="ts">
import NavList from '@/components/NavList.vue'
import INavItem from '@/interfaces/INavItem'

const props = defineProps<{
  navData: { _id: string; name: string; list: Array<INavItem> }[]
}>()

props
</script>

<template>
  <div class="main">
    <nav-list v-for="item in navData" :_id="item._id" :name="item.name" :list="item.list"></nav-list>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  padding: 20px;
}
</style>
