<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:20px auto;height:400px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
      <!-- slideritem wrapped package with the components you need -->
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
  // import slider components
  import { slider, slideritem } from 'vue-concise-slider'
  export default {
    data () {
      return {
        //data list [array]
        someList : [
          {
            html: 'slider',
            style: {
              'background': '#4abf8a',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider44',
            style: {
              'background': '#4abf8a',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider445454',
            style: {
              'background': '#4abf8a',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider4445452222',
            style: {
              'background': '#4abf8a',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider2',
            style: {
              'background': '#4bbfc3',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider3',
            style: {
              'background': '#7baabe',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider4',
            style: {
              'background': '#7caabe',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider5',
            style: {
              'background': '#4abf8a',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider6',
            style: {
              'background': '#4bbfc3',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider7',
            style: {
              'background': '#7baabe',
              'width': '23.5%',
              'margin-right': '2%'
            }
          },
          {
            html: 'slider8',
            style: {
              'background': '#7caabe',
              'width': '23.5%',
              'margin-right': '2%'
            }
          }
        ],
        options: {
          itemAnimation: true,
          centeredSlides: true,
          loopedSlides: 2,
          slidesToScroll: 1
        }
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
