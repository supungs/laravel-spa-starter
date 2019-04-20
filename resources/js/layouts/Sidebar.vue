<template>
  <aside class="left-sidebar" data-sidebarbg="skin5">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav">
        <ul id="sidebarnav">
          <li class="sidebar-item">
            <router-link to="/home" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
              <i class="mdi mdi-av-timer"></i>
              <span class="hide-menu">Dashboard</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/page" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
              <i class="mdi mdi-arrange-bring-forward"></i>
              <span class="hide-menu">Form Basic</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>