
<template>
  <div id="main3" style="height: 100%;width: 100%;position: relative;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'radar',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main3'))
      // 绘制图表
      myChart.setOption({

        title: {
          text: '雷达图',
          left: 'center'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: ['类别']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '类别A', max: 10 },
            { name: '类别B', max: 10 },
            { name: '类别C', max: 10 },
            { name: '类别D', max: 10 },
            { name: '类别E', max: 10 },
          ],
          AxisName: { // (圆外的标签)雷达图每个指示器名称的配置项。
            fontSize: 13,
            color: 'black'
          },
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            label: {  //显示value中具体的数值

              show: true,
              extStyle: {  //更改数值样式
                color: 'blue'
              }

            },
            data: [
              {
                value: [5, 8, 6, 7, 9],
                name: '类别',
                areaStyle: { color: "#a9d4f6" }, //阴影背景颜色
                lineStyle: {
                  color: "#4890ff",
                  // 阴影折线宽度
                  width: 1
                },

              }
            ]
          }
        ]
      })
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}

</script>



