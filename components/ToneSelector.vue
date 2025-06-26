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
const { currentTone } = storeToRefs(useToneStore());
const { displayType } = storeToRefs(useUiStore());

const tones = ref(['piano', 'synth', 'drumkit']);

//--Functions--//
function changeTone() { 
  const currentIndex = tones.value.indexOf(currentTone.value);
  const nextIndex = (currentIndex + 1) % tones.value.length;
  currentTone.value = tones.value[nextIndex];
  displayType.value = currentTone.value;
}
</script>|