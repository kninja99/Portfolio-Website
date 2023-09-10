<script>
import NavBtn from './NavBtn.vue';
export default {
  name: 'NavBar',
  components: {
    NavBtn,
  },
  methods: {
    // toggle mobile nav
    toggleMobileNav() {
      const nav = document.querySelector('nav');
      // toggle sliding animation
      nav.classList.toggle('animate-slideLeftToRight');
      nav.classList.toggle('animate-slideRightToLeft');
      // check if class list has hidden class
      if (nav.classList.contains('hidden')) {
        nav.classList.toggle('hidden');
      } else {
        // timer that fixes slide right to left animation
        setTimeout(() => {
          nav.classList.toggle('hidden');
        }, 400);
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <!-- mobile nav btn -->
    <button
      class="h-8 w-8 self-end fixed top-7 z-[13] md:hidden"
      @click="toggleMobileNav"
    >
      <img src="../assets/imgs/mobile-nav-btn.svg" alt="navBtn" />
    </button>
    <nav
      class="absolute bg-project-black/80 right-0 top-0 py-14 h-[100%] w-[60%] z-[12] animate-slideLeftToRight sm:w-[40%] flex hidden flex-col bg:project-black md:flex md:flex-row md:relative md:top-0 md:right-0 md:bg-dark-gray md:h-auto md:w-auto md:py-0 md:animate-[none]"
    >
      <NavBtn btnText="About" btnLink="/" />
      <NavBtn btnText="Work" btnLink="/work" />
      <NavBtn btnText="Projects" btnLink="/projects" />
      <NavBtn btnText="Contact" btnLink="/contact" />
    </nav>
  </div>
</template>
