<template>
  <div class="mt-20 px-8 mb-10 w-screen flex flex-col items-center">
    <div class="w-full max-w-4xl">
      <SectionHeader title="Things I have Built" />
      <FeaturedProject />
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import FeaturedProject from './FeaturedProject.vue';
export default {
  name: 'Projects',
  components: {
    SectionHeader,
    FeaturedProject,
  },
};
</script>
