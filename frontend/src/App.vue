<template>
  <div id="main" class="bg-dark-gray h-screen w-screen">
    <Header />
  </div>
</template>

<script>
// import header component
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
