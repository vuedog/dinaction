<template>
  <div id="app">
    <vd-head></vd-head>
    <router-view></router-view>
  </div>
</template>

<script>
import VdHead from '@/components/VdHeader'

export default {
  name: 'app',
  components: {
    VdHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
