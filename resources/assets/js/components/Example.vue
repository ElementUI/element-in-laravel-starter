<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="3">备选项</el-radio>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'This is a Example~!',
        radio: '1'
      }
    }
  }
</script>
