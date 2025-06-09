<template>
  <div class="display">
    <div class="display-label">
      <p v-if="store.displayType === 'chord'">Chord</p>
      <p v-else-if="store.displayType === 'octave'">Octave</p>
      <p v-else>Tone</p>
    </div>
    <input v-model="displayOutput" :placeholder="chordDisplay" />
  </div>
</template>

<script setup>
// Imports
import { ref, computed } from 'vue';

const store = useGlobalStore();
const keyboard = useKeyboardStore();``
const selectedChord = computed(() => {
  `${store.rootNote}${keyboard.selectedChordType}`
});
</script>

<style scoped>
.display {
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-start;
  width: auto; height: 100%;
  background-image: url('public/images/MainDisplay.png');
  background-position: center;
  background-size: cover;
}
.display-label {
  display: flex;
  align-items: center; justify-content: space-evenly;
  width: 100%;
  height: 10px;
}
.display input {
  background: none;
  border: none;
  width: fit-content;
  cursor: default;
  pointer-events: none;
}
.display input:focus {
  outline: none;
}
.display input::placeholder {
  color: black;
  text-align: center;
}
</style>