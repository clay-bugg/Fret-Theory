<template>
  <div class="control">
  <p>Pitch</p>
  <div class="base-octave-selector">
    <button @click="store.changeOctaveRange('-')">-</button>
      <p>{{ startingOctave }}</p>
    <button @click="store.changeOctaveRange('+')">+</button>
  </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const store = useGlobalStore();
const { startingOctave } = storeToRefs(store);
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