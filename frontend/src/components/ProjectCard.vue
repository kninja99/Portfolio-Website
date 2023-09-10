<template>
  <div
    class="w-[300px] h-[300px] bg-project-black/90 rounded-md shadow-[6px_6px_10px_#000] flex flex-col justify-between mx-4 my-6"
  >
    <!-- header for icon -->
    <div class="py-5 mx-5">
      <img
        class="w-[40px] h-[40px]"
        src="../assets/imgs/Folder-Icon.svg"
        alt="folder"
      />
    </div>
    <!-- Project Details -->
    <div class="text-white mx-5">
      <p class="text-xl">Project Title</p>
      <p class="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        dolores voluptates quidem non commodi error.
      </p>
    </div>
    <ul class="list-none flex flex-wrap text-white text-sm my-2 mx-2">
      <!-- create a li for each skill in skills prop -->
      <li class="m-2">Skill 1</li>
      <li class="m-2">Skill 2</li>
      <li class="m-2">Skill 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    skills: Array,
    link: String,
    index: Number,
  },
};
</script>
