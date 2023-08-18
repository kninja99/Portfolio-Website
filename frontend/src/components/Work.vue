<template>
  <div class="mt-20 px-12 mb-10 w-screen flex flex-col items-center">
    <div class="w-full max-w-xl">
      <SectionHeader title="My Experiance" />
      <div class="mt-12">
        <!-- Company list -->
        <div></div>
        <!-- Work Description -->
        <div>
          <!-- Company and Date -->
          <div class="text-white">
            <h3 class="text-lg">
              Software Engineer <span class="text-light-blue">@ Company</span>
            </h3>
            <p class="mt-2">02/2019 - Present</p>
          </div>
          <!-- Descriptions -->
          <div class="text-dark-white mt-4">
            <ul>
              <li class="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                minus magnam quaerat suscipit ex ab, et, sint molestiae, labore
                eum aspernatur praesentium rem temporibus nulla deleniti fugit.
                Porro quibusdam sint architecto impedit.
              </li>
              <li class="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                optio aliquam commodi eligendi aperiam ad velit labore similique
                et accusamus!
              </li>
              <li class="my-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium facere tempore quaerat quibusdam, quisquam ad!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
export default {
  name: 'Work',
  components: {
    SectionHeader,
  },
};
</script>
