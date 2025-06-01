<template>
  <div class="component">
    <div class="keyboard">
      <div class="controls">
        <OctavePitch  />
        <KeysDisplayed />
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

</script>

<style scoped>
.test {
  margin: 0 auto;
}
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
  width: 100vw;
  position: relative;
  justify-content: center;
}
/*  Controls  */
.controls {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
