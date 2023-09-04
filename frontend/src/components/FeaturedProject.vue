<script>
export default {
  name: 'FeaturedProject',
  props: {
    image: {
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
    :style="{ backgroundImage: `url(../assets/imgs/${img})` }"
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
          :src="img"
        />
      </div>
    </div>
    <!-- Project Details Container -->
    <div
      class="text-white flex flex-col justify-center my-12 px-10 py-5 bg-dark-blue bg-opacity-60 md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-1 md:items-end md:bg-opacity-0 md:p-0 md:py-6"
    >
      <div class="my-4">
        <h3 class="text-light-blue mb-2">Featured Project</h3>
        <h2 class="text-xl">Project Name</h2>
      </div>
      <!-- Project description -->
      <div class="md:z-10">
        <p
          class="md:bg-project-black md:p-5 md:bg-opacity-80 md:text-right md:text-sm md:rounded-md"
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
