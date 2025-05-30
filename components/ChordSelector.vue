<template>
  <div class="control">
    <p>Chord Finder</p>
    <div class="chord-finder-options">

      <select  v-model="rootNote"  class="note-selector">
        <option v-for="note in keysStore.notes" :key="note" :value="note">
          {{ note.replace('s', '#') }}
        </option>
      </select>

      <select v-model="chordType" class="chord-selector">
        <option v-for="chord in chordStore.chordTypes"
          :key="chord.value"
          :value="chord.value">
            {{ chord.label }}
        </option>
      </select>

    </div>
  </div>
</template>

<script setup>
const chordStore = useChordTypeStore();
const keysStore = useKeyboardStore();
</script>

<style scoped>

</style>