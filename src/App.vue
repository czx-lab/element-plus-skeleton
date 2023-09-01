<template>
  <el-config-provider namespace="ep" :locale="locale" :button="config">
    <el-affix :offset="0">
      <el-header class="header">
        <BaseHeader />
      </el-header>
    </el-affix>
    <div class="flex">
      <el-affix :offset="63">
        <el-aside :width="Config.MenuMaxWidth + 'px'">
          <el-scrollbar>
            <BaseSide />
          </el-scrollbar>
        </el-aside>
      </el-affix>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { computed, ref, reactive } from 'vue'
  import AppCollectFunc from '~/mixin/app'
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import en from 'element-plus/es/locale/lang/en'
  import { Config } from '~/constants/system'

  // 国际化设置
  const language = ref('zh-cn')
  const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

  // 按钮设置
  const config = reactive({
    autoInsertSpace: true
  })

  // 暗黑模式切换
  // AppCollectFunc().applyThemes()
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--ep-border-color);
  padding: 0;
  background-image: radial-gradient(transparent 1px,var(--ep-bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
}
</style>
