import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useKeyboardStore = defineStore('keyboard', () => {
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  const octaves = [...Array(3).keys()];
  const startingOctave = ref(3);


  function changeOctave() {
    startingOctave.value = (startingOctave.value + 1) % octaves.length;
    displayType.value = startingOctave.value + 1;
  }

  const keys = computed(() => {
    const result = [];
    octaves.forEach((octave) => {
      notes.value.forEach((note) => {
        result.push({ note: note, octave: octave, sharp: note.includes('s') });
      });
    });
    return result;
  });

  return {
    notes,
    octaves,
    startingOctave,
    changeOctave,
    keys,
  }

})