<template>
  <v-app id="app">
    <v-toolbar app>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
        <v-btn flat>Skills</v-btn>
        <v-btn flat>Experience</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <resume-jumbotron></resume-jumbotron>
      <resume-about></resume-about>
      <resume-skills></resume-skills>
      <resume-experience></resume-experience>
      <resume-contact></resume-contact>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    components: {
      'resume-jumbotron': () => import('@/containers/ResumeJumbotron.vue'),
      'resume-about': () => import('@/containers/ResumeAbout.vue'),
      'resume-skills': () => import('@/containers/ResumeSkills.vue'),
      'resume-experience': () => import('@/containers/ResumeExperience.vue'),
      'resume-contact': () => import('@/containers/ResumeContact.vue')
    },
    methods: {
      foo: (magicNumber) => {
        if(magicNumber % 2 !== 0) {
          return 'bar'
        }
        return 'foo'
      }
    }
  }
</script>

<style lang="stylus">
</style>
