//---Imports---//
import { defineStore } from "pinia";
import { useControlStore } from "./controlStore";
import { ref } from 'vue';


export const useChordStore = defineStore("chord", () => {
  //---Stores---//
  const controlStore = useControlStore();
  //---Key Generation---//
  const pianoKeys = computed(() => {
    const octavesArray = Array.from(
      { length: controlStore.octaveAmount.value },
      (_, i) => controlStore.startingOctave.value + i
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
  //---Dynamic Key Styles---//
  const keyStyles = computed(() => {

    const whiteKeyCount = computed(() =>
      pianoKeys.value.filter((k) => !k.sharp).length
    );
  
    const keysHeight = computed(() => {
      if (octaveAmount.value === '1') {
        return '350px'
      } else if (octaveAmount.value === '2') {
        return '260px'
      } else if (octaveAmount.value === '3') {
        return '180px'
      }
    });
    const keyFontSize = computed(() => {
    if (octaveAmount.value === '1') {
      return '1.6rem'
    } else if (octaveAmount.value === '2') {
      return '1rem'
    } else if (octaveAmount.value === '3') {
      return '0.8rem'
    }
  });
  
    return {
      '--white-key-count': whiteKeyCount.value,
      'height': keysHeight.value,
      'font-size': keyFontSize.value,
    }
  });
  //---State---//
  const rootNote = store.rootNote;
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  const selectedChordType = ref('');
  const chordTypes = ref([
    {
      label: "Major",
      value: "maj",
      intervals: [0, 4, 7],
      formula: ["1", "3", "5"]  
    },
    {
      label: "Minor",
      value: "m",
      intervals: [0, 3, 7],
      formula: ["1", "♭3", "5"]  
    },
    {
      label: "Augmented",
      value: "+",
      intervals: [0, 4, 8],
      formula: ["1", "3", "♯5"]  
    },
    {
      label: "Diminished",
      value: "°",
      intervals: [0, 3, 6],
      formula: ["1", "♭3", "♭5"]  
    },
    {
      label: "Dominant 7th",
      value: "7",
      intervals: [0, 4, 7, 10],
      formula: ["1", "3", "5", "♭7"] 
    },
    {
      label: "Major 7th",
      value: "maj7",
      intervals: [0, 4, 7, 11],
      formula: ["1", "3", "5", "7"]  
    },
    {
      label: "Minor 7th",
      value: "m7",
      intervals: [0, 3, 7, 10],
      formula: ["1", "♭3", "5", "♭7"]  
    },
    {
      label: "Suspended 2nd",
      value: "sus2",
      intervals: [0, 2, 7],
      formula: ["1", "2", "5"]  
    },
    {
      label: "Suspended 4th",
      value: "sus4",
      intervals: [0, 5, 7],
      formula: ["1", "4", "5"]  
    },
    {
      label: "Major 6th",
      value: "maj6",
      intervals: [0, 4, 7, 9],
      formula: ["1", "3", "5", "6"] 
    },
    {
      label: "Major 7♭5",
      value: "maj7♭5",
      intervals: [0, 4, 6, 11],
      formula: ["1", "3", "♭5", "7"]
    }
  ]);

  return {
    pianoKeys,
    keyStyles,
    
  }
});