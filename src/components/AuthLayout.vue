
<template>
  <div class="bg-gray-50 min-h-[100vh]">
    <div class="flex justify-around w-4/12 mx-auto border-b-2 pt-20">
      <div>
        <router-link :to="{name: 'login'}">Login</router-link>
      </div>
      <div>
        <router-link :to="{name: 'register'}">Register</router-link>
      </div>
    </div>
    <router-view>

    </router-view>
  </div>

</template>

<script setup>

import Register from "@/views/Auth/Register.vue";
</script>

<style >

</style>