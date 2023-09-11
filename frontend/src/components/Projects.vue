<template>
  <div
    class="mt-20 px-8 mb-10 w-screen flex flex-col items-center"
    id="projects"
  >
    <div class="w-full max-w-4xl">
      <SectionHeader title="Things I have Built" />
      <FeaturedProject
        v-for="(project, index) in featuredProjects"
        :key="index"
        :index="index"
        :image="project.image"
        :description="project.description"
        :skills="project.skills"
        :title="project.title"
      />
    </div>
    <OtherProjects />
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import FeaturedProject from './FeaturedProject.vue';
import OtherProjects from './OtherProjects.vue';
// data reading from json file
import FeaturedProjects from '../assets/Data/FeaturedProjects.json';
export default {
  name: 'Projects',
  components: {
    SectionHeader,
    FeaturedProject,
    OtherProjects,
  },
  data() {
    return {
      featuredProjects: FeaturedProjects,
    };
  },
};
</script>
