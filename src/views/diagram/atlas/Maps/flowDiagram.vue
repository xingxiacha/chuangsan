
<template>
  <div id="main4" style="height: 100%;width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'flow',
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
      var myChart = echarts.init(document.getElementById('main4'))
      // 绘制图表
      myChart.setOption({
        title: {
          // text: "流程",
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: { show: true, readOnly: false },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            type: "graph", //关系图
            layout: "none", // 图的布局 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。
            // 'circular' 采用环形布局;'force' 采用力引导布局.
            symbolSize: 100,
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            color: "#6A5ACD",
            label: {  // 关系对象上的标签
              show: true, // 是否显示标签
              fontSize: 16,  // 文本样式
              color: "#FFF",
              //backgroundColor:'white'
            },
            symbol: "roundRect", //形状
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10], // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [4, 10] 表示标记宽为4，高为10。
            edgeLabel: { // 连接两个关系对象的线上的标签
              fontSize: 25,
            },
            // 图
            data: [
              {
                name: "A",
                x: 100,
                y: 100,
              },
              {
                name: "B",
                x: 450,
                y: 100,
                tooltip: { //鼠标悬停在节点上时显示的内容
                  show: true,
                  position: "right", //标签位置
                  textStyle: {
                    width: 20,
                  },
                  formatter: function (params) {  //formatter这个参数是用来设置鼠标悬停时显示的内容的。
                    return params.dataType == "node"
                      ? "鼠标悬停的显示的内容"
                      : "";
                  },
                },
              },
              {
                name: "C",
                x: 800,
                y: 100,
              },
              {
                name: "D",
                x: 450,
                y: 450,
              },
              {
                name: "E",
                x: 100,
                y: 800,
              },
              {
                name: "F",
                x: 450,
                y: 800,
              },
              {
                name: "G",
                x: 800,
                y: 800,
              },
            ],
            // 线
            links: [
              {
                source: "A",
                target: "B",
                lineStyle: {
                  color: "#473C8B",
                  width: 3,
                },
              },
              {
                source: "B",
                target: "C",
                lineStyle: {
                  color: "#473C8B",
                  width: 3,
                },
                label: { //线上面显示内容
                  show: true,
                  position: "middle",
                  formatter: "有疑问",
                  fontSize: 15,
                },
              },
              {
                source: "C",
                target: "D",
                lineStyle: {
                  color: "#473C8B",
                  width: 3,
                },
                label: {
                  show: true,
                  position: "middle",
                  formatter: "完成",
                  fontSize: 15,
                },
              },
              {
                source: "D",
                target: "E",
                lineStyle: {
                  color: "#473C8B",
                  width: 3,
                },
              },
              {
                source: "E",
                target: "F",
                lineStyle: {
                  color: "#473C8B",
                  width: 3,
                },
              },
              {
                source: "F",
                target: "G",
                lineStyle: {
                  color: "#473C8B",
                  width: 3,
                },
              },

            ],
          },
        ],
      })
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}

</script>



