<template>
  <v-pannellum :src="src" :hfov="50" :yaw="-5" :showZoom="true" style="height: 100vh"></v-pannellum>
  <v-dialog v-model="dialogVisible" width="auto">
    <v-card>
      <v-container>
        <v-row v-if="show_text">
          <v-col>
            <v-img
              :src="show_img"
              class="bg-grey-lighten-2"
              cover
            >
              <template v-slot:placeholder>
                <v-row
                  align="center"
                  class="fill-height ma-0"
                  justify="center"
                >
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col>
            <span class="title">{{ show_title }}</span><br>
            <span>{{ show_text }}</span>
            <audio :src="audio" autoplay></audio>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <v-img
              width="80vw"
              :src="show_img"
              class="bg-grey-lighten-2"
              cover
            >
              <template v-slot:placeholder>
                <v-row
                  align="center"
                  class="fill-height ma-0"
                  justify="center"
                >
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
      <template v-slot:actions v-if="show_text">
        <div style="width: 100%;display: flex;justify-content: space-between;">
          <v-btn color="primary" variant="tonal" style="width: 32%" :active="btn_chs" @click="chs()">中文</v-btn>
          <v-btn color="primary" variant="tonal" style="width: 32%" :active="btn_eng" @click="eng()">英语</v-btn>
          <v-btn color="primary" variant="tonal" style="width: 32%" :active="btn_tcw" @click="tcw()">潮汕话</v-btn>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup>
import vr_img from '/imgs/vr/a04.webp'
import { createApp, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import GeneralSpot from '/src/components/GeneralSpot.vue'
import JumpSpot from '/src/components/JumpSpot.vue'
import { VBtn } from 'vuetify/components'

const dialogVisible = ref(false)
const router = useRouter()
const btn_chs = ref(true)
const btn_eng = ref(false)
const btn_tcw = ref(false)
const show_img = ref('')
const show_text = ref('')
const show_title = ref('')
const audio = ref('')
const board = {
  '2-1': {
    image: '/imgs/board/2-1.webp',
    text: '',
  },
  '2-2': {
    image: '/imgs/board/2-2.webp',
    text: '',
  },
  '2-3': {
    image: '/imgs/board/2-3.webp',
    text: '',
  },
  '2-4': {
    image: '/imgs/board/2-4.webp',
    text: '',
  },
  '2-5': {
    image: '/imgs/board/2-5.webp',
    text: '',
  },
  '2-6': {
    image: '/imgs/board/2-6.webp',
    text: '',
  },
  '2-7': {
    image: '/imgs/board/2-7.webp',
    text: '',
  },
  '2-8': {
    image: '/imgs/board/2-8.webp',
    text: 'Deep in Huamei Mountain, there\'s a place called "Cobra Cave" –– it was the secret base of  Zhou Lu and his comrades! They held meetings, trained, and planned many brilliant operations there. Most impressively, they used their wisdom to seize weapons from the enemy and protect the common people!',
    title: 'Chapter 3: Secret Operations in the Cave',
    audio: ['/audio/3-chs.mp3', '/audio/3-eng.mp3', '/audio/3-tcw.mp3'],
  },
  '2-9': {
    image: '/imgs/board/2-9.webp',
    text: 'Deep in Huamei Mountain, there\'s a place called "Cobra Cave" –– it was the secret base of  Zhou Lu and his comrades! They held meetings, trained, and planned many brilliant operations there. Most impressively, they used their wisdom to seize weapons from the enemy and protect the common people!',
    title: 'Chapter 3: Secret Operations in the Cave',
    audio: ['/audio/3-chs.mp3', '/audio/3-eng.mp3', '/audio/3-tcw.mp3'],
  },
  '2-10': {
    image: '/imgs/board/2-10.webp',
    text: '',
  },
  '2-11': {
    image: '/imgs/board/2-11.webp',
    text: '',
  },
  '2-12': {
    image: '/imgs/board/2-12.webp',
    text: 'In 1927, when the Red Army came to Chaoshan, Zhou Lu was only 19 years old. He and his classmates helped the wounded, using cloth from their school uniforms to bandage wounds. This experience strengthened his revolutionary beliefs even more!',
    title: 'Chapter 2: The "Seven-Day Red" of the Red Army',
    audio: ['/audio/2-chs.mp3', '/audio/2-eng.mp3', '/audio/2-tcw.mp3'],
  },
  '2-13': {
    image: '/imgs/board/2-13.webp',
    text: '',
  },
  '2-14': {
    image: '/imgs/board/2-14.webp',
    text: '',
  },
  '2-15': {
    image: '/imgs/board/2-15.webp',
    text: '',
  },
  '2-16': {
    image: '/imgs/board/2-16.webp',
    text: '',
  },
  '2-17': {
    image: '/imgs/board/2-17.webp',
    text: '',
  },
  '2-18': {
    image: '/imgs/board/2-18.webp',
    text: '',
  },
  '2-19': {
    image: '/imgs/board/2-19.webp',
    text: '',
  },
  '2-20': {
    image: '/imgs/board/2-20.webp',
    text: '',
  },
  '2-21': {
    image: '/imgs/board/2-21.webp',
    text: '',
  },
  '2-22': {
    image: '/imgs/board/2-22.webp',
    text: '',
  },
  '2-23': {
    image: '/imgs/board/2-23.webp',
    text: '',
  },
  '2-24': {
    image: '/imgs/board/2-24.webp',
    text: '',
  },
  '2-25': {
    image: '/imgs/board/2-25.webp',
    text: '',
  },
  '2-26': {
    image: '/imgs/board/2-26.webp',
    text: '',
  },
  '2-27': {
    image: '/imgs/board/2-27.webp',
    text: '',
  },
  '2-28': {
    image: '/imgs/board/2-28.webp',
    text: '',
  },
}
function jump(id) {
  router.push({
    name: 'vr_' + id,
  })
}
function chs() {
  btn_chs.value = true
  btn_eng.value = false
  btn_tcw.value = false
  const show_id = show_img.value.split('/').pop().split('.')[0]
  audio.value = board[show_id]['audio'][0]
}
function eng() {
  btn_eng.value = true;
  btn_chs.value = false
  btn_tcw.value = false;
  const show_id = show_img.value.split('/').pop().split('.')[0]
  audio.value = board[show_id]['audio'][1]
}
function tcw() {
  btn_tcw.value = true;
  btn_chs.value = false
  btn_eng.value = false;
  const show_id = show_img.value.split('/').pop().split('.')[0]
  audio.value = board[show_id]['audio'][2]
}


function show(id) {
  show_img.value = board[id]['image']
  show_text.value = board[id]['text']
  show_title.value = board[id]['title']
  if (board[id]['audio']) {
    audio.value = board[id]['audio'][0]
  }
  dialogVisible.value = true
}

const src = {
  default: {
    firstScene: 'cube',
  },
  scenes: {
    cube: {
      hfov: 90,
      type: 'equirectangular',
      panorama: vr_img,
      hotSpots: [
        {
          pitch: 10,
          yaw: -111,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-1',
        },
        {
          pitch: 10,
          yaw: -93,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-2',
        },
        {
          pitch: 13,
          yaw: -78,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-3',
        },
        {
          pitch: -2,
          yaw: -78,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-4',
        },
        {
          pitch: -2,
          yaw: -66,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-5',
        },
        {
          pitch: 13,
          yaw: -65,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-6',
        },
        {
          pitch: -2,
          yaw: -55,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-7',
        },
        {
          pitch: 8,
          yaw: -56,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-8',
        },
        {
          pitch: 8,
          yaw: -48,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-9',
        },
        {
          pitch: 8,
          yaw: -40,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-10',
        },
        {
          pitch: 8,
          yaw: -30,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-11',
        },
        {
          pitch: 8,
          yaw: -19,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-12',
        },
        {
          pitch: 9,
          yaw: -8,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-13',
        },
        {
          pitch: 8,
          yaw: 4,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-14',
        },
        {
          pitch: 6,
          yaw: 16,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-15',
        },
        {
          pitch: 6,
          yaw: 28,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-16',
        },
        {
          pitch: 7,
          yaw: 37,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-17',
        },
        {
          pitch: 8,
          yaw: 49,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-18',
        },
        {
          pitch: -3,
          yaw: 77,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-19',
        },
        {
          pitch: -5,
          yaw: 95,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-20',
        },
        {
          pitch: 8,
          yaw: 122,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-21',
        },
        {
          pitch: 7,
          yaw: 133,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-22',
        },
        {
          pitch: 6,
          yaw: 141,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-23',
        },
        {
          pitch: 9,
          yaw: 151,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-24',
        },
        {
          pitch: 8,
          yaw: 160,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-25',
        },
        {
          pitch: -8,
          yaw: -12,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-26',
        },
        {
          pitch: -20,
          yaw: -5,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-27',
        },
        {
          pitch: -20,
          yaw: -35,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '2-28',
        },
        {
          pitch: -5,
          yaw: -140,
          createTooltipFunc: hotspot2,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a03',
        },
      ],
    },
  },
}

function hotspot1(hotSpotDiv, args) {
  const spotApp = createApp({
    render() {
      return h(GeneralSpot, {
        onClick: () => show(args),
      })
    },
  })
  spotApp.mount(hotSpotDiv)
}

function hotspot2(hotSpotDiv, args) {
  const spotApp = createApp({
    render() {
      return h(JumpSpot, {
        onClick: () => jump(args),
      })
    },
  })
  spotApp.mount(hotSpotDiv)
}
</script>
<style scoped>
.title {
  font-weight: bold;
  font-size: 1rem;
}
</style>
