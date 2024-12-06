<template>
<h1>Challenge 3</h1>
<p>
    Le Dr Code a laissé une combinaison de couleurs secrète. Vous devez cliquer sur les bonnes couleurs dans l'ordre exact pour débloquer le défis suivant.

</p>
<p>CLICKEZ SUR LES COULEURS DANS LE BON ORDRE</p>


    <div class="square red" onclick="alert('Carré rouge cliqué!')"></div>
    <div class="square green" onclick="alert('Carré vert cliqué!')"></div>
    <div class="square blue" onclick="alert('Carré bleu cliqué!')"></div>



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
</style>
<script setup>



</script>