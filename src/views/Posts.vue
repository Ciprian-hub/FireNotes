<template>
  <div>
    <Spiner class="text-gray-600" v-if="storeNotes.loading"/>
    <template v-else>
      <div class="border-b-2 h-[400px] overflow-scroll">
        <card v-for="note in storeNotes.notes" :key="note.id">
          <NoteComponent :note="note"/>
        </card>
      </div>
    </template>
    <card>
      <AddEditNote v-model="noteContent">
        <template #buttons>
          <button
              @click="addNewNote"
              :class="[!noteContent ? 'bg-gray-200' : 'bg-green-500 hover:bg-green-600']"
              class="shadow py-2 px-4 rounded-lg text-white transition-all"
          >
            Submit
          </button>
          <router-link :to="{name: 'home'}"
                       class="text-center bg-gray-100 shadow py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-200 transition-all">
            Cancel
          </router-link>
        </template>
      </AddEditNote>
    </card>
  </div>
</template>

<script setup>
import Card from "@/components/utility/Card.vue";
import {ref, watch} from "vue";
import NoteComponent from "@/components/notes/NoteComponent.vue";
import {useNotesStore} from "@/stores/useNotesStore.js";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import {useWatchCharacters} from "@/use/useWatchCharacters.js";
import Spiner from "@/components/utility/Spiner.vue";
import {onMounted} from "vue";

const noteContent = ref('')
const storeNotes = useNotesStore()
// const storeNotes = useNotesStore()

onMounted(() => {
  storeNotes.init()
})
function addNewNote() {
  storeNotes.addNote(noteContent.value)
  noteContent.value = ''
}
useWatchCharacters(noteContent)

</script>

<style scoped>

</style>