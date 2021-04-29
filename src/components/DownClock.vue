<template>
  <div class="FlipClock">
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
        flipObjs: [],
        day: 0, hr: 0, min: 0, sec: 0
      }
    },
    components: {
      Flipper
    },
    methods: {
      countdown:function (datestr) {
        // 目标日期时间戳
        const end = Date.parse(new Date(datestr))
        // 当前时间戳
        const now = Date.parse(new Date())
        // 相差的毫秒数
        const msec = end - now
        // 计算时分秒数
        let day = parseInt(msec / 1000 / 60 / 60 / 24)
        let hr = parseInt(msec / 1000 / 60 / 60 % 24)
        let min = parseInt(msec / 1000 / 60 % 60)
        let sec = parseInt(msec / 1000 % 60)
        // 个位数前补零
        hr = hr > 9 ? hr : '0' + hr
        min = min > 9 ? min : '0' + min
        sec = sec > 9 ? sec : '0' + sec
        // 控制台打印
        console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
        // 一秒后递归
          setTimeout(function () {
            this.countdown()
          }, 1000)
      },
      addDate:function(day) {
        //加N天
         var dateTime=new Date();
         dateTime=dateTime.setDate(dateTime.getDate()+day);
         return new Date(dateTime);
      },
      // 初始化数字
      init() {
        let now = new Date()
        let dateTime = this.addDate(3)//一般交易日往前一天，如果是星期天加两个天或者节假日
        let datestr = this.formatDate(dateTime, 'yyyy-mm-dd hh:ii:ss');
        console.log(datestr)
        let nowTimeStr = this.formatDate(new Date(now.getTime()), 'hhiiss')
        let nowTimeStr1 = this.formatDate(new Date(now.getTime()), 'hiiss')
        if(nowTimeStr<150000&&nowTimeStr1>93000){//在9点30以后和15点以前都不能投，也就是不能出现倒计时
          //此时为公布时间段
        }else{//此时为倒计时间段
        }
        for (let i = 0; i < this.flipObjs.length; i++) {
          this.flipObjs[i].setFront(nowTimeStr[i])
        }
      },
      // 开始计时
      run() {
        this.timer = setInterval(() => {
          // 获取当前时间
          let now = new Date()
          console.log(now.getTime())
          let nowTimeStr = this.formatDate(new Date(now.getTime() - 1000), 'hhiiss')//返回当前時分秒字符串
          let nextTimeStr = this.formatDate(now, 'hhiiss')
          for (let i = 0; i < this.flipObjs.length; i++) {
            if (nowTimeStr[i] === nextTimeStr[i]) {
              continue
            }
            this.flipObjs[i].flipDown(
                    nowTimeStr[i],
                    nextTimeStr[i]
            )
          }
        }, 1000)
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
