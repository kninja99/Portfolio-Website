<template>
  <nav>
    <NavBtn btnText="About" btnLink="/" />
    <NavBtn btnText="Work" btnLink="/work" />
    <NavBtn btnText="Projects" btnLink="/projects" />
    <NavBtn btnText="Contact" btnLink="/contact" />
  </nav>
</template>

<script>
import NavBtn from './NavBtn.vue';
export default {
  name: 'NavBar',
  components: {
    NavBtn,
  },
};
</script>
