<template>
  <div id="main-wrapper" data-navbarbg="skin6" data-theme="light" data-layout="vertical" data-sidebartype="full" data-boxed-layout="full">
    <app-header></app-header>
    <sidebar></sidebar>
    <div class="page-wrapper">
      <div class="page-breadcrumb">
        <div class="row">
          <div class="col-5 align-self-center">
            <h4 class="page-title">{{pageTitle}}</h4>
          </div>
          <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/home">Home</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">{{pageTitle}}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  import AppHeader  from './header.vue'
  import Sidebar from './sidebar.vue'
  import custom from '../utils/custom'
  
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
      custom.initUI();
    },
    watch: {
      $route(to, from) {  //set the title on route  change
        this.pageTitle = to.meta.title || 'Title';
        document.title = this.pageTitle;
      },
    }
  }

window.onload = function() {
  custom.initUI();
};
</script>
