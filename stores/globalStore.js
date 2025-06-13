
import { defineStore } from 'pinia';
import { useChordStore } from './chordStore';
import { ref, computed } from 'vue';

export const useGlobalStore = defineStore('global', () => {

  const startingOctave = ref(null);
  const notesShown = ref('all');
  const noteLabels = ref(['all', 'chord', 'none']);
  const tones = ref(['piano', 'synth', 'drumkit']);
  const currentTone = ref('piano');
  const displayType = ref('');
  const displayTitle = ref('');

  return {
    startingOctave,
    notesShown,
    noteLabels,
    currentTone,
    displayType,
    displayTitle,
    tones,
  }
});
