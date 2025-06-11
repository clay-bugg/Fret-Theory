<template>
  <div class="control">
    <p>Note Labels</p>
    <button @click="changeNotesShown"></button>
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

<style scoped>
  button {
  display: flex;
  align-items: center; justify-content: center;
  width: 20px; height: 20px;
  border: 1px solid black; border-radius: 5px;
  background-color: var(--secondarygrey);
  cursor: pointer;
  }
  button:hover {
    filter: brightness(95%);
  }
button:active {
  filter: brightness(100%);
}
  </style>