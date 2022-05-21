<!--
 描述: 动态轮播折线图
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content" > 
      <div class="sn-title">黄金指标
         <el-radio-group v-model="radio" @change="onRadioChange" >
    <el-radio :label="1">count</el-radio>
    <el-radio :label="2">mrt</el-radio>
    <el-radio :label="3">rr</el-radio>
    <el-radio :label="4">sr</el-radio>
  </el-radio-group>
        </div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_dt"></div> 
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
      goldMetric:[]
      
    }
  },
  created(){

this.readFile('/metric_service_0320.csv');
console.log(this.goldMetric);

  },
  mounted() {
   
  },
  methods: {
    onRadioChange(){
      let myChart = echarts.init(document.getElementById('chart_dt'),'dark');
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
    readFile(filePath) {
      var res;
   axios.get(filePath).then(response=>{
    //  console.log(response.data);
     this.processGoldMetric(response.data);
    //  console.log(this.goldMetric['adservice-grpc']['timeStamp']);
     this.getEchart();

   })
  },

  processGoldMetric(goldData){
    var goldDataSplit=goldData.split('\n');
    console.log(goldDataSplit[0]);
    let label=['service','timestamp','rr','sr','mrt','count'];
    var nowname=goldDataSplit[1].split(',')[0];
    this.goldMetric[nowname]=new Array();
    this.goldMetric[nowname]['timeStamp']=[];
    this.goldMetric[nowname]['rr']=[];
    this.goldMetric[nowname]['sr']=[];
    this.goldMetric[nowname]['mrt']=[];
    this.goldMetric[nowname]['count']=[];
    for(var i=1;i<goldDataSplit.length;i++)
    {
      if(i>1&&goldDataSplit[i].split(',')[0]!=goldDataSplit[i-1].split(',')[0])
      {
        // console.log(nowname);
        nowname=goldDataSplit[i].split(',')[0];
        // console.log(nowname);
        this.goldMetric[nowname]=new Array();
        this.goldMetric[nowname]['timeStamp']=[];
        this.goldMetric[nowname]['rr']=[];
        this.goldMetric[nowname]['sr']=[];
        this.goldMetric[nowname]['mrt']=[];
        this.goldMetric[nowname]['count']=[];
        }
        var rowSplit=goldDataSplit[i].split(',');
        // console.log(rowSplit);
        this.goldMetric[nowname]['timeStamp'].push(new Date(parseInt(rowSplit[1]) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '));
        this.goldMetric[nowname]['rr'].push(rowSplit[2]);
        this.goldMetric[nowname]['sr'].push(rowSplit[3]);
        this.goldMetric[nowname]['mrt'].push(rowSplit[4]);
        this.goldMetric[nowname]['count'].push(rowSplit[5]);
        // console.log(this.goldMetric[nowname]['count'])


    }
    console.log(this.goldMetric);
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
      let myChart = echarts.init(document.getElementById('chart_dt'),'dark');
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
  // top: 1548px;
  width: 100%;
  // height: 400px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>
