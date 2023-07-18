<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, inject } from 'vue'

const $api: any = inject('$api')

interface IHotspots {
  title: string
  subtitle: string
  icon?: string
  data: [
    {
      title: string
      url: string
      hot: string
    }
  ]
}

const hotspots = ref<IHotspots[]>([])

const state = reactive<{
  timer: number | undefined // 显式指定类型为number | undefined
}>({
  timer: undefined,
})

const updateHotspots = () => {
  $api.getHotspots().then((res: any) => {
    if (res) {
      hotspots.value = res
    }
  })
}

onMounted(() => {
  updateHotspots()
  state.timer = setInterval(updateHotspots, 600000)
})
onBeforeUnmount(() => {
  clearInterval(state.timer)
})
</script>

<template>
  <el-row :gutter="20" class="hotspots">
    <el-col :span="6" v-for="(item, index) in hotspots" :key="index">
      <div class="box-card">
        <div class="card-header">
          <div class="item-wrapper">
            <i class="iconfont" :class="item.icon"></i>
            <span class="card-header-title">{{ item.title }}</span>
          </div>
          <span class="card-header-subtitle">{{ item.subtitle }}</span>
        </div>
        <el-scrollbar height="200px">
          <div v-for="(x, idx) in item.data" :key="idx" class="card-item">
            <div class="item-wrapper">
              <div class="index">{{ idx }}</div>
              <a :href="x.url">
                <sapn class="item-title">{{ x.title }}</sapn>
                <!-- <el-text class="w-100px" truncated>{{ x.title }}</el-text> -->
              </a>
            </div>
            <span class="item-hot">{{ x.hot }}</span>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.hotspots {
  position: relative;
  width: 100%;
  padding: 20px;
  .box-card {
    height: 250px;
    border-radius: 12px;
    background-color: #fff;
    padding: 20px;
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      &-title {
        font-size: 18px;
      }
      &-subtitle {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .card-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
      padding-right: 10px;
      .index {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2px 5px 0 0;
        width: 18px;
        height: 18px;
        border-radius: 3px;
        background-color: #e0e0e0;
        color: #000;
        font-size: 12px;
      }
      a {
        text-decoration: none;
        cursor: pointer;
        color: #222;
        &:hover {
          color: red;
        }
      }

      .item-title {
        font-size: 14px;
      }

      .item-hot {
        margin-left: 5px;
        font-size: 14px;
      }
    }
  }
}

.item-wrapper {
  display: flex;
  .w-100px {
    width: 250px;
  }
}
</style>
