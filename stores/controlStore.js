//---Imports---//
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useControlStore = defineStore('controls', () => {

  const startingOctave = ref(2);
  function changeOctaveRange(op) { 
    if (op === '+') {
      if (startingOctave.value === 6) {
        return;
      } else {
        startingOctave.value++
      }
  
    } else if (op === '-') {
      if (startingOctave.value === 1) {
        return;
      } else {
        startingOctave.value--
      }
    }
  
  };

  const notesShown = ref('all');
  const noteLabels = ref(['all', 'chord', 'none']);
  const currentTone = ref('piano');
  const rootNote = ref('');

  return {
    startingOctave,
    notesShown,
    noteLabels,
    currentTone,
    changeOctaveRange,
    rootNote,
  }
})