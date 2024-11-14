<template>
  <h1>Challenge 2</h1>
  <form action="">
    <label for="colorBackground">Quelle est la couleur de fond?</label><br />
    <input type="text" id="inputColor" v-model="inputColor" />
    <button v-if="inputColor == colorBackground">
      <RouterLink to="/challenge2">Next challenge</RouterLink>
    </button>
  </form>
</template>
<style>
body {
  /*Couleur de fond*/
  background-color: #001780;
}
</style>
<script setup>
import { ref } from 'vue'
const colorBackground = '#001780'

const inputColor = ref('')
</script>
