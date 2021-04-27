<template>
    <div class="content">
        <div class="header">
            <div class="login">
                <span>注册</span>
                <span>登录</span>
            </div>
            <div style="height: 200px;width: 200px;" :style="{ 'background-image':'url('+ urlIcon +')' }">快捷操作:</div>
            <h1>投票公布时间</h1>
            <Clock style="height: 50px;margin-top: 20px;" ></Clock>
        </div>
        <div class="main"><Slider :num="num" :some-list="list"></Slider></div>

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
        name: 'test',
        components: {Slider,Clock},
        data() {
            return {
                data:[],
                state:'',
                list:[],
                list1:[],
                list2:[],
                list3:[],
                num:'',
                str:'',
                urlIcon:require('./../../assets/image/sw.png')
            };
        },
        created() {
        },
        mounted() {
           this.getlist();
        },
        methods: {
            getlist:function () {
                getlist().then(response => {
                    this.list = response.data;
                }).catch(error => {
                    console.log(error)
                })
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
            handleSelect(item) {
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
        padding: 5px;
        position: relative;
        span{
            padding: 5px;
        }
    }
</style>
