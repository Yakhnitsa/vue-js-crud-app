<template>
  <div id="app">
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <a class="navbar-brand" href="/">Vue.js CRUD application</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                      <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/edit-user" class="nav-link">Edit</router-link>
                  </li>

              </ul>
          </div>
      </nav>
      <div class="container-fluid ml-sm-0 ml-md-2 ml-lg-5">
          <router-view/>
      </div>

  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
