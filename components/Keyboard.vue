<template>
  <div class="component">

    <div class="keyboard">
      <div class="controls">
        <OctavePitch  />
        <NoteLabels  />
        <KeyboardDisplay />
        <ToneSelector  />
        <ChordSelector />
      </div>
      <div class="keys">
      <Keys />
      </div>
    </div>
    <ChordPlayed />
  </div>
</template>
<script setup lang="ts">

import * as Tone from 'tone';
import { onMounted } from 'vue';




let synth;
let sampler;
let polySynth;


</script>

<style scoped>
.component {
  display: flex; flex-direction: column;
  align-items: center;
  width: 100vw;
  position: relative;
  justify-content: center;
}
/*  Keyboard  */
.keyboard {
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-start;
  width: 1100px; height: 300px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px 15px 20px;
  border-top-left-radius: 40px; border-top-right-radius: 40px;
  background-color: rgb(42,42,42);
}
/*  Controls  */
.controls {
  display: flex;
  align-items: center; justify-content: space-evenly;
  width: 100%;
  color: rgb(215, 215, 215);
}
.keys {
  display: flex;
  width: 100%; height: 100%;
  position: relative;
}

</style>

function useGlobalStore() {
  throw new Error('Function not implemented.');
}
