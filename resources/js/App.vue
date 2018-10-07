<template>
  <div id="app">
    <example></example>
    <el-button @click="visible = true">Click to open me</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>You Should Try Element (This is in /resources/js/App.vue)</p>
    </el-dialog>
  </div>
</template>
<script>
  import Example from './components/Example.vue';

  export default {
    name: 'app',
    data () {
      return {
        visible: false,
      }
    },
    components: {
      Example
    }
  };
</script>
<style scoped>
  /* Add scoped styles */
  #app {
    padding: 20px;
  }
</style>
