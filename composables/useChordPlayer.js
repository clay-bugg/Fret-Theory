import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChordPlayer = defineStore('chord', () => { 
  const keyboard = '/stores/keyboardStore.js/';
  const notes = keyboard.notes;

  const rootNote = ref('');
  const selectedChordType = ref('');

  const chordTypes = ref([
    { label: 'Major', value: 'maj', intervals: [0, 4, 7] },
    { label: 'Minor', value:'m', intervals: [0, 3, 7] },
    { label: 'Augmented', value: '+', intervals: [0, 4, 8] },
    { label: 'Diminished', value: '°', intervals: [0, 3, 6] },
    { label: 'Dominant 7th', value: '7', intervals: [0, 4, 7, 10] },
    { label: 'Major 7th', value:'maj7', intervals: [0, 4, 7, 11] },
    { label: 'Minor 7th', value: 'm7', intervals: [0, 3, 7, 10] },
    { label: 'Suspended 2nd', value:'sus2', intervals: [0, 2, 7] },
    { label: 'Suspended 4th', value:'sus4', intervals: [0, 5, 7] },
    { label: 'Major 6th', value: 'maj6', intervals: [0, 4, 7, 9] },
    { label: 'Major 7♭5', value: 'maj7♭5', intervals: [0, 4, 6, 11] },
  ]);

    const selectedChord = computed(() => { 
      return chordTypes.value.find((chord) => chord.value === selectedChordType.value);
    });
  
  const chordNotes = computed(() => {
    if (!rootNote.value || !selectedChord.value) return [];
    const rootIndex = notes.value.indexOf(rootNote.value);
    if (rootIndex === -1) return [];

    return selectedChord.value.intervals.map((interval) => {
      return notes.value[(rootIndex + interval) % notes.value.length];
    });
  });

    const chordFormula = computed(() => {
      return selectedChord.value?.formula ?? [];
    });
  
    return {
      notes,
      rootNote,
      selectedChordType,
      chordTypes,
      chordNotes,
      chordFormula,
      selectedChord,
    };
  });