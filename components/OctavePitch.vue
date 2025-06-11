<template>
  <div class="control">
    <p>Pitch</p>
    <div class="base-octave-selector">
      <button @click="changeOctaveRange('-')">-</button>
      <button @click="changeOctaveRange('+')">+</button>
    </div>
  </div>
</template>

<script setup>

//--Imports--//
import { storeToRefs } from 'pinia';

//--Stores--//
const store = useGlobalStore();
const { startingOctave } = storeToRefs(store);
const { displayType } = storeToRefs(store);

//--Functions--//
function changeOctaveRange(op) {
    if (op === '+') {
      if (startingOctave.value === 6) {
        return;
      } else {
        startingOctave.value++
        displayType.value = startingOctave.value.toString();
      }
  
    } else if (op === '-') {
      if (startingOctave.value === 1) {
        return;
      } else {
        startingOctave.value--
        displayType.value = startingOctave.value.toString();
      }
    }
  
};
  
 </script>

<style scoped>
.base-octave-selector {
display: flex;
align-items: center;
justify-content: space-between;
width: fit-content;
}
.base-octave button {
  width: 20px;
  height: 20px;
}
</style>