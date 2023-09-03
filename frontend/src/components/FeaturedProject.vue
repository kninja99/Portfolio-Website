<script>
import img from '../assets/imgs/Jet-Bot-Img.png';
export default {
  name: 'FeaturedProject',
  props: {
    project: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      img: img,
    };
  },
};
</script>

<template>
  <!-- Project card container (background for mobile devices render here) -->
  <div
    class="bg-center bg-no-repeat bg-cover md:!bg-none md:grid md:grid-cols-4 md:grid-rows-1"
    :style="{ backgroundImage: `url(${img})` }"
  >
    <!-- project img container -->
    <div
      class="hidden my-12 px-10 py-5 md:block md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-1"
    >
      <img class="object-cover md:h-[100%] md:w-auto" :src="img" />
    </div>
    <!-- Project Description container -->
    <div
      class="text-white flex flex-col justify-center my-12 px-10 py-5 bg-dark-blue bg-opacity-60 md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-1 md:items-end md:bg-opacity-0 md:p-0"
    >
      <div class="my-4">
        <h3 class="text-light-blue mb-2">Featured Project</h3>
        <h2 class="text-xl">Project Name</h2>
      </div>
      <!-- Project description -->
      <div>
        <p
          class="md:bg-project-black md:p-10 md:bg-opacity-80 md:text-right md:text-sm"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ducimus, commodi cupiditate ipsam ad nisi, expedita voluptates
          corporis maiores cumque, consequatur tenetur et! Tempore, expedita
          ipsa dignissimos illum cumque in iste optio eveniet debitis ad maiores
          pariatur aspernatur, blanditiis magnam.
        </p>
      </div>
      <!-- Project skills -->
      <ul class="list-none flex flex-wrap text-sm mt-8">
        <li class="m-2">HTML</li>
        <li class="m-2">CSS</li>
        <li class="m-2">JavaScript</li>
        <li class="m-2">MSSQL</li>
        <li class="m-2">C++</li>
      </ul>
    </div>
  </div>
</template>
