
<template>
  <div id="tree" style="height: 100%;width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Class',
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
      var myChart = echarts.init(document.getElementById('tree'))
      // 绘制图表
      myChart.setOption({
        series: [
          {
            type: 'treemap',
            data: [
              {
                name: 'nodeA',
                value: 10,
                children: [
                  {
                    name: 'nodeAa',
                    value: 4
                  },
                  {
                    name: 'nodeAb',
                    value: 6
                  }
                ]
              },
              {
                name: 'nodeB',
                value: 20,
                children: [
                  {
                    name: 'nodeBa',
                    value: 20,
                    children: [
                      {
                        name: 'nodeBa1',
                        value: 20
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
      })
    }
  }
}

</script>
