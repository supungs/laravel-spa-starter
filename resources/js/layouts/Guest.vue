<template>
  <div id="main-wrapper">
    <div class="auth-wrapper d-flex no-block justify-content-center align-items-center">

      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  import AppHeader  from './header.vue'
  import Sidebar from './sidebar.vue'
  
  export default {
    data () {
      return {
        pageTitle: 'Title'
      }
    },
    methods : {
    },
    components: {
      AppHeader, Sidebar
    },
    mounted() {
      this.pageTitle = this.$route.meta.title;  //Set the title on load
    },
    watch: {
      $route(to, from) {  //set the title on route  change
        this.pageTitle = to.meta.title || 'Title';
        document.title = this.pageTitle;
      },
    }
  }
</script>
