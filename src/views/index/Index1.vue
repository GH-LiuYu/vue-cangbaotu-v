
<template>
  <el-container>
    <el-main ref="homePage">
        <router-view  :key="key"></router-view>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    name: "Main",
    data() {
      return {
        clientHeight:'',
      };
    },
    mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };

    },
    computed: {
      key() {
        return this.$route.fullPath;
      },
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
      changeFixed(clientHeight){ //动态修改样式
        this.$refs.homePage.$el.style.height = clientHeight+'px';
      },
    },
  };
</script>

<style lang="scss" scoped>

  .el-main {
    background-color: #5583a0;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>

