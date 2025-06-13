<template>
  <div class="control">
    <button @click="changeTone" class="control-button">Tone</button>
    <Leds :targetArray="tones" :selected="currentTone"/>
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