<template>
  <div class="component">

    <div class="keyboard">
      <div class="controls">
        <OctavePitch  />
        <NoteLabels  />
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
const store = useGlobalStore();

let synth;
let sampler;
let polySynth;

onMounted(() => {
  if (typeof window !== 'undefined') {
    synth = new Tone.Synth({
      oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: 0.05,
        decay: 0.2,
        sustain: 0.3,
        release: 1
      }
    }).toDestination();

    sampler = new Tone.Sampler({
      urls: {
        "A1": 'A1.mp3',
        "A2": 'A2.mp3',
        "A3": 'A3.mp3',
        "A4": 'A4.mp3',
        "A5": 'A5.mp3',
        "A6": 'A6.mp3',
        "A7": 'A7.mp3',
      },
      baseUrl: '/samples/piano/',
      onload: () => {
        console.log('Sampler loaded');
      }
    }).toDestination();

    polySynth = new Tone.PolySynth(Tone.Synth).toDestination();
  }
});

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
  border-top-left-radius: 40px; border-top-right-radius: 40px;
  padding: 2em 4em 1em;
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
