<template>
  <a :href="link" target="_blank" @click="cardClickEvent">
    <div
      class="w-[300px] h-[300px] bg-project-black/90 rounded-md shadow-[6px_6px_10px_#000] flex flex-col justify-between mx-4 my-6 flex-1 basis-1/3 hover:animate-cardHoverUp animate-cardHoverDown"
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
  methods: {
    /**
     * Event that will check if the card has a valid link
     * if it does perform the normal link behavior
     * if not, prevent the default behavior
     */
    cardClickEvent(event) {
      if (this.link === '') {
        // change behavior of a tag to do nothing
        event.preventDefault();
        // alert user that there is no link
        alert(
          'Sorry but this repo is private. Please contact me for more info.'
        );
      }
    },
  },
};
</script>
