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
  width: fit-content;
}
.note-label-selectors input {
  width: 10px;
  height: 10px;
}
</style>