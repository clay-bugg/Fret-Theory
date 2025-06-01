//---Imports---//
import { defineStore } from "pinia";
import { ref } from "vue";

export const useChordTypeStore = defineStore('type', ()  => { 

  //---State---//
  const chordNotes = ([]);
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
  return { chordTypes },
  chordNotes
})