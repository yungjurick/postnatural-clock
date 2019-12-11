<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/styles/reset.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
html, body {
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    display: none !important;
  }
  input:focus, textarea:focus, select:focus{
    outline: none !important;
  }
  input, optgroup, select, textarea {
    -webkit-appearance: none !important;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
