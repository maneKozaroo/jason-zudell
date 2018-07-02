<template>
  <v-container fluid>
    <v-flex id="contact" class="display-3 grey--text text--lighten-2" xs12>
      Contact
    </v-flex>
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-flex id="google-map" xs12 md7></v-flex>
          <v-flex xs12 md5>
            <v-list>
              <v-list-tile>
                Feel free to contact me anytime. It may take some time, but I will definitely respond!
              </v-list-tile>
              <v-list-tile>
                359-1143
                Tokorozawa, Saitama
              </v-list-tile>
              <v-list-tile>
                Mobile: (090) 4701 1425
              </v-list-tile>
              <v-list-tile>
                E-Mail: jason@zudell.info
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script lang="javascript">
  export default {
    name: 'resume-contact',
    mounted: () => {
      const myLatLng = {lat: 35.786968, lng: 139.473278};
      const mapCanvas = document.getElementById('google-map');
      const mapOptions = {
        center: myLatLng,
        zoom: 13,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      const map = new (google.maps.Map)(mapCanvas, mapOptions);
      const marker = new (google.maps.Marker)({
        position: myLatLng,
        map,
        title: "Home Station"});
    }
  }
</script>

<style lang="stylus">
  #google-map {
    height: 300px;
  }
</style>
