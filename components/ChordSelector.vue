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

import { storeToRefs } from 'pinia'

const { rootNote, chordType, chordTypes } = storeToRefs(useChordStore());
const { notes } = storeToRefs(useKeyboardStore());









</script>

<style scoped>

</style>