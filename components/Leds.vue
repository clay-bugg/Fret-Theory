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
  background-color: red;
  opacity: 0.4;
  transition: linear-gradient(45deg, rgb(168, 17, 17), red);
}
.led.active {
  background: linear-gradient(45deg, #0c6d0c, #44b100);
  opacity: 1;
}
</style>