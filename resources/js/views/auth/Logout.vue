<template>
  <div class="auth-box">
    <div id="loginform">
      <div class="logo">
          <span class="db"><img src="img/logo-icon.png" alt="logo"></span>
          <h5 class="font-medium m-b-20">Loging Out</h5>
          <spinner :inline="true"/>
      </div>
    </div>
  </div>
</template>

<script>
  import helper from '../../utils/helper';
  import Spinner from '../../ui/Spinner';

  export default {
    components: {
      Spinner
    },
    data () {
      return {
        err: false
      }
    },
    methods : {
      tryLogout(){
        helper.logout(this.logoutSuccess, this.logoutFail);
      },
      logoutSuccess(user) {
        this.$router.push('/login');
      },
      logoutFail() {
        this.err = true;
      }
    },
    mounted() {
      this.tryLogout();
    }
  }
</script>
