<template>
  <div class="controls">
    <div class="control-buttons">
      <Control
        label="Labels"
        :options="noteLabels"
        :selected="notesShown"
        @update:selected="notesShown = $event"
        :onChange="handleUiUpdate"
      />
      <Control
        label="Octave"
        :options="octaves"
        :selected="startingOctave"
        @update:selected="startingOctave = $event"
        :onChange="(val) => (displayType.value = val + 1)"
      />
      <Control
        label="Tone"
        :options="tones"
        :selected="currentTone"
        @update:selected="currentTone = $event"
        :onChange="handleUiUpdate"
      />
    </div>
    <KeyboardDisplay />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const { notesShown, displayType } = storeToRefs(useUiStore());
const { startingOctave } = storeToRefs(useKeyboardStore());
const { currentTone } = storeToRefs(useToneStore());

const noteLabels = ["all", "chord", "none"];
const octaves = [...Array(6).keys()];
const tones = ["piano", "synth", "drumkit"];

function handleUiUpdate(value) {
  displayType.value = value;
}
</script>

<style scoped>
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: var(--charcoal);
  border: 1px solid black;
  border-radius: 4px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px 0 10px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.766);
}
.control-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: fit-content;
}
</style>
