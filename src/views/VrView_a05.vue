<template>
  <v-pannellum :src="src" :hfov="50" :showZoom="true" style="height: 100vh"></v-pannellum>
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
import vr_img from '/imgs/vr/a05.webp'
import { createApp, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import GeneralSpot from '/src/components/GeneralSpot.vue'
import JumpSpot from '/src/components/JumpSpot.vue'
import { VBtn } from 'vuetify/components'

const show_img = ref('')
const show_text = ref('')
const show_title = ref('')
const audio = ref('')
const btn_chs = ref(true)
const btn_eng = ref(false)
const btn_tcw = ref(false)
const dialogVisible = ref(false)
const router = useRouter()
const board = {
  '1-1': {
    image: '/imgs/board/1-1.webp',
    text: '',
    audio: '/audio/666.mp3',
  },
  '1-2': {
    image: '/imgs/board/1-2.webp',
    text: 'In 1934, to escape the enemy,  Zhou Lu set off late at night, hid in the fishing nets of a boat, and sailed to Vietnam on a red-head boat. His family also moved secretly, and even the children at home became "little revolutionary fighters"!',
    title: 'Chapter 4: Adventures on the Red-Head Boat',
    audio: ['/audio/4-chs.mp3', '/audio/4-eng.mp3', '/audio/4-tcw.mp3'],
  },
  '1-3': {
    image: '/imgs/board/1-3.webp',
    text: ''
  },
  '1-4': {
    image: '/imgs/board/1-4.webp',
    text: 'In Vietnam, Zhou Lu took the alias "Zhou Xiangliang" and continued to fight for the revolution. He taught children to read, ran newspapers to spread revolutionary ideas. Unfortunately, he was later captured by the enemy, but he remained unyielding till the end, protecting revolutionary secrets with his life.',
    title: 'Chapter 5: Heroic Stories in Vietnam',
    audio: ['/audio/5-chs.mp3', '/audio/5-eng.mp3', '/audio/5-tcw.mp3'],
  },
  '1-5': {
    image: '/imgs/board/1-5.webp',
    text: 'In Vietnam, Zhou Lu took the alias "Zhou Xiangliang" and continued to fight for the revolution. He taught children to read, ran newspapers to spread revolutionary ideas. Unfortunately, he was later captured by the enemy, but he remained unyielding till the end, protecting revolutionary secrets with his life.',
    title: 'Chapter 5: Heroic Stories in Vietnam',
    audio: ['/audio/5-chs.mp3', '/audio/5-eng.mp3', '/audio/5-tcw.mp3'],
  },
  '1-6': {
    image: '/imgs/board/1-6.webp',
    text: '',
  },
  '1-7': {
    image: '/imgs/board/1-7.webp',
    text: '',
  },
  '1-8': {
    image: '/imgs/board/1-8.webp',
    text: '',
  },
  '1-9': {
    image: '/imgs/board/1-9.webp',
    text: '',
  },
  '1-10': {
    image: '/imgs/board/1-10.webp',
    text: '告华侨书',
  },
  '1-11': {
    image: '/imgs/board/1-11.webp',
    text: '',
  },
  '1-12': {
    image: '/imgs/board/1-12.webp',
    text: '',
  },
  '1-13': {
    image: '/imgs/board/1-13.webp',
    text: '',
  },
  '1-14': {
    image: '/imgs/board/1-14.webp',
    text: '',
  },
  '1-15': {
    image: '/imgs/board/1-15.webp',
    text: '',
  },
  '1-16': {
    image: '/imgs/board/1-16.webp',
    text: '',
  },
  '1-17': {
    image: '/imgs/board/1-17.webp',
    text: '',
  },
  '1-18': {
    image: '/imgs/board/1-18.webp',
    text: '',
  },
  '1-19': {
    image: '/imgs/board/1-19.webp',
    text: '',
  },
  '1-20': {
    image: '/imgs/board/1-20.webp',
    text: '',
  },
  '1-21': {
    image: '/imgs/board/1-21.webp',
    text: '',
  },
  '1-22': {
    image: '/imgs/board/1-22.webp',
    text: '',
  },
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

function jump(id) {
  router.push({
    name: 'vr_' + id,
  })
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
      hfov: 45,
      type: 'equirectangular',
      panorama: vr_img,
      hotSpots: [
        {
          pitch: 7,
          yaw: -158,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-1',
        },
        {
          pitch: 7,
          yaw: -140,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-2',
        },
        {
          pitch: 20,
          yaw: -140,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-3',
        },
        {
          pitch: 8,
          yaw: -130,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-4',
        },
        {
          pitch: 9,
          yaw: -118,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-5',
        },
        {
          pitch: 8,
          yaw: -53,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-6',
        },
        {
          pitch: 7,
          yaw: -42,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-7',
        },
        {
          pitch: 6.5,
          yaw: -35,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-8',
        },
        {
          pitch: 6,
          yaw: -21,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-9',
        },
        {
          pitch: 7,
          yaw: -3,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-10',
        },
        {
          pitch: 7,
          yaw: 17,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-11',
        },
        {
          pitch: 9,
          yaw: 31,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-12',
        },
        {
          pitch: 8,
          yaw: 39,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-13',
        },
        {
          pitch: 9,
          yaw: 50,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-14',
        },
        {
          pitch: 10,
          yaw: 65,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-15',
        },
        {
          pitch: 10,
          yaw: 88,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-16',
        },
        {
          pitch: 10,
          yaw: 110,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-17',
        },
        {
          pitch: -8,
          yaw: -16,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-18',
        },
        {
          pitch: -8,
          yaw: 8,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-19',
        },
        {
          pitch: -8,
          yaw: 0,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-20',
        },
        {
          pitch: -8,
          yaw: -8,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-21',
        },
        {
          pitch: -20,
          yaw: -3,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '1-22',
        },
        {
          pitch: -5,
          yaw: 138,
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
