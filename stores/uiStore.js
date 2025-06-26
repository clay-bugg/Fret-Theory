import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => { 
  const notesShown = ref('all');
  const displayType = ref('');
  const displayTitle = ref('');

  return {
    notesShown,
    displayType,
    displayTitle,
  }
})

