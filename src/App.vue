<template>
  <div id="app">
    <vue-scroll ref="vs">
      <vue-page-transition>
        <router-view @change="scroolTo"/>
      </vue-page-transition>
    </vue-scroll>
  </div>
</template>
<script>
  export default {
    methods: {
      scroolTo() {
        this.$refs.vs.scrollTo(
          {
            y: '100%'
          },
          500,
          "easeInQuad"
        );
      }
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    height: 100vh;
    overflow: hidden;
  }
</style>