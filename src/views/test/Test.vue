<template>
  <div class="content">
    <div class="header">shang</div>
    <Clock style="height: 100px"></Clock>
<!--    <div class="main"><Slider></Slider></div>-->

    <div class="footer">xia</div>
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
      letter:['A','B'],
    };
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped>
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
    /*text-align: center;*/
  }
  .footer{
    min-height: 200px;
    width: 100%;
    text-align: center;
  }
</style>
