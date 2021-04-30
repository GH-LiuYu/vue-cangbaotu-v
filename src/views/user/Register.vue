<template>
  <div class="register">
      <div class="r-content">
        <div class="logo"></div>
        <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="form" :rules="rules" ref="form">
<!--            :model="form" :rules="rules" ref="form" 必填-->
          <el-form-item label="手机号" class="phone" prop="phone">
<!--              prop="phone" 必填-->
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            <hr style="border: 0; background-color: #d6d6d6;; height: 1px; ">
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="form.code" placeholder="请输入验证码" ></el-input>
            <span class="code">获取验证码</span>
            <hr style="border: 0; background-color: #d6d6d6;; height: 1px; ">
          </el-form-item>
          <el-form-item  class="submit" label-width="30px">
             <el-button type="primary" @click="onSubmit('form')" round style="width:100%">注册</el-button>
          </el-form-item>
        </el-form>
          </div>
      </div>
  </div>
</template>

<script>
import {register} from '@/api/user';
export default {
  name: 'register',
  components: {},
  data() {
    return {
      data:[],
      labelPosition: 'right',
      form: {
        phone: '',
        code: '',
      },
      rules:{//绑定验证规则
          phone:[
              { required: true, message: '请输入手机号', trigger: 'blur' },
          ],
          code:[
              { required: true, message: '请输入验证码', trigger: 'blur' },
          ],
      }
    };
  },
  created() {
  },
  methods: {
    onSubmit:function(form){
        this.$refs[form].validate((valid) => {
            if (valid) {
                this.register(param);
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    register:function (param) {
        register(param).then(response => {
            this.data  = response.data;
            console.log(this.data)
        }).catch(error => {
            console.info(error.message)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
  .register{
    display: flex;
    justify-content:center;
    align-content: center;
    align-items: center;
    margin: auto;
    .r-content{
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      margin: 0 auto;
      .logo{
        /*项目自身可以定义*/
        align-self: center;
        height: 140px;
        width: 125px;
        margin-left: 35px;
        margin-top: 55px;
        cursor:pointer;
        background-image: url("./../../assets/image/liandao.png");
        background-repeat: no-repeat;
      }
      .code{
        position: absolute;
        right: 0px;
        color: #148ff9;
        cursor:pointer
      }
      .submit{
        /*//提交按钮*/
        text-align: center;
      }
    }
  }
  .r-content>>>.el-input__inner {
    width: 250px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    /*outline: medium;*/
  }
</style>
