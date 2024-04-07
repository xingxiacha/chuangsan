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

      <h2 id="1">1、基本信息介绍&nbsp;&nbsp;<el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>

      <div v-if="value1">
        <el-card shadow="always">
          <p v-html="this.artData.intro"></p>
        </el-card>
        <h3>图表属性</h3>
        <ul>
          <li>形状：{{ this.attrsData.shape }}</li>
          <el-divider></el-divider>
          <li>图类：{{ this.attrsData.category }}</li>
          <el-divider></el-divider>
          <li>功能：{{ this.attrsData.feature }}</li>
          <el-divider></el-divider>
        </ul>

      </div>
      <h2 id="2">2、图表分析&nbsp;&nbsp;<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value2">
        <h3>适合应用的场景</h3>
        <el-card shadow="always">
          <p v-html="this.artData.apply" class="restrict2"></p>
        </el-card>

        <h3>不适合应用的场景</h3>
        <el-card shadow="always">
          <p v-html="this.artData.unapply" class="restrict3"></p>
        </el-card>

      </div>
      <h2 id="3">3、绘制&nbsp;&nbsp;<el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value3">

        <h3>描述</h3>
        <el-card shadow="always">
          <p v-html="this.artData.paintingDescribe"></p>
        </el-card>

        <h3>数据结构</h3>
        <el-card shadow="always">
          <pre><p v-html="this.artData.dataStructure" ></p></pre>
        </el-card>
        <h3 v-show="this.artData.mermaidCode != ' '">Mermaid代码</h3>
        <el-card shadow="always" v-show="this.artData.mermaidCode != ' '">
          <pre><p v-html="this.artData.mermaidCode"></p></pre>
        </el-card>
        <h3 v-show="this.artData.mermaidImg != ' '">Mermaid效果图</h3>
        <el-card shadow="always" v-show="this.artData.mermaidImg != ' '">
          <img :src="this.artData.mermaidImg" class="restrict4" v-show="this.artData.mermaidImg != ' '">
        </el-card>
        <h3
          v-show="(this.artData.name != '组织结构图' && this.artData.name != '鱼骨图' && this.artData.name != '树型网络拓扑图' && this.artData.name != '星型网络拓扑图' && this.artData.name != '弧线图')">
          渲染数据</h3>
        <div style="height: 80vh;width: 100%;">

          <chart1 v-if="this.artData.name == '桑基图'"></chart1>

          <chart3 v-if="this.artData.name == '力导向图'"></chart3>
          <chart4 v-if="this.artData.name == '时间轴图'"></chart4>
          <chart5 v-if="this.artData.name == '漏斗图'"></chart5>
          <chart6 v-if="this.artData.name == '树图'"></chart6>
          <chart7 v-if="this.artData.name == '旭日图'"></chart7>
          <chart8 v-if="this.artData.name == '平行坐标图'"></chart8>
          <chart9 v-if="this.artData.name == '雷达图'"></chart9>
        </div>
      </div>

      <h2 id="4">4、专项工具&nbsp;&nbsp;<el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value4">
        <div v-if="this.artData.id == 89">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://app.rawgraphs.io/" type="primary">Rawgraphs</el-link>
            </li>``

            <li><el-link href="https://www.aculocity.com/labs/sunburst-chart" type="primary">在线生成工具（提供demo）</el-link>
            </li>

          </ul>

        </div>
        <div v-if="this.artData.id == 88">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://www.xdat.org/" type="primary">Alfred
                Inselberg开发的平行坐标专用工具，需要简单安装</el-link>
            </li>

            <li><el-link href="http://opendata.pku.edu.cn/dataset.xhtml?persistentId=doi:10.18170/DVN/PISQAQ"
                type="primary">北京大学多维数据可视化与可视分析工具集</el-link>
            </li>

          </ul>

        </div>
      </div>

      <h2 id="5">5、学习资源&nbsp;&nbsp;<el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value5">
        <div v-if="this.artData.id == 89">
          <ul>
            <li style="margin-bottom: 20px;"><el-link
                href="https://www.microsoft.com/en-us/microsoft-365/blog/2015/08/11/breaking-down-hierarchical-data-with-treemap-and-sunburst-charts/"
                type="primary">office官方对旭日图的讲解</el-link>
            </li>

            <li><el-link
                href="https://www.wired.com/2014/04/tree-diagrams-the-most-important-data-viz-tool-in-history/#slide-8"
                type="primary">树形结构图的历史渊源</el-link>
            </li>

          </ul>

        </div>
        <div v-if="this.artData.id == 88">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://eagereyes.org/techniques/parallel-coordinates"
                type="primary">【推荐】平行坐标系较完整的介绍（英文）；中文翻译版</el-link>
            </li>

            <li><el-link href="http://www.math.tau.ac.il/~aiisreal/" type="primary">平行坐标系发明者Alfred
                Inselberg的个人主页</el-link>
            </li>

          </ul>

        </div>
      </div>
      <div class="tab">
        <el-card class="el-card-d" shadow="always">
          <div class="infinite-list-wrapper" style="overflow:auto;">
            <el-timeline infinite-scroll-disabled="disabled">
              <div v-if="allmessages.length > 0">
                <el-timeline-item v-for="(item, index) in allmessages" :key="index" :timestamp='item.createTime'
                  placement="top">
                  <el-card class="el-card-m" style="height:120px">
                    <h4>{{ item.memberName }}：</h4>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.content }}</p>
                  </el-card>
                </el-timeline-item>
              </div>
              <div v-else>
                <el-timeline-item placement="top">
                  <el-card class="el-card-m" style="height:120px">
                    <h4>管理员：</h4>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 说点什么吧😁</p>
                  </el-card>
                </el-timeline-item>
              </div>
            </el-timeline>
          </div>
          <div class="el-card-messages">
            <el-input type="textarea" :rows="5" placeholder="输入留言" maxlength="200" v-model="message"></el-input>
            <el-button type="info" round class="submit-message" @click="submitMessage">留言</el-button>
          </div>
        </el-card>

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

<style scoped>
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
