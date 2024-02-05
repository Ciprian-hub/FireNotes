<template>
  <div>
      <router-link :to="{name: 'post', params: {id: note.id}}"
                   class="text-gray-50"
      >
        <div class="flex justify-between">
          # {{ note.id }}
          <small class="text-gray-400">{{dateFormatted}}</small>
        </div>
        <div>
          {{ note.content }}
        </div>
        <div class="text-right font-light text-gray-400">
          <small>{{characterLength}}</small>
        </div>
      </router-link>
      <button @click.prevent="modal.deleteNote = true" class="text-red-500">
        Delete
      </button>
    <ModalComponents
        :noteId="props.note.id"
        v-if="modal.deleteNote"
        v-model="modal.deleteNote"/>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import {useNotesStore} from "@/stores/useNotesStore.js";
import ModalComponents from "@/components/notes/ModalComponents.vue";
import {useDateFormat} from "@vueuse/core";

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const characterLength = computed(() => {
  let desc = props.note.content.length > 1 ? 'characters' : 'character'
  return `${props.note.content.length} ${desc}`
})

const storeNotes = useNotesStore()
const modal = reactive({
  deleteNote: false
})

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date))

  return useDateFormat(date, 'YYYY-MMMM')
})
</script>

<style lang="scss" scoped>

</style>