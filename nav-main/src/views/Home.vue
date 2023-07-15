<script setup lang="ts">
import NavList from '@/components/NavList.vue'
import INavItem from '@/interfaces/INavItem'
import Search from '@/components/Search.vue';
import Hotspots from '@/components/Hotspots.vue'

const props = defineProps<{
  navData: { _id: string; name: string; list: Array<INavItem> }[]
}>()

props
</script>

<template>
  <div class="main">
    <search></search>
    <hotspots></hotspots>
    <nav-list class="content" v-for="item in navData" :_id="item._id" :name="item.name" :list="item.list"></nav-list>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  // padding: 20px;

  .content {
    padding: 20px;
  }
}
</style>
