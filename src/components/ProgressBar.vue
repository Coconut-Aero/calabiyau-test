<template>
  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
    <div 
      class="bg-brand-500 h-full transition-all duration-500 ease-out rounded-full shadow-glow"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    required: true
  }
})
</script>
