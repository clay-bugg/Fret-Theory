<template>
  <div class="control">
    <p>Note Labels</p>
      <div v-for="(label, index) in noteLabels"
       :key="index"
        class="note-label-selector">
        <input v-model="notesShown" 
          :value="label"
          :class="{ active: notesShown === label }"
          type="radio"
          name="note-label"/>
        {{ label }}
      </div>
   </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const store = useGlobalStore();
const { notesShown, noteLabels } = storeToRefs(store);
</script>

<style scoped>
.note-label-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  
}
.note-label-selector input {
  width: 10px;
  height: 10px;
}
</style>