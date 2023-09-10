<!-- use vue component template -->
<template>
  <div class="flex p-4 justify-between">
    <!-- website logo (kyle_logo) -->
    <img src="../assets/imgs/Kyle_Logo.svg" alt="kyle_logo" />
    <!-- quick nav btns for single page applications -->
    <NavBar />
  </div>
</template>

<!-- export  -->
<script>
import NavBar from './NavBar.vue';
export default {
  name: 'Header',
  components: {
    NavBar,
  },
};
</script>
