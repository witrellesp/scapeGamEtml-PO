<script setup>
import { ref } from 'vue'
const clickCount = ref(0)

function incrementAccount() {
  clickCount.value++
}
</script>

<template>
  <main>
    <div @click="incrementAccount" style="height: 1000vh; width: auto">
      <h3>
        Vous êtes coincé dans le mystérieux laboratoire du Dr. Code, un célèbre développeur qui a
        laissé un dernier défi technologique à ceux qui osent l'affronter. Ce défi vous plonge dans
        un enchevêtrement de code. Seules vos compétences en programmation vous permettront de
        percer les mystères et de vous échapper à temps. Le temps est compté et chaque énigme vous
        rapproche de la liberté… ou de l'échec.
      </h3>
      <br />
      <h4>
        <span class="spnObjectif">Objectif</span> : Votre mission est de résoudre une série
        d'énigmes interactives liées à la programmation et la logique. En résolvant chaque défi,
        vous découvrirez des indices et des codes secrets pour avancer dans l'aventure et
        déverrouiller la sortie. Pour ce faire, vous devrez interagir avec le code sur cette page,
        utiliser vos connaissances en programmation, et réfléchir logiquement pour réussir. Le
        compte à rebours est lancé… parviendrez-vous à résoudre toutes les énigmes.
      </h4>
      <br />

      <p v-if="clickCount > 2" id="pHiden">
        Le bouton pour commencer à été caché dans le code: Allez le-vérifier dans les fichiers du
        jeu, n'oubliez pas que vous êtes sur la page d'accueil..
      </p>
    </div>

    <!--
    <button>
      <RouterLink to="/game/challenge1" class="btnSubmit">Next challenge</RouterLink>
    </button>
    -->
  </main>
</template>

<style scoped>
#pHiden {
  color: #45d620;
}
.spnObjectif {
  color: #45d620;
}
.btnSubmit {
  color: black;
}
</style>
