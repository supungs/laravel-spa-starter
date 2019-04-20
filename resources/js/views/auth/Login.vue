<template>
  <div class="auth-box">
    <div id="loginform">
      <div class="logo">
          <span class="db"><img src="img/logo-icon.png" alt="logo"></span>
          <h5 class="font-medium m-b-20">Sign In to Admin</h5>
      </div>
      <!-- Form -->
      <div class="row">
        <div class="col-12">
          <form class="form-horizontal m-t-20" id="loginform" action="index.html">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="ti-user"></i></span>
              </div>
              <input type="text" class="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2"><i class="ti-pencil"></i></span>
              </div>
              <input type="text" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
            </div>
            <div class="form-group row">
              <div class="col-md-12">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember me</label>
                  <router-link to="recover" class="text-dark float-right"><i class="fa fa-lock m-r-5"></i> Forgot Password?</router-link>
                </div>
              </div>
            </div>
            <div class="form-group text-center">
              <div class="col-xs-12 p-b-20">
                <button class="btn btn-block btn-lg btn-info" type="submit">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
