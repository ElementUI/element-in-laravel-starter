<template>
  <div id="app">
    <example></example>
    <el-button icon="edit">Hello Element</el-button>
  </div>
</template>
<script>
  import Example from './components/Example.vue';

  export default {
    name: 'app',
    components: {
      Example
    }
  };
</script>
