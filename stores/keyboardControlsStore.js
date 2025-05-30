//---Imports---//
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useKeyboardStore = defineStore("global", () => {

  //---State---//
  const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];
  const startingOctave = ref(3);
  const octaveAmount = ref("2");
  const notesDisplayed = ref('all');
  const noteLabels = ['all', 'chord', 'none'];

  //---Setters---//
  function setOctaveAmount(amount) {
    octaveAmount.value = amount;
  }
  //---Computed---//
  const pianoKeys = computed(() => {
    const octavesArray = Array.from(
      { length: octaveAmount.value },
      (_, i) => startingOctave.value + i
    );
    const keys = [];
    for (const octave of octavesArray) {
      notes.value.forEach((note) => {
        keys.push({
          note,
          octave,
          sharp: note.includes("s"),
        });
      });
    }

    return keys;
  });
  //---Functions---//
  function changeBaseOctave(op) { 
    if (op === '+') {
      if (startingOctave.value === 6) {
        return;
      }  else {
        startingOctave.value++
        console.log('+')
      }
  
    } else if (op === '-') {
      if (startingOctave.value === 1) {
        return;
      } else {
        startingOctave.value--
        console.log('-')
      }
    }
  
  };
  
  return { 
    notes,
    pianoKeys,
    octaveAmount,
    changeBaseOctave,
    startingOctave,
    setOctaveAmount,
    notesDisplayed,
    noteLabels
   };
});
