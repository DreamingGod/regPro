<template>
  <div id="app">
    <regHeader></regHeader>
    <router-view></router-view>
    <regFooter></regFooter>
  </div>
</template>

<script>
  import regHeader from './components/Header.vue'
  import regFooter from './components/Footer.vue'
  export default {
    components: {
      regHeader,
      regFooter
    }
  }
</script>

<style>
#app {
}
</style>
