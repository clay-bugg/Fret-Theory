<template>
  <div class="component">
    <div class="keyboard">
      <div class="controls">
        <OctavePitch class="control" />
        <OctaveRange class="control" />
        <NoteLabels class="control" />
        <ToneSelector class="control" />
        <ChordSelector />
      </div>
      <Keys />
    </div>
    <ChordPlayed />
  </div>
</template>

<style scoped>
/*  Global  */
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  position: relative;
  justify-content: flex-start;
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
.control {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5em;
  padding: 0.5em 0;
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
}


</style>
