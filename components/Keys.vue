<template>
  <div class="keys" :style="keyStyles">
    <div v-for="(key, index) in pianoKeys"
      :key="`${key.note}${key.octave}`"
      :style="{'fontSize': keyFontSize}"
      :id="`interval-${chordNotes.indexOf(key.note) + 1}`"
      class="key"
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
//  Imports  //
import { ref } from 'vue';
import * as Tone from 'tone';
//  State  //
const store = useKeyboardStore();
const notes = store.notes;

</script>

<style scoped>

</style>