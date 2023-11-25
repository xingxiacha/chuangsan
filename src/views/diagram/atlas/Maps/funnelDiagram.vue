
<template>
  <div id="funnel" style="height: 100%;width: 100%;position: relative;"></div>
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
      var myChart = echarts.init(document.getElementById('funnel'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Funnel'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ['访问网站', '注册账户', '浏览产品', '添加购物车', '完成购买']
        },
        series: [
          {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 10000,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 10000, name: '访问网站' },
              { value: 8000, name: '注册账户' },
              { value: 6000, name: '浏览产品' },
              { value: 4000, name: '添加购物车' },
              { value: 2000, name: '完成购买' }
            ]
          }
        ]
      })
    }
  }
}

</script>
