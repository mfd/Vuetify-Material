import Vue from 'vue'
import Vuetify, { VRow } from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
// import { preset } from 'vue-cli-plugin-vuetify-preset-shrine/preset'
// import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'

Vue.use(Vuetify, {
  components: { VRow },
})

export default new Vuetify({
  // preset,
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken2,
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
})
