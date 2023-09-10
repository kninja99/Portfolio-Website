<template>
  <div class="flex flex-col justify-center items-center">
    <!-- Section header -->
    <div class="flex flex-col justify-center items-center">
      <h3 class="text-white text-2xl md:text-3xl">Other Noteworthy Projects</h3>
      <a
        class="text-light-blue mt-5"
        href="https://github.com/kninja99"
        target="_blank"
        >View the Archive</a
      >
    </div>
    <!-- Projects -->
    <div class="flex flex-wrap mt-8 justify-center items-center w-[80%]">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'OtherProjects',
  components: {
    ProjectCard,
  },
};
</script>
