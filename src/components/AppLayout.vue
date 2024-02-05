<template>
  <div class="bg-gray-100 min-h-[100vh]">
    <nav-bar/>
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>

import NavBar from "@/components/NavBar.vue";
</script>

<style scoped>

</style>