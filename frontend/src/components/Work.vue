<template>
  <div class="mt-20 px-12 mb-10 w-screen flex flex-col items-center">
    <div class="w-full max-w-3xl" id="work">
      <SectionHeader title="My Experiance" />
      <div class="mt-12 flex flex-col sm:flex-row justify-between">
        <!-- Company list -->
        <div class="sm:mr-12 overflow-x-auto sm:overflow-visible">
          <ul class="flex mb-2 sm:flex-col justify-between w-max">
            <li
              v-for="(job, index) in jobs"
              :key="index"
              class="before:content-none w-full cursor-pointer px-2 py-2 border-b-2 sm:border-b-0 sm:border-l-2 text-sm"
              :class="
                selectedJob === index
                  ? 'text-light-blue border-light-blue bg-white/[3%]'
                  : 'text-white hover:bg-white/[3%] hover:text-light-blue border-white/[3%]'
              "
              @click="jobSelected(index)"
            >
              {{ job.Company }}
            </li>
          </ul>
        </div>
        <!-- Work Description -->
        <div class="work-description cursor-default mt-4">
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
      // toggling selected job
      this.selectedJob = index;
      // animate work description (fade in)
      const workDescription = document.querySelector('.work-description');
      workDescription.classList.add('animate-textFadeIn');
      setTimeout(() => {
        workDescription.classList.remove('animate-textFadeIn');
      }, 500);
    },
  },
};
</script>
