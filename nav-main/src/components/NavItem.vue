<script setup lang="ts">
import { ref } from 'vue'
import INavItem from '@/interfaces/INavItem'

const props = defineProps<{
  data: INavItem
}>()
const isStar = ref(false)

const handleNavStar = () => {
  if (isStar.value) {
    props.data.star -= 1
    isStar.value = false
  } else {
    props.data.star += 1
    isStar.value = true
  }
}
</script>

<template>
  <el-col :xs="24" :sm="8" :md="6" :lg="4" class="website-item">
    <div class="wrapper">
      <div class="link" target="_blank" @click="$emit('handleNavClick', data)">
        <el-tooltip content="链接直达" property="top">
          <i class="iconfont icon-tiaozhuan"></i>
        </el-tooltip>
      </div>
      <div class="info">
        <div class="info-header">
          <el-image class="logo" :src="data.logo" fit="fill" loading="lazy"></el-image>
          <div class="info-header-right">
            <strong class="title">{{ data.name }}</strong>
            <div class="desc">{{ data.desc || '这个网站什么描述也没有...' }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="website-item-footer">
      <span class="website-item-icon"> <span class="iconfont icon-attentionfill"></span>{{ data.view }} </span>
      <span class="website-item-icon" :class="isStar && 'active'" @click="handleNavStar">
        <span class="iconfont icon-appreciatefill"></span>{{ data.star }}
      </span>
    </div>
  </el-col>
</template>

<style lang="scss" scoped>
.website-item {
  position: relative;
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  color: #999;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .wrapper {
    text-shadow: 1px 2px 3px 7px 13px 11px 9px #f2f6f8;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    .link {
      position: absolute;
      right: 20px;
      top: 10px;
      display: block;
      z-index: 10;
    }
    .info {
      position: relative;
      display: flex;
      place-items: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 20px;

      &-header {
        display: flex;
        align-items: center;
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
        &-right {
          flex: 1;
          .title {
            font-size: 16px;
            font-weight: 600;
            color: #3273dc;
            @include text-overflow(1);
          }
          .desc {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
            @include text-overflow(1);
          }
        }
      }
    }
  }

  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 12px;
    color: #999;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #f2f6f8;
    .website-item-icon {
      display: flex;
      align-items: center;
      .iconfont {
        margin-right: 5px;
      }
      &.active {
        color: #3273dc;
      }
    }
  }
}
</style>
