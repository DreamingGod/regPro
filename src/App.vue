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
    data () {
      return {
        answer: '',
        naireId: 0,
        activeList: [],
        activeOpt: false,
        btnActive: false,
        scrollerHeight: '0px'
      }
    },
    computed: {
      isAccordSubmit () {
        return this.activeList.indexOf('A') >= 0 && this.activeList.indexOf('B') >= 0 && this.activeList.indexOf('C') >= 0
      }
    },
    components: {
      regHeader,
      regFooter
    },
    route: {
    },
    ready () {
    },
    methods: {
      doSubmit () {
      }
    },
    events: {
//      addActiveList (option) {
//        this.activeList.push(option)
//      },
//      reduceActiveList (option) {
//        this.activeList.splice(this.activeList.indexOf(option), 1)
//      }
    }
  }
</script>

<style>
#app {
}
</style>
