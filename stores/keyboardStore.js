//---Imports---//
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useGlobalStore } from './globalStore.js';

export const useKeyboardStore = defineStore('keyboard', () => {
  //---Stores---//

  //---Static---//

  //---Key Generation---//Ÿ
  const octaves = [1, 2, 3];

  const pianoKeys = computed(() => {
    const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];
    const keys = [];
    octaves.forEach((octave) => {
      notes.forEach((note) => {
        keys.push({ note: note, octave: octave, sharp: note.includes('s') });
      })
    });
    return keys;
  });

  return {
    pianoKeys,
  };

});

  
  
