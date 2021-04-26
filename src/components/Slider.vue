<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:20px auto;height:400px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
      <!-- slideritem wrapped package with the components you need -->
      <slideritem v-for="(item,index) in someList" :key="index" :style="style">
        <div>
          <div >
            <div style="background-color: black;border-radius:25px;cursor:pointer">投票</div>
            <div>{{item.name}}</div>
            <div>{{item.code}}</div>
          </div>

        </div>
      </slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
  // import slider components
  import { slider, slideritem } from 'vue-concise-slider'
  export default {
    props: ['num','someList'],
    data () {
      return {
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
          itemAnimation: true,
          centeredSlides: true,
          loopedSlides: 2,
          slidesToScroll: 1,
          pagination:false,
          currentPage:3,
        }
      }
    },
    watch:{
      num:function () {
        this.$refs.slider.$emit('slideTo', this.num)
      }
    },
    methods:{
      slide:function(data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
      },
    },
    components: {
      slider,
      slideritem
    }
  }
</script>
<style lang="scss" scoped>
  .slider-item {
    transform:scale(0.8);
    transition-timing-function: ease;
    transition-duration: 300ms;
  }
  .slider-item.slider-active {
    transform:scale(1.0);
    z-index: 999;
  }
  .slider-item.slider-active-copy {
    transform:scale(1.0);
    z-index: 999;
  }
</style>
