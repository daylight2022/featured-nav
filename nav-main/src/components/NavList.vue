<script setup>
import { toRefs } from "vue";
import NavItem from "@/components/NavItem.vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const { list } = toRefs(props);

function handleNavClick() {}
function handleNavStar() {}
</script>
<template>
  <el-row class="website" :gutter="20">
    <NavItem
      v-for="item in list"
      :data="item"
      :key="item._id"
      @handleNavClick="handleNavClick"
      @handleNavStar="handleNavStar"
    >
    </NavItem>
  </el-row>
</template>
<style lang="scss" scoped></style>
