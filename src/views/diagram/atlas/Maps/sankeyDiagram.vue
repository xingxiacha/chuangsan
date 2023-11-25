
<template>
  <div id="main" style="height: 100%;width: 100%;"></div>
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
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        series: {
          type: 'sankey',
          layout: 'none',
          emphasis: {
            focus: 'adjacency'
          },
          data: [
            {
              name: 'a'
            },
            {
              name: 'b'
            },
            {
              name: 'a1'
            },
            {
              name: 'a2'
            },
            {
              name: 'b1'
            },
            {
              name: 'c'
            }
          ],
          links: [
            {
              source: 'a',
              target: 'a1',
              value: 5
            },
            {
              source: 'a',
              target: 'a2',
              value: 3
            },
            {
              source: 'b',
              target: 'b1',
              value: 8
            },
            {
              source: 'a',
              target: 'b1',
              value: 3
            },
            {
              source: 'b1',
              target: 'a1',
              value: 1
            },
            {
              source: 'b1',
              target: 'c',
              value: 2
            }
          ]
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
      })
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}

</script>



