<template>
  <el-config-provider namespace="ep" :locale="locale" :button="config">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide />
      <div w="full" py="4">
        <router-view />
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { computed, ref, reactive } from 'vue'
  import AppCollectFunc from '~/mixin/app'
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import en from 'element-plus/es/locale/lang/en'

  // 国际化设置
  const language = ref('zh-cn')
  const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

  // 按钮设置
  const config = reactive({
    autoInsertSpace: true
  })

  // 暗黑模式切换
  AppCollectFunc().applyThemes()
</script>
