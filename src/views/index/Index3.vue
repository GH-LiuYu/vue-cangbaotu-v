<template>
    <div class="content">
        <div class="header">
            <div class="login">
                <span @click="login">登录</span>|<span @click="register">注册</span>
            </div>
            <div style="display: flex;justify-content:center"><h1>投票公布时间</h1></div>
            <Clock></Clock>
        </div>
        <div class="main">
            <div style="width:100%;margin:20px auto;height:400px">
                <!-- Using the slider component -->
                <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
                    <!-- slideritem wrapped package with the components you need -->
                    <template slot-scope="coverflow">
                        <slideritem v-for="(item,index) in slices" :pageLength="slices.length" :index="index" :key="index" :style="style">
                            <div>
                                <div>
                                    <div style="background-color: black;border-radius:25px;cursor:pointer;">投票<span style="float: right"  @click="click(item.id,selected)"> <vue-clap-button :size="53" colorActive="red"/></span></div>
                                    <div>{{item.name}}</div>
                                    <div>{{item.code}}</div>
                                </div>

                            </div>
                        </slideritem>
                    </template>
                    <!-- Customizable loading -->
                    <div slot="loading">loading...</div>
                </slider>
            </div>
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
    // import Slider from "../../components/Slider";
    import Clock from "../../components/Clock";
    import {getlist} from '@/api/codelist';
    import { slider, slideritem } from 'vue-concise-slider'
    export default {
        name: 'index',
        components: {Clock, slider, slideritem,},
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
                },
                style: {
                    // 'background': '#7caabe',
                    'background': '#c586fb',
                    // 'width': '23.5%',
                    'width': '18.5%',
                    'margin-right': '2%',
                    'border-radius':'20px',
                    'box-shadow':'rgb(0 0 0) 5px 0px 5px',
                },
                options: {
                    effect: 'coverflow',
                    currentPage: 20,
                    thresholdDistance: 100,
                    thresholdTime: 300,
                    deviation: 400,
                    widthScalingRatio: 0.8,
                    heightScalingRatio: 0.8,
                    slidesToScroll: 1,
                    loop: true,
                    pagination: false,
                    centeredSlides: true,
                },
                selected:false,
                selectedId:0,
            };
        },
        created() {
            document.addEventListener('keydown', this.handleKeyDown)
        },
        destroyed() {
            document.removeEventListener('keydown', this.handleKeyDown)
        },
        mounted() {
           this.getlist();
        },
        methods: {
            click:function(id,selected){
                if(this.selectedId!==id&&this.selectedId>0){//非同一个
                    this.$message({
                        showClose: true,
                        message: '每用户只能投一票',
                        type: 'error'
                    });
                }else {//同一个
                    this.selected = !selected;
                    if(this.selected){//选择
                        console.log('选择')
                        this.selectedId = id;
                    }else{//取消
                        console.log('取消')
                        this.selectedId = 0;
                    }
                }
            },
            handleKeyDown(e) {
                //37 向后，40 向下，39 向前，38 向上
                if (e.keyCode === 37||e.keyCode===40) {//后退
                    console.log('后退')
                    this.$refs.slider.$emit('slidePre')
                } else if (e.keyCode === 39||e.keyCode===38) {//前进
                    console.log('前进')
                    this.$refs.slider.$emit('slideNext')
                }
            },
            slide:function(data) {//当前滑到第几页
                if(data.currentPage>2){
                    var listJsonStr = sessionStorage.getItem('list');
                    this.slices = JSON.parse(listJsonStr).slice(0,data.currentPage+4);
                }
            },
            onTap (data) {
                console.log('点击第几页')
                console.log(data)
            },
            onInit (data) {
            },
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
            getlist:function () {
                if (sessionStorage.getItem("list") != null) {//如果已经存在客户端，不需要在请求，这种固定不变的基础数据适合请求一次就行
                    var listJsonStr = sessionStorage.getItem('list');
                    this.list  = JSON.parse(listJsonStr);
                    this.slices =this.list.slice(0,6);
                    console.log(this.slices)
                }else{
                    getlist().then(response => {
                        this.list = response.data;
                        sessionStorage.setItem('list', JSON.stringify(this.list));
                        this.slices =this.list.slice(0,6);
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
                for (let i=0;i<this.slices.length;i++){
                    if(i===2){
                        console.log(this.slices[i])
                        this.slices[i] = item
                    }
                }
                this.$refs.slider.$emit('slideTo', 2)//跳转到
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
