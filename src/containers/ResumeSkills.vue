<template>
  <v-container class="red" fluid>
    <v-flex xs12>
      Skills
    </v-flex>
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md4>
            General
          </v-flex>
          <v-flex xs12 md4>
            Back-end
          </v-flex>
          <v-flex xs12 md4>
            Front-end
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script lang="javascript">
  export default {
    name: 'resume-skills'
  }
</script>