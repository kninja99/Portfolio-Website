<template class="w-screen">
  <div
    class="text-dark-white flex flex-col mt-36 mx-12 items-center justify-center"
  >
    <div class="max-w-4xl">
      <SectionHeader title="About Me" />
      <p class="mb-3">
        Hello! I'm Kyle Damschen, an enthusiastic recent graduate with a
        Computer Science degree, eager to embark on a journey in the world of
        software engineering. My passion for technology and problem-solving has
        driven me to pursue a career where I can transform innovative ideas into
        functional, user-centric software solutions.
      </p>
      <p class="mb-3">
        Currently I am working with the Citrus Clonal Protection Program at UC
        Riverside, where I am taking advantage of technology to enhance lab
        teams performance and their experiance. I have also worked with ACM@UCR
        as a software developer, where I have been able to work on a variety of
        projects and gain valuable experience.
      </p>
      <p class="mb-3">
        Here are a few technologies I've been working with recently:
      </p>
      <div class="flex sm:w-3/6 sm:justify-evenly">
        <ul class="mx-1 my-2">
          <li>JavaScript (ES6+)</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>C++</li>
        </ul>
        <ul class="mx-1 my-2">
          <li>HTML & CSS</li>
          <li>Git</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
    <img
      class="w-64"
      src="../assets/imgs/Personal_Photo.jpg"
      alt="personal Photo"
    />
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
