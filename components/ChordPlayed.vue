<template>
  <div class="chord-played">
    {{ selectedChord }}
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const { selectedChord } = storeToRefs(useChordStore());




</script>

<style scoped>
.chord-played {
  border: 1px solid black;
  width: 200px;
  height: 200px;
}
</style>