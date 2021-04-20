
<template>
    <div class="content">
        <Search></Search>
       <div class="list">
           <div class="card">
                <el-col :span="8" class="cardli">
                   <el-card shadow="always">
                       小说
                   </el-card>
                </el-col>
               <el-col :span="8" class="cardli">
                   <el-card shadow="always">
                       影视
                   </el-card>
               </el-col>
               <el-col :span="8" class="cardli">
                   <el-card shadow="always">
                       书籍
                   </el-card>
               </el-col>
               <el-col :span="8" class="cardli">
                   <el-card shadow="always">
                       游戏
                   </el-card>
               </el-col>
               <el-col :span="8" class="cardli">
                   <el-card shadow="always">
                       短视频
                   </el-card>
               </el-col>
           </div>

       </div>
    </div>
</template>
<script>
  import Search from "./Search";
  export default {
    name: "search",
      components: {Search},
    data() {
      return {
        clientHeight:'',
      };
    },
    mounted(){

    },
    computed: {

    },
    watch: {

    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        justify-content:center;
        align-items:center;
        width: 77%;
        margin: auto;
        padding: 10px;
    }
    .card{
        padding: 5px;
    }
    .cardli{
        padding: 5px;
    }
    .el-card {
        height: 240px;
    }
</style>

