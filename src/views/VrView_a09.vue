<template>
  <v-pannellum :src="src" :showZoom="true" style="height: 100vh"></v-pannellum>
  <v-snackbar v-model="snackbar" rounded="pill" location="top" color="primary" :timeout="1500">
    该区域暂未开放
  </v-snackbar>
</template>
<script setup>
import vr_img from '/imgs/vr/a09.webp'
import JumpSpot from '/src/components/JumpSpot.vue'
import { createApp, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import NoneSpot from '/src/components/NoneSpot.vue'
const router = useRouter()
const snackbar = ref(false)
function jump(id) {
  router.push({
    name: 'vr_' + id,
  })
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
          pitch: 0,
          yaw: -35,
          createTooltipFunc: hotspot,
          createTooltipArgs: 'a06',
        },
        {
          pitch: 0,
          yaw: 115,
          createTooltipFunc: hotspot2,
          createTooltipArgs: 'a10',
        },
        {
          pitch: 2,
          yaw: -110,
          createTooltipFunc: hotspot2,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a11',
        },
        {
          pitch: 0,
          yaw: 180,
          createTooltipFunc: hotspot,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a12',
        },
      ],
    },
  },
}

function hotspot(hotSpotDiv, args) {
  const spotApp = createApp({
    render() {
      return h(JumpSpot, {
        onClick: () => jump(args),
      })
    },
  })
  spotApp.mount(hotSpotDiv)
}

function hotspot2(hotSpotDiv) {
  const spotApp = createApp({
    render() {
      return h(NoneSpot, {
        onClick: () => {
          snackbar.value = true
        },
      })
    },
  })
  spotApp.mount(hotSpotDiv)
}
</script>
