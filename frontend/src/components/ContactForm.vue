<template>
  <div class="flex flex-col justify-center items-center mb-6 mx-4">
    <div id="contact" class="w-full max-w-4xl">
      <SectionHeader title="What's Next?" />
      <div class="flex flex-col items-center">
        <p class="text-light-blue text-3xl md:text-5xl mt-4">Get In Touch</p>
        <p
          class="text-center text-sm text-white/80 mb-6 mt-4 md:text-base w-[80%]"
        >
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div
        class="bg-project-black/90 rounded-md shadow-[6px_6px_10px_#000] px-5 py-5 flex flex-col items-center"
      >
        <form class="flex flex-col items-center w-[100%]" action="">
          <p
            class="text-light-blue text-2xl mb-5 underline underline-offset-4 hover:cursor-default"
          >
            Contact Me
          </p>
          <input
            class="bg-dark-gray text-dark-white px-2 py-1 m-2 border-solid border-2 border-light-teal rounded-2xl w-[300px]"
            name="name"
            placeholder="Name"
          />
          <input
            class="bg-dark-gray text-dark-white px-2 py-1 m-2 border-solid border-2 border-light-teal rounded-2xl w-[300px]"
            type="email"
            name="email"
            placeholder="youremail@domain.com"
          />
          <textarea
            class="bg-dark-gray text-dark-white px-3 py-2 m-2 border-solid border-2 border-light-teal rounded-2xl w-[100%] h-[200px]"
            name="message"
            placeholder="Type message here..."
          ></textarea>
          <!-- your other form fields go here -->
          <button
            class="text-light-blue border-solid border-2 border-light-blue p-2 rounded-2xl w-32 mt-4 hover:animate-shadowPop"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
export default {
  name: 'ContactForm',
  components: {
    SectionHeader,
  },
};
</script>
