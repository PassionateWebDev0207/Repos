<template>
  <el-container>
    <el-header>
      <repos-header />
    </el-header>
    <el-main>
      <template v-if="isError">
        <el-alert
          v-for="(item, index) in errors"
          :key="index"
          :title="item.message"
          type="error"
          show-icon
        />
      </template>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import ReposHeader from '@/components/Repos/ReposHeader'

export default {
  components: {
    ReposHeader
  },
  created () {
  },
  computed: {
    ...mapState('git', ['isError', 'errors'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.el-header {
  height: 60px;
  padding: 0;
  box-shadow: $box-shadow-normal;
  z-index: 99;
}
.el-main {
  padding: 20px;
  height: calc(100vh - 60px);
  overflow: auto;
  .el-alert {
    margin-bottom: 10px;
  }
}
</style>