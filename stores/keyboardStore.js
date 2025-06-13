//---Imports---//
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useKeyboardStore = defineStore('keyboard', () => {
  //---Static---//
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  const octaves = [...Array(3).keys()];
  //---Key Generation---//
  const keys = computed(() => {
    const result = [];
    octaves.forEach((octave) => {
      notes.value.forEach((note) => {
        result.push({ note: note, octave: octave, sharp: note.includes('s') });
      });
    });
    return result;
  });
  //---Functions---//
  function playKey(note, octave) {
    return note + octave;
  }
  function stopKey(note, octave) {
    return note + octave;
  }
  return {
    notes,
    octaves,
    keys,
    playKey,
    stopKey,
  };
});
  
