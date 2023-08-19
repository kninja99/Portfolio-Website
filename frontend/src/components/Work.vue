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
              class="before:content-none w-full cursor-pointer px-2 py-2"
              :class="
                selectedJob === index
                  ? 'text-light-blue border-l-2 border-light-blue bg-white/[3%]'
                  : 'text-white hover:bg-white/[3%] hover:text-light-blue'
              "
              @click="jobSelected(index)"
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
              {{ jobs[selectedJob].Title }}
              <span class="text-light-blue"
                >@ {{ jobs[selectedJob].Company }}</span
              >
            </h3>
            <p class="mt-2">
              {{ jobs[selectedJob].startDate }} -
              {{ jobs[selectedJob].endDate }}
            </p>
          </div>
          <!-- Descriptions -->
          <div class="text-dark-white mt-4">
            <ul>
              <WorkBullet
                v-for="(description, index) in jobs[selectedJob].Description"
                :key="index"
                :description="description"
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
      selectedJob: 0,
    };
  },
  methods: {
    jobSelected(index) {
      this.selectedJob = index;
    },
  },
};
</script>
