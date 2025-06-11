<template>
  <div class="control">
    <p>Tone</p>
    <button @click="changeTone"></button>
  </div>
</template>

<script setup>
//--Imports--//
import { storeToRefs } from 'pinia';

//--Store--//
const store = useGlobalStore();
const { currentTone } = storeToRefs(store);
const { tones } = storeToRefs(store);
const { displayType } = storeToRefs(store);

//--Functions--//

function changeTone() { 
  const currentIndex = tones.value.indexOf(currentTone.value);
  const nextIndex = (currentIndex + 1) % tones.value.length;
  currentTone.value = tones.value[nextIndex];
  displayType.value = currentTone.value;
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