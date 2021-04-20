
<template>
    <div class="content">
        <Search></Search>
       <div class="list">
           <div class="card">

                   <el-col :span="4" class="cardli" @click.native="selectBlock(item.id)" v-for="(item,index) in list">
                       <el-card shadow="always" >
                           {{item.name}}
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
          list:[
              {id:'1','name':'小说'},
              {id:'2','name':'影视'},
              {id:'3','name':'书籍'},
              {id:'4','name':'文档'},
              {id:'5','name':'短视频'},
              {id:'6','name':'短视频'},
          ],
      };
    },
    mounted(){

    },
    computed: {

    },
    watch: {

    },
    methods: {

        selectBlock:function (id) {
            console.log(id)
        }
    },
  };
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        justify-content:center;
        align-items:center;
        margin: auto;
        padding: 10px;

    }
    .card{
        padding: 5px;
        flex-basis: 80%;
        display: flex;
        flex-wrap:wrap;
    }
    .cardli{
        padding: 11px;
        flex-shrink:1;
    }
    .el-card {
        height: 168px;
        /*flex-basis: 50%;*/
    }
    .el-card.is-always-shadow{
        cursor: pointer;
    }
</style>

