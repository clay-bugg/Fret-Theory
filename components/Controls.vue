<template>
  <div class="controls">
    <div class="control-buttons">
      <ToneSelector  />
      <OctavePitch />
      <NoteLabels  />
    </div>
    <KeyboardDisplay />
  </div>
</template>

<script setup>

</script>

<style>
.controls {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 10px;
  width: 100%;
  background-color: var(--charcoal);
  border: 1px solid black; border-radius: 4px;
  border-top-left-radius: 30px; border-top-right-radius: 30px;
  padding: 20px 0 10px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.766);
}
.control-buttons {
  display: flex;
  align-items: center; justify-content: space-evenly;
  width: 400px; height: 100%;
  border-radius: 10px;
  padding: 5px;
  box-shadow: -2px 2px 4px 1px rgba(0, 0, 0, 0.425);
}
.control-button {
  display: flex;
  align-items: center; justify-content: center;
  border: 1px solid black; border-radius: 5px;
  padding: 5px;
  font-size: 1.2rem;
  background-color: transparent; color: var(--offwhite);
  box-shadow: -1 1 1px 1px rgba(0,0,0,0.5);
  cursor: pointer;
}
.control-button:hover {
  filter: brightness(90%);
}
.control-button:active {
  filter: brightness(100%);
}
</style>