<template>
  <div class="control">
    <p>Labels</p>
    <button class="control-button" @click="changeNotesShown"></button>
  </div>
</template>

<script setup>
//--Imports--//
import { storeToRefs } from 'pinia';

//--Store--//
const store = useGlobalStore();
const { notesShown } = storeToRefs(store);
const { noteLabels } = storeToRefs(store);
const { displayType } = storeToRefs(store);

//--Functions--//

function changeNotesShown() { 
  const currentIndex = noteLabels.value.indexOf(notesShown.value);
  const nextIndex = (currentIndex + 1) % noteLabels.value.length;
  notesShown.value = noteLabels.value[nextIndex];
  displayType.value = notesShown.value;
}
</script>