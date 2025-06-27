<template>
  <div class="leds">
    <span
      v-for="(_, i) in targetArray"
      :key="i"
      class="led"
      :class="{ active: i === currentIndex }"
    ></span>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  targetArray: { type: Array, required: true },
  selected: { type: [String, Number], required: true }
});

const currentIndex = computed(() =>
  props.targetArray.indexOf(props.selected)
);
</script>

<style scoped>
.leds {
  display: flex;
  gap: 6px;
  justify-content: center;
}
.led {
  width: 
  10px; height: 10px;
  border-radius: 50%;
  background-color: rgb(97, 0, 0);
  opacity: 0.4;
}
.led.active {
  background: rgb(162, 0, 0);
  opacity: 1;
}
</style>