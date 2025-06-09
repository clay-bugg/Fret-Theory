<template>
  <input v-model="selectedChord" class="display" placeholder="C" />
</template>

<script setup>
// Imports
import { ref, computed } from 'vue';

const store = useGlobalStore();
const keyboard = useKeyboardStore();
const selectedChord = computed(() => {
  `${store.rootNote}${keyboard.selectedChordType}`
});
</script>

<style scoped>
  .display {
    display: flex;
    align-items: center; justify-content: center;
    width: 120px; height: 40px;
    padding: 10px;
    text-align: center;
    font-size: 2rem;
    border: 5px solid black;
    border-radius: 2px;
    background-color: rgb(59, 162, 31);
  }
  .display::placeholder {
    color: black;
  }
</style>