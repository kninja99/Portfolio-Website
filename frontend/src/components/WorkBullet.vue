<template>
  <li class="my-2">
    {{ description }}
  </li>
</template>

<script>
export default {
  name: 'WorkBullet',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
