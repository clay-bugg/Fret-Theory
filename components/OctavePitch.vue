<template>
  <div class="control">
  <p>Pitch</p>
  <div class="base-octave-selector">
    <button @click="control.changeOctaveRange('-')">-</button>
    <p v-if="octaveAmount === 1">{{ startingOctave.toString() }}</p>
    <p v-else-if="octaveAmount === 2">{{ startingOctave.toString() }}-{{ (startingOctave + 1).toString() }}</p>
    <p v-else-if="octaveAmount === 3">{{ startingOctave.toString() }}-{{ (startingOctave + 2).toString() }}</p>
    <button @click="control.changeOctaveRange('+')">+</button>
  </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const control = useControlStore();
const { octaveAmount, startingOctave } = storeToRefs(control);
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