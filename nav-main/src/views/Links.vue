<script setup lang="ts">
import { ref } from 'vue'

let formData = {
  title: '',
  icon: '',
  link: '',
  description: '',
}

const form = ref(null)

const submitForm = () => {
  // form.validate((valid) => {
  //   if (valid) {
  //     // 在这里添加提交表单的代码
  //     console.log('提交表单')
  //   } else {
  //     return false
  //   }
  // })
}
</script>

<template>
  <div class="links-page">
    <el-form ref="form" :model="form" label-width="100px" class="recommend-form">
      <el-form-item label="网页标题" prop="title">
        <el-input v-model="formData.title" placeholder="请输入网页标题"></el-input>
      </el-form-item>
      <el-form-item label="网页图标" prop="icon">
        <el-input v-model="formData.icon" placeholder="请输入网页图标"></el-input>
      </el-form-item>
      <el-form-item label="网页链接" prop="link">
        <el-input v-model="formData.link" placeholder="请输入网页链接"></el-input>
      </el-form-item>
      <el-form-item label="网页简介" prop="description">
        <el-input type="textarea" v-model="formData.description" placeholder="请输入网页简介"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.links-page {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.links-form {
  width: 400px;
}
</style>
