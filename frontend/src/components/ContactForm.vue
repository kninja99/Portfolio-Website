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
        class="bg-project-black/90 rounded-md shadow-[6px_6px_10px_#000] p-10"
      >
        <form class="flex flex-col" action="">
          <input name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="youremail@domain.com" />
          <textarea name="message" placeholder=""></textarea>
          <!-- your other form fields go here -->
          <button type="submit">Send</button>
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
