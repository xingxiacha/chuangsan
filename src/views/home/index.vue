<template>
  <div class="bg">
    <el-backtop :bottom="100">
    </el-backtop>
    <meta name="referrer" content="no-referrer" />
    <header>
      <span style="font-size: 30px;display: flex;justify-content: space-between;align-items: center; margin-left: 10px"
        @click="back">图拓
        <img src="../../assets/logan.png" alt="智拓" style="width: 30px; height:30px; margin-left: 4px">
      </span>
    </header>
    <section>
      <div class="up-card">

        <div class="bScDLr" v-for="(item, index) in options" :key="index">
          <div class="line-name">{{ item.name }}</div>
          <div class="line-content">
            <div class="buttons">
              <button class="box-in box-out" v-for="(item, index) in item.children" :key="index"
                :class="item.isSelected ? 'Active' : ''" @click="TabClick(index, item)" tabindex="0" type="button"><span
                  class="jss259">
                  {{ item.name }}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="down-card">
        <div class="diagrams">
          <div class="diagram" v-for="item in diagrams" :key="item.id" @click="enter(item.id)">
            <div class="diagram-img">
              <img :src="item.image" alt="">
            </div>
            <div class="describe">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <span>关于我们</span> | <span>隐私声明和Cookie</span> | <span>法律声明</span> | <span>广告</span> | <span>帮助反馈</span>
    </footer>
  </div>
</template>

<script>
import { decoration1 } from '@jiaminghi/data-view'
import store from '../../store'
import { getAttrsApi } from './api.js'
import { log } from 'console'

export default {
  name: 'home',
  data() {
    return {
      diagrams: [],
      TotalDiagrams: [],
      choose: [
        { name: 'category', children: [] },
        { name: 'functions', children: [] },
        { name: 'dimension', children: [] },
        { name: 'relation', children: [] },
        { name: 'format', children: [] },
        { name: 'complexity', children: [] },
      ],
      options: [
        {
          name: '图类',
          children: [
            { name: '数据展示图表', isSelected: false, father: 'category' },
            { name: '流程图表', isSelected: false, father: 'category' },
            { name: '结构图表', isSelected: false, father: 'category' },
          ]
        },
        {
          name: '功能',
          children: [
            { name: '数据对比与展示', isSelected: false, father: 'functions' },
            { name: '数据层次结构与关系', isSelected: false, father: 'functions' },
            { name: '流程与步骤', isSelected: false, father: 'functions' },
            { name: '时间和序列', isSelected: false, father: 'functions' },
            { name: '流动与转换', isSelected: false, father: 'functions' },
          ]
        },
        // {
        //   name: '数据维度',
        //   children: [
        //     { name: '一维数据', isSelected: false, father: 'dimension' },
        //     { name: '多维数据', isSelected: false, father: 'dimension' },
        //     { name: '时间数据', isSelected: false, father: 'dimension' },
        //     { name: '流程数据', isSelected: false, father: 'dimension' },
        //   ]
        // },
        {
          name: '数据关系',
          children: [
            { name: '对比', isSelected: false, father: 'relation' },
            { name: '组成', isSelected: false, father: 'relation' },
            { name: '层次', isSelected: false, father: 'relation' },
            { name: '流程', isSelected: false, father: 'relation' },
            { name: '关联', isSelected: false, father: 'relation' },
          ]
        },
        {
          name: '数据表示形式',
          children: [
            { name: '图形', isSelected: false, father: 'format' },
            { name: '图解', isSelected: false, father: 'format' },
            { name: '网络', isSelected: false, father: 'format' },
            { name: '表格', isSelected: false, father: 'format' },
          ]
        },
        {
          name: '复杂度',
          children: [
            { name: '简单', isSelected: false, father: 'complexity' },
            { name: '中等', isSelected: false, father: 'complexity' },
            { name: '复杂', isSelected: false, father: 'complexity' },
          ]
        },
      ]
    }
  },
  beforeDestroy() {
    sessionStorage.setItem('choose', JSON.stringify(this.choose));
    sessionStorage.setItem('options', JSON.stringify(this.options));
  },
  mounted() {
    this.getAtrrs();

    if (sessionStorage.getItem('choose')) {
      this.choose = JSON.parse(sessionStorage.getItem('choose'));
    }
    if (sessionStorage.getItem('options')) {
      this.options = JSON.parse(sessionStorage.getItem('options'));
    }
  },
  beforeUpdate() {
    this.UpdateDiagram();
  },
  methods: {
    UpdateDiagram() {
      this.diagrams = [];
      for (let i = 0; i < this.TotalDiagrams.length; i++) {
        let j = 0;
        if (this.choose[0].children.length == 0) {
          j++;
        } else {
          for (let k = 0; k < this.choose[0].children.length; k++) {
            if (this.TotalDiagrams[i].category == this.choose[0].children[k]) {
              j++;
              break;
            }
          }
        }
        if (this.choose[1].children.length == 0) {
          j++;
        } else {
          for (let k = 0; k < this.choose[1].children.length; k++) {
            if (this.TotalDiagrams[i].functions == this.choose[1].children[k]) {
              j++;
              break;
            }
          }
        }
        if (this.choose[2].children.length == 0) {
          j++;
        } else {
          for (let k = 0; k < this.choose[2].children.length; k++) {
            if (this.TotalDiagrams[i].dimension == this.choose[2].children[k]) {
              j++;
              break;
            }
          }
        }
        if (this.choose[3].children.length == 0) {
          j++;
        } else {
          for (let k = 0; k < this.choose[3].children.length; k++) {
            if (this.TotalDiagrams[i].relation == this.choose[3].children[k]) {
              j++;
              break;
            }
          }
        }
        if (this.choose[4].children.length == 0) {
          j++;
        } else {
          for (let k = 0; k < this.choose[4].children.length; k++) {
            if (this.TotalDiagrams[i].format == this.choose[4].children[k]) {
              j++;
              break;
            }
          }
        }
        if (this.choose[5].children.length == 0) {
          j++;
        } else {
          for (let k = 0; k < this.choose[5].children.length; k++) {
            if (this.TotalDiagrams[i].complexity == this.choose[5].children[k]) {
              j++;
              break;
            }
          }
        }
        if (j == 6) {
          this.diagrams.push(this.TotalDiagrams[i]);
        }
      }
    },
    getAtrrs() {
      getAttrsApi().then(res => {
        console.log(res.data);
        this.diagrams = res.data.rows;
        this.TotalDiagrams = res.data.rows;
      })
    },
    back() {
      this.$router.push({ path: "/" });
    },
    enter(index) {
      this.$router.push({ path: "/diagram", query: { index: index } });
    },
    TabClick(index, item) {
      item.isSelected = !item.isSelected;
      if (item.isSelected) {
        // this.choose[0].children.push(item.name);
        this.choose[this.choose.findIndex(ite => ite.name == item.father)].children.push(item.name);
      } else {
        let j = this.choose.findIndex(ite => ite.name == item.father);
        for (let i = 0; i < this.choose[j].children.length; i++) {
          if (this.choose[j].children[i] === item.name) {
            this.choose[j].children.splice(i, 1);
            break;
          }
        }
      }
      console.log(this.choose);
      sessionStorage.setItem('choose', JSON.stringify(this.choose));
      sessionStorage.setItem('options', JSON.stringify(this.options));
    }
  },
}
</script>

<style lang="scss" scoped>
.bScDLr {
  display: flex;
  min-height: 60px;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.bScDLr .line-name {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(246, 246, 246);
  min-width: 140px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  border-right: 1px solid rgb(230, 230, 230);
}

.bScDLr .line-content {
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 60px;
}

.bScDLr .line-content .buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px 0px;
}

.bScDLr .line-content .buttons button {
  font-weight: normal;
  width: 140px;
  margin: 0px 8px 8px;
}

.bScDLr .line-content .buttons button:hover {
  background-color: #f8f8f8;
}

.box-out {
  color: rgba(0, 0, 0, 0.87);
  padding: 8px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  border-radius: 4px;
  text-transform: uppercase;
}

.box-in {
  color: inherit;
  border: 0;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.23);
}

.Active {
  background-color: #f1f1f1;
  color: #409EFF;
}

@keyframes rote {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.bg {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #f5f5f5;
  padding: 0px 20px;
  color: #2f313d;
  display: flex;
  justify-content: space-between;
}

header span:hover {
  cursor: pointer;
}

.avatar-wrapper {
  position: relative;
  padding-top: 8px;
  color: #8c9db6;

  .svg {
    width: 28px;
    height: 28px;

    &:hover {
      animation: rote 2.5s linear infinite;
      cursor: pointer;
      color: #409EFF;
    }
  }
}

.title {
  margin-top: 40px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
}

.title .icon {
  width: 200px;
  height: 100px;
}

.title .search {
  width: 200px;
  height: 100px;
}

section {
  margin-top: 40px;
  transform: translateX();
  width: 80%;
}

section .up-card {
  width: 100%;
  border: 1px solid rgb(230, 230, 230);
  border-bottom: 0px;
}

section .down-card {
  width: 100%;
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px;

}

// section .down-card .Tools {
//   width: 100%;
//   height: 8vh;
//   line-height: 8vh;
//   padding: 0px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
section .down-card .diagrams {
  width: 100%;
  display: flex;
  // justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  // overflow-y: scroll;
}

// section .down-card .diagrams::after {
// content: '';
// display: block;
// flex: 1 1 auto;
// }

section .down-card .diagrams .diagram {
  width: 19%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 8px 0px;
  margin: 0.5%;
}

section .down-card .diagrams .diagram:hover .diagram-img img {
  scale: 1.2;
}

section .down-card .diagrams .diagram:hover .describe {
  color: #409EFF;
}

section .down-card .diagrams .diagram .diagram-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

section .down-card .diagrams .diagram .diagram-img img {
  width: 100%;
  height: 100%;
}

section .down-card .diagrams .diagram .describe {
  background: rgb(246, 246, 246);
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-weight: 500;
  color: rgb(74, 74, 74);
  text-decoration: none;
}

.search-box {
  background-color: white;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 5px 5px 5px 5px;
  border-radius: 40px;
  display: flex;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  padding: 0;
  color: #222;
  font-size: 16px;
  line-height: 40px;
  width: 0;
  transition: 0.6s;
}

.search-btn {
  color: #888888;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.6s;
  background-color: #fff;
}

.search-box:hover .search-txt {
  width: 200px;
  padding: 0 12px;
}

.search-box:hover .search-btn {
  background-color: #fff;
  animation: rotate 0.4s linear;
}

.search-txt:focus {
  width: 200px;
  padding: 0 12px;
}

footer {
  width: 100%;
  height: 60px;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  color: #888888;
  border-top: 2px solid #f3f3f3;
}

footer span:hover {
  cursor: pointer;
  color: #409EFF;
}
</style>
