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
  <!-- Project card container -->
  <div
    class="bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: `url(${img})` }"
  >
    <div class="text-white my-12 px-10 py-5 bg-dark-blue bg-opacity-60">
      <div class="my-4">
        <h3 class="text-light-blue mb-2">Featured Project</h3>
        <h2 class="text-xl">Project Name</h2>
      </div>
      <!-- Project description -->
      <div>
        <p>
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
