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
        <form
          class="flex flex-col items-center w-[100%]"
          action=""
          @submit="formSubmit"
        >
          <p
            class="text-light-blue text-2xl mb-5 underline underline-offset-4 hover:cursor-default"
          >
            Contact Me
          </p>
          <input
            class="bg-dark-gray text-dark-white px-2 py-1 m-2 border-solid border-2 border-light-teal rounded-2xl w-[300px]"
            name="name"
            v-model="form.name"
            placeholder="Name"
          />
          <p class="text-error-red" v-if="form.errors[0] != null">
            {{ form.errors[0] }}
          </p>
          <input
            class="bg-dark-gray text-dark-white px-2 py-1 m-2 border-solid border-2 border-light-teal rounded-2xl w-[300px]"
            name="email"
            v-model="form.email"
            placeholder="youremail@domain.com"
          />
          <p class="text-error-red" v-if="form.errors[1] != null">
            {{ form.errors[1] }}
          </p>
          <textarea
            class="bg-dark-gray text-dark-white px-3 py-2 m-2 border-solid border-2 border-light-teal rounded-2xl w-[100%] h-[200px]"
            name="message"
            v-model="form.message"
            placeholder="Type message here..."
          ></textarea>
          <p class="text-error-red" v-if="form.errors[2] != null">
            {{ form.errors[2] }}
          </p>
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
  data() {
    return {
      form: {
        errors: [null, null, null],
        name: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    formSubmit(e) {
      console.log(this.form);
      // validate form fields
      // validate name feild
      if (this.form.name == null || this.form.name == '') {
        this.form.errors[0] = 'Name is required';
      } else {
        this.form.errors[0] = null;
      }
      // email validation
      if (this.form.email == null || this.form.email == '') {
        this.form.errors[1] = 'Email is required';
      } else if (!this.validEmail(this.form.email)) {
        this.form.errors[1] = 'Email is invalid';
      } else {
        this.form.errors[1] = null;
      }
      // validate msg feild
      if (this.form.message == null || this.form.message == '') {
        this.form.errors[2] = 'Message is required';
      } else {
        this.form.errors[2] = null;
      }
      // submit form
      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
