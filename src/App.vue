<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: "App",
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss">
.el-table__header tr{
    padding: 0;
    height: 60px;
    background:rgba(245,247,250,1);
    box-shadow:0px 1px 0px 0px rgba(237,239,242,1);
    th {
        background:rgba(245,247,250,1);
        box-shadow:0px 1px 0px 0px rgba(237,239,242,1);
        padding: 0;
        font-size:12px;
        font-family:PingFangSC-Regular;
        color:rgba(48,49,51,1);
    }
}
.el-table__body tr{
    padding: 0;
    height: 50px;
    font-size:12px;
    font-family:PingFangSC-Regular;
    color:rgba(96,98,102,1);
    td {
        padding: 0;
    }
}
	/*video::-webkit-media-controls-enclosure {
		display: none !important;
  }*/
  #app {
    height: 100vh;
  }
</style>
