<!-- use vue component template -->
<template>
  <div class="flex p-4 justify-between">
    <!-- website logo (kyle_logo) -->
    <img src="../assets/imgs/Kyle_Logo.svg" alt="kyle_logo" />
    <!-- quick nav btns for single page applications -->
    <div class="flex">
      <NavBtn btnText="About" btnLink="/" />
      <NavBtn btnText="Work" btnLink="/work" />
      <NavBtn btnText="Projects" btnLink="/projects" />
      <NavBtn btnText="Contact" btnLink="/contact" />
    </div>
  </div>
</template>

<!-- export  -->
<script>
// import nav btn component
import NavBtn from './NavBtn.vue';
export default {
  name: 'Header',
  components: {
    NavBtn,
  },
};
</script>
