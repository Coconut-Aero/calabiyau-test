<template>
  <div class="card p-8 md:p-12 w-full max-w-2xl mx-auto shadow-2xl relative overflow-hidden group">
    <!-- 装饰性背景 -->
    <div class="absolute -top-12 -right-12 w-32 h-32 bg-brand-50 rounded-full blur-3xl group-hover:bg-brand-100 transition-all duration-700"></div>
    <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-50 rounded-full blur-3xl group-hover:bg-brand-100 transition-all duration-700"></div>

    <div class="relative z-10">
      <div class="mb-2 text-sm font-medium text-brand-500 tracking-wider uppercase">
        Question {{ index + 1 }} / {{ total }}
      </div>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-10 leading-relaxed">
        {{ question.text }}
      </h2>
      
      <div class="space-y-4">
        <button
          v-for="(option, i) in question.options"
          :key="i"
          @click="onSelect(option)"
          class="w-full p-5 text-left border-2 border-gray-100 rounded-2xl hover:border-brand-300 hover:bg-brand-50 
                 active:scale-[0.98] transition-all duration-200 group/option flex items-center gap-4 relative"
        >
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-400
                      group-hover/option:bg-brand-500 group-hover/option:text-white transition-colors duration-200">
            {{ String.fromCharCode(65 + i) }}
          </div>
          <span class="text-lg text-gray-700 group-hover/option:text-brand-900 font-medium transition-colors duration-200">
            {{ option.text }}
          </span>
          <div class="absolute right-5 opacity-0 group-hover/option:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['select'])

const onSelect = (option) => {
  emit('select', option)
}
</script>
