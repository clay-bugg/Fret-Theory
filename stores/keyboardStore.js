//---Imports---//
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useKeyboardStore = defineStore('keyboard', () => { 
  //---Stores---//
  const control = useControlStore();
  //---Constants---//
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  //---Key Generation---//
  const pianoKeys = computed(() => {
    const octavesArray = Array.from(
      { length: control.control.octaveAmount.value },
      (_, i) => control.startingOctave.value + i
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

    return pianoKeys;
  });
  //---Dynamic Key Styles---//
  const keyStyles = computed(() => {

    const whiteKeyCount = computed(() =>
      pianoKeys.value.filter((k) => !k.sharp).length
    );
  
    const keysHeight = computed(() => {
      if (control.control.octaveAmount.value === '1') {
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
    notes,
    pianoKeys,
    keyStyles,
  }
})