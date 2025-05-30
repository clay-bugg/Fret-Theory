<template>
  <div class="control">
    <p class="control-label">Octaves: {{ octaveAmount }}</p>
    <div class="octave-selector">
      <input v-model="store.octaveAmount" :class="{ active: store.octaveAmount === '1' }" type="radio" value="1" />
      <input v-model="store.octaveAmount" :class="{ active: store.octaveAmount === '2' }" type="radio" value="2" />
      <input v-model="store.octaveAmount" :class="{ active: store.octaveAmount === '3' }" type="radio" value="3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const store = useKeyboardStore();



</script>

<style scoped>
.octave-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.octave-selector input {
  width: 10px;
  height: 10px;
}

</style>