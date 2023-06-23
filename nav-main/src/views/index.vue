<script setup lang="ts">
import { ref, reactive, inject, onMounted } from 'vue'
import NavList from '@/components/NavList.vue'
import INavItem from '@/interfaces/INavItem'
import SideBar from '@/components/SideBar.vue'
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'

const $api: any = inject('$api')
const data = reactive({
  categories: [],
  navData: [] as { id: string; name: string; list: Array<INavItem> }[],
})

onMounted(async () => {
  await $api
    .getInitData()
    .then((res: any) => {
      console.log('获取到数据:', res)
      if (res) {
        data.categories = res.categories.data || []
        data.navData = res.navData.data || []
      }
    })
    .catch((error: any) => {
      console.error('请求错误', error)
    })
})

let showMenuType = ref("half");
let contentMarginLeft = ref("70px");

function handleSubMenuClick() {}

function showMenu() {
  if (showMenuType.value == "half") {
    showMenuType.value = "all";
    contentMarginLeft.value = "220px";
  } else {
    showMenuType.value = "half";
    contentMarginLeft.value = "70px";
  }
}
</script>

<template>
  <el-container class="user-layout">
    <SideBar
      :categories="data.categories"
      :show-menu-type="showMenuType"
      @showMenu="showMenu"
      @handleSubMenuClick="handleSubMenuClick"></SideBar>
    <el-container class="content" :style="{ marginLeft: contentMarginLeft }">
      <NavHeader class="header"></NavHeader>
      <div class="main">
        <nav-list v-for="item in data.navData" :id="item.id" :name="item.name" :list="item.list"></nav-list>
      </div>
      <NavFooter class="footer"></NavFooter>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.user-layout {
  .content {
    transition: all 0.3s;
    .header {
      position: relative;
    }

    .main {
      position: relative;
      padding: 20px;
    }

    .footer {
      position: relative;
    }
  }
}
</style>
