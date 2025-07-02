import * as Tone from 'tone'
import { storeToRefs } from 'pinia'

let synth
let sampler
let polySynth

export async function initAudio() {
  if (typeof window === 'undefined') return

  await Tone.start()

  const currentTone = storeToRefs(useToneStore())

  synth = new Tone.Synth({
    oscillator: { type: 'sine' },
    envelope: {
      attack: 0.05,
      decay: 0.2,
      sustain: 0.3,
      release: 1
    }
  }).toDestination()

  sampler = new Tone.Sampler({
    urls: {
      'A1': 'A1.mp3',
      'A#1': 'As1.mp3',
      'B1': 'B1.mp3',
      'C1': 'C1.mp3',
      'C#1': 'Cs1.mp3',
      'D1': 'D1.mp3',
      'D#1': 'Ds1.mp3',
      'E1': 'E1.mp3',
      'F1': 'F1.mp3',
      'F#1': 'Fs1.mp3',
      'G1': 'G1.mp3',
      'G#1': 'Gs1.mp3',
    },
    baseUrl: '/samples/piano/',
    onload: () => console.log('Sampler loaded')
  }).toDestination()

  polySynth = new Tone.PolySynth(Tone.Synth).toDestination()
}

export function playNote(note, currentTone) {
  if (currentTone === 'synth' && synth) synth.triggerAttack(note)
  if (currentTone === 'piano' && sampler) sampler.triggerAttack(note)
}

export function stopNote(note, currentTone) {
  if (currentTone === 'synth' && synth) synth.triggerRelease()
  if (currentTone === 'piano' && sampler) sampler.triggerRelease()
}

export function playChord(notes, currentTone) {
  if (currentTone === 'synth' && polySynth) polySynth.triggerAttack(notes)
  if (currentTone === 'piano' && sampler) sampler.triggerAttack(notes)
}

export function stopChord(notes, currentTone) {
  if (currentTone === 'synth' && polySynth) polySynth.triggerRelease(notes)
  if (currentTone === 'piano' && sampler) sampler.triggerRelease()
}