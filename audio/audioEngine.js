import * as Tone from 'tone'

let synth
let sampler
let polySynth

export function initAudio() {
  if (typeof window === 'undefined') return

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
      A1: 'A1.mp3',
      A2: 'A2.mp3',
      A3: 'A3.mp3',
      A4: 'A4.mp3',
      A5: 'A5.mp3',
      A6: 'A6.mp3',
      A7: 'A7.mp3'
    },
    baseUrl: '/sounds/piano_samples/',
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