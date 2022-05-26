<template>
    <div>
 <div   class="wrap-container sn-container" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);height: 1100px;width: 98%;margin-top:5%;margin-bottom:10%;margin-left:1%;margin-right:1%"  > 
    <div class="sn-content"  > 
      <div class="sn-title">pod Istio指标
        <div style="margin-top:20px;">
       <el-radio-group v-model="radio" @change="onRadioChange()" v-for="(item,i) in kpi" :key="i">
       
    <el-radio :label="item"  style="margin:10px">{{item}}</el-radio>
 
  </el-radio-group>
  </div>
<div  id="chart_dt3" style="width:99%;height:600px "></div> 
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
      loadStack:[],
      showLoading:false,
      radio: 'container_cpu_user_seconds',
      option: null,
      container_kpi:['kpi_istio_request_bytes.csv','kpi_istio_request_duration_milliseconds.csv','kpi_istio_request_messages.csv','kpi_istio_requests.csv','kpi_istio_response_bytes.csv','kpi_istio_response_messages.csv','kpi_istio_tcp_connections_closed.csv',
      'kpi_istio_tcp_connections_opened.csv','kpi_istio_tcp_received_bytes.csv','kpi_istio_tcp_sent_bytes.csv'],
      podMetric:[],
      timeStamp:[],
      kpi:[],
        //   loading : this.$loading({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
    
    }
  },
  created(){
      for(var i=0;i<this.container_kpi.length;i++){
this.readFile('/'+this.container_kpi[i]);
      }
     


// console.log(this.goldMetric);


  },
  mounted() {
 
  },
  methods: {
    onRadioChange(){
      // let myChart = echarts.init(document.getElementById('chart_dt2'));
    
      // myChart.setOption(this.option, true);
      this.getEchart();
       


    },
    readFile(path) {
     
   axios.get(path).then(response=>{

     this.processData(response.data);
    //  console.log(this.goldMetric['adservice-grpc']['timeStamp']);
    //  this.getEchart();

   })

  },
  processData(data){
    if(this.showLoading==false){
      this.showLoading=true
    
    }
    this.loadStack.push(1)
      var dataSplit=data.split('\r\n');
    //   console.log(dataSplit);
      var tmpData1=[];
      var tmpData2=[];
      for(var i=0;i<dataSplit.length;i++){
        //   if(p1&&p2)break;
        //   var row=dataSplit[i].split(',');
        //   if(row[0]>=1647730800&&row[0]<=1647734340){
        //       p1=true;
        //       tmpData1=dataSplit.slice(i,2400+i);
        //       i=2399+i;
              
        //   }
        //   else if(row[0]>=1647734400&&row[0]<=1647737940){
        //       p2=true;
        //       tmpData2=dataSplit.slice(i,2400+i);
        //       i=2399+i;
        //   }
           var row = dataSplit[i].split(',');
           if(row[0]>=1647730800&&row[0]<=1647734340)tmpData1.push(dataSplit[i]);
            if(row[0]>=1647734400&&row[0]<=1647737940)tmpData2.push(dataSplit[i]);
      }
      var tmpData=tmpData1.concat(tmpData2);

      // console.log(tmpData);
      if(this.timeStamp.length<120){
      for(var i=0;i<60;i++){
          let row=tmpData[i].split(',');
          this.timeStamp.push(new Date(parseInt(row[0]) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '))
      }
       for(var i=0;i<60;i++){
          let row=tmpData2[i].split(',');
          this.timeStamp.push(new Date(parseInt(row[0]) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '))
      }
     
      }

    //   console.log(this.timeStamp);
      for(var i=0;i<tmpData.length;i++){
          let row =tmpData[i].split(',');
          if(this.podMetric[row[2]]==undefined){
              this.podMetric[row[2]]=[];
          }
          if(this.podMetric[row[2]][row[1]]==undefined)
          this.podMetric[row[2]][row[1]]=[];
          this.podMetric[row[2]][row[1]].push(row[3]);

      }
      // console.log(this.podMetric);
      
      this.kpi=Object.keys(this.podMetric);
      // console.log(this.kpi);
      this.radio=this.kpi[0];
    //   console.log(this.kpi.length)
    //   console.log(this.kpi)
      if(this.kpi.length==62){
         this.timeStamp=this.timeStamp.slice(39,104);
this.getEchart();
      }
     
     this.loadStack.pop();
    //  if(this.loadStack.length==0)this.loading.close();
      
  

       
  },


 
   
    getEchart() {
      //  console.log(this.goldMetric['adservice-grpc']['timeStamp']);
      let myChart = echarts.init(document.getElementById('chart_dt3'));
 

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
        // color: ['#b54c5d'],
        calculable: true,
        xAxis: {
          data:this.timeStamp,
          // type: 'time',
          name: 'time',
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
        // }
        

        ]
      }
      var nodes=Object.keys(this.podMetric[this.radio]);
      for(var i=0;i<nodes.length;i++){
        var dic={};
        dic['name']=nodes[i];
        dic['type']='line';
        dic['xAxisIndex']=0;
        dic['yAxisIndex']=0;
        var itemStyle={};
        itemStyle['opacity']=0;
        dic['itemStyle']=itemStyle;
        dic['data']=[];
        dic['data']=this.podMetric[this.radio][nodes[i]].slice(39,104);
        dic['smooth']=true;
         this.option.series.push(dic);
      }
      myChart.setOption(this.option, true);

  
    }
  },

};



</script>

<style lang="scss" scoped>
.sn-container {
  // left: 1282px;
  top: 2600px;
  width: 100%;
  height: 1000px;


  .chartsdom {
    width: 100%;
    height: 100%;
  }
}

</style>