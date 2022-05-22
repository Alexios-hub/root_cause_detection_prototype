<template>
  <div>
    <div v-if="isShow" style="width: 95%; alignment: center;margin: 0 auto">
      <div id="table1" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[0]}}</el-row>
        <el-table
            :data="this.tableData1 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table2" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[1]}}</el-row>
        <el-table
            :data="this.tableData2 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table3" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[2]}}</el-row>
        <el-table
            :data="this.tableData3 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table4" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[3]}}</el-row>
        <el-table
            :data="this.tableData4 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table5" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[4]}}</el-row>
        <el-table
            :data="this.tableData5 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table6" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[5]}}</el-row>
        <el-table
            :data="this.tableData6 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table7" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[6]}}</el-row>
        <el-table
            :data="this.tableData7 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table8" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[7]}}</el-row>
        <el-table
            :data="this.tableData8"
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table9" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[8]}}</el-row>
        <el-table
            :data="this.tableData9 "
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
      <div id="table10" style="width: 100%;height:800px; alignment: center;">
        <el-row type="flex" justify="center"  align="middle" style="font-size: 20px" >{{fileName[9]}}</el-row>
        <el-table
            :data="this.tableData10"
            height="500"
            style="width: 100%">
          <el-table-column
              label="timestamp"
              prop="timestamp"
              width="180">
          </el-table-column>
          <el-table-column
              label="cmdb_id"
              prop="cmdb_id"
              width="600">
          </el-table-column>
          <el-table-column
              label="kpi_name"
              prop="kpi_name"
              width="400">
          </el-table-column>
          <el-table-column
              label="value"
              prop="value">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData7: [],
      tableData8: [],
      tableData9: [],
      tableData10: [],
      isShow: false,
      flag: 0
    };

  },
  created() {
    this.father()
  },
  mounted() {
    this.isShow = true

    this.$forceUpdate()
  },
  methods: {
    father() {
      this.getData();//这个函数是去获得所有数据
      setTimeout(()=>{
        //把fileData里的数据传给tableData
        this.tableData1 = this.fileData[0]
        this.tableData2 = this.fileData[1]
        this.tableData3 = this.fileData[2]
        this.tableData4 = this.fileData[3]
        this.tableData5 = this.fileData[4]
        this.tableData6 = this.fileData[5]
        this.tableData7 = this.fileData[6]
        this.tableData8 = this.fileData[7]
        this.tableData9 =this.fileData[8]
        this.tableData10=this.fileData[9]
      },4000)
      console.log(this.fileData)


    },
    getData() {
      for (let i = 0; i < this.fileName.length; i++) {
        this.readFile('/istio-03-20/kpi_' + this.fileName[i] + '.csv', i)
      }
    },
    readFile(filePath, i) {
      axios.get(filePath).then(response => {
        const fileName = filePath.split('.')[0];
        this.loadCsvData(response.data, fileName, i);
        this.fileData[i].sort(this.compare('value'))
      })
    },
    loadCsvData(csvData, fileName, j) {
      //读csv数据并存进fileData
      this.fileData[j] = [];
      var csvDataSplit = csvData.split('\n');
      for (let i = 1; i < csvDataSplit.length - 1; i++) {
        var keys = csvDataSplit[i].split(",")
        if (keys[1].indexOf("cartservice") == 0 && keys[0] >= 1647736751 - 3600 && keys[0] <= 1647736751 + 240 && keys[3] != 0) {
          //一些数据的挑选
          var temp = {}
          temp['timestamp'] = keys[0]
          temp['cmdb_id'] = keys[1]
          temp['kpi_name'] = keys[2]
          temp['value'] = keys[3]
          this.fileData[j].push(temp);
        }
      }
    },
    compare(property) {
      //排序函数
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      }
    }
  }
}
</script>

<style scoped>


</style>