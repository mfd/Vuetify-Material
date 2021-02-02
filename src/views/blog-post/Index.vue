<template>
  <v-container
    id="blog-post"
    class="pa-0"
    fluid
    tag="section"
  >
    <!-- https://unsplash.com/@lmtthws -->
    <base-hero :src="require('@/assets/luke-matthews-Af_8NfhyX8A-unsplash.jpg')" />

    <v-container
      class="py-12 grey lighten-2"
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="11"
          md="7"
        >
          <h1
            class="display-2 font-weight-bold mb-6"
            v-text="post.title"
          />

          <div class="text-uppercase font-weight-bold body-2 pb-6">
            {{ post.date }} / {{ post.category }} / {{ post.comments.length }} Comments
          </div>
        </v-col>

        <template v-for="(t, i) in post.text">
          <v-col
            :key="`col-${i}`"
            cols="11"
            md="7"
          >
            <div
              :key="`p-${i}`"
              class="body-1"
              v-html="t"
            />
          </v-col>

          <v-col
            v-if="post.images[i]"
            :key="`img-${i}`"
            class="my-6"
            cols="11"
          >
            <v-img
              :src="post.images[i]"
              max-height="400"
            />
          </v-col>
        </template>

        <v-col
          class="d-flex flex-wrap"
          cols="11"
          md="7"
        >
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            :color="social.color"
            class="grow white--text"
            depressed
            height="60"
            min-width="175"
          >
            <v-icon
              left
              v-text="social.icon"
            />

            {{ social.text }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      class="py-12"
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="11"
          md="7"
        >
          <h3 class="display-1 font-weight-bold mb-8">
            Comments:
          </h3>

          <template v-for="(comment, i) in post.comments">
            <blog-post-comment
              :key="i"
              :comment="comment"
            />
          </template>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      class="py-12 grey lighten-2"
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="10"
          md="7"
        >
          <h3 class="display-1 font-weight-bold mb-8">
            Leave a Comment:
          </h3>

          <v-form>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-sheet>
                  <v-text-field
                    flat
                    hide-details
                    label="Your Name"
                    solo
                  />
                </v-sheet>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-sheet>
                  <v-text-field
                    flat
                    hide-details
                    label="Your Email"
                    solo
                  />
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-sheet>
                  <v-textarea
                    flat
                    hide-details
                    label="Your Comment"
                    solo
                  />
                </v-sheet>
              </v-col>
            </v-row>

            <v-btn
              :block="$vuetify.breakpoint.smAndDown"
              class="grey darken-4 white--text mt-6"
              x-large
            >
              Post a Comment
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      class="py-6 white px-12"
      fluid
    >
      <v-row>
        <v-col
          class="d-flex align-center text-uppercase"
          cols="5"
        >
          <v-btn text>
            <v-icon left>
              mdi-chevron-left
            </v-icon>

            <span class="hidden-sm-and-down">
              Previous Post
            </span>
          </v-btn>
        </v-col>

        <v-col
          class="text-center"
          cols="2"
        >
          <v-btn
            icon
            to="/blog"
          >
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
        </v-col>

        <v-col
          class="text-right"
          cols="5"
        >
          <v-btn text>
            <span class="hidden-sm-and-down">
              Next Post
            </span>

            <v-icon right>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'BlogPost',

    components: {
      BlogPostComment: () => import('./components/Comment'),
    },

    data: () => ({
      post: {
        title: 'Lorem ipsum',
        date: 'September 18, 2018',
        category: 'Nature',
        comments: [
          {
            avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
            user: 'John Leonard',
            date: '20 September, 2018',
            text: 'Nullam ac dui et purus malesuada gravida id fermentum orci. In eu ipsum quis urna hendrerit condimentum vitae a mauris. In congue turpis purus, vitae tempus ante id. Donec orci arcu, sagittis ut finibus vitae.',
            replies: [
              {
                avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
                user: 'Jody Parker',
                date: '20 September, 2018',
                text: 'Aenean eget varius augue, nec gravida lectus. Pellentesque in imperdiet us, ac efficitur risus. Etiam laoreet dapibus lorem vitae aliquam. Sed elementum ligula, molestie consectetur massa rhoncus at.',
              },
            ],
          },
          {
            avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
            user: 'Katie Anderson',
            date: '21 September, 2018',
            text: 'To set. Lights likeness after, stars void in doesn\'t subdue.',
          },
        ],
        text: [
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div class="pa-8 white--text font-italic title" style="background-color: #E95776;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div class="title font-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<h2 class="display-1">Lorem ipsum dolor sit</h2>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div class="title font-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
        ],
        images: {
          // https://unsplash.com/@lmtthws
          2: require('@/assets/luke-matthews-6D1eGsCruvg-unsplash.jpg'),
          9: require('@/assets/luke-matthews-4FTlby-DERs-unsplash.jpg'),
        },
      },
      socials: [
        {
          icon: 'mdi-facebook',
          text: 'Facebook',
          color: '#29478A',
        },
        {
          icon: 'mdi-google-plus',
          text: 'Google+',
          color: '#C83820',
        },
        {
          icon: 'mdi-twitter',
          text: 'Twitter',
          color: '#219ACD',
        },
        {
          icon: 'mdi-pinterest',
          text: 'Pinterest',
          color: '#B71117',
        },
      ],
    }),
  }
</script>
