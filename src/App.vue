<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/reset.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
