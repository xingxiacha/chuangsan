
<template>
  <div id="parallel" style="height: 100%;width: 100%;position: relative;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Class',
  data() {
    return {
      dataA: [[12.99, 100, 82, 'Good']],
      dataB: [[9.99, 80, 77, 'OK']],
      dataC: [[20, 120, 60, 'Excellent']]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('parallel'))
      // 绘制图表
      myChart.setOption(
        {
          legend: {
            bottom: 30,
            data: ['数据点1', '数据点2', '数据点3'],
            itemGap: 20, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
              color: 'black',
              fontSize: 14
            }
          },
          parallelAxis: [
            { dim: 0, name: '维度1', max: 30 },
            { dim: 1, name: '维度2', max: 140 },
            { dim: 2, name: '维度3', max: 90 },
            {
              dim: 3,
              name: '维度4',
              type: 'category',
              data: ['Excellent', 'Good', 'OK', 'Bad']
            }
          ],
          toolbox: {
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '数据点1',
              type: 'parallel',

              data: this.dataA
            },
            {
              name: '数据点2',
              type: 'parallel',

              data: this.dataB
            },
            {
              name: '数据点3',
              type: 'parallel',

              data: this.dataC
            }
          ]
        })
    }
  }
}

</script>
