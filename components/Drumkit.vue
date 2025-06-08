<template>
  <div class="drumkit">
    <div v-for="drum in drums"
     :key="drum.key" 
     @click="playDrum(drum.key)"
     :class="drumType"></div>
  <div class="kick drum"></div>
</div>
</template>

<script setup>
import { ref } from 'vue';

class Drum { 
  constructor(name, type, url) {
    this.name = name;
    this.type = type;
    this.url = url;
  }
}

const drums = ref([
  { name: 'kick', type: 'drum', url: '/samples/dfrum' },
  { name: 'snare', type: 'drum', url: '' },
  { name: 'tomhigh', type: 'drum', url: '' },
  { name: 'tommid', type: 'drum', url: '' },
  { name: 'tomlow', type: 'drum', url: '' },
  { name: 'crash1', type: 'cymbal', url: '' },
  { name: 'crash2', type: 'cymbal', url: '' },
  { name: 'ride', type: 'cymbal', url: '' },
  { name: 'ride-bell', type: 'cymbal', url: '' },
  { name: 'hi-hat-open', type: 'cymbal', url: '' },
  { name: 'high-hat-closed', type: 'cymbal', url: '' },
  
  ])
</script>

<style scoped>
.drumkit {
  display: flex;
  align-items: center;
  justify-content: center;
}
  .drum {
    border: 4px solid black;
    background: radial-gradient(from center, white, grey);
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .cymbal {
    border: 1px solid rgb(0, 0, 0);
    background-color: rgb(145, 121, 25);
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
</style>