<!-- Nav btn template -->
<template>
  <button
    class="hover:bg-dark-blue text-white rounded-2xl p-2 m-2"
    @click="scrollToSection"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'NavBtn',
  // props
  props: {
    // button text
    btnText: {
      type: String,
      required: true,
    },
    // button link
    btnLink: {
      type: String,
      required: false,
    },
  },
  methods: {
    scrollToSection() {
      // get the section we want to scroll to
      const section = document.querySelector(this.btnLink);
      // scroll to section
      section.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
