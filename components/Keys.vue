<template>
  <div class="keys">
    <div
      v-for="key in keys"
      :key="`${key.note}${key.octave}`"
      class="key"
      :class="{
        black: key.sharp,
        white: !key.sharp,
        'highlighted-note': chordNotes.includes(key.note),
        interval: chordNotes.includes(key.note),
        'root-note': key.note === rootNote,
      }"
        @mousedown="playKey(key.note, key.octave)"
        @mouseup="stopKey(key.note, key.octave)"
        @mouseleave="stopKey(key.note, key.octave)"
    >
      <span v-if="notesShown === 'all'">
        {{ key.note.replace('s', '#') }}
      </span>
      <span v-else-if="notesShown === 'chord'">
        {{ key.note.replace('s', '#') }}
      </span>
    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'

const { keys } = storeToRefs(useKeyboardStore())
const { chordNotes, rootNote } = storeToRefs(useChordStore())
const { notesShown } = storeToRefs(useUiStore())

const toneStore = useToneStore()
const { playKey, stopKey } = toneStore


</script>

<style scoped>
.keys {
  display: flex;
  align-items: flex-start; justify-content: space-between;
  width: 100%; height: 180px;
  position: relative;
  z-index: 0;
  border-top: 10px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.key {
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-end;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding-bottom: 0.2em;
  cursor: pointer;
  color: black;
  font-size: 0.9rem;
}
.key:hover {
  cursor: pointer;
}
.key:active {
  color: black;
}
.white {
  width: 100%; height: 100%;  
  position: relative;
  z-index: 1;
  background-color: var(--offwhite);
  border: 1px solid black;
}
.white:hover {
  background-color: rgb(240, 240, 240);
}
.black {
  width: calc(100% / 21 * 12); height: 55%;
  position: relative;
  left: calc(100% / 21 * 0.3);
  z-index: 2;
  overflow: hidden;
  margin-left: calc(100% / 21 * -0.66);
  padding-bottom: 0.4em;
  border: 2px solid black;
  border-top: 1px solid black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: black; color: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.565);

}
.black:hover {
  background-color: rgb(20, 20, 20);
}
.white.interval {
  background-color: rgb(126, 145, 215);
}
.black.interval {
  background-color: rgb(126, 145, 215); color: black;
}
.root-note {
  background-color: rgb(57, 82, 175) !important; color: white
}
</style>