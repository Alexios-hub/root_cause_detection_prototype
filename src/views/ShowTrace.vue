<template>
  <div class="traceList">
    <el-row type="flex" justify="center"  align="middle">
      <el-button @click="goToRootType" type="info">根因类型</el-button>
    </el-row>
    <div style="margin-top: 10px">
      <div class="trace" style="width: 95%;height:900px; alignment: center;margin: 0 auto ">
        <el-row type="flex" justify="center"  align="middle">
          <el-button  @click="dialogVisible = true" type="info">根因定位</el-button>
        </el-row>
        <el-dialog
            :visible.sync="dialogVisible"
            title="localization_result"
            width="60%">

          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="operation_name"
                label="operation_name"
                width="500%">
            </el-table-column>
            <el-table-column
                prop="failure_score"
                label="failure_score">
            </el-table-column>
          </el-table>

        </el-dialog>
        <div id="trace1" style="width: 100%;height:800px; alignment: center;">
        </div>
      </div>
      <div id="trace2" style="width: 95%;height:800px; alignment: center"></div>
      <div id="trace3" style="width: 95%;height:800px; alignment: center"></div>
      <div id="trace4" style="width: 95%;height:800px; alignment: center"></div>
      <div id="trace5" style="width: 95%;height:800px; alignment: center"></div>
      <div id="trace6" style="width: 95%;height:800px; alignment: center"></div>
      <div id="trace7" style="width: 95%;height:800px; alignment: center"></div>
      <div id="trace8" style="width: 95%;height:800px; alignment: center"></div>
    </div>

  </div>
    <!-- </div>
</div> -->
</template>
<!--<script src="../common/echarts.js"></script>-->
<script>
import * as echarts from 'echarts'
import treeJson from '../data/tree/tree.json'
import traceJson from '../data/trace.json'
import localizationResult from '../data/true_localization_result.json'

export default {
  name: "ShowTrace",

  data() {
    return {
      test:1,
      dialogVisible: false,
      tableData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    goToRootType()
    {
      this.$router.push('/rootType')
    },
    init() {
      var jsonName;
      var traceChart;
      var title = Object.keys(traceJson);

      this.tableData = localizationResult;
      // eslint-disable-next-line no-unused-vars
      var option;
      for (let i = 1; i <= 8; i++) {
        jsonName = "trace" + i;
        traceChart = echarts.init(document.getElementById(jsonName));
        traceChart.setOption(
            (option = {
              title: {
                show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
                text: title[i - 1], //主标题文本，'\n'指定换行
                link: '', //主标题文本超链接,默认值true
                target: null, //指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
                backgroundColor: 'rgba(0,0,0,0)', //标题背景颜色，默认'rgba(0,0,0,0)'透明
                borderColor: '#ccc', //标题边框颜色,默认'#ccc'
                borderWidth: 0, //标题边框线宽，单位px，默认为0（无边框）
                padding: 5, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                itemGap: 10, //主副标题纵向间隔，单位px，默认为10
                textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 'normal'
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: function (arg) {
                  let label = 'name: ' + arg.data['name'] + '\nnormal_mean: ' + arg.data['normal_mean'] + '\nabnormal_mean: '+ arg.data['abnormal_mean'] + '\nstd: '  + arg.data['std']
                  return label
                },
                extraCssText: 'width:600px; white-space:pre-wrap',
                triggerOn: 'mousemove'
              },
              series: [
                {
                  type: 'tree',
                  data: [treeJson[i - 1]],
                  left: '2%',
                  right: '2%',
                  top: '8%',
                  bottom: '20%',
                  symbol: 'emptyCircle',
                  orient: 'vertical',
                  expandAndCollapse: true,
                  label: {
                    position: 'top',
                    rotate: 10,
                    verticalAlign: 'middle',
                    align: 'center',
                    fontSize: 15
                  },
                  leaves: {
                    label: {
                      position: 'bottom',
                      rotate: 10,
                      verticalAlign: 'middle',
                      align: 'center'
                    }
                  },
                  animationDurationUpdate: 750
                }
              ]
            })
        );
      }
    }
  }
}


</script>

<style lang="scss" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .wrap {
    transform-origin: 0px 0px 0px;
    // background: url(../assets/img/bj.jpg) no-repeat;
    background-size: contain;
    background-position: 50% 0;
    // background-color: rgb(0, 0, 0);
    background-color: #010d0f;
    min-width: auto;
    // width: 1920px;
    width: 100%;
    min-height: auto;
    height: 4000px;
    overflow: auto;

    .top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: transparent;
      background: url(../assets/img/top_nav.png) no-repeat;
      background-position: 65% 0;
      border: none;
      overflow: hidden;
    }

    .divider {
      position: absolute;
      left: 50px;
      top: 3253px;
      width: 90%;
      height: 50px;
      width: 300px;
      border: none;
      background: transparent;
    }

  }
}
.edit {
  color: #fff;
  background-color: rgb(15, 5, 89);
  border-color: rgb(21, 47, 72);
}
.edit:hover,
.edit:focus {
  background: var(--el-button-hover-color);
  border-color: var(--el-button-hover-color);
  color: var(--el-button-font-color);
}

.tableAll{
  width:900px;
  height: 300px;
  background-color: red;
}
.el-table, .el-table__expanded-cell {
    background-color: transparent;
}

.el-table th, .el-table tr {
    background-color: transparent;
}
.el-table__body tr:hover > td{
    background-color:yellow !important;

}


</style>
