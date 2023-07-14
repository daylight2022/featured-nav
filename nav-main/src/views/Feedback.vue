<script setup lang="ts">
import { ref } from 'vue'
let message = ref('')

const addMessage = () => {}
</script>

<template>
  <div class="feedback">
    <h2>留言板</h2>
    <form @submit.prevent="addMessage">
      <input type="text" v-model="message" placeholder="请输入留言内容" />
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  width: 800px;
  margin: 0 auto;
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    float: right;
  }
}
</style>
