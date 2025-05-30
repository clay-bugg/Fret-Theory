<template>
  <div class="control">
    <p>Note Labels</p>
      <div  class="note-label-selectors">
        <input v-for="(label, index) in store.noteLabels" 
          :key="label" 
          v-model="store.notesDisplayed" 
          class="notes-button" 
          :class="{ active: store.notesDisplayed === label  }"
          type="radio"
          name="note-labels-button"
          :value="label"/>
          {{ label  }}
        </div>
      </div>
</template>

<script setup>
//---Imports---//
//---State---//
const store = useKeyboardStore();


</script>

<style scoped>
.note-label-selectors {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
}
.note-label-selectors input {
  width: 25px;
  height: 25px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid black;
  background-color: rgb(152, 12, 12);
  border-radius: 5px;
  cursor: pointer;
}
.note-label-selectors input.active {
  background-color: rgb(133, 206, 23);
}
</style>