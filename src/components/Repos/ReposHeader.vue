<template>
  <div class="repos-header">
    <div v-for="item in tabs" :key="item.label" :class="compareRoute(item.to) ? 'visit' : ''">
      <router-link :to="item.to">
        <div>{{ item.label }}</div>
      </router-link>
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          label: 'List',
          to: '/repos/list'
        },
        {
          label: 'Report',
          to: '/repos/report'
        }
      ]
    }
  },
  methods: {
    compareRoute (route) {
      return this.$route.path.includes(route)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.repos-header {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: $clr-primary;
  display: flex;
  align-items: center;
  > div {
    width: 150px;
    height: 100%;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s;
    > a {
      > div {
        width: 100%;
        height: 100%;
      }
      text-decoration: none;
      color: white;
    }
    &.visit {
      background-color: rgba(black, 0.1);
    }
    &:hover {
      background-color: rgba(black, 0.1);
    }
  }
}
</style>