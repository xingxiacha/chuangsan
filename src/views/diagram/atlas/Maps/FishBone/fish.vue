<template>
  <div class="fishbone scroll">
    <div class="content">
      <el-row type="flex" class="top-bone">
        <div
          class="item-bone bone-top"
          v-for="(item, index) in Object.keys(arrList)"
          :key="index"
        >
          <ul class="item-bone-children" v-if="index % 2 == 0">
            <div class="textTop">
              <div class="title_text">{{ textObj[item] }}</div>
            </div>
            <li
              v-for="(ele, i) in arrList[item]"
              class="children-item"
              :key="i"
            >
              <div class="top_portLine"></div>
              <div class="title">
                <!-- <div class="edit_button">
                  <i
                    class="iconfont el-icon-plus fish_edit"
                    @click="addBone(item, index)"
                  ></i>
                  <i
                    class="iconfont el-icon-minus fish_edit"
                    @click="delBone(item, i)"
                  ></i>
                </div> -->
                <el-input size="mini" v-model="ele.value"></el-input>
              </div>
            </li>
          </ul>
        </div>
      </el-row>
      <div class="center-line">
        <div class="textCenter">{{ text }}</div>
      </div>
      <el-row type="flex" class="bottom-bone">
        <div
          class="item-bone"
          v-for="(item, index) in Object.keys(arrList)"
          :key="index"
        >
          <ul class="item-bone-children" v-if="index % 2 != 0">
            <div v-if="index % 2 != 0" class="textBottom">
              <div class="title_text">{{ textObj[item] }}</div>
            </div>
            <li
              v-for="(ele, i) in arrList[item]"
              :key="i"
              class="children-item1"
            >
              <div class="bottom_portLine"></div>
              <div class="edit_button"></div>
              <div class="title">
                <!-- <div class="edit_button">
                  <i
                    class="iconfont el-icon-plus fish_edit"
                    @click="addBone(item, index)"
                  ></i>
                  <i
                    class="iconfont el-icon-minus fish_edit"
                    @click="delBone(item, i)"
                  ></i>
                </div> -->
                <el-input size="mini" v-model="ele.value"></el-input>
              </div>
            </li>
          </ul>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "鱼骨图",
      strip_num: 6, // 根数
      wing_num: 1, // 翅数
      arrList: {
        a: [{ value: "内容a", id: "1", flag: true },
            { value: "内容a", id: "1", flag: true },{ value: "内容a", id: "1", flag: true }],
        b: [{ value: "内容b", id: "1", flag: true }],
        c: [{ value: "内容c", id: "1", flag: true }],
        d: [{ value: "内容d", id: "1", flag: true }],
        e: [{ value: "内容e", id: "1", flag: true }],
        f: [{ value: "内容f", id: "1", flag: true }],
      },
      textObj: {
        a: "标题a",
        b: "标题b",
        c: "标题c",
        d: "标题d",
        e: "标题e",
        f: "标题f",
      },
    };
  },
  mounted() {},
  methods: {
    delBone(key, index) {
      this.arrList[key].splice(index, 1);
      console.log(key, index);
    },
    addBone(key, index) {
      this.arrList[key].push({ value: index });
    },
  },
};
</script>
<style lang="scss" scoped>
.fishbone {
  min-height: 300px;
  height: 100%;
  position: relative;
  $bnoe-color: #dcdfe6;
  max-width: 100%;
  // padding: 50px;
  overflow: auto;
  .textCenter {
    padding: 5px;
    position: absolute;
    top: -12px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #70b603;
    font-weight: bold;
    right: -29px;
  }

  .textBottom {
    position: absolute;
    bottom: -27px;
    right: -27px;
    transform: skewx(15deg);
    ::v-deep .el-button {
      padding: 2px;
    }
  }
  .textTop {
    position: absolute;
    top: -27px;
    right: -27px;
    transform: skewx(-45deg);

    ::v-deep .el-button {
      padding: 3px;
    }
  }
  .title_text {
    border-radius: 5px;
    padding: 3px;
    background: #70b603;
    width: fit-content;
    height: 25px;
    text-align: center;
    font-weight: bold;
    line-height: 25px;
  }

  .leftIcon {
    border: 6px solid transparent;
    border-right: 6px solid $bnoe-color;
  }
  .rightIcon {
    border: 6px solid transparent;
    border-left: 6px solid $bnoe-color;
  }

  .content {
    // padding-left: 20px;
    width: 60%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 20%;
  }

  .center-line {
    color: white;
    position: relative;
    // width: calc(100% + 200px);
    width: 100%;
    height: 1px;
    background-color: $bnoe-color;
  }

  .top-bone,
  .bottom-bone {
    .item-bone {
      color: white;
      position: relative;
      display: flex;
      margin: 0 5px;
    }

    .item-bone-children-right {
      border: none !important;
      margin: 0 !important;
      padding: 0;
    }
    .children-item {
      position: relative;
      margin: 0 20px 20px 0;
      .top_portLine {
        width: 25px;
        border-bottom: 1px solid $bnoe-color;
        position: absolute;
        right: -25px;
        top: 50%;
      }
    }
    .item-bone-children {
      position: relative;
      height: 100%;
      border-right: 2px solid $bnoe-color;
      transform: skewX(45deg);
      margin: 0 10px;
      list-style-type: none;
      padding: 0;
      padding-right: 5px;

      .text {
        text-align: right;
        padding-right: 20px;
        transform: skewx(-45deg);
        font-size: 13px;
        width: 100%;
        line-height: 30px;
        white-space: nowrap;
        color: white;
      }

      .title {
        position: relative;
        text-align: center;
        transform: skewX(-45deg);
        font-size: 16px;
        font-weight: bolder;
        line-height: 35px;
        color: white;
        .edit_button {
          display: flex;
          // flex-direction: column;
          width: fit-content;
          position: absolute;
          top: -20px;
          left: 0;
        }
      }
    }
  }

  .bottom-bone {
    bottom: 0;
    .item-bone-children {
      position: relative;
      transform: skewX(-15deg);
      .text {
        transform: skewX(15deg);
      }
      .title {
        transform: skewX(15deg);
      }
      .children-item1 {
        margin: 20px 20px 0 0;
        .bottom_portLine {
          width: 25px;
          border-bottom: 1px solid $bnoe-color;
          position: absolute;
          right: -25px;
          top: 50%;
        }
        position: relative;
      }

      .children-item2 {
        position: relative;
        &:not(:last-child) {
          border-bottom: 1px solid $bnoe-color;
          &:after {
            position: absolute;
            left: -7px;
            bottom: -5px;
            content: " ";
            border: 5px solid transparent;
            border-right: 5px solid black !important;
            transform: skewx(45deg);
          }
        }
      }
    }
  }
  .fish_edit {
    padding: 2px;
    margin-right: 10px;
    color: #999;
    display: inline-block;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    border: 1px solid #797979;
    border-radius: 5px;
    cursor: pointer;
  }
}
.scroll {
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #e7eaf0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #e1e1e2;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-button {
    background-color: red;
    display: none;
  }
}
</style>
