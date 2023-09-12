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
    index: {
      type: Number,
      required: true,
    },
    link: {
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
    class="bg-center bg-no-repeat bg-cover my-12 md:!bg-none md:grid md:grid-cols-5 md:grid-rows-1 md:items-center"
    :style="{ backgroundImage: `url(./imgs/${img})` }"
  >
    <!-- project img container -->
    <!-- change row start and end based off index -->
    <div
      class="hidden my-12 px-10 py-5 md:my-0 md:px-0 md:py-0 md:block md:row-start-1 md:row-end-1"
      :class="
        this.index % 2 === 0
          ? 'md:col-start-1 md:col-end-4'
          : 'md:col-start-3 md:col-end-6'
      "
    >
      <div
        class="relative mt-10 bg-gradient-to-tl from-light-blue to-dark-blue hover:cursor-pointer"
      >
        <a :href="link" target="_blank"
          ><img
            class="object-cover md:h-[100%] md:w-auto opacity-50 animate-fadeOut hover:animate-fadeIn"
            :src="'./imgs/' + img"
        /></a>
      </div>
    </div>
    <!-- Project Details Container -->
    <div
      class="text-white flex flex-col justify-center my-12 px-10 py-5 md:my-0 md:px-0 md:py-0 bg-dark-blue bg-opacity-70 md:row-start-1 md:row-end-1 md:bg-opacity-0 md:p-0 md:py-6 hover:cursor-default items-start"
      :class="
        this.index % 2 === 0
          ? 'md:col-start-3 md:col-end-6 md:items-end md:text-right'
          : 'md:col-start-1 md:col-end-4 md:text-left md:items-start'
      "
    >
      <div class="my-4">
        <h3 class="text-light-blue mb-2">Featured Project</h3>
        <a :href="link" target="_blank" class="group relative">
          <h2 class="text-xl inline">
            {{ title }}
          </h2>
          <!-- underline animation -->
          <span
            class="absolute inset-x-0 bottom-[-4px] h-0.5 bg-light-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-middle"
          ></span>
        </a>
      </div>
      <!-- Project description -->
      <div class="md:z-10">
        <p
          class="text-sm text-dark-white md:bg-project-black md:p-5 md:bg-opacity-90 md:rounded-md md:shadow-[6px_6px_10px_#000]"
        >
          {{ description }}
        </p>
      </div>
      <!-- Project skills -->
      <ul
        class="list-none flex flex-wrap text-sm mt-4 z-10 text-dark-white md:justify-center md:bg-project-black/80 md:rounded-md md:shadow-[6px_6px_10px_#000]"
      >
        <!-- create a li for each skill in skills prop -->
        <li v-for="(skill, index) in skills" :key="index" class="m-2">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>
