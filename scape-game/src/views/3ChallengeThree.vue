<script setup>
import { ref } from 'vue'
//Combinaison des couleurs
const secretCombination = ['red', 'blue', 'green']
const userInput = ref([])
const successMessage = ref(false)

function handleClick(color) {
  // Ajouter la couleur cliquée au tableau des entrées utilisateur

  userInput.value.push(color)

  // Vérifier si la séquence est correcte
  if (
    userInput.value[userInput.value.length - 1] !== secretCombination[userInput.value.length - 1]
  ) {
    alert('Mauvais ordre ! Essayez encore.')
    userInput.value = [] // Réinitialiser si erreur
  } else if (userInput.value.length === secretCombination.length) {
    successMessage.value = true // Afficher le message de succès
    alert('Bon ordre. Félicitations')
  }
}
</script>

<template>
  <h1>Challenge 3</h1>
  <p>
    Le Dr Code a laissé une combinaison de couleurs secrète. Vous devez cliquer sur les bonnes
    couleurs dans l'ordre exact pour débloquer le défis suivant.
  </p>
  <br />
  <p>Jetter un oeil au code du Challenge 3</p>
  <br />
  <div>
    <p>CLICKEZ SUR LES COULEURS DANS LE BON ORDRE</p>
    <br />

    <div class="square red" @click="handleClick('red')"></div>
    <div class="square green" @click="handleClick('green')"></div>
    <div class="square blue" @click="handleClick('blue')"></div>

    <div v-if="successMessage">
      <button><RouterLink to="/challenge4">Next challenge</RouterLink></button>
    </div>
  </div>
</template>

<style scoped>
.square {
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  display: inline-block;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
.message {
  margin-top: 20px;
  font-size: 20px;
  color: green;
  display: none;
}
.show-message {
  display: block;
}
</style>
