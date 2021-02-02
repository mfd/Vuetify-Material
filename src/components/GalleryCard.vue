<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        @click="() => {}"
        v-on="$listeners"
      >
        <v-img
          :class="{
            'v-image--hovered': hover
          }"
          :src="src"
          height="350"
        />

        <v-overlay
          :opacity=".8"
          :value="hover"
          absolute
          z-index="0"
        >
          <v-fade-transition appear>
            <v-icon
              size="88"
              color="#FFFFFFE6"
            >
              mdi-fullscreen
            </v-icon>
          </v-fade-transition>
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    name: 'GalleryCard',

    inheritAttrs: false,

    props: {
      src: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="sass">
  .v-image
    .v-image__image
      transition: .3s ease

    &.v-image--hovered .v-image__image
      transform: scale(1.2)
</style>
