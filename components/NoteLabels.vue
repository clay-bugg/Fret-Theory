<template>
  <div class="control">
    <button class="control-button" @click="changeNotesDisplayed">Labels</button>
    <Leds :targetArray="noteLabels" :selected="notesShown"/>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia';


const { notesShown, displayType } = storeToRefs(useUiStore());

const noteLabels = ['all', 'chord', 'none'];

//--Functions--//
function changeNotesDisplayed() { 
  const currentIndex = noteLabels.indexOf(notesShown.value);
  const nextIndex = (currentIndex + 1) % noteLabels.length;
  notesShown.value = noteLabels[nextIndex];
  displayType.value = notesShown.value;
}

</script>

