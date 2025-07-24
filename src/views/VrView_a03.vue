<template>
  <v-pannellum ref="panoramaRef" :src="src" :hfov="50" :yaw="-2" :pitch="-3" :showZoom="true" style="height: 100vh"></v-pannellum>
  <div class="animated-image" ref="flower">
    <img src="/imgs/flower.webp" width="25%">
  </div>
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
import vr_img from '/imgs/vr/a03.webp'
import { createApp, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import GeneralSpot from '/src/components/GeneralSpot.vue'
import JumpSpot from '/src/components/JumpSpot.vue'
import { VBtn } from 'vuetify/components'
import { createVuetify } from 'vuetify'

const panoramaRef = ref(null);
const viewer = ref(null);
const flower = ref(null)
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
  '3-1': {
    image: '/imgs/board/3-1.webp',
    text: '',
  },
  '3-2': {
    image: '/imgs/board/3-2.webp',
    text: 'Though Zhou Lu left us, his spirit shines forever like a star. The Vietnamese people built a monument in his memory, honoring this international hero from China.',
    title: 'Chapter 6: The Eternal Starlight',
    audio: ['/audio/6-chs.mp3', '/audio/6-eng.mp3', '/audio/6-tcw.mp3'],
  },
  '3-3': {
    image: '/imgs/board/3-3.webp',
    text: 'Though Zhou Lu left us, his spirit shines forever like a star. The Vietnamese people built a monument in his memory, honoring this international hero from China.',
    title: 'Chapter 6: The Eternal Starlight',
    audio: ['/audio/6-chs.mp3', '/audio/6-eng.mp3', '/audio/6-tcw.mp3'],
  },
  '3-4': {
    image: '/imgs/board/3-4.webp',
    text: '',
  },
  '3-5': {
    image: '/imgs/board/3-5.webp',
    text: '',
  },
  '3-6': {
    image: '/imgs/board/3-6.webp',
    text: '',
  },
  '3-7': {
    image: '/imgs/board/3-7.webp',
    text: '',
  },
  '3-8': {
    image: '/imgs/board/3-8.webp',
    text: '',
  },
  '3-9': {
    image: '/imgs/board/3-9.webp',
    text: '',
  },
  '3-10': {
    image: '/imgs/board/3-10.webp',
    text: '',
  },
  '3-11': {
    image: '/imgs/board/3-11.webp',
    text: '',
  },
  '3-12': {
    image: '/imgs/board/3-12.webp',
    text: '',
  },
  '3-13': {
    image: '/imgs/board/3-13.webp',
    text: 'Look! This is the commemorative bronze statue of Martyr Zhou Lu! He loved studying from a young age, and his family supported him. His elder brothers protected him like big trees and helped him get into Hanshan Normal School, the best school in Chaoshan at that time – which is today\'s Hanshan Normal University. Going to school was no easy feat back then, and Zhou Lu was truly a "good student" in his village!',
    audio: ['/audio/1-chs.mp3','/audio/1-eng.mp3','/audio/1-tcw.mp3'],
    title: 'Chapter 1: The Book-Loving Youth',
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
      hfov: 45,
      type: 'equirectangular',
      panorama: vr_img,
      hotSpots: [
        {
          pitch: 6,
          yaw: -130,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-1',
        },
        {
          pitch: 6,
          yaw: -91,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-2',
        },
        {
          pitch: 6,
          yaw: -78,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-3',
        },
        {
          pitch: 6,
          yaw: -66,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-4',
        },
        {
          pitch: 5.5,
          yaw: -57,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-5',
        },
        {
          pitch: 5,
          yaw: -48,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-6',
        },
        {
          pitch: 5.5,
          yaw: 40,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-7',
        },
        {
          pitch: 6,
          yaw: 50,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-8',
        },
        {
          pitch: 7,
          yaw: 62,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-9',
        },
        {
          pitch: 7,
          yaw: 78,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-10',
        },
        {
          pitch: 7,
          yaw: 95,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-11',
        },
        {
          pitch: 6,
          yaw: 138,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-12',
        },
        {
          pitch: 15,
          yaw: -3,
          createTooltipFunc: hotspot1,
          cssClass: 'custom-hotspot',
          createTooltipArgs: '3-13',
        },
        {
          pitch: -35,
          yaw: -3,
          createTooltipFunc: hotspot3,
          cssClass: 'custom-hotspot',
        },
        {
          pitch: 5,
          yaw: -110,
          createTooltipFunc: hotspot2,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a05',
        },
        {
          pitch: 5,
          yaw: 115,
          createTooltipFunc: hotspot2,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a04',
        },
        {
          pitch: 6,
          yaw: -175,
          createTooltipFunc: hotspot2,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a02',
        },
        {
          pitch: 0,
          yaw: 30,
          createTooltipFunc: hotspot2,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a06',
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
        variant: 'tonal',
        onClick: () => jump(args),
      })
    },
  })
  spotApp.mount(hotSpotDiv)
}

function hotspot3(hotSpotDiv) {
  const spotApp = createApp({
    data() {
      return {
        disabled: false
      }
    },
    render() {
      return h(
        VBtn,
        {
          class: 'center-button',
          color: 'red',
          disabled: this.disabled,
          onClick: () => {
            this.disabled = true;
            viewer.value = panoramaRef.value.viewer;
            console.log(viewer.value.getPitchBounds())
            viewer.value.lookAt(-2, -3, 50, false);
            viewer.value.setYawBounds([-2,-2])
            viewer.value.setPitchBounds([-3,-3])
            viewer.value.setHfovBounds([50,50]);
            console.log(viewer.value.getPitchBounds())
            flower.value.classList.add('active');
            setTimeout(() => {
              flower.value.classList.remove('active');
              viewer.value.setYawBounds([-360, 360]);
              viewer.value.setPitchBounds([-90, 90]);
              viewer.value.setHfovBounds([20,100]);
              this.disabled = false;
            }, 6000);
          },
        },
        ['在线献花'],
      )
    },
  })
  spotApp.use(
    createVuetify({
      components: { VBtn },
    }),
  )
  spotApp.mount(hotSpotDiv)
}

</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1rem;
}
</style>