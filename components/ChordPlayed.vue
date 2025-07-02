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
  display: flex;
  align-items: center; justify-content: center;
  width: 500px; height: 100px;
  margin: 0 auto;
  border: 1px solid black;
  
}
</style>