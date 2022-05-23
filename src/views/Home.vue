<!--
 描述: 酷屏首页模板
 作者: Jack Chen
 日期: 2020-04-29
-->

<template>


  
<div class="home-container">
  	<div class="wrap" ref="editor">
      <!-- <div class="top"></div> -->
<Entry/>
<NodeLine/>
<pod/>
<Istio/>
</div>
</div>
 
</template>

<script>
import {screenSize} from '@/assets/js/utils'
import NodeLine from '../components/node/nodeLine.vue';
import Entry from '../components/Entry/Entry.vue';
import Pod from '../components/pod/pod.vue';
import Istio from '../components/Istio/Istio.vue';
import WordCloud from '../components/companySummary/wordCloud.vue';
import WaterPolo from '../components/waterPolo/index.vue';

export default {
  name: 'Home',
  components: { NodeLine, Entry, Pod, Istio, WordCloud, WaterPolo },


  data() {
    return {}
  },
  computed: {},
  created() {
  },
  mounted() {
    // screenSize(this.$refs.editor);
  },
  methods: {}
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
</style>
