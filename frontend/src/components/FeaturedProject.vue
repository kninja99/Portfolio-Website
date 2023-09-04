<script>
export default {
  name: 'FeaturedProject',
  props: {
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      img: this.image,
    };
  },
};
</script>

<template>
  <!-- Project card container (background for mobile devices render here) -->
  <div
    class="bg-center bg-no-repeat bg-cover md:!bg-none md:grid md:grid-cols-5 md:grid-rows-1"
    :style="{ backgroundImage: `url(./imgs/${img})` }"
  >
    <!-- project img container -->
    <div
      class="hidden my-12 px-10 py-5 md:block md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-1"
    >
      <div
        class="relative bg-gradient-to-tl from-light-blue to-dark-blue hover:cursor-pointer"
      >
        <img
          class="object-cover md:h-[100%] md:w-auto opacity-50 animate-fadeOut hover:animate-fadeIn"
          :src="'./imgs/' + img"
        />
      </div>
    </div>
    <!-- Project Details Container -->
    <div
      class="text-white flex flex-col justify-center my-12 px-10 py-5 bg-dark-blue bg-opacity-60 md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-1 md:items-end md:bg-opacity-0 md:p-0 md:py-6 hover:cursor-default"
    >
      <div class="my-4">
        <h3 class="text-light-blue mb-2">Featured Project</h3>
        <h2 class="text-xl">{{ title }}</h2>
      </div>
      <!-- Project description -->
      <div class="md:z-10">
        <p
          class="md:bg-project-black md:p-5 md:bg-opacity-90 md:text-right md:text-sm md:rounded-md md:shadow-[6px_6px_10px_#000]"
        >
          {{ description }}
        </p>
      </div>
      <!-- Project skills -->
      <ul class="list-none flex flex-wrap text-sm mt-4 z-10">
        <!-- create a li for each skill in skills prop -->
        <li v-for="(skill, index) in skills" :key="index" class="m-2">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>
