<template>
  <div class="keyboard">
  
    <ChordSelector />
    <Controls />
    <Keys />
  </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
.keyboard {
  display: flex; flex-direction: column;
  align-items: center; justify-content: space-between; gap: 10px;
  width: 1100px;
  border: 1px solid black; border-radius: 15px;
  border-top-left-radius: 40px; border-top-right-radius: 40px;
  padding: 30px;
  background-color: var(--mainblack);
}
</style>
