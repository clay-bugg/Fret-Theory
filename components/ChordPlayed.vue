<template>
  <div class="chord-played">
    {{ selectedChord }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const chord = useChordStore();
const { selectedChord } = storeToRefs(chord);

</script>

<style scoped>

</style>