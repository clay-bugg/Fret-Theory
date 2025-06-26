<template>
  <Keyboard />
  <ChordPlayed />
  <select>
    <option name="newkeyboard">
      <NuxtLink to="/">New</NuxtLink>
    </option>
    <option name="oldkeyboard">
      <NuxtLink to="/oldkeyboard">Old</NuxtLink>
    </option>
  </select>
</template>

<script setup>

</script>

<style scoped>
body {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  height: 100vh; width: 100vw;
}
</style>