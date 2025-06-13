<template>
  <div class="keyboard">
    <Controls />
    <Keys />
  </div>
  <ChordSelector style="color: black; border: 1px solid black; margin: 2px; width: fit-content"/>
  <ChordPlayed style="color: black; border: 1px solid black; margin: 2px; width: fit-content"/>
</template>

<script setup>

import * as Tone from 'tone';
import { onMounted } from 'vue';

let synth;
let sampler;
let polySynth;

</script>

<style scoped>
.keyboard {
  display: flex; flex-direction: column;
  align-items: center; justify-content: space-between; gap: 10px;
  width: 1100px;
  border: 1px solid black; border-radius: 15px;
  border-top-left-radius: 40px; border-top-right-radius: 40px;
  padding: 30px;
  background-color: var(--mainblack);
}
</style>
