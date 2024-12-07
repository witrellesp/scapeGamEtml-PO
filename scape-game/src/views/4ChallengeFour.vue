<template>
  <div class="clock-container">
    <h1>Défi : Trouvez l'indice caché</h1>
    <p>Inspecter le code pour observer l'heure secrète qui vous fournira le mot secret.</p>

    <!-- Affichage de l'heure -->
    <div class="clock">
      <input v-model="hours" type="number" min="0" max="23" /> :
      <input v-model="minutes" type="number" min="0" max="59" />
    </div>

    <!-- Bouton pour vérifier l'heure -->
    <button @click="checkTime">Vérifier l'heure</button>

    <!-- Message d'indice -->
    <div v-if="showHint" class="hint">
      <p>Félicitations ! L'indice est : EndGame.</p>

      <!-- Champ d'entrée pour l'indice -->
      <label for="keyword">Entrez l'indice:</label><br />
      <input type="text" id="keywordInput" v-model="keywordInput" /><br />

      <!-- Bouton pour accéder au défi suivant -->
      <button v-if="keywordInput === motSecret">
        <RouterLink to="/endGame">Next challenge</RouterLink>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Variables pour l'heure et l'indice
const hours = ref('')
const minutes = ref('')
const showHint = ref(false)
const keywordInput = ref('')
const motSecret = 'EndGame' // Le mot secret à deviner

// Fonction pour vérifier si l'heure est correcte
function checkTime() {
  // L'heure secrète est établie ici 16h20
  if (parseInt(hours.value) === 16 && parseInt(minutes.value) === 20) {
    showHint.value = true
  } else {
    alert("Ce n'est pas la bonne heure. Essayez encore!")
  }
}
</script>

<style scoped>
.clock-container {
  text-align: center;
  margin-top: 50px;
}

.clock input {
  width: 60px;
  padding: 10px;
  margin: 10px;
  font-size: 18px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.hint {
  margin-top: 20px;
  font-size: 18px;
  color: green;
}

input {
  padding: 8px;
  font-size: 16px;
}
</style>
