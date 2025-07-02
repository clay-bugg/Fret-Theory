import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useKeyboardStore = defineStore('keyboard', () => {
  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'])
  const startingOctave = ref(3)
  const octaves = computed(() => { 
    const octave = startingOctave.value
    return [octave, octave + 1, octave + 2]
  })
  const keys = computed(() => {
    const result = []
    octaves.value.forEach((octave) => {
      notes.value.forEach((note) => {
        result.push({ note: note, octave: octave, sharp: note.includes('s') })
      })
    })
    return result
  })
  function changeOctave() {
    startingOctave.value = (startingOctave.value + 1) % octaves.length
    displayType.value = startingOctave.value + 1
  }

  return {
    notes,
    startingOctave,
    octaves,
    keys,
    changeOctave,
  }
})