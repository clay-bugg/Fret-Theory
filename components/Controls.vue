<template>
  <div class="controls">
    <div class="control-buttons">
      <OctavePitch />
      <ToneSelector  />
      <NoteLabels  />
    </div>
    <KeyboardDisplay />
  </div>
</template>

<script setup>

</script>

<style scoped>
.controls {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 10px;
  width: 100%;
  background-color: #3B3B3B;
  border: 1px solid black; border-radius: 4px;
  border-top-left-radius: 30px; border-top-right-radius: 30px;
  padding: 20px 0 10px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.766);
}
.control-buttons {
  display: flex;
  align-items: center; justify-content: space-evenly;
  width: 300px; height: 100%;
}
</style>