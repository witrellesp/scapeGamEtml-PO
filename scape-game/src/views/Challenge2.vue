<template>
  <h1>Challenge 2</h1>
  <form action="">
    <label for="colorBackground">Quelle est la couleur de fond?</label><br />
    <input type="text" id="inputColor" v-model="inputColor" />
    <button v-if="inputColor === couleurFond">
      <RouterLink to="/challenge3">Next challenge</RouterLink>
    </button>
  </form>
</template>

<style scoped>
/* Estilo solo para este componente */
body.challenge2-page {
  background-color: #45d620;
}
</style>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const couleurFond = '#45d620'
const inputColor = ref('')

// Añadir clase al body cuando el componente esté montado
onMounted(() => {
  document.body.classList.add('challenge2-page')
})

// Eliminar la clase antes de que el componente se destruya
onBeforeUnmount(() => {
  document.body.classList.remove('challenge2-page')
})
console.log(document.body.classList) // Asegúrate de ver 'challenge2-page' en el listado.
</script>
