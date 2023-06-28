<script setup lang="ts">
import { ref, computed } from 'vue'
import ICategoryItem from '@/interfaces/ICategoryItem'

const props = defineProps<{
  categories: Array<ICategoryItem>
  showMenuType: String
}>()
const emits = defineEmits(['handleSubMenuClick'])

const defaultAcitve = ref('')

const sideBarWidth = computed(() => (props.showMenuType == 'half' ? '70px' : props.showMenuType == 'all' ? '220px' : 0))

const isCollapse = computed(() => props.showMenuType == 'half')

let selectedCategoryId = ref('')

const handleMenuItemClick = (parentId: string, id: string) => {
  if (selectedCategoryId.value == parentId) {
    document.getElementById(id)?.scrollIntoView()
    return
  }

  selectedCategoryId.value = parentId
  emits('handleSubMenuClick', parentId, id)
}
</script>

<template>
  <div>
    <el-aside :style="{ width: sideBarWidth }">
      <slot name="sidebar">
        <el-row>
          <el-col :span="24">
            <el-menu
              :default-active="defaultAcitve"
              :collapse="isCollapse"
              class="el-menu-vertical-demo"
              background-color="#4700f1"
              active-text-color="#3900c1"
              text-color="#fff"
              unique-opened>
              <el-sub-menu v-for="item in props.categories" :index="item._id" :key="item._id">
                <template #title>
                  <i :class="item.icon ? item.icon : `el-icon-element icon-title`"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item
                  v-for="nav in item.children"
                  :index="nav._id"
                  @click="handleMenuItemClick(item._id, nav.categoryId)">
                  <template #title>
                    <a :href="`#${nav._id}`">
                      <i :class="nav.icon"></i>
                      <span>{{ nav.name }}</span>
                    </a>
                  </template>
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </slot>

      <div class="sidebar-fix">
        <ul>
          <li class="item" @click="$emit('showMenu')">
            <el-icon v-if="!isCollapse" color="#fff" :size="20"><Fold /></el-icon>
            <el-icon v-else color="#fff" :size="20"><Expand /></el-icon>
          </li>
        </ul>
      </div>
    </el-aside>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-fix {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
  }
  .item {
    padding: 10px 15px;
    text-align: left;
    cursor: pointer;
    background: var(--color-primary);
    i {
      color: #fff;
      font-size: 20px;
    }
  }
}

.el-aside {
  transition: all 0.3s;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;

  .el-menu-vertical-demo.el-menu {
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 100px;
  }
  .el-menu--popup::-webkit-scrollbar,
  .el-menu-vertical-demo.el-menu::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .el-menu--popup::-webkit-scrollbar-thumb,
  .el-menu-vertical-demo.el-menu::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(var(--color-primary), 0.2);
  }

  .el-menu--popup::-webkit-scrollbar-track,
  .el-menu-vertical-demo.el-menu::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: var(--color-primary);
  }

  .el-menu-item a {
    color: #fff;
  }

  .iconfont {
    margin-right: 5px;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu--collapse .el-submenu__title span {
  display: none;
}
.el-menu--popup-right-start {
  transition: all 0.3s;
  // background-color: #4700f1 !important;
  .el-menu-item {
    // background-color: #4700f1 !important;
    & a {
      color: #fff;
    }
    &:hover {
      background-color: #3900c1;
    }
  }
}
@media screen and (max-width: 568px) {
  .el-aside {
    width: 0;
  }

  .app-search,
  .sidebar-fix {
    display: none;
  }
}
@media screen and (min-width: 569px) {
  .el-aside {
    width: 70px;
  }
  .app-search,
  .sidebar-fix {
    display: block;
  }
}
</style>
