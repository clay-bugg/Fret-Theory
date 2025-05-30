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
import { ref } from 'vue';
</script>

<style scoped>

</style>