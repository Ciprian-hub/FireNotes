<template>
  <div>
    <div class="p-3">
        <textarea :value="modelValue"
                  @input="emit('update:modelValue', $event.target.value)"
                  class="shadow w-full h-[150px] text-gray-500 p-1 rounded-lg" placeholder="Your note here"></textarea>
    </div>
    <div class="px-3 grid sm:grid-cols-4 gap-3">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>

<style lang="scss" scoped>

</style>