
<template>
  <div id="sunburst" style="height: 100%;width: 100%;position: relative;"></div>
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
      var myChart = echarts.init(document.getElementById('sunburst'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'sunburst'
        },
        series: {
          left: '10%',
          top: 60,
          bottom: 60,
          width: '80%',
          sort: 'descending',
          gap: 2,
          type: 'sunburst',
          data: [{ name: "总部", children: [{ name: "部门A", children: [{ name: "小组1", value: 10 }, { name: "小组2", value: 15 }] }, { name: "部门B", children: [{ name: "小组3", value: 12 }, { name: "小组4", value: 8 }] }] }],
          radius: [60, '90%'],
          itemStyle: {
            borderRadius: 7,
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'inside'
          }
        },
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
