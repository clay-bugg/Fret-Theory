
import { defineStore } from 'pinia';
import { useChordStore } from './useChordStore';
import { ref, computed } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const chord = useChordStore();
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  const startingOctave = ref(2);
  const notesShown = ref('all');
  const noteLabels = ref(['all', 'chord', 'none']);
  const currentTone = ref('piano');
  const rootNote = ref('');
  const displayType = ref('');

  //---Functions---//


  function changeOctaveRange(op) {
    if (op === '+') {
      if (startingOctave.value === 6) {
        return;
      } else {
        startingOctave.value++
        displayType.value = startingOctave.value.toString();
      }
  
    } else if (op === '-') {
      if (startingOctave.value === 1) {
        return;
      } else {
        startingOctave.value--
        displayType.value = startingOctave.value.toString();
      }
    }
  
  };

  return {
    notes,
    startingOctave,
    notesShown,
    noteLabels,
    currentTone,
    rootNote,
    changeOctaveRange,
    displayType,
  }
});
