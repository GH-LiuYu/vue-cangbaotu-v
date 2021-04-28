<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:20px auto;height:400px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
      <!-- slideritem wrapped package with the components you need -->
      <slideritem v-for="(item,index) in someList" :key="item.id" :style="style">
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
          loopedSlides: 6,
          slidesToScroll: 1,
          pagination:false,
          currentPage:2,
        }
      }
    },
    created() {
      document.addEventListener('keydown', this.handleKeyDown)
    },
    destroyed() {
      document.removeEventListener('keydown', this.handleKeyDown)
    },
    watch:{//监听发生改变
      num:function () {
        if(this.num>this.options.currentPage){
          var listJsonStr = sessionStorage.getItem('list');
          this.list = JSON.parse(listJsonStr).slice(0,this.num+2);
          console.log(this.num)
          this.$emit('childByValue', this.list)
        }
        this.$refs.slider.$emit('slideTo', this.num)//跳转到
      }
    },
    methods:{
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
          this.list = JSON.parse(listJsonStr).slice(0,data.currentPage+3);
          this.$emit('childByValue', this.list)
        }
      },
      onTap (data) {
        // console.log(data)
      },
      onInit (data) {
        // console.log(data)
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
