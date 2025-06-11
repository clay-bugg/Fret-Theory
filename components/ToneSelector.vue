<template>
  <div class="control">
    <p>Tone</p>
    <button @click="changeTone" class="control-button"></button>
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