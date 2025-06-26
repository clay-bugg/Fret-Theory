// stores/toneStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  initAudio,
  playNote,
  stopNote,
  playChord,
  stopChord
} from '@/audio/audioEngine'

export const useToneStore = defineStore('tone', () => {
  const currentTone = ref('piano')
  const activeNotes = ref(new Set())

  initAudio()

  function playKey(note, octave) {
    const fullNote = `${note}${octave}`
    activeNotes.value.add(fullNote)
    playNote(fullNote, currentTone.value)
  }

  function stopKey(note, octave) {
    const fullNote = `${note}${octave}`
    activeNotes.value.delete(fullNote)
    stopNote(fullNote, currentTone.value)
  }

  function triggerChord(notesWithOctaves, action) {
    if (action === 'play') {
      playChord(notesWithOctaves, currentTone.value)
    } else {
      stopChord(notesWithOctaves, currentTone.value)
    }
  }

  return {
    currentTone,
    activeNotes,
    playKey,
    stopKey,
    triggerChord
  }
})