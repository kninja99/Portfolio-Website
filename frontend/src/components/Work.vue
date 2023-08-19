<template>
  <div class="mt-20 px-12 mb-10 w-screen flex flex-col items-center">
    <div class="w-full max-w-3xl">
      <SectionHeader title="My Experiance" />
      <div class="mt-12 flex">
        <!-- Company list -->
        <div class="mr-12">
          <ul class="flex flex-col justify-between">
            <li
              v-for="(job, index) in jobs"
              :key="index"
              class="text-white before:content-none w-max mb-4"
            >
              {{ job.Company }}
            </li>
          </ul>
        </div>
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
              <WorkBullet
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                minus magnam quaerat suscipit ex ab, et, sint molestiae, labore
                eum aspernatur praesentium rem temporibus nulla deleniti fugit.
                Porro quibusdam sint architecto impedit."
              />
              <WorkBullet
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                optio aliquam commodi eligendi aperiam ad velit labore similique
                et accusamus!"
              />
              <WorkBullet
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                optio aliquam commodi eligendi aperiam ad velit labore similique
                et accusamus!"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import WorkBullet from './WorkBullet.vue';
// idealy we would get this data from a database or api
// but for github pages we will use a json file
import jobData from '../assets/Data/work.json';
export default {
  name: 'Work',
  components: {
    SectionHeader,
    WorkBullet,
  },
  data() {
    return {
      // this is the data we imported from the json file
      jobs: jobData,
    };
  },
};
</script>
