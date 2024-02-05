<template>
  <div>
    <router-view>

    </router-view>
  </div>
</template>

<script setup>

import {useStoreAuth} from "@/stores/useStoreAuth.js";
import {onMounted} from "vue";

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.init()
})

</script>

<style>

</style>
