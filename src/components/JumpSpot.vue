<template>
  <div class="spot" v-bind="$attrs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z"
        :fill="spotColor"
      />
    </svg>
  </div>
</template>
<script setup>
defineProps({
  spotColor: {
    type: String,
    default: "white",
  },})
</script>
<style scoped>
.spot {
  width: 15vw;
  cursor: pointer;
}
</style>
