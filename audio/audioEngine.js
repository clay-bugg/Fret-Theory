import * as Tone from 'tone'
import { storeToRefs } from 'pinia';


let synth
let sampler
let polySynth

export function initAudio() {
  if (typeof window === 'undefined') return

  const toneType = storeToRefs(useToneStore());

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
      'A1': 'A1.m,p3',
      'A#1': 'As1.mp3',
      'B1': 'B1.m,p3',
      'C1': 'C1.m,p3',
      'C#1': 'Cs1.mp3',
      'D1': 'D1.m,p3',
      'D#1': 'Ds1.mp3',
      'E1': 'E1.m,p3',
      'F1': 'F1.m,p3',
      'F#1': 'Fs1.mp3',
      'G1': 'G1.m,p3',
      'G#1': 'Gs1.mp3',
    },
    baseUrl: '/samples/piano/',
    onload: () => console.log('Sampler loaded')
  }).toDestination()

  polySynth = new Tone.PolySynth(Tone.Synth).toDestination()
}

export function playNote(note, toneType) {
  if (toneType === 'synth' && synth) synth.triggerAttack(note)
  if (toneType === 'piano' && sampler) sampler.triggerAttack(note)
}

export function stopNote(note, toneType) {
  if (toneType === 'synth' && synth) synth.triggerRelease()
  if (toneType === 'piano' && sampler) sampler.triggerRelease()
}

export function playChord(notes, toneType) {
  if (toneType === 'synth' && polySynth) polySynth.triggerAttack(notes)
  if (toneType === 'piano' && sampler) sampler.triggerAttack(notes)
}

export function stopChord(notes, toneType) {
  if (toneType === 'synth' && polySynth) polySynth.triggerRelease(notes)
  if (toneType === 'piano' && sampler) sampler.triggerRelease()
}