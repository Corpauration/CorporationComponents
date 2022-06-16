import * as components from './components'

const CorpaurationComponents = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)
    }
  }
  // https://fr.vuejs.org/v2/guide/plugins.html
}

export default CorpaurationComponents

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(CorpaurationComponents)
}
