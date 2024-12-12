<!------------------>
<!--Challenge 3-->
<!------------------>
<script setup>
import { ref } from 'vue'

const secretCombination = ['red', 'blue', 'green']
const userInput = ref([])
const successMessage = ref(false)
const messageErreur = ref(false)

function handleClick(color) {
  // Ajouter la couleur cliquée au tableau des entrées utilisateur
  userInput.value.push(color)

  // Vérifier si la séquence est correcte
  if (userInput.value.length === secretCombination.length) {
    if (userInput.value.every((value, index) => value === secretCombination[index])) {
      successMessage.value = true
    } else {
      messageErreur.value = true
      alert('Mauvais ordre ! Essayez encore.')
      userInput.value = []
    }
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

  <br />
  <div>
    <p>CLICKEZ SUR LES COULEURS DANS LE BON ORDRE</p>
    <br />

    <div class="square red" @click="handleClick('red')"></div>
    <div class="square green" @click="handleClick('green')"></div>
    <div class="square blue" @click="handleClick('blue')"></div>

    <p v-if="messageErreur">Jetter un oeil au code du Challenge 3</p>

    <div v-if="successMessage">
      <button>
        <RouterLink to="/game/challenge4" class="btnSubmit">Next challenge</RouterLink>
      </button>
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
.btnSubmit {
  color: black;
}
</style>
