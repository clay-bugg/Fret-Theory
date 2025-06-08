<template>
  <div class="control">
    <p>Chord Finder</p>
    <div class="chord-finder-options">

      <select v-model="rootNote"  class="note-selector">
        <option v-for="note in store.notes" :key="note" :value="note">
          {{ note.replace('s', '#') }}
        </option>
      </select>

      <select v-model="chordStore.selectChordType" class="chord-selector">
        <option v-for="type in chordStore.chordTypes"
          :key="type.value"
          :value="type.value">
            {{ type.label }}
        </option>
      </select>

    </div>
  </div>
</template>

<script setup>
const chordStore = useChordStore();
const store = useGlobalStore();
</script>

<style scoped>

</style>