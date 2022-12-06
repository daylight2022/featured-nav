<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from "vue";
import SideBar from "@/components/SideBar.vue";
import NavHeader from "@/components/NavHeader.vue";
import Announcement from "@/components/Announcement.vue";
import NavList from "@/components/NavList.vue";

const { proxy } = getCurrentInstance();

const data = reactive({
  categories: [],
  navData: [],
});
onMounted(async () => {
  await proxy.$api
    .getInitData()
    .then((res) => {
      console.log("获取到数据：", res);
      if (res) {
        data.categories = res.categories.data;
        data.navData = res.navData.data;
      }
    })
    .catch((error) => {
      console.error("请求错误 ", error);
    });
});

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
      @handleSubMenuClick="handleSubMenuClick"
    >
    </SideBar>
    <el-container class="content" :style="{ marginLeft: contentMarginLeft }">
      <NavHeader>Header</NavHeader>
      <div class="main">
        <Announcement />
        <div
          class="website-wrapper"
          v-for="item in data.navData"
          :key="item.name"
        >
          <p class="website-title" :id="item.id">{{ item.name }}</p>
          <NavList :list="item.list"></NavList>
        </div>
      </div>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.el-container {
  flex-direction: column;
}
.user-layout {
  position: relative;
  .footer {
    position: fixed;
    left: 200px;
    right: 0;
    bottom: 0;
    font-size: 14px;
    color: #999;
  }
  .el-submenu__title i::deep {
    color: #fff;
  }

  .content {
    transition: all 0.3s;
    margin-left: 0px;
  }
}

.el-menu--popup-right-start::deep {
  height: 500px !important;
  overflow: auto;
}
body {
  .el-menu--popup-right-start {
    background-color: #fff !important;
    .el-menu-item {
      background-color: #fff !important;
      color: #333 !important;
      &:hover {
        background-color: #ecf5ff !important;
      }
    }
  }
}

.main {
  padding: 20px;
  position: relative;
}

.website-wrapper {
  .website-title {
    font-size: 14px;
    margin: 50px 0 20px;
    background: #fff;
    display: inline-block;
    padding: 5px 10px;
    border-top-right-radius: 15px;
  }
}
</style>
