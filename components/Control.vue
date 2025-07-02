<template>
  <div class="control">
    <button class="control-button" @click="cycleOption">
      {{ label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
  selected: { type: [String, Number], required: true },
  onChange: { type: Function, default: null } // optional callback
});

const emit = defineEmits(['update:selected']);

function cycleOption() {
  const currentIndex = options.indexOf(selected);
  const nextIndex = (currentIndex + 1) % options.length;
  const nextValue = options[nextIndex];
  emit('update:selected', nextValue);

  if (onChange) onChange(nextValue); // optional callback
}
</script>