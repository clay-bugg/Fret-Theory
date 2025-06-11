<template>
<div class="keyboard">
  <div class="controls">
    <OctavePitch />
    <KeyboardDisplay />
    <ToneSelector  />
    <NoteLabels  />
  </div>
  <div class="keys">
    <Keys />
  </div>
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
/*  Keyboard  */
.keyboard {
  display: flex; flex-direction: column;
  align-items: center; justify-content: space-between;
  gap: 10px;
  width: 1100px;
  border: 1px solid black;
  border-radius: 15px;
  border-top-left-radius: 40px; border-top-right-radius: 40px;
  padding: 30px 30px;
  background-color: var(--mainblack);
}
/*  Controls  */
.controls {
  display: flex;
  align-items: center; justify-content: space-evenly;
  width: 100%;
  background-color: #3B3B3B;
  border-radius: 4px;
  border-top-left-radius: 30px; border-top-right-radius: 30px;
  padding: 20px 0;
}
.keys {
  display: flex;
  width: 100%; height: 200px;
}
</style>
