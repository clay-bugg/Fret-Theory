//---Imports---//
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useControlStore } from './controlStore.js';

export const useKeyboardStore = defineStore('keyboard', () => { 
  //---Stores---//
  const control = useControlStore();
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  //---Key Generation---//
  const pianoKeys = computed(() => {
    console.log("control.octaveAmount =", control.octaveAmount.value);
    console.log("control.startingOctave =", control.startingOctave.value);
    const octavesArray = Array.from(
      { length: Number(control.octaveAmount.value) },
      (_, i) => Number(control.startingOctave.value) + i
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
    console.log("built keys array:", keys); 
    return keys;
  });
  //---Dynamic Key Styles---//
  const keyStyles = computed(() => {

    const whiteKeyCount = computed(() =>
      pianoKeys.value.filter((k) => !k.sharp).length
    );
  
    const keysHeight = computed(() => {
      if (control.octaveAmount.value === '1') {
        return '350px'
      } else if (control.octaveAmount.value === '2') {
        return '260px'
      } else if (control.octaveAmount.value === '3') {
        return '180px'
      }
    });
    const keyFontSize = computed(() => {
    if (control.octaveAmount.value === '1') {
      return '1.6rem'
    } else if (control.octaveAmount.value === '2') {
      return '1rem'
    } else if (control.octaveAmount.value === '3') {
      return '0.8rem'
    }
  });
  
    return {
      '--white-key-count': whiteKeyCount.value,
      'height': keysHeight.value,
      'font-size': keyFontSize.value,
    }
  });

  return {
    pianoKeys,
    keyStyles,
  }
})