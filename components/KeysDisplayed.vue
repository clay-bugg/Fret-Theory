<template>
  <div class="control">
    <p class="control-label">Octaves: {{ octaveAmount }}</p>
    <div class="octave-selector">
      <input v-for="i in 3" :key="i" v-model="octaveAmount" :class="{ active: octaveAmount === i }" type="radio" :value="i" name="octave-amount" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
const store = useControlStore();
const { octaveAmount } = storeToRefs(store);

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