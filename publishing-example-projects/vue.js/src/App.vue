<template>
  <div id="app">
    <jd-stock-price></jd-stock-price>
    <jd-stock-finder v-if="showStockFinder"></jd-stock-finder>

    <button v-if="!showStockFinder" @click="showStockFinder = true">Load finder component</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return { showStockFinder: false }
  },
  components: {
    // HelloWorld
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
