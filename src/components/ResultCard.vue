<template>
  <div class="card p-8 md:p-12 w-full max-w-4xl mx-auto shadow-2xl relative overflow-hidden group mb-12 border-t-8"
       :class="factionClass">
    
    <!-- 装饰性元素 -->
    <div class="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl transition-all duration-700 opacity-20"
         :class="bgClass"></div>
    <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-3xl transition-all duration-700 opacity-20"
         :class="bgClass"></div>

    <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center">
      <!-- 角色头像 -->
      <div class="relative flex-shrink-0 group/avatar">
        <div class="absolute -inset-1 rounded-full blur opacity-25 group-hover/avatar:opacity-75 transition duration-1000 group-hover/avatar:duration-200"
             :class="bgClass"></div>
        <div class="relative w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
          <img 
            :src="character.avatar" 
            :alt="character.name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover/avatar:scale-110"
            @error="onImageError"
          />
        </div>
        <!-- 匹配度标签 -->
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2"
             :class="borderClass">
          <span class="text-2xl font-black italic tracking-tighter" :class="textClass">
            {{ character.matchScore }}%
          </span>
        </div>
      </div>

      <!-- 角色信息 -->
      <div class="flex-grow text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-3 mb-2">
          <h2 class="text-4xl font-black text-gray-900 tracking-tight">{{ character.name }}</h2>
          <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border"
                :class="factionTagClass">
            {{ factionText }}
          </span>
        </div>
        
        <!-- 标签 -->
        <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
          <span v-for="trait in character.traits" :key="trait"
                class="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-gray-100">
            #{{ trait }}
          </span>
        </div>

        <div class="space-y-4">
          <div class="relative pl-6 border-l-4 rounded-sm" :class="borderClass">
            <p class="text-lg text-gray-700 leading-relaxed font-medium italic">
              “{{ character.quotes[0] || '正义无需解释，只需践行。' }}”
            </p>
          </div>
          
          <div class="p-6 bg-gray-50/50 rounded-2xl border border-gray-100/50 backdrop-blur-sm">
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full" :class="bgClass"></span>
              心理分析报告
            </h3>
            <p class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {{ character.analysis }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const factionClass = computed(() => {
  switch (faction.value) {
    case 'Opal': return 'border-blue-500 shadow-blue-500/10'
    case 'Scissors': return 'border-red-500 shadow-red-500/10'
    case 'Urbino': return 'border-yellow-500 shadow-yellow-500/10'
    default: return 'border-gray-500 shadow-gray-500/10'
  }
})

const bgClass = computed(() => {
  switch (faction.value) {
    case 'Opal': return 'bg-blue-500'
    case 'Scissors': return 'bg-red-500'
    case 'Urbino': return 'bg-yellow-500'
    default: return 'bg-gray-500'
  }
})

const textClass = computed(() => {
  switch (faction.value) {
    case 'Opal': return 'text-blue-600'
    case 'Scissors': return 'text-red-600'
    case 'Urbino': return 'text-yellow-600'
    default: return 'text-gray-600'
  }
})

const borderClass = computed(() => {
  switch (faction.value) {
    case 'Opal': return 'border-blue-500'
    case 'Scissors': return 'border-red-500'
    case 'Urbino': return 'border-yellow-500'
    default: return 'border-gray-500'
  }
})

const factionMap = {
  // 欧泊
  '米雪儿·李': 'Opal',
  '信': 'Opal',
  '心夏': 'Opal',
  '伊薇特': 'Opal',
  '千代': 'Opal',
  '蕾欧娜': 'Opal',
  '忧雾': 'Opal',
  '芙拉薇娅': 'Opal',

  // 剪刀手
  '明': 'Scissors',
  '拉薇': 'Scissors',
  '梅瑞狄斯': 'Scissors',
  '香奈美': 'Scissors',
  '令': 'Scissors',
  '艾卡': 'Scissors',
  '珐格兰丝': 'Scissors',
  '玛拉': 'Scissors',

  // 乌尔比诺
  '星绘': 'Urbino',
  '奥黛丽': 'Urbino',
  '白墨': 'Urbino',
  '玛德蕾娜': 'Urbino',
  '绯莎': 'Urbino',
  '加拉蒂亚': 'Urbino',
  '汐': 'Urbino'
}

const faction = computed(() => {
  return factionMap[props.character.name] || 'Unknown'
})

const factionTagClass = computed(() => {
  switch (faction.value) {
    case 'Opal':
      return 'bg-blue-50 text-blue-600 border-blue-200'
    case 'Scissors':
      return 'bg-red-50 text-red-600 border-red-200'
    case 'Urbino':
      return 'bg-yellow-50 text-yellow-700 border-yellow-300'
    default:
      return 'bg-gray-50 text-gray-600 border-gray-200'
  }
})

const factionText = computed(() => {
  switch (faction.value) {
    case 'Opal':
      return '欧泊'
    case 'Scissors':
      return '剪刀手'
    case 'Urbino':
      return '乌尔比诺'
    default:
      return '未知阵营'
  }
})
const onImageError = (e) => {
  e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + props.character.name
}

const getFactionBorderClass = (name) => {
  const faction = factionMap[name]

  switch (faction) {
    case 'Opal':
      return 'border-blue-500'
    case 'Scissors':
      return 'border-red-500'
    case 'Urbino':
      return 'border-yellow-500'
    default:
      return 'border-gray-400'
  }
}
</script>
