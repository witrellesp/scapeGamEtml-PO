<template>
  <div class="timer">{{ formattedTime }}</div>
</template>

<script>
export default {
  data() {
    return {
      time: 340, //temps du chronomètre
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.time / 60)
      const seconds = this.time % 60
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.time--
      }, 1000)
    },
  },
}
</script>

<style scoped>
.timer {
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: rgb(34, 202, 76);
  padding: 10px;
  border-radius: 5px;
}
</style>
