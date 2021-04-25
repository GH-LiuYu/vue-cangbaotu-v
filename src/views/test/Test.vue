<template>
  <div class="content">
    <div class="header">
      <h1>投票公布时间</h1>
      <Clock style="height: 50px;margin-top: 20px" ></Clock>
    </div>
    <div class="main"><Slider :num="num"></Slider></div>

    <div class="footer">
      <el-col>
        <el-autocomplete
                class="inline-input"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="查找：00001，gzmt，贵州茅台"
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
export default {
  name: 'test',
  components: {Slider,Clock},
  data() {
    return {
      data:[],
      state:'',
      restaurants:[],
      num:''
    };
  },
  created() {
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        {"id":0, "value": "slider", "address": "长宁区新渔路144号" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
      ];
    },
    slideTo () {

    },
    handleSelect(item) {
      this.num = item.id
      this.slideTo()
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
</style>
