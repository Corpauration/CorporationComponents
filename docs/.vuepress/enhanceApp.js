import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ComponentLibrary from './../../src/main.js'

export default ({ Vue, options, router, siteData }) => {
  Vue.use(Vuetify)
  Vue.use(ComponentLibrary)
  const vuetify = new Vuetify({  })
  options.vuetify = vuetify
}
