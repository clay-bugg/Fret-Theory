<template>
  <div class="octave-pitch control">
  <p>Pitch</p>
  <div class="base-octave-selector">
    <button @click="changeBaseOctave('-')">-</button>
    <p v-if="store.octaveAmount === '1'">{{ store.startingOctave }}</p>
    <p v-else-if="store.octaveAmount === '2'">{{ store.startingOctave }}-{{ store.startingOctave + 1 }}</p>
    <p v-else-if="store.octaveAmount === '3'">{{ store.startingOctave }}-{{ store.startingOctave + 2 }}</p>
    <button @click="changeBaseOctave('+')">+</button>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const store = useKeyboardStore();
const { changeBaseOctave } = useKeyboardStore();
const { startingOctave } = useKeyboardStore();
const { octaveAmount } = useKeyboardStore();
 </script>

<style scoped>
.base-octave-selector {
display: flex;
align-items: center;
justify-content: space-between;
width: fit-content;
gap: 0.4em;
font-size: 1.2rem;
font-weight: 700;
}
.base-octave button {
  width: 25px;
  height: 25px;
}
</style>