
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
  const displayType = ref('chord');
  const chordDisplay = ref(`${rootNote}${chord.selectedChordType}`)
  const displayOutput = ref(chordDisplay);
  //---Functions---//
  
  function changeDisplay(label) {
    switch (label) {
      case 'chord':
        displayOutput.value = chordDisplay;
      case 'octave':
        displayOutput.value = octaveDisplay;
      case 'tone':
        displayOutput.value = toneDisplay;
      default:
        displayOutput.value = 'Virtual Keyboard';
    }
  }
    
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

  return {
    notes,
    startingOctave,
    notesShown,
    noteLabels,
    currentTone,
    rootNote,
    changeOctaveRange,
    changeDisplay,
    displayType,
    displayOutput,
    chordDisplay,
  }
});
