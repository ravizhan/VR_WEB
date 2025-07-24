<template>
  <v-pannellum :src="src" :showZoom="true" style="height: 100vh"></v-pannellum>
</template>
<script setup>
import vr_img from '/imgs/vr/b01-1.webp'
import JumpSpot from '/src/components/JumpSpot.vue'
import { createApp, h } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

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
        //在这里加跳转点
        {
          pitch: -5,
          yaw: 160,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'b00',
        },
        {
          pitch: -5,
          yaw: 100,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'b04',
        },
        {
          pitch: -5,
          yaw: 210,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'b05',
        },
        {
          pitch: -5,
          yaw: -40,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'b01-2',
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
</script>
