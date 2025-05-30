<template>
  <div class="component">
    <div class="keyboard">
      <div class="controls">
        <OctavePitch  />
        <OctaveRange />
        <NoteLabels  />
        <ToneSelector  />
        <ChordSelector />
      </div>
      <Keys />
    </div>
    <ChordPlayed />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped>
/*  Global  */
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  position: relative;
  justify-content: center;
  width: 100vw;
}
/*  Controls  */
.controls {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 6em;
  position: relative;
  z-index: 3;
  color: rgb(215, 215, 215);
  padding: 0 1em 1em;
  gap: 3em;
  margin-bottom: 0.5em;
}
/*  Keyboard  */
.keyboard {
  border: 1px solid black;
  border-radius: 15px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: rgb(42, 42, 42);
  width: 1100px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2em 4em 1em;
  margin: 0 auto;
}
</style>
