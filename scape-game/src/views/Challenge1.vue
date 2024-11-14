<template>
  <h1>Challenge 1</h1>
  <p>
    Le Dr. Code a caché une clé dans un champ de formulaire. Pour la trouver, vous devez remplir le
    formulaire correctement.
  </p>
  <form action="">
    <label for="keyword">Entrez le mot secret</label><br />
    <input type="text" id="keywordInput" v-model="keywordInput" /><br />
    <button v-if="keywordInput == motSecret">
      <RouterLink to="/challenge2">Next challenge</RouterLink>
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
//mot secret
const motSecret = 'informatique'

const keywordInput = ref('')
</script>
