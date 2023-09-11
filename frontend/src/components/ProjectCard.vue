<template>
  <a :href="link" target="_blank">
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
        <p class="text-xl">{{ title }}</p>
        <p class="my-2 text-dark-white/80">
          {{ description }}
        </p>
      </div>
      <ul class="list-none flex flex-wrap text-dark-white/70 text-sm my-2 mx-2">
        <!-- create a li for each skill in skills prop -->
        <li class="m-2" v-for="(skill, key) in skills" :key="key">
          {{ skill }}
        </li>
      </ul>
    </div>
  </a>
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
