<template>
  <div class="keys">
    <div v-for="(key, index) in pianoKeys"
      class="key"
      :key="`${key.note}${key.octave}`"
      :style="keyStyles"
      :id="`interval-${chordNotes.indexOf(key.note) + 1}`"
      :class="[{
        black: key.sharp,
        white: !key.sharp,
        'highlighted-note': chordNotes.includes(key.note),
        'interval': chordNotes.includes(key.note),
        'root-note': key.note === rootNote,
        }]"
      @mousedown="playKey(key.note, key.octave)"
      @mouseup="stopKey(key.note, key.octave)"
      @mouseleave="stopKey(key.note, key.octave)"
      @keydown="playKeyboardKey(key.note, key.octave)"
      @keyup="stopKeyboardKey(key.note, key.octave)">

      <span v-if="notesDisplayed === 'all'">{{ key.note }}</span>
      <span v-if="notesDisplayed === 'chord' && chordNotes.includes(key.note)">
        {{ key.note }}
      </span>
    </div>
  </div>
</template>

<script setup>
const control = useControlStore();
const { rootNote, notesDisplayed } = storeToRefs(control);

const chord = useChordPlayer();
const { pianoKeys, chordNotes } = chord;

const keyboardStore = useKeyboardStore();
const keyboard = useKeyboardStore();
const { keyStyles } = storeToRefs(keyboardStore);


</script>

<style scoped>
.keys {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 0;
  border-top: 10px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.key {
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-end;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}
.white {
  height: 100%;
  flex: 1;
  position: relative;
  z-index: 1;
  background-color: white; color: black;
}
.white:hover {
  background-color: rgb(240, 240, 240);
}
.black {
  width: calc(100% / var(--white-key-count) * 0.6); height: 60%;
  position: relative;
  left: calc(100% / var(--white-key-count) * 0.3);
  z-index: 2;
  overflow: hidden;
  margin-left: calc(100% / var(--white-key-count) * -0.6);
  padding-bottom: 0.4em;
  border: 2px solid black;
  border-top: 1px solid black;
  background-color: black; color: white;
  box-shadow: -2px 0 1px rgba(0,0,0,0.5);
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