<template>
  <el-container>
    <el-header>
      <repos-header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import ReposHeader from '@/components/ReposHeader'

export default {
  components: {
    ReposHeader
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.el-header {
  height: 60px;
  padding: 0;
  box-shadow: $box-shadow-normal;
}
.el-main {
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 0;
}
</style>