<template>
  <v-dialog
    v-model="value"
    fullscreen
    transition="fade-transition"
  >
    <v-card
      color="grey darken-4"
      dark
    >
      <v-app-bar
        color="rgba(0, 0, 0, .6)"
        fixed
        flat
      >
        {{ picture + 1 }} / {{ pictures.length }}
        <v-spacer />

        <v-btn
          class="mx-1 mx-md-3"
          icon
          small
          @click="zoomed = !zoomed"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          class="mx-1 mx-md-3"
          icon
          small
          @click="toggleFullscreen"
        >
          <v-icon>mdi-arrow-expand-all</v-icon>
        </v-btn>
        <v-menu
          bottom
          left
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              icon
              small
              class="mx-1 mx-md-3"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-share</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item link>
              <v-list-item-title>Share on Facebook</v-list-item-title>
            </v-list-item>

            <v-list-item link>
              <v-list-item-title>Share on Twitter</v-list-item-title>
            </v-list-item>

            <v-list-item link>
              <v-list-item-title>Share on Instagram</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          class="mx-1 mx-md-3"
          icon
          small
          @click="$emit('change', false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>

      <v-responsive min-height="100vh">
        <v-container
          class="pa-0 fill-height"
          fluid
        >
          <v-row
            align="center"
            class="fill-height mx-0"
            style="max-width: 100%;"
          >
            <v-carousel
              v-model="picture"
              height="700"
              hide-delimiters
            >
              <v-carousel-item
                v-for="(pic, i) in pictures"
                :key="i"
                :class="{
                  'v-carousel-item--zoomed': zoomed
                }"
                :src="pic"
              />
            </v-carousel>
          </v-row>
        </v-container>
      </v-responsive>
    </v-card>
  </v-dialog>
</template>

<script>
  // Mixins
  import Proxyable from 'vuetify/lib/mixins/proxyable'

  // Utilities
  import {
    get,
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'GalleryCarousel',

    mixins: [Proxyable],

    data: () => ({
      isFullscreen: false,
      zoomed: false,
    }),

    computed: {
      picture: sync('photographs/picture'),
      pictures: get('photographs/pictures'),
    },

    methods: {
      toggleFullscreen () {
        if (document.fullscreenElement) {
          document.exitFullscreen()
          this.isFullscreen = false
        } else {
          document.documentElement.requestFullscreen()
          this.isFullscreen = true
        }
      },
    },
  }
</script>

<style lang="sass">
  .v-carousel-item--zoomed .v-image__image
    transform: scale(1.2)
</style>
