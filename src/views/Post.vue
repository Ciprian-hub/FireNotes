<template>
  <div class="text-gray-50">
    <card>
      <AddEditNote v-model="noteContent">
        <template #buttons>
          <button @click="savePost()"
                  class="shadow py-2 px-4 rounded-lg text-white transition-all"
                  :class="[!noteContent ? 'bg-gray-200' : 'bg-green-500 hover:bg-green-600']"
          >
            Save
          </button>
          <router-link :to="{name: 'posts'}"
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
import AddEditNote from "@/components/notes/AddEditNote.vue";
import {ref} from "vue";
import {useNotesStore} from "@/stores/useNotesStore.js";
import {useRoute, useRouter} from "vue-router";

const noteContent = ref('')
const storeNotes = useNotesStore()
const route = useRoute()
const router = useRouter()
noteContent.value = storeNotes.getNoteContent(route.params.id)

function savePost() {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push({
    name: 'posts'
  })
}
</script>

<style lang="scss" scoped>

</style>