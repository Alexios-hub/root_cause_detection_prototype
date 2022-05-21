<!--
 描述: 动态轮播折线图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content" > 
      <div class="sn-title">node指标
         <el-radio-group v-model="radio" @change="onRadioChange" >
    <el-radio :label="1">count</el-radio>
    <el-radio :label="2">mrt</el-radio>
    <el-radio :label="3">rr</el-radio>
    <el-radio :label="4">sr</el-radio>
  </el-radio-group>
        </div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_dt1"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import axios from'axios'
export default {
  name: "dynamicLine",
  data() {
    return {
       radio: 1,
      option: null,
      timer: null,
      xData: [],
      now: +new Date(2019, 1, 1),
      value: Math.random() * 1000,
      oneDay: 24 * 3600 * 1000,
    //   goldMetric:[],
      nodeMetric:[],
      timeStamp:[]
      
    }
  },
  created(){

this.readFile('/kpi_cloudbed1_metric_0320.csv');
console.log(this.nodeMetric);

  },
  mounted() {
   
  },
  methods: {
    onRadioChange(){
      let myChart = echarts.init(document.getElementById('chart_dt1'),'dark');
     switch(this.radio){
       case 1:
         
           this.option['series'][0]['data']=this.goldMetric['adservice-grpc']['count'];
           this.option['series'][1]['data']=this.goldMetric['adservice-http']['count'];
           this.option['series'][2]['data']=this.goldMetric['cartservice-grpc']['count'];
           this.option['series'][3]['data']=this.goldMetric['checkoutservice-grpc']['count'];
           this.option['series'][4]['data']=this.goldMetric['currencyservice-grpc']['count'];
           this.option['series'][5]['data']=this.goldMetric['emailservice-grpc']['count'];
            this.option['series'][6]['data']=this.goldMetric['frontend-http']['count'];
             this.option['series'][7]['data']=this.goldMetric['paymentservice-grpc']['count'];
             this.option['series'][8]['data']=this.goldMetric['productcatalogservice-grpc']['count'];
             this.option['series'][9]['data']=this.goldMetric['recommendationservice-grpc']['count'];
             this.option['series'][10]['data']=this.goldMetric['shippingservice-grpc']['count'];
         
         break;
            case 2:
            this.option['series'][0]['data']=this.goldMetric['adservice-grpc']['mrt'];
           this.option['series'][1]['data']=this.goldMetric['adservice-http']['mrt'];
           this.option['series'][2]['data']=this.goldMetric['cartservice-grpc']['mrt'];
           this.option['series'][3]['data']=this.goldMetric['checkoutservice-grpc']['mrt'];
           this.option['series'][4]['data']=this.goldMetric['currencyservice-grpc']['mrt'];
           this.option['series'][5]['data']=this.goldMetric['emailservice-grpc']['mrt'];
            this.option['series'][6]['data']=this.goldMetric['frontend-http']['mrt'];
             this.option['series'][7]['data']=this.goldMetric['paymentservice-grpc']['mrt'];
             this.option['series'][8]['data']=this.goldMetric['productcatalogservice-grpc']['mrt'];
             this.option['series'][9]['data']=this.goldMetric['recommendationservice-grpc']['mrt'];
             this.option['series'][10]['data']=this.goldMetric['shippingservice-grpc']['mrt'];
         break;
               case 3:
        this.option['series'][0]['data']=this.goldMetric['adservice-grpc']['rr'];
           this.option['series'][1]['data']=this.goldMetric['adservice-http']['rr'];
           this.option['series'][2]['data']=this.goldMetric['cartservice-grpc']['rr'];
           this.option['series'][3]['data']=this.goldMetric['checkoutservice-grpc']['rr'];
           this.option['series'][4]['data']=this.goldMetric['currencyservice-grpc']['rr'];
           this.option['series'][5]['data']=this.goldMetric['emailservice-grpc']['rr'];
            this.option['series'][6]['data']=this.goldMetric['frontend-http']['rr'];
             this.option['series'][7]['data']=this.goldMetric['paymentservice-grpc']['rr'];
             this.option['series'][8]['data']=this.goldMetric['productcatalogservice-grpc']['rr'];
             this.option['series'][9]['data']=this.goldMetric['recommendationservice-grpc']['rr'];
             this.option['series'][10]['data']=this.goldMetric['shippingservice-grpc']['rr'];
         break;
               case 4:
        this.option['series'][0]['data']=this.goldMetric['adservice-grpc']['sr'];
           this.option['series'][1]['data']=this.goldMetric['adservice-http']['sr'];
           this.option['series'][2]['data']=this.goldMetric['cartservice-grpc']['sr'];
           this.option['series'][3]['data']=this.goldMetric['checkoutservice-grpc']['sr'];
           this.option['series'][4]['data']=this.goldMetric['currencyservice-grpc']['sr'];
           this.option['series'][5]['data']=this.goldMetric['emailservice-grpc']['sr'];
            this.option['series'][6]['data']=this.goldMetric['frontend-http']['sr'];
             this.option['series'][7]['data']=this.goldMetric['paymentservice-grpc']['sr'];
             this.option['series'][8]['data']=this.goldMetric['productcatalogservice-grpc']['sr'];
             this.option['series'][9]['data']=this.goldMetric['recommendationservice-grpc']['sr'];
             this.option['series'][10]['data']=this.goldMetric['shippingservice-grpc']['sr'];
         break;
         

     }
      myChart.setOption(this.option, true);
       


    },
    readFile(nodeMetricFilePath) {
   axios.get(nodeMetricFilePath).then(response=>{
     console.log(response.data);
    //  this.processNodeMetric(response.data);
    
    //  console.log(this.goldMetric['adservice-grpc']['timeStamp']);
    //  this.getEchart();

   })

  },

  processNodeMetric(nodeData){
      var rows = nodeData.split('\n');
      this.timeStamp.push(rows[0].split(',')[0]);
      for(var i=0;i<rows.length;i++){
          var row = rows[i].split(',');
          if(i>1&&row[0]!=rows[i-1].split(',')[0]){
              this.timeStamp.push(row[0]);
          }
          
      }




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
      let myChart = echarts.init(document.getElementById('chart_dt1'),'dark');
      for (let i = 0; i < 1000; i++) {
        this.xData.push(this.randomData());
      }

      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          }
        },
        grid: {
          // top: '10%',
          // left: '3%',
          // right: '12%',
          // bottom: '3%',
          containLabel: true
        },
        color: ['#b54c5d'],
        calculable: true,
        xAxis: {
          data:this.goldMetric['adservice-grpc']['timeStamp'],
          // type: 'time',
          name: 'timeStamp',
          boundaryGap: false,
          splitNumber: 5,
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
        series: [{
          name: 'adservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['adservice-grpc']['count'],
          
          smooth: true
        },
        {
          name: 'adservice-http',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['adservice-http']['count'],
          
          smooth: true
        },
         {
          name: 'cartservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['cartservice-grpc']['count'],
          
          smooth: true
        },
          {
          name: 'checkoutservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['checkoutservice-grpc']['count'],
          
          smooth: true
        },
         {
          name: 'currencyservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['currencyservice-grpc']['count'],
          
          smooth: true
        },
         {
          name: 'emailservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['emailservice-grpc']['count'],
          
          smooth: true
        },
          {
          name: 'frontend-http',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['frontend-http']['count'],
          
          smooth: true
        },
         {
          name: 'paymentservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['paymentservice-grpc']['count'],
          
          smooth: true
        },
          {
          name: 'productcatalogservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['productcatalogservice-grpc']['count'],
          
          smooth: true
        },
         
          {
          name: 'recommendationservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['recommendationservice-grpc']['count'],
          
          smooth: true
        },
         {
          name: 'shippingservice-grpc',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            opacity: 0,
          },
          // data: this.xData,
          data:this.goldMetric['shippingservice-grpc']['count'],
          
          smooth: true
        },
        

        ]
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
  // height: 4000px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}

</style>
