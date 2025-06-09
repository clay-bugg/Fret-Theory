<template>
  <div class="keys">
    <div
      v-for="key in keyboard.pianoKeys"
      :key="`${key.note}${key.octave}`"
      class="key"
      :class="{
        black: key.sharp,
        white: !key.sharp,
        'highlighted-note': chord.chordNotes.includes(key.note),
        interval: chord.chordNotes.includes(key.note),
        'root-note': key.note === rootNote,
      }"
      @mousedown="() => playKey(key.note, key.octave)"
      @mouseup="() => stopKey(key.note, key.octave)"
      @mouseleave="() => stopKey(key.note, key.octave)"
      @keydown="() => playKeyboardKey(key.note, key.octave)"
      @keyup="() => stopKeyboardKey(key.note, key.octave)"
    >
      <span v-if="notesShown === 'all'">
        {{ key.note }}
      </span>
      <span v-else-if="notesShown === 'chord'">
        {{ key.note }}
      </span>
    </div>
  </div>
</template>

<script setup>

const globalStore = useGlobalStore();
const keyboard = useKeyboardStore();
const chord = useChordStore();

const { notesShown, rootNote } = storeToRefs(globalStore);
const { pianoKeys } = storeToRefs(keyboard);
const { chordNotes } = storeToRefs(chord);

</script>

<style scoped>
.keys {
  display: flex;
  align-items: flex-start; justify-content: space-between;
  width: 100%; height: 80%;
  position: relative;
  margin-bottom: 1em;
  z-index: 0;
  overflow: hidden;
  border-top: 10px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.key {
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-end;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
  background-color: white; color: black;
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
  margin-left: calc(100% / 21 * -0.6);
  padding-bottom: 0.4em;
  border: 2px solid black;
  border-top: 1px solid black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: black; color: white;

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