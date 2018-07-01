<template>
  <v-container fluid>
    <v-flex id="about" class="display-3 grey--text text--lighten-2" xs12>
      About
    </v-flex>
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <p class="body-2">I love the internet and making websites. The majority of sites I visit tend to work well, but there are also a lot of websites that could use some help. I find myself zoning out thinking about possible ways to fix the websites that offer a less than perfect experience. The faults of sites and how they could be improved distract me and make me crave there existed a way to contribute to their development. One of my biggest pet peeves currently is sites that are not responsive. Cell phones are used for a lot of browsing these days, so an unoptimized site really turns me away.</p>

            <p class="body-2">Reading about web development and trying to stay on the leading edge of web technologies consumes a lot of my time. I find myself reading and testing many different libraries and languages. I work with React and all the associated packages at my day job, so as a hobby I am learning and using Vue, and everything Vue related. I'm also trying to learn more about the GCP as well.</p>

            <p class="body-2">This website was built with Vue, in my free time, which is pretty limited as I have a little boy and a full time job. But when I do have some free time I have a few hobbies that I enjoy.</p>
          </v-flex>
          <v-flex xs12 md3>
            <v-card flat>
              <v-card-title class="display-1">Exercising</v-card-title>
              <v-card-text class="body-2">I have learned through experience that exercise is a great way to relieve stress, get a sense of accomplishment, and clear the mind. I have been going to the gym on and off since my military days, but for the past 6 months I have made it a priority.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md3>
            <v-card flat>
              <v-card-title class="display-1">Friends</v-card-title>
              <v-card-text class="body-2">Enjoying time with friends is very important to me. I usually go out to dinner with friends 2 or 3 times a month. Large parties are ok, but I prefer small groups of close friends. With a glass of Laphroaig I could sit and chat with friends all night.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md3>
            <v-card flat>
              <v-card-title class="display-1">Reading</v-card-title>
              <v-card-text class="body-2">Adventure, mystery, and suspense are my favorite genres. A nice escape from reality for a while really helps me relax. George R.R. Martin, Lee Child, and Vince Flynn are some of my favorite authors at the moment.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md3>
            <v-card flat>
              <v-card-title class="display-1">Gaming</v-card-title>
              <v-card-text class="body-2">I have been a fan of PC gaming since I built my first PC. Wolfenstein 3D consumed me when I first got it. Unfortunately, I have fallen behind the times but I introduced my son to Minecraft. So we can enjoy building and surviving the zombies together.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script lang="javascript">
  export default {
    name: 'resume-about'
  }
</script>
