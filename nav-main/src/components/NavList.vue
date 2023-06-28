<script setup lang="ts">
import NavItem from './NavItem.vue'
import INavItem from '@/interfaces/INavItem'

const props = defineProps<{
  _id: string
  name: string
  list: INavItem[]
}>()

props

const handleNavClick = () => {}
const handleNavStar = () => {}
</script>

<template>
  <div class="website-wrapper">
    <p class="website-title" :id="_id">{{ name }}</p>
    <el-row class="website" :gutter="20">
      <NavItem
        v-for="item in list"
        :data="item"
        :key="item._id"
        @handleNavClick="handleNavClick"
        @handleNavStar="handleNavStar"></NavItem>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.website-wrapper {
  .website-title {
    font-size: 14px;
    margin: 20px 0;
    display: inline-block;
    padding: 5px 10px;
    background: #fff;
    border-top-right-radius: 15px;
  }
  .website {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
