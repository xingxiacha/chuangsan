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
          <li>图类：{{ this.attrsData.category }}</li>
          <el-divider></el-divider>
          <li>功能：{{ this.attrsData.functions }}</li>
          <el-divider></el-divider>
          <!-- <li>数据维度：{{ this.attrsData.dimension }}</li>
          <el-divider></el-divider> -->
          <li>数据关系：{{ this.attrsData.relation }}</li>
          <el-divider></el-divider>
          <li>数据表示形式：{{ this.attrsData.format }}</li>
          <el-divider></el-divider>
          <li>复杂度：{{ this.attrsData.complexity }}</li>
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

      <h2 id="4">4、使用场景&nbsp;&nbsp;<el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value4">
        <div v-if="this.artData.name == '平行坐标图'">
          <p>（1）在平行坐标系的众多简介中，几乎都会涉及到这个汽车的案例——数据包括上世纪70、80年代的32款汽车，以及这些汽车的气缸数(cylinders)、引擎大小（displacement）、
            每加仑汽油行驶的里程(MPG)、功率（horsepower）、重量（weight）等等。从图中
            （<span style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Evans, no date</span>），
            我们可以清晰的看出一些关系，例如从里程与气缸数呈负相关、气缸数与功率呈正相关。再比如，随着时间发展，汽车越来越轻了。
            通过“Brushing”功能，还有更多新奇发现。
            <a href="http://www.columbia.edu/~cme2126/datavisuals/bigdata_parallelcoordinates.html" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a>
          </p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1544358921675-77b8d24f-8a0c-452d-90c8-ec04a8d6b2c1.png"
              width="733" style=""></p>
          <p>（2）该图（<span style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Fathom Information
              Design, no date</span>）总结了1955-2010年
            来的世界五百强公司排名、收入和利润情况。每一根竖轴代表一年的排名，通过将每家公司历年的排名描点、连线，就形成了一条折线。鼠标滑动时，相应的公司会高亮显示，方便读者探索它的兴衰变化。例如下
            图中，我们看到可口可乐公司的排名，尽管有所波动，但始终位于高位，并且稳中有升，在1994年达到巅峰，之后有所回落。<a href="https://fathom.info/fortune500/"
              target="_blank" style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1544099627149-d8e56fc0-6a06-4e23-84a3-9f288d487982.png"
              width="733" style=""></p>
        </div>
        <div v-if="this.artData.name == '旭日图'">
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
        <div v-if="this.artData.name == '树图'">
          <p>（1）Treemap最早是在1990年由Ben
            Shneiderman提出来的。在当时有个普遍的问题就是硬盘常常被装满。并且硬盘被好几个用户一起使用时，你很难找到哪些空间被使用，以及他们是用来做什么的。同时也很难找到倒是哪些用户消费了最大面积的硬盘。为了解决这个问题，同时避免传统分叉树图浪费空间的问题，Ben
            Shneiderman设计矩形数图（<span style="background-color: rgb(255, 255, 255);">Shneiderman and Plaisant,
              2014</span>）。如下图，你可以很快获取在硬盘的什么位置储存了什么内容，且这些内容是什么类型（文字，图片等）。而从宏观的角度来看，也可以对类型的分布和占比有个大体的印象。<a
              href="http://www.cs.umd.edu/hcil/treemap-history/" target="_blank"
              style="color: rgb(0, 102, 204);">[点击阅读更多]</a></p>
          <p><span style="background-color: rgb(255, 255, 255);"><img
                src="https://cdn.nlark.com/yuque/0/2018/gif/204421/1545495737329-783241d9-9834-4cd5-8dc3-640b5220c03a.gif"
                width="501" style="cursor: nwse-resize;"></span></p>
          <p>（2）好奇心日报的一遍报道（<span style="background-color: rgb(255, 255, 255);">唐云路,
              2019</span>）中整理了中国企业过去一年抛售的海外物业的估价占比。图中用矩形树图清楚的展示了各个被抛售的海外物业的估价以及他们的估价在总估价中占得多还是少。<a
              href="http://www.qdaily.com/articles/60647.html" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://www.tuzhidian.com:3001/upload/images/2019/屏幕快照 2019-02-19 上午12.07.57_2ae064e799305ac5ccd50e455c34a46d.png"
              width="537" style=""></p>
          <p><span style="background-color: rgb(255, 255, 255);"><img
                src="http://139.224.62.3:3001/upload/images/network/1548488222646-ecc3a605-af07-4887-9dd4-76e93ae9b7e0.png"
                width="378"></span></p>
        </div>
        <div v-if="this.artData.name == '力导向图'">
          <p>（1）网站链接网络关系图。这幅图（<span style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">DensityDesign
              Lab,
              2013</span>）表示的是能够让痴呆患者生活得更好的一些帮助性网站以及之间的关系。每个节点表示一个相关网站，两个节点间的连线表示这两个网站之间存在超链接。参与链接越多的点大小越大，由于力导向布局的原因，也就越可能靠近中心位置。<a
              href="https://www.flickr.com/photos/densitydesign/9183030077/in/album-72157634337815839/" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1545570713877-6fe362f3-55ad-48dc-8bb7-d44aa8fb070f.jpeg"
              width="579" style=""></p>
          <p>（2）社交网络分析。国际知识产权合作委员会（SDN）基金的网络图（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Grandjean,
              2015</span>）。超过800人连接近6000个边（代表10000多个关系，边按比例增加比例同时出现的人作为同一文件的演员）。节点的大小是人的中心程度（他们维持的连接数）的函数，而颜色表明他们的中间性（社交重要性）。<a
              href="https://en.wikipedia.org/wiki/File:SocialNetworkAnalysis.png" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1545570806951-e14c171b-8160-4c29-8895-4c9b420d27df.png?x-oss-process=image/resize,w_1494"
              width="579" style=""></p>
        </div>
        <div v-if="this.artData.name == '桑基图'">
          <p>（1）追踪用户状态。下图（<span style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">王小美吖,
              2017</span>）对某平台一周内的用户转化情况进行了描画，包括有多少用户加入购物车，又在这之后进行了付款，多少注册用户转换为了活跃用户等等。例如，2017年1月1日“加入购物车”的用户中，有较大一部分在次日下单，较小一部分在次日付款。<a
              href="https://me.bdp.cn/share/index.html?shareId=sdo_667cd39c7baa7ee3e8e6ca97109ec6b0" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><span style="background-color: rgb(255, 255, 255);"><img
                src="http://139.224.62.3:3001/upload/images/network/1543652290450-5212ca77-1309-42d7-9dc4-04e9754686e1.png"
                width="626" style=""></span></p>
          <p>（2）追踪跑票、变动、迁移等。《经济学人》（<span style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">The
              Economist,
              2016</span>）分析了历年美国报纸对于总统候选人的提及率，制作了如下桑基图。最左为1988年，最右为2016年，每一个节点吧代表当年的一位总统候选人。节点的宽度由其在报纸上的提及率决定，蓝色表示民主党候选人、红色表示共和党候选人。从中我们可以发现许多有趣的现象，首先是舆论在党派之间的切换。例如1988年，报纸对共和党候选人老布什的提及率远超过对手，但到1992年，其中相当一部分流量流向了民主党候选人克林顿，这种流量的变化展现了党派在舆论场上的交锋。其次，舆论与最终的胜选也显示出相关性。在桑基图上方，作者用小圆点标出了当年最终胜出的党派，例如1988年共和党胜利、1992年民主党胜利，这与桑基图呈现的流量信息是可以对应的。按此规律，我们看到，截止作者发稿时，2016年似乎是希拉里必胜的一年。但事实证明，数据也是可能被逆转的。<a
              href="https://www.economist.com/graphic-detail/2016/11/03/american-newspapers-resoundingly-reject-donald-trump"
              target="_blank" style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p>
            <span style="background-color: rgb(255, 255, 255);"><img
                src="http://139.224.62.3:3001/upload/images/network/1543671973722-377ca211-f9b7-4ff4-afce-06e37be84cfe.png"
                width="635" style="">
            </span>
          </p>
        </div>
        <div v-if="this.artData.name == '漏斗图'">
          <p>（1）电商、物流等流程管理。例如，追踪用户从访问、注册，到下单、成功购买的转化率（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">小草莓, 2016</span>）。<a
              href="https://www.zhihu.com/question/19856899" target="_blank"
              style="color: rgb(0, 102, 204);">[点击阅读更多]</a>
          </p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1547962015200-f05dd533-90b2-4b8d-a3c5-234691f500cc.png"
              width="492" style="cursor: nwse-resize;"></p>
          <p>（2）互联网产品的AARRR模型（<span style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">圣侨资讯,
              2016</span>），包含了获客、日活、留存、转化、变现等一系列追踪指标。<a href="#learning-resource-graph-detail" target="_blank"
              style="color: rgb(0, 102, 204);">[点击阅读更多]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1547963542335-13be9484-dca6-4b09-a18e-3b682c21d99e.png"
              width="387" style=""></p>
          <p>（3）漏斗图也可用于分析社会现象。如美国的“篮球漏斗”（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">Sleeper,
              2014</span>）。最上方是在高中打篮球的男孩，最后是进入nba打职业篮球的男孩。<a
              href="http://www.osmguy.com/2014/01/odds-going-pro-sports-visualization/" target="_blank"
              style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1545474190595-febdc4b6-0b5e-4283-b7d5-271ea739d1d4.png"
              width="340" style=""></p>
        </div>
        <div v-if="this.artData.name == '雷达图'">
          <p>（1）学校里的那些事。2017年某中学进行了第一次模拟考，三年级中3个班级的平均成绩数据如下表，我们要对这三个班级的整体成绩做出评估，为接下来的教学计划做出指导。</p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1547991998996-60e180f4-d782-4d66-aa6b-6e2d346f5bd6.png"
              width="588" style=""></p>
          <p>我们用雷达图进行分析：</p>
          <p><img
              src="http://139.224.62.3:3001/upload/images/network/1547991999051-9dae65be-0134-4121-821a-97eadc8c5043.png"
              width="587" style=""></p>
          <p>通过这个雷达图可以看到很多信息，比如2班的语文和外语成绩最差，其余三科成绩都不错，有偏科现象，1班的外语和物理成绩最差，需要追赶，3班的化学和数学成绩较差等（<span
              style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">小壹, 2017</span>）。<a
              href="https://zhuanlan.zhihu.com/p/27945886" target="_blank" style="color: rgb(0, 102, 204);">[点击阅读更多]</a>
          </p>
        </div>
      </div>

      <h2 id="5">5、制作教程&nbsp;&nbsp;<el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value5">
        <div v-if="this.artData.name == '旭日图'">
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
        <div v-if="this.artData.name == '平行坐标图'">
          <table>
            <tbody>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="4" class="sc-198wj70-1 WJiEN">BI工具</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">
                  <a href="https://www.chezvoila.com/blog/parallel" target="view_window"
                    style="text-decoration: underline;">用excel作出平行坐标系（英文） </a>
                </td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PowerBI</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://community.powerbi.com/t5/Data-Stories-Gallery/Parallel-Coordinates-Example/td-p/221625"
                    target="view_window" style="text-decoration: underline;">复现汽车案例（可下载） </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Tableau</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://public.tableau.com/views/ParallelCoordinatesExample/ParallelCoordinatesExample?%3Aembed=y&amp;%3AshowVizHome=no&amp;%3Adisplay_count=y&amp;%3Adisplay_static_image=y"
                    target="view_window" style="text-decoration: underline;">复现汽车案例（可下载） </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://qlikviewtaiwan.blogspot.com/2014/03/parallel-coordinates-in-qlikview.html"
                    target="view_window" style="text-decoration: underline;">案例下载 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="7" class="sc-198wj70-1 WJiEN">代码库</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Echarts</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="http://echarts.baidu.com/examples/#chart-type-parallel" target="view_window"
                    style="text-decoration: underline;">官方实例 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AntV</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
              <tr>
                <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">D3</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://bl.ocks.org/mbostock/1341021" target="view_window"
                    style="text-decoration: underline;">基础图表 </a></td>
              </tr>
              <tr>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://bl.ocks.org/jasondavies/1341281" target="view_window"
                    style="text-decoration: underline;">增进版-可拖动调整轴的顺序 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">matplotlib</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://python-graph-gallery.com/150-parallel-plot-with-pandas/" target="view_window"
                    style="text-decoration: underline;">基础图表 </a></td>
              </tr>
              <tr>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="http://benalexkeen.com/parallel-coordinates-in-matplotlib/" target="view_window"
                    style="text-decoration: underline;">matplotlib结合pandas读取csv文件，复现汽车案例（英文） </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ggplot2</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://rdrr.io/cran/GGally/man/ggparcoord.html" target="view_window"
                    style="text-decoration: underline;">使用GGally扩展包 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">设计工具</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS/AI</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="this.artData.name == '树图'">
          <table>
            <tbody>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="4" class="sc-198wj70-1 WJiEN">BI工具</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="http://blog.sina.com.cn/s/blog_49f78a4b0102wg91.html" target="view_window"
                    style="text-decoration: underline;">基础教程 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Power BI</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://www.jianshu.com/p/6077dc857991" target="view_window"
                    style="text-decoration: underline;">基础教程 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Tableau</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://onlinehelp.tableau.com/current/pro/desktop/zh-cn/buildexamples_treemap.htm"
                    target="view_window" style="text-decoration: underline;">官方基础教程 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://help.qlik.com/zh-CN/sense/September2018/Subsystems/Hub/Content/Sense_Hub/Visualizations/TreeMap/treemap.htm"
                    target="view_window" style="text-decoration: underline;">官方基础教程 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="8" class="sc-198wj70-1 WJiEN">代码库</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="http://echarts.baidu.com/echarts2/doc/example/treemap.html" target="view_window"
                    style="text-decoration: underline;">官方实例 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AntV</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://antv.alipay.com/zh-cn/g2/3.x/demo/component/label-treemap.html" target="view_window"
                    style="text-decoration: underline;">官方实例 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="4" class="sc-198wj70-1 WJiEN">D3</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://github.com/d3/d3/wiki/%E7%9F%A9%E5%BD%A2%E6%A0%91%E5%B8%83%E5%B1%80"
                    target="view_window" style="text-decoration: underline;">官方文档-矩形树布局 </a></td>
              </tr>
              <tr>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://beta.observablehq.com/@mbostock/d3-treemap" target="view_window"
                    style="text-decoration: underline;">基础教程（英文） </a></td>
              </tr>
              <tr>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="http://mbostock.github.io/d3/talk/20111018/treemap.html" target="view_window"
                    style="text-decoration: underline;">zoomable treemap（英文） </a></td>
              </tr>
              <tr>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://bl.ocks.org/mbostock/8fe6fa6ed1fa976e5dd76cfa4d816fec" target="view_window"
                    style="text-decoration: underline;">source treemap（英文） </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">matplotlib</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://scipy-cookbook.readthedocs.io/items/Matplotlib_TreeMap.html" target="view_window"
                    style="text-decoration: underline;">基础教程（英文） </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">gglpot2</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://github.com/wilkox/treemapify" target="view_window"
                    style="text-decoration: underline;">基础教程（英文） </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">设计工具</td>
                <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">PS/AI</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://www.youtube.com/watch?v=2FS4cGqsV-c" target="view_window"
                    style="text-decoration: underline;">如何绘制矩形/圆角矩形 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://www.youtube.com/watch?v=4sPsW1JRl2U" target="view_window"
                    style="text-decoration: underline;">如何绘制矩形/圆角矩形2 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://www.jianshu.com/p/410f2ef8b424" target="view_window"
                    style="text-decoration: underline;">如何绘制矩形/单个圆角矩形 </a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="this.artData.name == '力导向图'">
          <table>
            <tbody>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="4" class="sc-198wj70-1 WJiEN">BI工具</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Power BI</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://www.mssqltips.com/sqlservertip/5208/graph-analysis-using-force-directed-graphs-in-power-bi-desktop/"
                    target="view_window" style="text-decoration: underline;">英语博文 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Tableau</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://www.clearlyandsimply.com/clearly_and_simply/2012/12/build-network-graphs-in-tableau.html"
                    target="view_window" style="text-decoration: underline;">网络图 </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
              <tr>
                <td width="25%" rowspan="6" class="sc-198wj70-1 WJiEN">代码库</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="http://echarts.baidu.com/examples/editor.html?c=graph-force" target="view_window"
                    style="text-decoration: underline;">官方实例 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AntV</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://antv.alipay.com/zh-cn/g6/2.x/demo/net/xiaomi.html" target="view_window"
                    style="text-decoration: underline;">官方案例 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">D3</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://beta.observablehq.com/@mbostock/d3-force-directed-graph" target="view_window"
                    style="text-decoration: underline;">原作者实例 </a></td>
              </tr>
              <tr>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://github.com/d3/d3-force" target="view_window" style="text-decoration: underline;">官方API
                  </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">matplotlib</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://python-graph-gallery.com/320-basic-network-from-pandas-data-frame/"
                    target="view_window" style="text-decoration: underline;">网络图 </a></td>
              </tr>
              <tr>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ggplot2</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                    href="https://briatte.github.io/ggnet/" target="view_window" style="text-decoration: underline;">网络图
                  </a></td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">设计工具</td>
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS/AI</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
              <tr style="background: rgb(246, 246, 246);">
                <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
                <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="this.artData.name == '桑基图'">
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="4" class="sc-198wj70-1 WJiEN">BI工具</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Power BI</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://powerbi.microsoft.com/en-us/blog/visual-awesomeness-unlocked-sankey-diagram/"
                style="text-decoration: underline;" target="view_window">视频教程 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Tableau</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.theinformationlab.co.uk/2018/03/09/build-sankey-diagram-tableau-without-data-prep-beforehand/"
                style="text-decoration: underline;" target="view_window">Tableau制作桑基图分步详解 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://github.com/brianwmunz/d3sankey-QV11" style="text-decoration: underline;"
                target="view_window">可参考的扩展 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="8" class="sc-198wj70-1 WJiEN">代码库</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="http://echarts.baidu.com/examples/#chart-type-sankey" style="text-decoration: underline;"
                target="view_window">官方实例 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">AntV</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/sankey-layouts.html"
                style="text-decoration: underline;" target="view_window">G2官方实例 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://antv.alipay.com/zh-cn/g6/2.x/demo/flow/table-sankey.html"
                style="text-decoration: underline;" target="view_window">G6官方实例 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">D3</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://beta.observablehq.com/@mbostock/d3-sankey-diagram" style="text-decoration: underline;"
                target="view_window">基本图形的实现 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://bost.ocks.org/mike/sankey/" style="text-decoration: underline;"
                target="view_window">使用D3的sankey plugin </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">matplotlib</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://matplotlib.org/api/sankey_api.html" style="text-decoration: underline;"
                target="view_window">matplotlib.sankey官方文档 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="http://pyecharts.org/#/zh-cn/charts_base?id=sankey%EF%BC%88%E6%A1%91%E5%9F%BA%E5%9B%BE%EF%BC%89"
                style="text-decoration: underline;" target="view_window">pyecharts </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ggplot2</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://cran.r-project.org/web/packages/ggalluvial/vignettes/ggalluvial.html"
                style="text-decoration: underline;" target="view_window">使用ggalluvial包 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">设计工具</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AI</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">
              建议用专项工具生成桑基图后，下载svg文件，再在AI中进行编辑</td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.zcool.com.cn/work/ZMzI2MjQ4NTY=.html" style="text-decoration: underline;"
                target="view_window">分步详细教程 </a></td>
          </tr>
        </div>
        <div v-if="this.artData.name == '漏斗图'">
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="7" class="sc-198wj70-1 WJiEN">BI工具</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://support.office.com/zh-cn/article/%E5%88%9B%E5%BB%BA%E6%BC%8F%E6%96%97%E5%9B%BE-ba21bcba-f325-4d9f-93df-97074589a70e?omkt=zh-CN&amp;ui=zh-CN&amp;rs=zh-CN&amp;ad=CN"
                style="text-decoration: underline;" target="view_window">官方说明及基本操作 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Power BI</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://docs.microsoft.com/zh-cn/power-bi/visuals/power-bi-visualization-funnel-charts"
                style="text-decoration: underline;" target="view_window">官方说明及基本操作 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.jianshu.com/p/3bed2cf700f2" style="text-decoration: underline;"
                target="view_window">制作几种常见的漏斗图 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">Tableau</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://zhuanlan.zhihu.com/p/28061599" style="text-decoration: underline;"
                target="view_window">漏斗图的三种制作方法-知乎专栏 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://cloud.tencent.com/developer/news/278128" style="text-decoration: underline;"
                target="view_window">构建漏斗图的三种不同方法-译自外文社区 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.youtube.com/watch?v=7fBNcgGVaoQ" style="text-decoration: underline;"
                target="view_window">视频讲解 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://help.qlik.com/zh-CN/qlikview/November2017/Subsystems/Client/Content/funnel_chart.htm"
                style="text-decoration: underline;" target="view_window">官方说明及基本操作 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="6" class="sc-198wj70-1 WJiEN">代码库</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="http://echarts.baidu.com/examples/#chart-type-funnel" style="text-decoration: underline;"
                target="view_window">官方实例 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AntV</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html#_%E6%BC%8F%E6%96%97%E5%9B%BE"
                style="text-decoration: underline;" target="view_window">G2官方实例 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">D3</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="http://bl.ocks.org/denisemauldin/12e819cfba9cf3119db588bcef54272c"
                style="text-decoration: underline;" target="view_window">实例代码 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.npmjs.com/package/d3-funnel" style="text-decoration: underline;"
                target="view_window">漏斗图library：d3-funnel </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">matplotlib</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://moderndata.plot.ly/funnel-charts-in-python-using-plotly/"
                style="text-decoration: underline;" target="view_window">用Plotly实现 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">gglpot2</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://zhuanlan.zhihu.com/p/30631439" style="text-decoration: underline;"
                target="view_window">复现《经济学人》的分组漏斗图 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">设计工具</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS/AI</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Al</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
        </div>
        <div v-if="this.artData.name == '雷达图'">
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="6" class="sc-198wj70-1 WJiEN">BI工具</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.extendoffice.com/zh-CN/documents/excel/2135-excel-create-radar-chart.html"
                style="text-decoration: underline;" target="view_window">教程 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Power BI</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.jianshu.com/p/9edc3de5a82e" style="text-decoration: underline;"
                target="view_window">教程和案例 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://blog.csdn.net/jessica_seiya/article/details/83012444" style="text-decoration: underline;"
                target="view_window">显示指标变动 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Tableau</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://zhuanlan.zhihu.com/p/24863323" style="text-decoration: underline;"
                target="view_window">教程1 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.jianshu.com/p/5a6378a1ae73" style="text-decoration: underline;"
                target="view_window">教程2 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://help.qlik.com/zh-CN/qlikview/November2017/Subsystems/Client/Content/Radar_Chart.htm"
                style="text-decoration: underline;" target="view_window">官方帮助文档 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="10" class="sc-198wj70-1 WJiEN">代码库</td>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">ECharts</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://echarts.baidu.com/examples/editor.html?c=radar" style="text-decoration: underline;"
                target="view_window">官方实例-标准雷达图 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://echarts.baidu.com/examples/editor.html?c=radar-custom" style="text-decoration: underline;"
                target="view_window">官方实例-定制雷达图 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">AntV</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://antv.alipay.com/zh-cn/g2/3.x/demo/radar/basic.html" style="text-decoration: underline;"
                target="view_window">官方实例-面型雷达图 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://antv.alipay.com/zh-cn/g2/3.x/demo/radar/with-line.html"
                style="text-decoration: underline;" target="view_window">官方实例-线型雷达图 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">D3</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="http://xgfe.github.io/2015/11/24/chenwubai/d3-basicCharts-radar/"
                style="text-decoration: underline;" target="view_window">教程1 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.visualcinnamon.com/2013/09/making-d3-radar-chart-look-bit-better.html"
                style="text-decoration: underline;" target="view_window">教程2 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.visualcinnamon.com/2015/10/different-look-d3-radar-chart.html"
                style="text-decoration: underline;" target="view_window">教程3 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">matplotlib</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://python-graph-gallery.com/391-radar-chart-with-several-individuals/"
                style="text-decoration: underline;" target="view_window">教程 </a></td>
          </tr>
          <tr>
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">ggplot2</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.r-graph-gallery.com/143-spider-chart-with-saveral-individuals/"
                style="text-decoration: underline;" target="view_window">教程1 </a></td>
          </tr>
          <tr>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN"><a
                href="https://www.r-graph-gallery.com/142-basic-radar-chart/" style="text-decoration: underline;"
                target="view_window">教程2 </a></td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">设计工具</td>
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS/AI</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
          <tr style="background: rgb(246, 246, 246);">
            <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
            <td width="50%" style="text-align: left; padding-left: 15px;" class="sc-198wj70-1 WJiEN">--</td>
          </tr>
        </div>
      </div>

      <h2 id="6">6、专项工具&nbsp;&nbsp;<el-switch v-model="value6" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value6">
        <div v-if="this.artData.name == '旭日图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://app.rawgraphs.io/" type="primary">Rawgraphs</el-link>
            </li>

            <li><el-link href="https://www.aculocity.com/labs/sunburst-chart" type="primary">在线生成工具（提供demo）</el-link>
            </li>

          </ul>

        </div>
        <div v-if="this.artData.name == '平行坐标图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://app.rawgraphs.io/" target="_blank"
                type="primary">Rawgraphs</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="https://www.xdat.org/" type="primary">Alfred
                Inselberg开发的平行坐标专用工具，需要简单安装</el-link>
            </li>
            <li><el-link href="http://opendata.pku.edu.cn/dataset.xhtml?persistentId=doi:10.18170/DVN/PISQAQ"
                type="primary">北京大学多维数据可视化与可视分析工具集</el-link>
            </li>
          </ul>

        </div>
        <div v-if="this.artData.name == '树图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://www.cs.umd.edu/hcil/treemap/doc4.1/toc.html"
                type="primary">treemap4.1. 需要在java1.4环境上运行</el-link>
            </li>
          </ul>
        </div>
        <div v-if="this.artData.name == '力导向图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://cytoscape.org/" target="_blank"
                type="primary">cytoscape</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="https://dydata.io/chartView/tpl/4612096174443311109"
                type="primary">
                DyData</el-link>
            </li>
            <li><el-link href="https://gephi.org/" type="primary">Gephi</el-link>
            </li>
          </ul>
        </div>
        <div v-if="this.artData.name == '桑基图'">

          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://app.rawgraphs.io/" target="_blank"
                type="primary">Rawgraphs</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="http://sankeymatic.com/build/" target="_blank"
                type="primary">Sankeymatic</el-link></li>
            <li><el-link href="https://dydata.io/chart" target="_blank" type="primary">镝数</el-link></li>
          </ul>
        </div>
        <div v-if="this.artData.name == '漏斗图'">

          <ul>
            <li style="margin-bottom: 20px;"><el-link
                href="https://www.onlinecharttool.com/graph?selected_graph=pyramid" target="_blank"
                type="primary">在线工具1</el-link></li>
            <li style="margin-bottom: 20px;"><el-link
                href="https://online.visual-paradigm.com/features/chart-maker/funnel-chart-maker/" target="_blank"
                type="primary">在线工具2</el-link></li>

          </ul>
        </div>
        <div v-if="this.artData.name == '雷达图'">

          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://chachart.net/radar-chart-en/" target="_blank"
                type="primary">雷达图简单在线生成器</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="https://www.onlinecharttool.com/graph?selected_graph=radar"
                target="_blank" type="primary">雷达图复杂在线生成器</el-link></li>
            <li><el-link href="https://online.visual-paradigm.com/features/chart-maker/radar-chart-maker/"
                target="_blank" type="primary">图表制作工具</el-link></li>

          </ul>
        </div>
      </div>

      <h2 id="7">7、学习资源&nbsp;&nbsp;<el-switch v-model="value7" active-color="#13ce66" inactive-color="#ff4949"
          active-text="显示" inactive-text="收起">
        </el-switch></h2>
      <div v-if="value7">
        <div v-if="this.artData.name == '旭日图'">
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
        <div v-if="this.artData.name == '平行坐标图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://eagereyes.org/techniques/parallel-coordinates"
                type="primary">【推荐】平行坐标系较完整的介绍（英文）；中文翻译版</el-link>
            </li>

            <li><el-link href="http://www.math.tau.ac.il/~aiisreal/" type="primary">平行坐标系发明者Alfred
                Inselberg的个人主页</el-link>
            </li>

          </ul>

        </div>
        <div v-if="this.artData.name == '树图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://zhuanlan.zhihu.com/p/32292058"
                type="primary">驭数有“树”——矩形树图的可视化之术。</el-link>
            </li>

            <li style="margin-bottom: 20px;"><el-link
                href="https://www.juiceanalytics.com/writing/10-lessons-treemap-design" type="primary">
                树图在设计上的10个注意事项。</el-link>
            </li>
            <li style="margin-bottom: 20px;"><el-link href="http://www.cs.umd.edu/hcil/treemap-history/" type="primary">
                马里兰大学关于树图研究的历史综述。</el-link>
            </li>
            <li style="margin-bottom: 20px;"><el-link
                href="https://medium.com/@groupvisualio/a-more-intuitive-treemap-f1f6de1dca1c" type="primary">
                树图的延伸-着色排列树图。</el-link>
            </li>
          </ul>
        </div>
        <div v-if="this.artData.name == '力导向图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://en.wikipedia.org/wiki/Force-directed_graph_drawing"
                type="primary">维基百科。</el-link>
            </li>

            <li style="margin-bottom: 20px;"><el-link href="https://github.com/d3/d3-force" type="primary">
                d3官方API。</el-link>
            </li>
            <li style="margin-bottom: 20px;"><el-link
                href="http://cs.brown.edu/people/rtamassi/gdhandbook/chapters/force-directed.pdf" type="primary">
                布朗大学力导向算法教材。</el-link>
            </li>
            <li style="margin-bottom: 20px;"><el-link href="http://www.sohu.com/a/227069840_416207" type="primary">
                力导向图简介。</el-link>
            </li>
            <li style="margin-bottom: 20px;"><el-link href="https://www.jianshu.com/p/d11f0d2719ad" type="primary">
                D3力导向图原理解释。</el-link>
            </li>
          </ul>
        </div>
        <div v-if="this.artData.name == '桑基图'">
          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://www.zhihu.com/question/45502919" target="_blank"
                type="primary">桑基图有何作用，桑基图又是怎么做出来的？</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="http://ecowest.org/2013/05/06/sankey-energy/"
                target="_blank" type="primary">桑基图历史：在能源业上的应用。</el-link></li>
            <li><el-link href="https://www.azavea.com/blog/2017/08/09/six-sankey-diagram-tool/" target="_blank"
                type="primary">如何制作桑基图？6种工具推荐。</el-link></li>
          </ul>
        </div>
        <div v-if="this.artData.name == '漏斗图'">

          <ul>
            <li style="margin-bottom: 20px;"><el-link href="http://mp.163.com/v2/article/detail/D7LJ1CKH05118F5T.html"
                target="_blank" type="primary">漏斗图简介</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="https://zhuanlan.zhihu.com/p/32696403" target="_blank"
                type="primary">产品分析模型：AARRR模型</el-link></li>

          </ul>
        </div>
        <div v-if="this.artData.name == '雷达图'">

          <ul>
            <li style="margin-bottom: 20px;"><el-link href="https://www.jianshu.com/p/aa67c6b1b081" target="_blank"
                type="primary">雷达图简介</el-link></li>
            <li style="margin-bottom: 20px;"><el-link href="https://zhuanlan.zhihu.com/p/27945886" target="_blank"
                type="primary">3大案例告诉你如何用雷达图做分析</el-link></li>
            <li><el-link href="https://antv.alipay.com/zh-cn/vis/chart/radar.html" target="_blank"
                type="primary">AntV雷达图介绍</el-link></li>

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
          createTime: '2024-04-3 10:00:00'
        },
        {
          memberName: '游客',
          content: '我发现在这个平行坐标图中，某些维度的数据波动较大，而另一些则相对稳定。这可能反映了数据集中的某种模式或趋势，值得进一步研究和分析。',
          createTime: '2024-04-4 10:15:00'
        },
        {
          memberName: '游客',
          content: '我觉得平行坐标图的可读性还有提升空间。虽然图表展示了各个维度之间的关系，但是在数据密集的情况下，线条交叉会让图表显得有些混乱。建议考虑增加交互功能，例如鼠标悬停时显示特定维度的数值，或者允许用户选择性地隐藏一些维度。',
          createTime: '2024-04-6 10:30:00'
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
    if (this.id != 107) {
      this.allmessages = [];
    }

    window.addEventListener("popstate", function (e) {
      window.history.replaceState(null, null, '/#/');
    }, false);
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
