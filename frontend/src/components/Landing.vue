<template class="w-screen">
  <div class="mt-20 sm:mt-32 mx-12 cursor-default flex flex-col items-center">
    <div class="max-w-3xl">
      <p class="text-light-blue text-xl md:text-3xl lg:text-4xl">
        Hi, my name is
      </p>
      <h1 class="text-white text-4xl my-5 md:text-5xl lg:text-6xl">
        Kyle Damschen.
      </h1>
      <!-- <h1>I build things through technology.</h1> -->
      <p class="text-dark-white text-base lg:text-lg">
        I'm a career motivated software engineer that is currently working at
        <a class="text-light-blue underline">Raytheon (RTX)</a>
        maintaing and developing internal common product middleware tools. I am currently
        seeking to enhance my technical knowledge and solve complex problems as
        a software engineer.
      </p>
      <router-link to="/Kyle_Damschen_Resume.pdf" target="_blank">
        <button
          class="text-light-blue border-solid border-2 border-light-blue p-2 rounded-2xl w-32 my-10 hover:animate-shadowPop">
          Resume
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>
