<template>
  <div id="app">
    <PostHandler/>
    <SiteFooter/>
  </div>
</template>

<script>
import PostHandler from './components/PostHandler.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    PostHandler,
    SiteFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 5rem;
}

body {
  margin: 0;
}


figure img {
  max-width: 100%;
  position: relative;
  left: calc(-30% + -400px);
}

figure.logo {
  margin: 0;
  overflow: hidden;
  text-align: center;
}

figure.slide-right img {
  transition: left 2s ease-in-out;
  left: 0px;
}

figure.slide-out img {
  position: relative;
  transition: left 4s;
  left: 100vw;
  right: 0;
}

</style>
