import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { fas as fortawesomefreesolidsvgicons_fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_fas)

    import  { far as fortawesomefreeregularsvgicons_far } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_far)

    import  { fab as fortawesomefreebrandssvgicons_fab } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
