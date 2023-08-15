<template>
  <h1
    class="mx-0 mt-[10px] mb-[20px] border-b-[1px] border-light-blue leading-[1em]"
  >
    <span
      class="text-2xl text-white bg-dark-gray pr-5 py-[0px] top-[14px] relative"
      >{{ title }}</span
    >
  </h1>
  <template />
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
