import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useKeyboardStore } from './keyboardStore'

export const useChordStore = defineStore('chord', () => { 
  const rootNote = ref('')
  const chordType = ref('')
  const selectedChord = ref(rootNote + chordType)
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
  ])
  const chordLabel = ref(`${rootNote.value} ${chordType.value}`)
  const chordNotes = computed(() => {
    const { notes } = useKeyboardStore()
    const chord = chordTypes.value.find(c => c.value === chordType.value)
    if (!chord) return []

    const rootIndex = notes.indexOf(rootNote.value)
    return chord.intervals.map(i => notes[(rootIndex + i) % 12])
  })

  return {
    rootNote,
    chordType,
    selectedChord,
    chordTypes,
    chordLabel,
    chordNotes,
  }
})