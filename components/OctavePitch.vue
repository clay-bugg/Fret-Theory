<template>
  <div class="control">
    <button @click="changeOctave" class="control-button">Octave</button>
    <Leds :targetArray="octaves" :selected="startingOctave"/>
  </div>
</template>

<script setup>

//--Imports--//

import { storeToRefs } from 'pinia';

//--Store--//
const { startingOctave } = storeToRefs(useKeyboardStore());
const { displayType } = storeToRefs(useUiStore());

const octaves = [...Array(6).keys()];

//--Functions--//
function changeOctave() {
  startingOctave.value = (startingOctave.value + 1) % octaves.length;
  displayType.value = startingOctave.value + 1;
}
</script>

<style scoped>
.base-octave-selector {
display: flex; 
align-items: center;
justify-content: space-between;
width: fit-content;
}
</style> 