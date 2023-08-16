<template>
  <div class="bg-dark-gray h-screen w-screen overflow-x-hidden">
    <Header />
    <Landing />
    <About />
  </div>
</template>

<script>
// import header component
import Header from '../components/Header.vue';
import Landing from '../components/Landing.vue';
import About from '../components/About.vue';
export default {
  name: 'App',
  components: {
    Header,
    Landing,
    About,
  },
};
</script>
