<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import INavItem from '@/interfaces/INavItem'
import ICategoryItem from '@/interfaces/ICategoryItem'
import SideBar from '@/components/SideBar.vue'
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import { ElMessage } from 'element-plus';

const $api: any = inject('$api')

let categories = ref([] as ICategoryItem[])
let navData = ref([] as { _id: string; name: string; list: Array<INavItem> }[])
// 汇总所有子类别
let cateList: { [key: string]: string } = {}

onMounted(async () => {
  await $api
    .getCategoryData()
    .then((res: any) => {
      console.log('获取到网页类别数据:', res)
      if (res) {
        categories.value = res.data || []
        categories.value.map((item: ICategoryItem) => {
          item.children.forEach((x) => {
            cateList[x._id] = x.name
          })
        })
      }
    })
    .catch((error: any) => {
      console.error('请求错误', error)
    })
  await $api
    .getNavData()
    .then((res: any) => {
      console.log('获取到网页项目数据:', res)
      if (res) {
        let result = (res.data || []).reduce((pre: any, cur: INavItem) => {
          const key = cur.categoryId
          if (!pre[key]) {
            pre[key] = []
          }
          pre[key].push(cur)
          return pre
        }, {})
        result = Object.keys(result).map((key) => {
          return {
            _id: key,
            name: cateList[key],
            list: result[key],
          }
        })
        navData.value = result
      }
    })
    .catch((error: any) => {
      console.error('请求错误', error)
      ElMessage.error('Failed to fetch data')
    })
})

let showMenuType = ref('all')
// let contentMarginLeft = ref('220px')

function handleSubMenuClick() {}

function showMenu() {
  if (showMenuType.value == 'half') {
    showMenuType.value = 'all'
    // contentMarginLeft.value = '220px'
  } else {
    showMenuType.value = 'half'
    // contentMarginLeft.value = '70px'
  }
}
</script>

<template>
  <el-container class="user-layout">
    <SideBar
      :categories="categories"
      :show-menu-type="showMenuType"
      @showMenu="showMenu"
      @handleSubMenuClick="handleSubMenuClick"></SideBar>
    <el-container class="container">
      <NavHeader></NavHeader>
      <RouterView :navData="navData" />
      <NavFooter></NavFooter>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.user-layout {
  display: flex;
  .container {
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
  }
}
</style>
