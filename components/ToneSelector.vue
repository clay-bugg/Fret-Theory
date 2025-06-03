<template>
  <div class="control">
    <p>Tone</p>
    <select v-model="currentTone" class="tone-selector">
      <option name="piano" value="piano">Piano</option>
      <option name="synth" value="synth">Synth</option>
    </select>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const control = useControlStore();
const { currentTone } = storeToRefs(control);


</script>

<style scoped>

</style>