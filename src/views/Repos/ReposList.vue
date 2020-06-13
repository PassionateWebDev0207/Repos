<template>
  <div
    class="repos-list" 
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-table :data="repositories" border>
      <el-table-column prop="node.name" label="Name" />
      <el-table-column prop="node.description" label="Description" />
      <el-table-column label="Url">
        <template slot-scope="scope">
          <a :href="scope.row.node.url" target="_blank">
            {{ scope.row.node.url }}
          </a>
        </template>
      </el-table-column>
      <el-table-column label="Type" width="100px">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.node.isPrivate" type="warning" size="medium" effect="dark">
            Private
          </el-tag>
          <el-tag v-else type="success" size="medium" effect="dark">
            Public
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Owner" prop="node.owner.login" />
      <el-table-column label="Created Date">
        <template slot-scope="scope">
          {{ $moment(scope.row.node.createdAt).format('DD/MM/YYYY hh:mm:ss A') }}
        </template>
      </el-table-column>
      <el-table-column label="Last Updated Date">
        <template slot-scope="scope">
          {{ $moment(scope.row.node.updatedAt).format('DD/MM/YYYY hh:mm:ss A') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="node.defaultBranchRef.target.history.totalCount"
        label="Commits"
        width="100px"
      />
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('git', ['loading', 'totalCount', 'repositories'])
  },
  created () {
    this.$store.dispatch('git/GET_REPOS')
  }
}
</script>

<style lang="scss" scoped>
.repos-list {
  width: 100%;
}
</style>