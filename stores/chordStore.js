import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useGlobalStore } from './globalStore.js';
import { useKeyboardStore } from './keyboardStore.js';


export const useChordStore = defineStore('chord', () => {

  const rootNote = ref('');
  const selectedChordType = ref('');
  const selectedChord = computed(() => { 
   return rootNote.value + selectedChordType.value;
  });
  const chordTypes = ref([
    { label: 'Major', symbol: 'maj', intervals: [0, 4, 7] },
    { label: 'Minor', symbol: 'm', intervals: [0, 3, 7] },
    { label: 'Augmented', symbol: '+', intervals: [0, 4, 8] },
    { label: 'Diminished', symbol: '°', intervals: [0, 3, 6] },
    { label: 'Dominant 7th', symbol: '7', intervals: [0, 4, 7, 10] },
    { label: 'Major 7th', symbol: 'maj7', intervals: [0, 4, 7, 11] },
    { label: 'Minor 7th', symbol: 'm7', intervals: [0, 3, 7, 10] },
    { label: 'Suspended 2nd', symbol: 'sus2', intervals: [0, 2, 7] },
    { label: 'Suspended 4th', symbol: 'sus4', intervals: [0, 5, 7] },
    { label: 'Major 6th', symbol: 'maj6', intervals: [0, 4, 7, 9] },
    { label: 'Major 7♭5', symbol: 'maj7♭5', intervals: [0, 4, 6, 11] },
  ]);

  const chordLabel = computed(() => {
    return chordTypes.value.find((chord) => chord === selectedChordType.label);
  });
  
const notes = useKeyboardStore();



  
  return {
    rootNote,
    selectedChordType,
    selectedChord,
    chordTypes,
        };
      
    });
  