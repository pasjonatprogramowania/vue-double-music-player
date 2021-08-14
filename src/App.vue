<template>
  <div id="app" class="video">
    <div v-for="(video, index) in videosUrl" :key="index">
      <div class="input-container">
        <label for="first-video-url">Link url </label>
        <input type="text" name="first-video" v-model="video.url" />
      </div>
      <div>
        <youtube
          :video-id="returnFirstVideoId(video.url)"
          player-width="100%"
          player-height="250px"
          host="https://www.youtube-nocookie.com"
        ></youtube>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);

import { getIdFromURL } from "vue-youtube-embed";

export default {
  name: "App",

  data() {
    return {
      videosUrl: [{ url: "" }, { url: "" }],
    };
  },
  methods: {
    returnFirstVideoId(aUrl) {
      return getIdFromURL(aUrl);
    },
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&display=swap')
html
  font-family: 'Lato', sans-serif
body
  background-color: #212121
.row
  display: flex
  justify-content: center
svg
  width: 5rem
.input-container
  padding: 30px 0 30px 0

label
  color: #dfe6e9
  font-size: 1.4rem
input
  background-color: #2d3436
  color: #dfe6e9
  font-size: 1.4rem
  width: 100%
  height: 40px
  border: 2px solid #aaa
  border-radius: 4px
  margin: 8px 0
  outline: none
  padding: 8px
  box-sizing: border-box
  transition: .3s
  &:focus
    border-color: dodgerBlue
    box-shadow: 0 0 8px 0 dodgerBlue
</style>
