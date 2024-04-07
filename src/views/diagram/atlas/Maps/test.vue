<template>
  <div style="overflow-x:hidden; display: flex; width: 100%;">
    <meta name="referrer" content="no-referrer" />
    <el-backtop :bottom="100">

    </el-backtop>
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
        <a href="#4">
          <el-menu-item>
            <span slot="title">4.使用场景</span>
          </el-menu-item>
        </a>
        <a href="#5">
          <el-menu-item>
            <span slot="title">5.制作教程</span>
          </el-menu-item>
        </a>
        <a href="#6">
          <el-menu-item>
            <span slot="title">6.专项工具</span>
          </el-menu-item>
        </a>
        <a href="#7">
          <el-menu-item>
            <span slot="title">7.学习资源</span>
          </el-menu-item>
        </a>
      </el-menu>
    </div>

    <div style="width:80%">
      <h1>
        <p v-html="this.artData.name" style="display: inline;margin-right: 40vw;"></p>
        <span style="font-size: 20px;margin-right: 5vw;">请为当前页面评分</span>
        <el-rate v-model="rate" show-text style="display: inline;">
        </el-rate>
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

      <h2 id="4">4、使用场景&nbsp;&nbsp;<el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value4">
        <div v-if="this.artData.id == 89">
          <p>（1）硬盘分区展示。下图为硬盘分区软件<a href="https://daisydiskapp.com/" target="_blank"
              style="color: rgb(0, 102, 204);">DaisyDisk</a>的首页概念图。</p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1548519574079-2ecc3eed-a2f0-448f-b859-a1598f8d504b.png"
              width="565" style=""></p>
          <p>（2）旭日图可以用于呈现事物是如何构成的。例如，下图（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Davies, no
              date</span>）将“咖啡家族”进行了梳理，形成一张“咖啡口味之轮”。第一层分为了口味（taste）和香味（aromas），而口味又进而分为了酸（sour）、甜（sweet）、咸（salt）、苦（bitter）。咸味下一层又分为了温和（bland）和强烈（sharp）等等。同时，它的交互功能使用户可以一层层的进入结构中探索。<a
              href="https://www.jasondavies.com/coffee-wheel/" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><a href="https://www.jasondavies.com/coffee-wheel/" target="_blank" style="color: rgb(9, 109, 217);"><img
                src="http://139.224.62.3:3001/upload/images/network/1545568958428-7b5b8d9d-53b3-4c43-bf98-f3393a1d44c4.png"
                width="356" style=""></a></p>
          <p>（3）层级关系的另一个典型运用，在于描绘公司的结构。下图（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Gabor, no
              date</span>）很清晰的梳理了一个集团下，子母公司的附属关系，以及子公司之间的并列关系。<a
              href="http://www.typogabor.com/Media/Graphis_Diagrams_SignGr/Graphis_Diagrams_DSC_6822.jpg"
              target="_blank" style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1544952992428-aa811a51-3746-423c-aa24-dd688f1a05a4.png"
              width="362" style=""></p>
          <p>（4）此外，旭日图还可用于分析“历时”的变化，例如用户的行为。例如，下图（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Mode analytics, no
              date</span>）展示的项目，尝试从用户登陆（login）开始，追踪其行为。例如，点亮的这一系列数据显示，有3.02%的人，进行了“登陆-首页-点赞-首页-查看信息”这一串连续的行为。交互的使用，也让数据结构更加一目了然。<a
              href="https://modeanalytics.com/modeanalytics/reports/43dfbec3efe1" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1544946880587-033bfb36-712f-43c9-934e-4658b2bc2a76.png"
              width="480" style=""></p>
          <p>（5）社交网络上的舆论演变，也可以用旭日图分析。下图（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Machine Learning Visualization Lab,
              no date</span>）展示了马航事件之后，国外社交媒体上的讨论，是如何一步步演化、分层的。<a href="https://mlvl.github.io/Hierarchie/"
              target="_blank" style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1545569064767-6d8ef613-efaf-443c-b379-dba796d5f039.png"
              width="478" style="">
          </p>
        </div>
      </div>

      <h2 id="5">5、制作教程&nbsp;&nbsp;<el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value5">
        <div v-if="this.artData.id == 89">
          <tbody>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="7" class="sc-198wj70-1 WJiEN">BI工具</td>
              <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Excel</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://support.office.com/zh-cn/article/%E5%9C%A8-office-%E4%B8%AD%E5%88%9B%E5%BB%BA%E6%97%AD%E6%97%A5%E5%9B%BE-4a127977-62cd-4c11-b8c7-65b84a358e0c?omkt=zh-CN&amp;ui=zh-CN&amp;rs=zh-CN&amp;ad=CN"
                  style="text-decoration: underline;" target="view_window">官方基础操作说明 </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://www.youtube.com/watch?v=7GCkNwsokRQ" style="text-decoration: underline;"
                  target="view_window">视频讲解相关操作及设置（youtube） </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Power BI</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104380767?tab=Overview"
                  style="text-decoration: underline;" target="view_window">下载旭日图插件 </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://github.com/Microsoft/powerbi-visuals-sunburst" style="text-decoration: underline;"
                  target="view_window">安装后使用方法 </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Tableau</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://www.youtube.com/watch?v=GEf-k5iPAW8" style="text-decoration: underline;"
                  target="view_window">视频讲解（youtube，共2部分） </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://learningtableaublog.wordpress.com/2016/07/15/radial-charts/"
                  style="text-decoration: underline;" target="view_window">关于用Tableau做旭日图的文章总结 </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://developer.qlik.com/globalsearch?search=sunburst" style="text-decoration: underline;"
                  target="view_window">Qilk Branch的案例 </a></td>
            </tr>
            <tr>
              <td width="25%" rowspan="10" class="sc-198wj70-1 WJiEN">代码库</td>
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="http://echarts.baidu.com/examples/#chart-type-sunburst" style="text-decoration: underline;"
                  target="view_window">官方实例 </a></td>
            </tr>
            <tr>
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AntV</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/polar-treemap.html"
                  style="text-decoration: underline;" target="view_window">官方实例 </a></td>
            </tr>
            <tr>
              <td width="25%" rowspan="5" class="sc-198wj70-1 WJiEN">D3</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://beta.observablehq.com/@mbostock/d3-sunburst" style="text-decoration: underline;"
                  target="view_window">基础图形的实现 </a></td>
            </tr>
            <tr>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://beta.observablehq.com/@mbostock/d3-zoomable-sunburst"
                  style="text-decoration: underline;" target="view_window">加入zoom的交互功能 </a></td>
            </tr>
            <tr>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="http://bl.ocks.org/vgrocha/1580af34e56ee6224d33" style="text-decoration: underline;"
                  target="view_window">加入zoom和tooltip的交互 </a></td>
            </tr>
            <tr>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://bl.ocks.org/kerryrodden/7090426" style="text-decoration: underline;"
                  target="view_window">可以显示数据层级（sequence）关系的交互 </a></td>
            </tr>
            <tr>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="http://bl.ocks.org/wizicer/f662a0b04425fc0f7489" style="text-decoration: underline;"
                  target="view_window">可以显示数据层级，并与折线图联动的交互 </a></td>
            </tr>
            <tr>
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">matplotlib</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://stackoverflow.com/questions/12926779/how-to-make-a-sunburst-plot-in-r-or-python"
                  style="text-decoration: underline;" target="view_window">matplotlib代码参考 </a></td>
            </tr>
            <tr>
              <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">ggplot2</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="http://genome.crg.es/~didac/ggsunburst/ggsunburst.html" style="text-decoration: underline;"
                  target="view_window">使用ggsunburst包 </a></td>
            </tr>
            <tr>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                  href="https://github.com/timelyportfolio/sunburstR" style="text-decoration: underline;"
                  target="view_window">sunburstR </a></td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">设计工具</td>
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AI</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
            </tr>
            <tr style="background: rgb(246, 246, 246);">
              <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
              <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
            </tr>
          </tbody>

        </div>
      </div>

      <h2 id="6">6、专项工具&nbsp;&nbsp;<el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value6">
        <div v-if="this.artData.id == 89">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://app.rawgraphs.io/" type="primary">Rawgraphs</el-link>
            </li>

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

      <h2 id="7">7、学习资源&nbsp;&nbsp;<el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value7">
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
      <h2>反馈意见</h2>
      <div class="tab">
        <el-card class="el-card-d" shadow="always">
          <div class="infinite-list-wrapper" style="overflow:auto;
          scrollbar-width: none; -ms-overflow-style: none;">
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
            <el-input type="textarea" style="margin-bottom:20px;" :rows="5" placeholder="输入反馈意见" maxlength="200"
              v-model="form.message"></el-input>
            <div style="margin-bottom:20px;">
              <el-radio-group v-model="form.radio">
                <el-radio-button label="错误反馈"></el-radio-button>
                <el-radio-button label="其它想法"></el-radio-button>
                <el-radio-button label="疑问困惑"></el-radio-button>
                <el-radio-button label="商务合作"></el-radio-button>
              </el-radio-group>
            </div>
            <el-upload class="upload-demo" style="margin-bottom:20px;" drag
              action="https://jsonplaceholder.typicode.com/posts/" multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip">(只能上传jpg/png文件，且不超过500kb)</div>
            </el-upload>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="昵称">
                <el-input v-model="form.memberName"></el-input>
              </el-form-item>

              <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="info" round class="submit-message" @click="submitMessage">提交</el-button>
          </div>
        </el-card>

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
      rate: null,
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true,
      value7: true,
      id: '',
      form: {
        memberName: '',
        message: '',
        radio: '错误反馈',
        email: '',
      },
      allmessages: [
        {
          memberName: '游客',
          content: '这个平行坐标图真是太棒了！它清晰地展示了数据之间的相关性，让我一眼就能看出不同维度之间的关系。',
          createTime: '2024-03-16 10:00:00'
        },
        {
          memberName: '游客',
          content: '我发现在这个平行坐标图中，某些维度的数据波动较大，而另一些则相对稳定。这可能反映了数据集中的某种模式或趋势，值得进一步研究和分析。',
          createTime: '2024-03-16 10:15:00'
        },
        {
          memberName: '游客',
          content: '我觉得平行坐标图的可读性还有提升空间。虽然图表展示了各个维度之间的关系，但是在数据密集的情况下，线条交叉会让图表显得有些混乱。建议考虑增加交互功能，例如鼠标悬停时显示特定维度的数值，或者允许用户选择性地隐藏一些维度。',
          createTime: '2024-03-16 10:30:00'
        }
        // 可以继续添加更多的消息数据
      ],
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
    submitMessage() {
      if (this.form.message == '' || this.form.message.replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message('写点啥提交也行呀😉');
        return;
      }
      else {
        const newMessage = {
          memberName: this.form.memberName,
          content: this.message,
          createTime: new Date().toLocaleString() // 使用当前时间作为消息的创建时间
        };
        // 将新消息对象追加到数组中
        //this.allmessages.push(newMessage);
        this.form.email = "";
        this.form.memberName = "";
        this.form.message = "";
        this.form.radio = "错误反馈";
        this.$message({
          message: '提交成功！',
          type: 'success'
        });
      }
      //  这里往下写调用后端的代码；
    },
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
        //console.log(this.attrsData);

      })
    }
  }
}

</script>

<style scoped lang="scss">
.el-card-messages {
  width: 90%;
  padding-left: 6%;
}

.tab {
  margin-top: 20px;
  width: 100%;
  padding: 0 0 0 0;

  .infinite-list-wrapper {
    width: 100%;
    height: 500px;
  }

  .submit-message {
    width: 100%;
    background: rgb(235, 245, 247);
    color: cadetblue;
    letter-spacing: 20px;
  }

  @media screen and (max-width: 3000px) and (min-width: 767px) {
    .el-card-d {
      float: left;
      margin-top: 20px;
      margin-bottom: 40px;
      width: 100%;
      height: 90%;
    }

  }

  /*
  屏幕小于768px的
  */
  @media screen and (max-width:768px) and (min-width: 100px) {
    .el-card-d {

      width: 100%;
      height: 100%;
    }
  }
}

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

img {
  max-width: 600px;
  max-height: 400px;
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
