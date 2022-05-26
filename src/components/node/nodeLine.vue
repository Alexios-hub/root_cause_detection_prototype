<!--
 描述: 动态轮播折线图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
<div  >
  <div   class="wrap-container sn-container" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);width: 98%;margin-top:5%;margin-bottom:10%;margin-left: 1%;margin-right: 1%;"  > 
    <div class="sn-content"  > 
      <div class="sn-title">node
        
        <div style="margin-top:20px">
            <el-radio-group v-model="radio" v-for="(item,i) in services" :key="i" @change="onRadioChange" >

  <el-radio :label="item" style="margin:10px">{{item}}</el-radio>
  
  </el-radio-group >
  </div>
      <!-- <div class="sn-body">  -->
        <!-- <div class="wrap-container">  -->
          <!-- <div class="chartsdom" id="chart_dt1"></div>  -->
          <div  id="chart_dt1" style="width:99%;height:600px "></div> 
      </div>
        </div> 
      </div> 
       
    </div>   
  <!-- </div> -->
<!-- </div> -->
</template>

<script>
import axios from'axios'
export default {
  name: "dynamicLine",
  data() {
    return {
      theStyle:{

      },
       radio: '',
      option: null,
      timer: null,
      xData: [],
      now: +new Date(2019, 1, 1),
      value: Math.random() * 1000,
      oneDay: 24 * 3600 * 1000,
    //   goldMetric:[],
      nodeMetric:[],
      timeStamp:[],
      services:[
"system.mem.pct_usage",
"system.mem.free",
"system.mem.real.pct_usage",
"system.mem.used",
"system.disk.free",
"system.disk.pct_usage",
"system.disk.used",
"system.io.avg_q_sz",
"system.io.r_await",
"system.io.rkb_s",
"system.io.r_s",
"system.io.util",
"system.io.avg_q_sz",
"system.io.w_await",
"system.io.w_s",
"system.io.util",
"system.cpu.pct_usage",
"system.cpu.user",
"system.load.1",
],
      topAlign:[]
      
    }
  },
  created(){

this.readFile('/kpi_cloudbed1_metric_0320.csv');
// console.log(this.nodeMetric);

  },
  mounted() {
   
  },
  methods: {
    onRadioChange(){
       this.getEchart();

    },
    readFile(nodeMetricFilePath) {
   axios.get(nodeMetricFilePath).then(response=>{
    //  console.log(response.data);
     this.processNodeMetric(response.data);
    
    //  console.log(this.goldMetric['adservice-grpc']['timeStamp']);
    //  this.getEchart();

   })

  },

  processNodeMetric(nodeData){
      var rows = nodeData.split('\r\n');
      this.timeStamp.push(new Date(parseInt(rows[1].split(',')[0]) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '));
      
      

      for(var i=1;i<rows.length;i++){
         
          var row = rows[i].split(',');
         
          // console.log(i);
          if(typeof(this.nodeMetric[row[2]])=="undefined"){
            //   console.log(111);
            // console.log(row[2]);
            if(this.services.indexOf(row[2])==-1)continue;
              this.nodeMetric[row[2]]=[];
            //   console.log(this.nodeMetric[row[1]]);
          }
          if(typeof(this.nodeMetric[row[2]][row[1]])=="undefined"){
              this.nodeMetric[row[2]][row[1]]=[];
          }
          this.nodeMetric[row[2]][row[1]].push(row[3]);
          // console.log(this.nodeMetric);
          if(i>1&&row[0]!=rows[i-1].split(',')[0]){
              this.timeStamp.push(new Date(parseInt(row[0]) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '));

          }
         
         

      }

      // console.log(this.nodeMetric);
      // this.services=Object.keys(this.nodeMetric);
      this.radio=this.services[0];
      this.services.pop();
      // console.log(this.services);
      for(var i=0;i<this.services.length;i++){
        this.topAlign.push(i*1000+900);
      }


  this.getEchart();

  },


    
    randomData() {
      this.now = new Date(+this.now + this.oneDay);
      this.value = this.value + Math.random() * 25 - 10;
      return {
        name: this.now.toString(),
        value: [
            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
            Math.round(this.value)
        ]
      };
    },
    getEchart() {
     
      let myChart = echarts.init(document.getElementById('chart_dt1'));
  
      

      this.option = {
        tooltip: {
    trigger: 'axis'
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },

        // color: ['#b54c5d'],
        calculable: true,
        xAxis: {
          data:this.timeStamp,
          // type: 'time',
          name: 'time',
          boundaryGap: false,
          // splitNumber: 5,
          // axisLabel: {
          //   formatter(value) {
          //     let date = new Date(value);
          //     return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
          //   }
          // },
          axisTick: {
            show: false
          }, 
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8'
            }
          },
          splitLine: {
            show: false
          }
          
        },
        yAxis: {
          type: 'value',
          scale: true,
          name: 'value',
          min: 0,
          boundaryGap:  false,
          axisTick: {
            show: false
          }, 
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8'
            }
          },
          splitLine: {
            show: false
          },
        
        },
        series: [
        //   {
        //   name: 'adservice-grpc',
        //   type: 'line',
        //   xAxisIndex: 0,
        //   yAxisIndex: 0,
        //   itemStyle: {
        //     opacity: 0,
        //   },
        //   // data: this.xData,
        //   data:this.goldMetric['adservice-grpc']['count'],
          
        //   smooth: true
        // },
      
        ]
      }

        var series =Object.keys(this.nodeMetric[this.radio]);

      for(var i=0;i<series.length;i++){
         var temp={};
         temp['name']=series[i];
         temp['type']='line';
         temp['xAxisIndex']=0;
         temp['yAxisIndex']=0;
         var itemstyle={};
         itemstyle['opacity']=0;
         temp['itemStyle']=itemstyle;
         temp['data']=this.nodeMetric[this.radio][series[i]];
         temp['smooth']=true;
         this.option.series.push(temp);
      }

      myChart.setOption(this.option, true);

      // window.addEventListener('resize', () => {
      //   myChart.resize();
      // });

      // this.timer = setInterval(() => {
      //   for (let i = 0; i < 5; i++) {
      //     this.xData.shift();
      //     this.xData.push(this.randomData());
      //   }

      //   myChart.setOption(this.option, true);
      // }, 2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  // left: 1282px;
  top: 800px;
  width: 100%;
  height: 800px;


  .chartsdom {
    width: 100%;
    height: 100%;
  }
}

</style>
