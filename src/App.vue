<template>
  <v-app id="app">

    <v-toolbar class="hidden-sm-and-down" :app="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="$vuetify.goTo('#about', { offset: -64 })">About</v-btn>
        <v-btn flat @click="$vuetify.goTo('#skills', { offset: -64 })">Skills</v-btn>
        <v-btn flat @click="$vuetify.goTo('#experience', { offset: -64 })">Experience</v-btn>
        <v-btn flat @click="$vuetify.goTo('#contact', { offset: -64 })">Contact</v-btn>
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

    <v-bottom-nav app :value="$vuetify.breakpoint.smAndDown">
      <v-btn flat color="teal" value="recent" @click="$vuetify.goTo('#about')">
        <span>About</span>
        <v-icon>info</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites" @click="$vuetify.goTo('#skills')">
        <span>Skills</span>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="nearby" @click="$vuetify.goTo('#experience')">
        <span>Experience</span>
        <v-icon>work</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="nearby" @click="$vuetify.goTo('#contact')">
        <span>Contact</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
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
