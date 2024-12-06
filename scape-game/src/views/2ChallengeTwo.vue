<template>
  <h1>Challenge 2</h1>
  <form @submit.prevent="verifierCouleur">
    <label for="colorBackground">Quelle est la couleur de fond?</label><br />
    <input
      type="text"
      id="inputColor"
      v-model="inputColor"
      :placeholder="placeholderText"
    />
    <button type="submit" v-if="inputColor === couleurFond">
      <RouterLink to="/challenge3">Next challenge</RouterLink>
    </button>
    <p v-if="messageErreur">{{ messageErreur }}</p>
  </form>
</template>

<style>
/* Forzar el color de fondo del body */
body.challenge2-page {
  background-color: #45d620 !important;
}
</style>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Variables
const couleurFond = '#45d620' // Color de fondo
const inputColor = ref('') // Valor del input
const tentatives = ref(0) // Contador de intentos
const placeholderText = ref('Entrez la couleur') // Placeholder dinámico
const messageErreur = ref('') // Mensaje de error

// Añadir clase al body cuando el componente esté montado
onMounted(() => {
  document.body.classList.add('challenge2-page') // Añadir la clase
})

// Eliminar la clase antes de que el componente se destruya
onBeforeUnmount(() => {
  document.body.classList.remove('challenge2-page') // Remover la clase
})

// Verificar el color ingresado
const verifierCouleur = () => {
  if (inputColor.value === couleurFond) {
    messageErreur.value = ''
    tentatives.value = 0 // Reiniciar intentos si es correcto
  } else {
    tentatives.value++
    messageErreur.value = 'Couleur incorrecte, essayez encore.'

    // Mostrar pista después de 3 intentos
    if (tentatives.value >= 3) {
      placeholderText.value = 'Indice: #'
    }
  }
}
</script>
