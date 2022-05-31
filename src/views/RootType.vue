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
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[0]" @change="onRadioChange(1)" v-for="(item) in kpi1" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart1" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[1]" @change="onRadioChange(2)" v-for="(item) in kpi2" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart2" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[2]" @change="onRadioChange(3)" v-for="(item) in kpi3" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart3" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[3]" @change="onRadioChange(4)" v-for="(item) in kpi4" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart4" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[4]" @change="onRadioChange(5)" v-for="(item) in kpi5" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart5" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[5]" @change="onRadioChange(6)" v-for="(item) in kpi6" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart6" style="width: auto;  height: 800px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[6]" @change="onRadioChange(7)" v-for="(item) in kpi7" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart7" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[7]" @change="onRadioChange(8)" v-for="(item) in kpi8" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart8" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[8]" @change="onRadioChange(9)" v-for="(item) in kpi9" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart9" style="width: auto;  height: 600px;"></div>
    <div style="margin-top:20px;">
      <el-radio-group v-model="select[9]" @change="onRadioChange(10)" v-for="(item) in kpi10" :key="item">
        <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div id="myChart10" style="width: auto;  height: 600px;"></div>
  </div>
    <!-- </div>
</div> -->
</template>

<script>
import * as echarts from 'echarts'
import seriesList from '../data/totalSeriesData.json'

export default {
  name: "RootType",
  data() {
    return {
      select:[
        "istio_request_bytes.grpc.200.0.0",
        "istio_request_duration_milliseconds.grpc.200.0.0",
        "istio_request_messages",
        "istio_requests.grpc.200.0.0",
        "istio_response_bytes.grpc.200.0.0",
        "istio_response_messages",
        "istio_tcp_connections_closed.-",
        "istio_tcp_connections_opened.-",
        "istio_tcp_received_bytes.-",
        "istio_tcp_sent_bytes.-",
      ],
      kpi1:[
        "istio_request_bytes.grpc.200.0.0",
        "istio_request_bytes.grpc.200.9.0",
        "istio_request_bytes.grpc.200.14.0",
        "istio_request_bytes.grpc.0.2.0",
        "istio_response_messages",
      ],
      kpi2: [
        "istio_request_duration_milliseconds.grpc.200.0.0",
        "istio_request_duration_milliseconds.grpc.200.9.0",
        "istio_request_duration_milliseconds.grpc.200.14.0",
        "istio_request_duration_milliseconds.grpc.0.2.0"
      ],
      kpi3: [
        "istio_request_messages"
      ],
      kpi4:[
        "istio_requests.grpc.200.0.0",
        "istio_requests.grpc.200.9.0",
        "istio_requests.grpc.200.14.0",
        "istio_requests.grpc.0.2.0"
      ],
      kpi5:[
        "istio_response_bytes.grpc.200.0.0",
        "istio_response_bytes.grpc.200.9.0",
        "istio_response_bytes.grpc.200.14.0",
        "istio_response_bytes.grpc.0.2.0"
      ],
      kpi6:[
        "istio_response_messages"
      ],
      kpi7: [
        "istio_tcp_connections_closed.-"
      ],
      kpi8:[
        "istio_tcp_connections_opened.-"
      ],

      kpi9: [
        "istio_tcp_received_bytes.-"
      ],
      kpi10: [
        "istio_tcp_sent_bytes.-"
      ],


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
    onRadioChange(temp)
    {
      this.changeEcharts(temp);
    },
    changeEcharts(temp)
    {
      let name="myChart"+temp;
      let myChart = echarts.init(document.getElementById(name));

      var option
      option = {
        title: {
          text: this.fileName[temp-1]
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '6%',
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
        series: seriesList[this.fileName[temp-1]][this.select[temp-1]]
      }
      myChart.setOption(option)

    },
    init() {
      // eslint-disable-next-line no-unused-vars
      var option
      var name
      for (let i = 0; i < this.fileName.length; i++) {
        name='myChart'+(i+1)
        var myChart = echarts.init(document.getElementById(name));
        option = {
          title: {
            text: this.fileName[i]
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            top: '6%',
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
          series: seriesList[this.fileName[i]][this.select[i]]
        }

        myChart.setOption(option)
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
