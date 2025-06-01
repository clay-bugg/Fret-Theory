//---Imports---//
import { defineStore } from "pinia";
import { useControlStore } from "./controlStore";
import { ref } from 'vue';


export const useChordStore = defineStore("chord", () => {
  const store = useControlStore();

  const notes = ref(['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']);
  const chordNotes = ref([]);

  const pianoKeys = computed(() => {
    const octavesArray = Array.from(
      { length: store.octaveAmount.value },
      (_, i) => store.startingOctave.value + i
    );
    const keys = [];
    for (const octave of octavesArray) {
      notes.value.forEach((note) => {
        keys.push({
          note,
          octave,
          sharp: note.includes("s"),
        });
      });
    }
    return keys;
  });

  

  return {
    notes,
    pianoKeys,
    chordNotes,
    
  }
});