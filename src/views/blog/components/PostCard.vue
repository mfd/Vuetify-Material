<template>
  <v-card>
    <v-img
      :src="post.src"
      height="200"
    >
      <router-link to="/blog-post">
        <v-hover>
          <template v-slot="{ hover }">
            <v-overlay
              :color="hover ? 'white' : 'black'"
              absolute
              class="align-end pa-3 justify-start"
              opacity=".2"
            >
              <v-btn
                color="#252525"
                dark
                small
              >
                {{ post.category }}
              </v-btn>
            </v-overlay>
          </template>
        </v-hover>
      </router-link>
    </v-img>

    <div class="px-3 pb-4">
      <v-card-title
        class="headline font-weight-bold mb-2"
        v-text="post.title"
      />

      <v-card-text class="body-1 grey--text text-darken-2">
        <div
          class="mb-4"
          v-text="post.date"
        />

        <div v-text="post.blurb" />
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'BlogCard',

    props: {
      post: {
        type: Object,
        default: () => ({
          category: undefined,
          date: undefined,
          blurb: undefined,
          src: undefined,
          title: undefined,
        }),
      },
    },
  }
</script>
