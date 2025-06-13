<template>
  <div class="control">
    <button class="control-button" @click="changeNotesShown">Labels</button>
    <Leds :targetArray="noteLabels" :selected="notesShown"/>
  </div>
</template>

<script setup>
//--Imports--//
import { storeToRefs } from 'pinia';

//--Store--//
const store = useGlobalStore();
const { notesShown, noteLabels, displayType } = storeToRefs(store);

//--Functions--//
function changeNotesShown() { 
  const currentIndex = noteLabels.value.indexOf(notesShown.value);
  const nextIndex = (currentIndex + 1) % noteLabels.value.length;
  notesShown.value = noteLabels.value[nextIndex];
  displayType.value = notesShown.value;
}

</script>

