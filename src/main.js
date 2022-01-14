import components from './components'
import directives from './directives'

export default {
  install: (app) => {
    for (const component in components) {
      app.component(components[component].name, components[component])
    }

    for (const directive in directives) {
      app.directive(directive, directives[directive])
    }
  },
}
