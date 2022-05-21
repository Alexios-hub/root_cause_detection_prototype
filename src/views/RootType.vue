<template>

</template>

<script>
import axios from "axios";
export default {
  name: "RootType",
  mounted() {
    this.init();
  },
  methods:{
    init()
    {
      this.$axios
          .get("../data/istio-03-20/kpi_istio_agent_endpoint_no_pod.csv")
          .then(res=>{
            let csv=res.data;
            console.log(csv);
          })
    }
  }
}
</script>

<style scoped>

</style>