<template>
  <div class="auth-box">
    <div id="recoverform">
        <div class="logo">
            <span class="db"><img src="img/logo-icon.png" alt="logo"></span>
            <h5 class="font-medium m-b-20">Recover Password</h5>
            <span>Enter your Email and instructions will be sent to you!</span>
        </div>
        <div class="row m-t-20">
            <!-- Form -->
            <form class="col-12" action="index.html">
                <!-- email -->
                <div class="form-group row">
                    <div class="col-12">
                        <input class="form-control form-control-lg" type="email" required="" placeholder="Username">
                    </div>
                </div>
                <!-- pwd -->
                <div class="row m-t-20">
                    <div class="col-12">
                        <button class="btn btn-block btn-lg btn-danger" type="submit" name="action">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>
