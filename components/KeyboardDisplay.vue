<template>
  <div class="display">
   <p>{{ store.displayType }}</p>
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
function display(b) { 
  switch (b) { 
    case 'chord':
      return selectedChord.value;
    case 'octave':
      return store.startingOctave.value;
    case 'tone':
      return store.currentTone.value;
    default:
      return 'Virtual Keyboard';
  }
}
</script>

<style scoped>
.display {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  width: 200px; height: 60px;
  border: 5px solid black;
  border-radius: 5px;
  background-image: url('public/images/MainDisplay.png/');
  background-position: center;
  background-size: cover;
  position: relative;
  font-size: 30px;
}

</style>