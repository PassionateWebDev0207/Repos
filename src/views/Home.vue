<template>
  <div class="home-page">
    <el-row>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card :body-style="{ padding: '0px' }">
          <div>
            <div
              style="
                width: 100%;
                height: 100%;
                background-image: url('https://i.ibb.co/d0xXqZs/20200411-165439.jpg');
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                "
            >
            </div>
          </div>
          <div class="bottom clearfix">
            <el-link
              type="success"
              href="http://jimmy-yu-cv.herokuapp.com/"
              target="_blank"
            >
              Visit Jimmy's Portfolio
            </el-link>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card :body-style="{ padding: '0px' }">
          <div>
              Get Git Repositories
          </div>
          <div class="bottom clearfix">
            <router-link to="/repos">
              <el-button type="text">
                Visit Repos
              </el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  padding: 80px 20px 20px;
  overflow: auto;
}
</style>

<style lang="scss">
.home-page {
  .el-row {
    .el-col {
      height: 400px !important;
      margin: 10px;
      .el-card {
        height: 100%;
        &__body {
          > div {
            &:first-child {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 360px;
              > div {
                width: 100%;
                height: 100%;
              }
            }
            &:last-child {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              .el-link {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>