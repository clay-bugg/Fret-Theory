<template>
  <div class="display">
   <h6>{{ displayTitle }}</h6>
   <p>{{ displayType }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

const { displayType, displayTitle} = storeToRefs(useUiStore());
const { selectedChord } = storeToRefs(useChordStore());
const { startingOctave } = storeToRefs(useKeyboardStore());
const { currentTone } = storeToRefs(useToneStore());

function display(b) { 
  switch (b) { 
    case 'chord':
      return selectedChord.value;
    case 'octave':
      return startingOctave.value;
    case 'tone':
      return currentTone.value;
    default:
      return 'Virtual Keyboard';
  }
}
</script>

<style scoped>
.display {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  width: 180px; height: 40px;
  border: 5px solid black;
  border-radius: 5px;
  background-image: url('public/images/KeyboardDisplay.png/');
  background-position: center;
  background-size: cover;
  position: relative;
  font-family: 'Wallpoet';
  font-size: 1.8rem;
}
</style>