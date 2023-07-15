<script setup lang="ts">
import { ref } from 'vue'

const hotspots = ref([
  {
    title: '百度热点',
    icon: '',
    tag: '热搜',
    content: [
      { title: '向着网络强国阔步迈进', index: '491.5万' },
      { title: '向着网络强国阔步迈进', index: '491.5万' },
    ],
  },
  {
    title: '百度热点',
    icon: '',
    tag: '热搜',
    content: [
      { title: '向着网络强国阔步迈进', index: '491.5万' },
      { title: '向着网络强国阔步迈进', index: '491.5万' },
    ],
  },
  {
    title: '百度热点',
    icon: '',
    tag: '热搜',
    content: [
      { title: '向着网络强国阔步迈进', index: '491.5万' },
      { title: '向着网络强国阔步迈进', index: '491.5万' },
    ],
  },
  {
    title: '百度热点',
    icon: '',
    tag: '热搜',
    content: [
      { title: '向着网络强国阔步迈进', index: '491.5万' },
      { title: '向着网络强国阔步迈进', index: '491.5万' },
    ],
  },
])
</script>

<template>
  <el-row :gutter="12" class="hotspots">
    <el-col :span="6" v-for="(item, index) in hotspots" :key="index">
      <el-card shadow="always" class="box-card">
        <div class="card-header">
          <div>
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </div>
          <span>{{ item.tag }}</span>
        </div>
        <div v-for="(x, idx) in item.content" :key="idx" class="card-item">
          <span>{{ x.title }}</span>
          <span>{{ x.index }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.hotspots {
  position: relative;
  padding: 20px;
  .box-card {
    border-radius: 12px;
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .card-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
