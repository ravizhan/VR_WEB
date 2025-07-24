<template>
  <v-pannellum :src="src" :hfov="50" :showZoom="true" style="height: 100vh"></v-pannellum>
</template>
<script setup>
import vr_img from '/imgs/vr/a002.webp'
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
      type: 'equirectangular',
      panorama: vr_img,
      hotSpots: [
        {
          pitch: -10,
          yaw: 0,
          createTooltipFunc: hotspot,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a03',
        },
        {
          pitch: -10,
          yaw: -140,
          createTooltipFunc: hotspot,
          cssClass: 'custom-hotspot',
          createTooltipArgs: 'a00',
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
