<template>
  <div id="main" class="bg-dark-gray h-screen w-screen overflow-x-hidden">
    <Header />
    <Landing />
  </div>
</template>

<script>
// import header component
import Header from './components/Header.vue';
import Landing from './components/Landing.vue';
export default {
  name: 'App',
  components: {
    Header,
    Landing,
  },
};
</script>
