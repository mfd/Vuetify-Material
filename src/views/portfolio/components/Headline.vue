<template>
  <section
    id="intro"
    class="text-center mb-12"
  >
    <h1 class="display-2 font-weight-light mb-8">
      {{ title }}
    </h1>

    <v-responsive
      class="mx-auto subtitle-1 grey--text"
      max-width="550"
    >
      {{ description }}
    </v-responsive>
  </section>
</template>

<script>
  export default {
    name: 'PortfolioHeadline',
    props: {
      title: {
        type: String,
        default: 'My Portfolio',
      },
      description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam atque quas eligendi officiis nemo at praese',
      },
    },
  }
</script>
