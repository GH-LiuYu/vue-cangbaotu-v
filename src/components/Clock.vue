<template>
  <div class="FlipClock">
    <Flipper ref="flipperDay1" />
    <Flipper ref="flipperDay2" />
    <em>天:</em>
    <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" />
    <em>时:</em>
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <em>分:</em>
    <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />
    <em>秒</em>
  </div>
</template>

<script>
  import Flipper from './Flipper'
  export default {
    name: 'FlipClock',
    data() {
      return {
        timer: null,
        flipObjs: []
      }
    },
    components: {
      Flipper
    },
    methods: {
      getStr:function(msec){
        let day = parseInt(msec / 1000 / 60 / 60 / 24)
        let hr = parseInt(msec / 1000 / 60 / 60 % 24)
        let min = parseInt(msec / 1000 / 60 % 60)
        let sec = parseInt(msec / 1000 % 60)
        // 个位数前补零
        day = day > 9 ? day : '0' + day
        hr = hr > 9 ? hr : '0' + hr
        min = min > 9 ? min : '0' + min
        sec = sec > 9 ? sec : '0' + sec
        // 控制台打印
        console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
        return  day+hr+min+sec;
      },
      addDate:function(day){
        var dateTime=new Date();
        dateTime=dateTime.setDate(dateTime.getDate()+day);
        return this.formatDate(new Date(dateTime), 'yyyy-mm-dd');
      },
      // 初始化数字
      init() {
        const end = Date.parse(new Date('2021-04-30'))-(8*60*60*1000)+10*60*60*1000+45*60*1000;
        // 当前时间戳
        const now = Date.parse(new Date())
        const now1 = Date.parse(new Date())
        // 相差的毫秒数
        const msec = end - now
        let nowTimeStr = this.getStr(msec);
        if(msec<0){
          nowTimeStr = '00000000';
        }
        for (let i = 0; i < this.flipObjs.length; i++) {
          this.flipObjs[i].setFront(nowTimeStr[i])
        }
      },
      // 开始计时
      run() {
        const end1 = Date.parse(new Date('2021-04-30'))-(8*60*60*1000)+10*60*60*1000+45*60*1000;
        // 当前时间戳
        const now1 = Date.parse(new Date())
        if(end1>now1){
          this.timer = setInterval(() => {
            const end = Date.parse(new Date('2021-04-30'))-(8*60*60*1000)+10*60*60*1000+45*60*1000;
            // 当前时间戳
            const now = Date.parse(new Date())-1000
            const now1 = Date.parse(new Date())
            // 相差的毫秒数
            const msec = end - now
            const msec1 = end - now1
            let nowTimeStr = this.getStr(msec);
            let nextTimeStr = this.getStr(msec1);
            for (let i = 0; i < this.flipObjs.length; i++) {
              if (nowTimeStr[i] === nextTimeStr[i]) {
                continue
              }
              this.flipObjs[i].flipDown(
                      nowTimeStr[i],
                      nextTimeStr[i]
              )
            }
            if(nextTimeStr==='00000000'){
              clearInterval(this.timer)
            }
          }, 1000)
        }
      },
      // 正则格式化日期
      formatDate(date, dateFormat) {
        /* 单独格式化年份，根据y的字符数量输出年份
       * 例如：yyyy => 2019
              yy => 19
              y => 9
       */
        if (/(y+)/.test(dateFormat)) {
          dateFormat = dateFormat.replace(
                  RegExp.$1,
                  (date.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        }
        // 格式化月、日、时、分、秒
        let o = {
          'm+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'i+': date.getMinutes(),
          's+': date.getSeconds()
        }
        for (let k in o) {
          if (new RegExp(`(${k})`).test(dateFormat)) {
            // 取出对应的值
            let str = o[k] + ''
            /* 根据设置的格式，输出对应的字符
             * 例如: 早上8时，hh => 08，h => 8
             * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
             * 例如: 下午15时，hh => 15, h => 15
             */
            dateFormat = dateFormat.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? str : this.padLeftZero(str)
            )
          }
        }
        return dateFormat
      },
      // 日期时间补零
      padLeftZero(str) {
        return ('00' + str).substr(str.length)
      }
    },
    mounted() {
      //refs 属性可以看做id 来使用，定位到该dom
      this.flipObjs = [
        this.$refs.flipperDay1,
        this.$refs.flipperDay2,
        this.$refs.flipperHour1,
        this.$refs.flipperHour2,
        this.$refs.flipperMinute1,
        this.$refs.flipperMinute2,
        this.$refs.flipperSecond1,
        this.$refs.flipperSecond2
      ]
      this.init()
      this.run()
    }
  }
</script>

<style>
  .FlipClock {
    text-align: center;
  }
  .FlipClock .M-Flipper {
    margin: 0 3px;
  }
  .FlipClock em {
    display: inline-block;
    line-height: 102px;
    font-size: 66px;
    font-style: normal;
    vertical-align: top;
  }
</style>
