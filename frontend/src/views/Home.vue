<template>
  <div class="bg-dark-gray h-screen w-screen overflow-x-hidden">
    <Header />
    <Landing />
    <About />
    <Work />
    <Projects />
    <ContactForm />
  </div>
</template>

<script>
// import header component
import Header from '../components/Header.vue';
import Landing from '../components/Landing.vue';
import About from '../components/About.vue';
import Work from '../components/Work.vue';
import Projects from '../components/Projects.vue';
import ContactForm from '../components/ContactForm.vue';
export default {
  name: 'App',
  components: {
    Header,
    Landing,
    About,
    Work,
    Projects,
    ContactForm,
  },
};
</script>
