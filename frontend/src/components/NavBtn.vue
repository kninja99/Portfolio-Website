<!-- Nav btn template -->
<template>
  <button class="hover:bg-dark-blue text-white rounded-2xl p-2 m-2">
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
};
</script>
