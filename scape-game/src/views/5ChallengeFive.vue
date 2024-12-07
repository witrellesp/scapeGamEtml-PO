<template>
  <div class="end-game-container">
    <h1>🎉 Félicitations ! 🎉</h1>
    <p class="message">
      Vous avez complété tous les défis avec succès. Votre esprit logique et votre persévérance sont
      impressionnants !
    </p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Fonction pour redémarrer le jeu
const restartGame = () => {
  router.push('/') // Redirige vers la première page
}

// Fonction pour partager le jeu
const shareGame = () => {
  const shareText = "J'ai terminé cet escape game incroyable ! Essayez-le ici : [lien du jeu]"
  if (navigator.share) {
    navigator
      .share({
        title: 'Escape Game',
        text: shareText,
        url: window.location.href,
      })
      .catch((err) => console.log('Partage annulé ou échoué : ', err))
  } else {
    alert('Copiez ce lien pour le partager : [lien du jeu]')
  }
}
</script>

<style scoped>
.end-game-container {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #45d620, #121212);
  color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: 50px auto;
  animation: fadeIn 1s ease-in-out;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.message {
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.subtext {
  font-size: 1rem;
  margin-bottom: 30px;
  font-style: italic;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background: #121212;
  color: #45d620;
  border: 2px solid #45d620;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background: #45d620;
  color: #121212;
  transform: scale(1.1);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
