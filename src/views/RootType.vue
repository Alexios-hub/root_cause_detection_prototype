<template>
  <div>
    <el-row align="middle" justify="center" type="flex" style="margin:30px">
      <el-button @click="goToShowTrace"  >根因定位</el-button>
      <el-button @click="dialogVisible = true"  >推荐根因</el-button>
      <el-dialog
          :visible.sync="dialogVisible"
          title="推荐根因"
          width="60%">
        <div style="font-size: 20px">service层面 cartservice k8s容器网络延迟</div>
      </el-dialog>

    </el-row>
    <div id="myChart1" style="width: auto;  height: 800px;"></div>
    <div id="myChart2" style="width: auto;  height: 800px;"></div>
    <div id="myChart3" style="width: auto;  height: 800px;"></div>
    <div id="myChart4" style="width: auto;  height: 800px;"></div>
    <div id="myChart5" style="width: auto;  height: 800px;"></div>
    <div id="myChart6" style="width: auto;  height: 800px;"></div>
    <div id="myChart7" style="width: auto;  height: 800px;"></div>
    <div id="myChart8" style="width: auto;  height: 800px;"></div>
    <div id="myChart9" style="width: auto;  height: 800px;"></div>
    <div id="myChart10" style="width: auto;  height: 800px;"></div>
  </div>
    <!-- </div>
</div> -->
</template>

<script>
import * as echarts from 'echarts'
import cmdbList from '../data/totalCmdbId.json'
import seriesList from '../data/totalSeriesData.json'

export default {
  name: "RootType",
  data() {
    return {
      dialogVisible:false,
      fileName: [
        "istio_request_bytes",
        "istio_request_duration_milliseconds",
        "istio_request_messages",
        "istio_requests",
        "istio_response_bytes",
        "istio_response_messages",
        "istio_tcp_connections_closed",
        "istio_tcp_connections_opened",
        "istio_tcp_received_bytes",
        "istio_tcp_sent_bytes",
      ],
      fileData: [],
      isShow: false,
      totalData:[],
      flag: 0
    };

  },
  created() {

  },
  mounted() {
    // this.isShow = true

    setTimeout(()=>{
      this.init()
    },100)
    // this.$forceUpdate()
  },
  //数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据

  methods: {
    init() {
      // eslint-disable-next-line no-unused-vars
      var option
      var name
      var patternName
      for (let i = 0; i < this.fileName.length; i++) {
        patternName=this.fileName[i]
        name='myChart'+(i+1)
        console.log(seriesList[patternName])
        console.log(cmdbList[patternName])
        var myChart = echarts.init(document.getElementById(name));
        option = {
          title: {
            text: this.fileName[i]
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:cmdbList[patternName],
            top:"6%"
          },
          grid: {
            top: '30%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false
          },
          yAxis: {
            type: 'value'
          },
          series: seriesList[patternName]
        }
        console.log(option)
        myChart.setOption(option)
        // window.onresize = () => {
        //   return (() => {
        //     myChart.resize()
        //   })()
        // }
      }

      },
    goToShowTrace() {
      this.$router.push('/showTrace')
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
  // color: var(--el-button-font-color);
}

</style>
