<template>
  <v-container
    id="portfolio"
    class="pt-12 pb-0 px-0"
    fluid
    tag="section"
  >
    <headline name="hello" />

    <gallery />
  </v-container>
</template>

<script>
  export default {
    name: 'Portfolio',

    components: {
      Gallery: () => import('@/components/Gallery'),
      Headline: () => import('./components/Headline'),
    },
  }
</script>
