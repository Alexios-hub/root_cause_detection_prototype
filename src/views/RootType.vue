<template>
  <div>
    <el-row align="middle" justify="center" type="flex">
      <el-button @click="goToShowTrace">根因定位</el-button>
    </el-row>
    <div id="myChart1" style="width: auto;  height: 600px;"></div>
    <div id="myChart2" style="width: auto;  height: 600px;"></div>
    <div id="myChart3" style="width: auto;  height: 600px;"></div>
    <div id="myChart4" style="width: auto;  height: 600px;"></div>
    <div id="myChart5" style="width: auto;  height: 600px;"></div>
    <div id="myChart6" style="width: auto;  height: 600px;"></div>
    <div id="myChart7" style="width: auto;  height: 600px;"></div>
    <div id="myChart8" style="width: auto;  height: 600px;"></div>
    <div id="myChart9" style="width: auto;  height: 600px;"></div>
    <div id="myChart10" style="width: auto;  height: 600px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import cmdbList from '../data/totalCmdbId.json'
import seriesList from '../data/totalSeriesData.json'

export default {
  name: "RootType",
  data() {
    return {
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
            data:cmdbList[patternName]
          },
          grid: {
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
        window.onresize = () => {
          return (() => {
            myChart.resize()
          })()
        }
      }

      },
    goToShowTrace() {
      this.$router.replace('/showTrace')
    }
  }
}
</script>

<style scoped>

.myChart {

}
</style>