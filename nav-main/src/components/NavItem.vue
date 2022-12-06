<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const isStar = ref(false);
const navData = computed(() => props.data);

function handleNavStar(navData) {
  $emit("hadnleNavStar", navData, () => {
    navData.value.star += 1;
    isStar.value = true;
  });
}
</script>
<template>
  <el-col :xs="24" :sm="8" :md="6" :lg="4" class="website-item">
    <div class="wrapper">
      <div
        class="link"
        target="_blank"
        @click="$emit('handleNavClick', navData)"
      >
        <el-tooltip content="链接直达" property="top">
          <i class="iconfont icon-tiaozhuan"></i>
        </el-tooltip>
      </div>

      <div class="info">
        <div class="info-header">
          <el-image
            class="logo"
            :src="navData.logo"
            fit="fill"
            loading="lazy"
          />
          <div class="info-header-right">
            <strong class="title">{{ navData.name }}</strong>
            <div class="desc">
              {{ navData.desc || "这个网站什么描述也没有..." }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="website-item-footer">
      <div class="left"></div>
      <div class="right">
        <span class="website-item-icon">
          <span class="iconfont icon-attentionfill"></span>{{ navData.view }}
        </span>
        <span
          class="website-item-icon"
          :class="isStar && 'active'"
          @click="handleNavStar"
        >
          <span class="iconfont icon-appreciatefill"></span>{{ navData.star }}
        </span>
      </div>
    </div>
  </el-col>
</template>
<style lang="scss" scoped>
.website-item {
  font-size: 12px;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  color: #999;
  position: relative;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    .link {
      display: block;
    }
  }

  .link {
    position: absolute;
    right: 20px;
    top: 10px;
    display: none;
    z-index: 10;
  }

  .wrapper {
    text-shadow: 1px 2px 3px 7px 13px 11px 9px #f2f6f8;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;

    &-header {
      display: flex;
      align-items: center;
      overflow: auto;

      &-right {
        display: flex;
        flex-direction: column;
      }
    }
  }

  a {
    color: #999;
  }

  .iconfont {
    margin-left: 15px;
    cursor: pointer;
    color: #999;
    font-size: 12px;
    padding-left: 0;
  }

  .logo {
    min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .title {
    color: #3273dc;
    font-size: 16px;
    @include text-overflow(1);
  }

  .desc {
    margin-top: 5px;
    @include text-overflow(1);
  }

  &-footer {
    border-top: 1px solid #f2f2f2;
    background-color: #fff;
    padding: 10px 15px;
    text-align: right;
    display: flex;
    .left {
      font-size: 12px;
      .iconfont {
        margin-left: 0;
      }
      a {
        display: flex;
        align-items: center;
      }
    }
    .right {
      flex: 1;
    }
  }
  &-icon.active {
    .iconfont {
      color: #2a97ff;
    }
  }
}
</style>
