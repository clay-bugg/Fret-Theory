<template>
  <div class="control">
    <p class="control-label">Octaves: {{ octaveAmount }}</p>
    <div class="octave-selector">
      <input v-model="store.octaveAmount" :class="{ active: store.octaveAmount === '1' }" type="radio" value="1" />
      <input v-model="store.octaveAmount" :class="{ active: store.octaveAmount === '2' }" type="radio" value="2" />
      <input v-model="store.octaveAmount" :class="{ active: store.octaveAmount === '3' }" type="radio" value="3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const store = useKeyboardStore();



</script>

<style scoped>
.octave-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
}
.octave-selector input {
  width: 25px;
  height: 25px;
  appearance: none;;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid black;
  background-color: rgb(152, 12, 12);
  border-radius: 5px;
}
.octave-selector input.active {
  background-color: rgb(133, 206, 23);
}
.octave-selector input:hover {
  cursor: pointer;
}
</style>