<template class="w-screen">
  <div class="mt-32 mx-12 cursor-default flex flex-col items-center">
    <div class="max-w-3xl">
      <p class="text-light-blue text-xl md:text-3xl lg:text-4xl">
        Hi, my name is
      </p>
      <h1 class="text-white text-4xl my-5 md:text-5xl lg:text-6xl">
        Kyle Damschen.
      </h1>
      <!-- <h1>I build things through technology.</h1> -->
      <p class="text-dark-white text-base lg:text-lg">
        I'm a career motivated software engineer that is currently working on a
        variety of projects with the
        <a class="text-light-blue underline"
          >Citrus Clonal Protection Program</a
        >
        to increase productivity of lab teams through technology. I am currently
        seeking to enhance my technical knowledge and solve complex problems as
        a software engineer.
      </p>
      <button
        class="text-light-blue border-solid border-2 border-light-blue p-2 rounded-2xl w-32 my-10 hover:animate-shadowPop"
      >
        Resume
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>
