
<template>
    <div class="content">
        <div class="log"><img src="../../assets/image/logo.png" style="width: 30%;height: 30%"></div>
        <div style="margin-top: 15px;" class="content-search">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
</template>
<script>
  export default {
    name: "search",
    data() {
      return {
          input: '',
          select: ''
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
    .content{
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        margin-top: 120px;
    }
    .log{

    }
    .content-search{
        width: 39%;
    }
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>

