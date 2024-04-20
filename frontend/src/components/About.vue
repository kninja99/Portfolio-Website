<template>
  <div class="text-dark-white flex flex-col mt-36 sm:mx-12 items-center justify-center mb-12" id="about">
    <div class="max-w-6xl flex flex-col md:flex-row items-center justify-center">
      <!-- about section -->
      <div class="w-2/3 cursor-default">
        <SectionHeader title="About Me" />
        <p class="mb-3">
          Hello! I'm Kyle Damschen, an enthusiastic software engineer, eagered to keep learning while I apply my skill
          sets
          to real world problems. My passion for technology and problem-solving
          has driven me to pursue a career where I can transform innovative
          ideas into functional, user-centric software solutions.
        </p>
        <p class="mb-3">
          Currently I am working with Raytheon, updating and maintaining
          internal middleware products. I have also worked with the
          Citrus Clonal Protection Program as a full stack developer, where I developed custom software to
          enhance the lab
          teams performance and their experience.
        </p>
        <p class="mb-3">
          Here are a few technologies I've been working with recently:
        </p>
        <div class="flex w-fill sm:justify-evenly">
          <ul class="mx-1 my-2">
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
          </ul>
          <ul class="mx-1 my-2">
            <li>HTML & CSS</li>
            <li>Git</li>
            <li>SQL</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <!-- photo section and photo border-->
      <div class="w-3/4 sm:w-2/4 md:w-1/3 sm:ml-12 border-light-blue border-2 mt-5 lg:mt-32 hover:animate-bgDrop">
        <!-- img overlay -->
        <div class="relative bg-gradient-to-tl from-light-blue to-dark-blue top-[-10px] left-[-12px] hover:bg-none">
          <img class="w-fill opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:animate-imgPop"
            src="../assets/imgs/Personal_Photo.jpg" alt="personal Photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
export default {
  name: 'About',
  components: {
    SectionHeader,
  },
};
</script>
