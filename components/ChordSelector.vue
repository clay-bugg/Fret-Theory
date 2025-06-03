<template>
  <div class="control">
    <p>Chord Finder</p>
    <div class="chord-finder-options">

      <select v-model="rootNote"  class="note-selector">
        <option v-for="note in notes" :key="note" :value="note">
          {{ note.replace('s', '#') }}
        </option>
      </select>

      <select v-model="selectedChordType" class="chord-selector">
        <option v-for="type in chordTypes"
          :key="type.value"
          :value="type.value">
            {{ type.label }}
        </option>
      </select>

    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const keyboardStore = useKeyboardStore();
const notes = keyboardStore.notes;
const { rootNote, selectedChordType, chordTypes } = useChordPlayer();

</script>

<style scoped>

</style>