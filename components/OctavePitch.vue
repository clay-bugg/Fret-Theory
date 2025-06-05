<template>
  <div class="control">
  <p>Pitch</p>
  <div class="base-octave-selector">
    <button @click="control.changeOctaveRange('-')">-</button>
    <p>{startingOctave + startingOctave +2}</p>

    <button @click="control.changeOctaveRange('+')">+</button>
  </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const control = useControlStore();
const { startingOctave } = storeToRefs(control);
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