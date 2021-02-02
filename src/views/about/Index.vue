<template>
  <v-container
    id="about"
    class="pa-0"
    fluid
    tag="section"
  >
    <v-row
      class="ma-0"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          height="calc(100vh - 96px - 156px)"
          src="https://picsum.photos/600/600?grayscale"
        />
        <!-- <v-img
          height="calc(100vh - 96px - 156px)"
          gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .6)"
          src="https://picsum.photos/600/600?grayscale"
        /> -->
      </v-col>

      <v-col
        class="d-block d-md-flex align-center grey lighten-3 pa-6"
        cols="12"
        md="6"
      >
        <v-responsive
          class="mx-auto px-3 px-md-12"
          max-width="750"
        >
          <h1
            class="mb-6"
            :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
          >
            Hi! I'm Heather Nadine.<br>
            Creative Photography
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae esse, vel commodi rem similique totam quis, corrupti rerum veritatis numquam ipsa, nam explicabo nulla! Accusamus deserunt repellendus perspiciatis nulla.
          </p>

          <p>
            Nulla, porro? Quos architecto vero itaque temporibus in illo nam perferendis ex nemo distinctio?
          </p>

          <div class="signature">
            Heather Nadine
          </div>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style lang="sass">
  .signature
    font-family: 'Cedarville Cursive', cursive !important
    font-size: 2rem
    font-style: italic
</style>
