//---Imports---//
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useGlobalStore } from './globalStore.js';

export const useKeyboardStore = defineStore('keyboard', () => {
  //---Stores---//
  const store = useGlobalStore();
  const startingOctave = store.startingOctave;
  //---Static---//

  //---Key Generation---//Ÿ
  const octaves = [1, 2, 3];

  const pianoKeys = computed(() => {
    const keys = [];
    octaves.forEach((octave) => {
      store.notes.forEach((note) => {
        keys.push({ note: note, octave: octave, sharp: note.includes('s') });
      });
    });
    return keys;
  });

  return {
    pianoKeys,
  };

});

  
  
