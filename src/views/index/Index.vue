<template>
    <div class="content">
        <div class="header">
            <div class="login">
                <span @click="register">注册</span>|<span @click="login">登录</span>
            </div>
            <div style="margin-top: 28px;"><h1>投票公布时间</h1></div>
            <Clock></Clock>
            <div style="float: right;margin-top: -99px;">
                <img src="../../assets/image/sw.svg" style="width: 139px;">
            </div>
        </div>
        <div class="main">
            <Slider :num="num" :some-list="slices" v-on:childByValue="childByValue"></Slider>
        </div>

        <div class="footer">
            <el-col>
                <el-autocomplete
                        class="inline-input"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="投票：00001 gzmt 贵州茅台"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                ></el-autocomplete>
            </el-col>
        </div>
    </div>
</template>

<script>
    import Slider from "../../components/Slider";
    import Clock from "../../components/Clock";
    import {getlist} from '@/api/codelist';
    export default {
        name: 'index',
        components: {Slider,Clock},
        data() {
            return {
                data:[],
                state:'',
                list:[],
                slices:[],
                num:'',
                str:'',
                bgImg: {
                    backgroundImage: "url(" + require('./../../assets/image/sw.svg') + ")"
                }
            };
        },
        created() {
        },
        mounted() {
           this.getlist();
        },
        methods: {
            register:function(){
                this.$router.push({ path: '/register'}).catch(error => {
                    console.info(error.message)
                })
            },
            login:function(){
                this.$router.push({ path: '/login', query: { id: ''}}).catch(error => {
                    console.info(error.message)
                })
            },
            childByValue: function (childValue) {
                // childValue就是子组件传过来的值
                this.slices = childValue
            },
            getlist:function () {
                if (sessionStorage.getItem("list") != null) {//如果已经存在客户端，不需要在请求，这种固定不变的基础数据适合请求一次就行
                    var listJsonStr = sessionStorage.getItem('list');
                    this.list  = JSON.parse(listJsonStr);
                    this.slices =this.list.slice(0,100);
                }else{
                    getlist().then(response => {
                        this.list = response.data;
                        sessionStorage.setItem('list', JSON.stringify(this.list));
                        this.slices =this.list.slice(0,100);
                    }).catch(error => {
                        console.log(error)
                    })
                }

            },
            querySearch(queryString, cb) {
                var list = this.list;
                var results = queryString ? list.filter(this.createFilter(queryString,this.isstring(queryString))) : list;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString,str) {
                if(str==='中文'){
                  return (restaurant) => {
                      restaurant.value = restaurant.name;
                    return (restaurant.value.indexOf(queryString) === 0);
                  };
                }
                if(str==='英文'){
                  return (restaurant) => {
                     restaurant.value = restaurant.short;
                     if(restaurant.value!==null){
                         return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                     }

                  };
                }
                if(str==='数字'){
                  return (restaurant) => {
                    restaurant.value = restaurant.code;
                    return (restaurant.value.indexOf(queryString) === 0);
                  };
                }
            },
            isstring (queryString) {
                var pattern = new RegExp("[\u4E00-\u9FA5]+");//中文
                var pattern2 = new RegExp("[A-Za-z]+");//英文
                var pattern3 = new RegExp("[0-9]+");//字符串
                if(pattern.test(queryString)){
                    return '中文'
                }else if(pattern2.test(queryString)){
                    return '英文'
                }else if(pattern3.test(queryString)){
                    return '数字'
                }else{
                    return '中文'
                }
            },
            handleSelect(item) {//选择
                this.num = item.id-1
            },
        }
    }
</script>
<style lang="scss" scoped>
    .content{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    .header{
        min-height: 200px;
        width: 100%;
        text-align: center;
    }
    .main{
        min-height: 500px;
        width: 100%;
        background-color: black;
        margin-top: 5px;
        background: -webkit-radial-gradient(bottom ellipse, #28859e  0%, #000000 50%);
        background: radial-gradient(ellipse at bottom, #28859e  0%, #000000 50%);
    }
    .footer{
        min-height: 200px;
        text-align: center;
        margin: auto;
    }
    .inline-input>>>.el-input__inner{
        font-size: 24px!important;
        color:#000000!important;
        height: 80px;
        padding: 20px;
        border-bottom: 1px solid #dbdbdb;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        width: 115%;
    }
    .login{
        float:right;
        color: #e82363;
        margin-right: 20px;
        margin-top: 7px;
        position: relative;
        font-weight:bold;
        span{
            padding: 5px;
            cursor: pointer;
        }
    }
</style>
