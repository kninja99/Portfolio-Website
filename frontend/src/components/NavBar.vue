<script>
import NavBtn from './NavBtn.vue';
export default {
  name: 'NavBar',
  components: {
    NavBtn,
  },
};
</script>

<template>
  <div class="flex flex-col">
    <!-- mobile nav btn -->
    <button class="h-8 w-8 self-end fixed top-7 z-10 md:hidden">
      <img src="../assets/imgs/mobile-nav-btn.svg" alt="navBtn" />
    </button>
    <nav
      class="absolute bg-project-black/70 right-0 top-0 py-14 h-[100%] w-[40%] flex flex-col bg:project-black md:flex-row md:relative md:top-0 md:right-0 md:bg-dark-gray md:h-auto md:w-auto md:py-0"
    >
      <NavBtn btnText="About" btnLink="/" />
      <NavBtn btnText="Work" btnLink="/work" />
      <NavBtn btnText="Projects" btnLink="/projects" />
      <NavBtn btnText="Contact" btnLink="/contact" />
    </nav>
  </div>
</template>
