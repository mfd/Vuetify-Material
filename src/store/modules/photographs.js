// Utilities
import { make } from 'vuex-pathify'

let image = 247
const categories = [
  'All',
  'Interior',
  'Buildings',
  'Fashion',
  'Nature',
  'Lifestyle',
]

const state = {
  categories,
  filter: 'All',
  picture: null,
  pictures: Array.from({ length: 30 }).map(() => {
    image++

    return {
      src: `https://picsum.photos/id/${image}/600/350`,
      category: categories[Math.floor(Math.random() * categories.length)],
    }
  }),
}

const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  mutations,
}
