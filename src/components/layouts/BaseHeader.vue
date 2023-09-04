<script lang="ts" setup>
import { ref } from 'vue'
import { toggleDark } from '~/composables'
import { Moon, Sunny } from '@element-plus/icons-vue'
const value1 = ref(true)
</script>

<template>
  <el-menu 
    class="bg-transparent flex-1 flex-items-center" 
    mode="horizontal" 
    :ellipsis="false"
  >
    <el-menu-item index="1">Element Plus</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="3">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-switch
      v-model="value1"
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
    />
  <el-menu-item index="4">Processing Center</el-menu-item>
  </el-menu>
</template>
