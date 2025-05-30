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
  align-items: center;
  justify-content: center;
  width: 100%;
  color: rgb(215, 215, 215);
}
/*  Keyboard  */
.keyboard {
  border: 1px solid black;
  width: 1100px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
</style>
