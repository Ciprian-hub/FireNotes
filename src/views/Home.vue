<template>
  <div class="flex justify-center items-center">
    <div class="shadow flex flex-col justify-center items-center w-4/12 py-3 rounded-lg mt-16">
      <h1 class="text-gray-600 text-2xl font-semibold">
        Total Posts
      </h1>
      <div class="text-6xl font-bold">
        {{ storeNotes.totalNotes }}
      </div>
    </div>
  </div>

</template>

<script setup>
import {useNotesStore} from "@/stores/useNotesStore.js";
import {computed, onMounted, ref} from "vue";

const storeNotes = useNotesStore()

onMounted(() => {
  storeNotes.init()
})
</script>

<style lang="scss" scoped>

</style>