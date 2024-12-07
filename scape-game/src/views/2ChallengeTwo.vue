<template>
  <h1>Challenge 2</h1>
  <form @submit.prevent="verifierCouleur">
    <label for="colorBackground">Quelle est la couleur de fond?</label>
    <br />
    <input type="text" id="inputColor" v-model="inputColor" :placeholder="placeholderText" />

    <button type="submit" v-if="inputColor === couleurFond">
      <RouterLink to="/challenge3">Next challenge</RouterLink>
    </button>
    <p v-if="messageErreur">{{ messageErreur }}</p>
  </form>
</template>

<style>
body.challenge2-page {
  background-color: #45d620 !important;
}
</style>
<style scoped>
h1 {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2.5rem;
  color: #d6209f; /* Couleur verte vive */
  margin-top: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

//Couleur de fond
const couleurFond = '#45d620'

const inputColor = ref('')
const tentatives = ref(0)
const placeholderText = ref('Entrez la couleur')
const messageErreur = ref('')

onMounted(() => {
  document.body.classList.add('challenge2-page')
})

onBeforeUnmount(() => {
  document.body.classList.remove('challenge2-page')
})

const verifierCouleur = () => {
  if (inputColor.value === couleurFond) {
    messageErreur.value = ''
    tentatives.value = 0
  } else {
    tentatives.value++
    messageErreur.value = 'Couleur incorrecte, essayez encore.'

    if (tentatives.value >= 3) {
      placeholderText.value = 'Indice: #'
    }
  }
}
</script>
