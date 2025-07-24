<template>
  <div id="app" class="container">
    <img class="background-image" src="/imgs/post.webp" />
    <v-btn
      class="center-button"
      variant="elevated"
      color="red-darken-1"
      size="x-large"
      @click="onButtonClick"
      style="position: absolute; bottom: 10vh"
      >点击进入</v-btn
    >
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function onButtonClick() {
  router.push({
    name: 'detail',
  })
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.title {
  font-size: 15vw;
  color: #000;
}
</style>
