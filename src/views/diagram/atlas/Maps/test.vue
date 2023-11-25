
<template>
  <div style="overflow-x:hidden; display: flex; width: 100%;">
    <meta name="referrer" content="no-referrer" />

    <div style="width:20%">
      <el-menu default-active="2" class="el-menu-vertical-demo" style="position: fixed;width: 15vw;">
        <a href="#1">
          <el-menu-item>
            <span slot="title">1.基本信息介绍</span>
          </el-menu-item>
        </a>
        <a href="#2">
          <el-menu-item>
            <span slot="title">2.图表分析</span>
          </el-menu-item>
        </a>
        <a href="#3">
          <el-menu-item>
            <span slot="title">3.图表绘制</span>
          </el-menu-item>
        </a>
      </el-menu>
    </div>

    <div style="width:80%">
      <h1>
        <p v-html="this.artData.name"></p>
      </h1>
      <div>
        <p v-html="this.artData.element" class="restrict1"></p>
      </div>
      <h2 id="1">1、基本信息介绍</h2>
      <p v-html="this.artData.intro"></p>
      <h3>图表属性</h3>
      <ul>
        <li>形状：{{ this.attrsData.shape }}</li>
        <li>图类：{{ this.attrsData.category }}</li>
        <li>功能：{{ this.attrsData.feature }}</li>
      </ul>
      <h2 id="2">2、图表分析</h2>
      <h3>适合应用的场景</h3>
      <p v-html="this.artData.apply" class="restrict2"></p>
      <h3>不适合应用的场景</h3>
      <p v-html="this.artData.unapply" class="restrict3"></p>
      <h2 id="3">3、绘制</h2>
      <h3>描述</h3>
      <p v-html="this.artData.paintingDescribe"></p>
      <h3>数据结构</h3>
      <pre><p v-html="this.artData.dataStructure"></p></pre>
      <h3>Mermaid代码</h3>
      <pre><p v-html="this.artData.mermaidCode"></p></pre>
      <h3>Mermaid效果图</h3>
      <img :src="this.artData.mermaidImg" class="restrict4">
      <h3>渲染数据</h3>
      <div style="height: 80vh;width: 100%;">

        <chart1 v-if="this.id == 10"></chart1>

        <chart3 v-if="this.id == 3"></chart3>
        <chart4 v-if="this.id == 2"></chart4>
        <chart5 v-if="this.id == 102"></chart5>
        <chart6 v-if="this.id == 6"></chart6>
        <chart7 v-if="this.id == 108"></chart7>
        <chart8 v-if="this.id == 107"></chart8>
        <chart9 v-if="this.id == 104"></chart9>
      </div>
    </div>

  </div>
</template>

<script>
import { log } from 'console'
import { getArticleApi, getAttrsApi } from '../../api'

import chart1 from './sankeyDiagram.vue'

import chart3 from './Force.vue'
import chart4 from './flowDiagram.vue'
import chart5 from './funnelDiagram.vue'
import chart6 from './treeMap.vue'
import chart7 from './sunburst.vue'
import chart8 from './parallelDiagram.vue'
import chart9 from './radarDiagram.vue'
export default {
  name: 'test',
  data() {
    return {
      id: '',
      artData:
      {
        id: '',
        name: '',
        img: '',
        intro: '',
        element: '',
        apply: '',
        unapply: '',
        createTime: '',
        updateTime: '',
        a: '',
        paintingDescribe: '',
        dataStructure: '',
        mermaidCode: '',
        mermaidImg: ''
      },
      attrsData: {

      }

    }
  },
  mounted() {
    this.id = this.$route.query.index;
    this.getArticleApi(this.id);
    this.getAttrsApi(this.id);

  },
  components: {
    chart1,

    chart3,
    chart4,
    chart5,
    chart6,
    chart7,
    chart8,
    chart9,

  },
  methods: {
    getArticleApi(data) {
      getArticleApi(data).then(res => {

        this.artData = res.data[0];
        console.log(this.artData);
        // dishData.arr = res.data.data.content;
        // dishNum.value = res.data.data.totalElements;
      })
    },
    getAttrsApi(data) {
      getAttrsApi(data).then(res => {

        this.attrsData = res.data;
        console.log(this.attrsData);

      })
    }
  }
}

</script>

<style  scoped>
/* .doc-inner p {
  font-size: 30px;
  line-height: 1.8;
  color: #666;
  max-width: 920px;
  margin: 16px 0;
}

.doc-inner img {
  max-width: 920px;
  width: auto;
}

.doc-inner h1 {
  font-size: 32px;
  margin-bottom: 25px;
  font-weight: normal;
} */
.title1 {
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding-bottom: 6px;
  font-size: 2.6em;
}

.text {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  line-height: 30px;
  word-wrap: break-word;
  max-width: 75%;
}

.img1 {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  float: right;
  width: 320px;
  clear: both;
  margin: 0px 0px 40px 40px;
  box-shadow: rgba(211, 211, 211, 0.5) 0px 0px 4px 2px;
  max-width: 100%;

}

.property {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  margin-top: 100px;
}

h2 {
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding-bottom: 6px;
}

.ul1 {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  padding: 0px;
}

.detail {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  margin-top: 60px;
}

.detail1 {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  padding-bottom: 20px;
}

.img2 {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 30px;
  word-wrap: break-word;
  width: 581px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  max-width: 100%;
  cursor: nesw-resize;
}

.img3 {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 30px;
  word-wrap: break-word;
  width: 486px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  max-width: 100%;
  cursor: nesw-resize;
  margin-top: 20px;
}

.caseIndex {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  display: flex;
}

.leftcase {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 436px;
  margin-left: 6.25%;
}

.item {
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: rgba(211, 211, 211, 0.5) 0px 0px 4px 2px;
}

.caseimg {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  max-width: 100%;
  width: 100%;
}

.rightcase {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 436px;
  margin-left: 3%;
  margin-right: 6.25%;
}

.view-origin {
  border: 1px solid rgb(208, 208, 208);
  float: right;
  font-size: 14px;
  border-radius: 2px;
  text-align: center;
  padding: 8px 12px;
  cursor: pointer;
  color: rgb(74, 74, 74);
  text-decoration: none;
}

.case-text {
  padding: 10px 20px;
  color: rgb(74, 74, 74);
  font-size: 14px;
  text-align: justify;
  line-height: 30px;
}

table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;
}

.restrict1>>>img {
  width: 100%;
  height: 100%;
}

.restrict2>>>img {
  width: 100%;
  height: 100%;
}

.restrict3>>>img {
  width: 100%;
  height: 100%;
}

.restrict4>>>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

