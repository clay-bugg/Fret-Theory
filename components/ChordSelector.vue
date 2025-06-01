<template>
  <div class="control">
    <p>Chord Finder</p>
    <div class="chord-finder-options">

      <select v-model="rootNote"  class="note-selector">
        <option v-for="note in notes" :key="note" :value="note">
          {{ note.replace('s', '#') }}
        </option>
      </select>

      <select v-model="chordType" class="chord-selector">
        <option v-for="chord in chordTypes"
          :key="chord.value"
          :value="chord.value">
            {{ chord.label }}
        </option>
      </select>

    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const store = useControlStore();
const chordStore = useChordStore();
const { rootNote } = storeToRefs(store);
const { notes, chordTypes } = storeToRefs(chordStore);
</script>

<style scoped>

</style>