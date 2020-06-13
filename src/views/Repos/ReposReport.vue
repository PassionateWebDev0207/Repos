<template>
  <div class="repos-report"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <template v-if="chartReady">
      <highcharts :options="commitsByProj" />
      <highcharts :options="commitsByDate" />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      commitsByProj: {
        chart: {
          height: '600px'
        },
        title: {
          text: 'Commit History by Project'
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          min: 0,
          title: {
            text: 'commits'
          }
        },
        series: [
          {
            type: 'areaspline',
            name: ' ',
            data: [],
            marker: {
              lineWidth: 2,
              lineColor: '#409eff',
              fillColor: 'white'
            }
          },
          {
            type: 'pie',
            name: ' ',
            data: [
              {
                name: 'Public Repositories',
                y: 0,
                color: '#67c23a'
              },
              {
                name: 'Private Repositories',
                y: 0,
                color: '#e6a23c'
              }
            ],
            size: 300,
            center: [200, 150],
            showInLegend: false,
          }
        ]
      },
      commitsByDate: {
        chart: {
          height: '600px'
        },
        title: {
          text: 'Commit History by Date'
        },
        xAxis: {
          categories: [
          ]
        },
        yAxis: {
          min: 0,
          title: {
            text: 'commits'
          }
        },
        series: [
          {
            type: 'areaspline',
            name: ' ',
            data: [],
            marker: {
              lineWidth: 2,
              lineColor: '#409eff',
              fillColor: 'white'
            }
          },
          {
            type: 'pie',
            name: ' ',
            data: [
              {
                name: 'Public Repositories',
                y: 0,
                color: '#67c23a'
              },
              {
                name: 'Private Repositories',
                y: 0,
                color: '#e6a23c'
              }
            ],
            size: 300,
            center: [200, 150],
            showInLegend: false,
          }
        ]
      },
      chartReady: false
    }
  },
  async created () {
    await this.$store.dispatch('git/GET_REPOS')
    this.chartReady = false
    if (this.repositories.length > 0) {

      let startDate = this.$moment(this.repositories[0].node.createdAt)
      const endDate = this.$moment(new Date())
      while (startDate.isBefore(endDate)) {
        this.commitsByDate.xAxis.categories.push(startDate.format('MMM YYYY'))
        this.commitsByDate.series[0].data.push(0)
        startDate.add(1, 'month')
      }
      this.commitsByDate.xAxis.categories.push(endDate.format('MMM YYYY'))
      this.commitsByDate.series[0].data.push(0)

      this.repositories.forEach(item => {
        this.commitsByProj.xAxis.categories.push(item.node.name)
        this.commitsByProj.series[0].data.push(item.node.defaultBranchRef.target.history.totalCount)
        if (item.node.isPrivate) {
          this.commitsByProj.series[1].data[1].y += 1
          this.commitsByDate.series[1].data[1].y += 1
        } else {
          this.commitsByProj.series[1].data[0].y += 1
          this.commitsByDate.series[1].data[0].y += 1
        }

        item.node.defaultBranchRef.target.history.edges.forEach(edge => {
          const nodeDate = this.$moment(edge.node.committedDate).format('MMM YYYY')
          this.commitsByDate.xAxis.categories.forEach((x, index) => {
            if (x === nodeDate) {
              this.commitsByDate.series[0].data[index] += 1
              return
            }
          })
        })
      })
    }
    this.chartReady = true
  },
  computed: {
    ...mapState('git', ['loading', 'repositories'])
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.repos-report {
  width: 100%;
}
</style>