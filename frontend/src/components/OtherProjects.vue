<template>
  <div class="flex flex-col justify-center items-center w-[80%] max-w-[1300px]">
    <!-- Section header -->
    <div class="flex flex-col justify-center items-center">
      <h3 class="text-white text-2xl md:text-3xl">Other Noteworthy Projects</h3>
      <a
        href="https://github.com/kninja99"
        target="_blank"
        class="relative text-light-blue mt-5 group"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-0.5 bg-light-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-middle"
        ></span>
        View the Archive
      </a>
    </div>
    <!-- Projects -->
    <div class="flex flex-wrap mt-8 justify-center items-center">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :skills="project.skills"
        :link="project.link"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import projectData from '../assets/Data/ProjectData.json';
export default {
  name: 'OtherProjects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: projectData,
    };
  },
};
</script>
