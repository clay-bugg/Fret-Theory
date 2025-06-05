<template>
  <div class="drumkit">
    <div class="hi-hat cymbal"></div>
    <div class="crash cymbal"></div>
    <div class="ride cymbal"></div>
    <div class="snare drum"></div>
    <div class="tom drum"></div>
  <div class="kick drum"></div>
</div>
</template>

<script setup>

</script>

<style scoped>
.drumkit {
  display: flex;
  align-items: center;
  justify-content: center;
}
  .drum {
    border: 2px solid black;
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