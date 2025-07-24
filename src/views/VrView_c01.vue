<template>
  <v-pannellum :src="src" :showZoom="true" style="height: 100vh"></v-pannellum>
</template>
<script setup>
import vr_img from '/imgs/vr/c01.webp'
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
        {
          pitch: -5,
          yaw: 50,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'b02-2',
        },
        {
          pitch: 0,
          yaw: 0,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'c04',
        },
        {
          pitch: -5,
          yaw: -65,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'c02',
        },
        {
          pitch: -5,
          yaw: 70,
          cssClass: 'custom-hotspot',
          createTooltipFunc: hotspot,
          createTooltipArgs: 'c03',
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

<style scoped></style>
