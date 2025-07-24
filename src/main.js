import './assets/main.css'
import '@egjs/view360/css/view360.min.css'
import 'vuetify/styles'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import App from './App.vue'
import router from './router'
import VuePannellum from 'vue-pannellum'
import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(router)
app.use(VueViewer)
app.use(
  createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }),
)
app.component('VPannellum', VuePannellum)
app.mount('#app')
