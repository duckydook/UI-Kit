import components from './components'

export default {
  install: (app) => {
    for (const component in components) {
      app.component(components[component].name, components[component])
    }
  },
}
