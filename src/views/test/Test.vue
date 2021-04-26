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
      num:'',
      str:'',
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
      ;
      var results = queryString ? restaurants.filter(this.createFilter(queryString,this.isstring(queryString))) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString,str) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
      // if(str==='中文'){
      //   return (restaurant) => {
      //     return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      //   };
      // }
      // if(str==='英文'){
      //   return (restaurant) => {
      //     return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      //   };
      // }
      // if(str==='字符串'){
      //   return (restaurant) => {
      //     return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      //   };
      // }
    },
    loadAll() {
      return [
        {"id":0,  "value": "slider", "address": "上海市长宁区淞虹路661号" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" }, {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":20, "value": "slider20", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":1,  "value": "slider1", "address": "上海市长宁区淞虹路661号" },
        {"id":2, "value": "slider2", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":3, "value": "slider3", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":4, "value": "slider4", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":5, "value": "slider5", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":6, "value": "slider6", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":7, "value": "slider7", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":8, "value": "slider8", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":9, "value": "slider9", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":10, "value": "slider10", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":12, "value": "slider12", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":13, "value": "slider13", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":14, "value": "slider14", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":15, "value": "slider15", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":16, "value": "slider16", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":17, "value": "slider17", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":18, "value": "slider18", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":19, "value": "slider19", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        {"id":223, "value": "slider233", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },


      ];
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
          return '字符串'
        }else{
          return '中文'
        }
    },
    handleSelect(item) {
      this.num = item.id

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
