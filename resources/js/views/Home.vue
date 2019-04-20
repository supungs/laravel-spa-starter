<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Temp Guide</h4>
            <div class="d-flex align-items-center flex-row m-t-30">
              <div class="display-5 text-info">
                <i class="mdi mdi-weather-rainy"></i> <span>28<sup>°</sup></span>
              </div>
              <div class="m-l-10">
                <h3 class="m-b-0">Saturday</h3><small>Ahmedabad, India</small>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <i class="mdi mdi-emoticon font-20 text-info"></i>
                            <p class="font-16 m-b-5">New Clients</p>
                        </div>
                        <div class="col-5">
                            <h1 class="font-light text-right mb-0">23</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <i class="mdi mdi-poll font-20 text-danger"></i>
                            <p class="font-16 m-b-5">New Invoices</p>
                        </div>
                        <div class="col-5">
                            <h1 class="font-light text-right mb-0">37</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <i class="mdi mdi-image font-20 text-success"></i>
                            <p class="font-16 m-b-5">New Projects</p>
                        </div>
                        <div class="col-5">
                            <h1 class="font-light text-right mb-0">6</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <i class="mdi mdi-currency-eur font-20 text-purple"></i>
                            <p class="font-16 m-b-5">New Sales</p>
                        </div>
                        <div class="col-5">
                            <h1 class="font-light text-right mb-0">12.9</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        

      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Recent Comments</h4>
          </div>

          <div class="comment-widgets" style="height:324px;">
            <!-- Comment Row -->
            <div class="d-flex flex-row comment-row m-t-0">
              <div class="p-2">
                <img src="img/users/1.jpg" alt="user" width="50" class="rounded-circle">
              </div>
              <div class="comment-text w-100">
                <h6 class="font-medium">James Anderson</h6>
                <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                <div class="comment-footer">
                  <span class="text-muted float-right">April 14, 2016</span>
                  <span class="label label-rounded label-primary">Pending</span>
                </div>
              </div>
            </div>
            <!-- Comment Row -->
            <div class="d-flex flex-row comment-row m-t-0">
              <div class="p-2">
                <img src="img/users/2.jpg" alt="user" width="50" class="rounded-circle">
              </div>
              <div class="comment-text w-100">
                <h6 class="font-medium">James Anderson</h6>
                <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                <div class="comment-footer">
                  <span class="text-muted float-right">April 13, 2016</span>
                  <span class="label label-success label-rounded">Approved</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
