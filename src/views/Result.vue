<template>
  <div class="min-h-screen bg-white p-6 md:p-12">
    <!-- 头部激励 -->
    <div class="max-w-4xl mx-auto text-center mb-16 space-y-6">
      <div class="inline-flex items-center gap-2 px-4 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-black tracking-widest uppercase border border-brand-100 shadow-sm animate-bounce">
        Test Complete
      </div>
      <h1 class="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">
        你的灵魂共鸣者是...
      </h1>
      <p class="text-xl text-gray-400 font-medium">
        基于深度人格建模与 80 维度计算得出的最优结果
      </p>
    </div>

    <!-- 主要结果 -->
    <div v-if="topResult" class="mb-24">
      <ResultCard :character="topResult" />
    </div>

    <!-- 数据可视化与 Top 列表 -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- 饼图 -->
      <div v-if="quizStore.results" class="sticky top-12">
        <PieChart :results="quizStore.results" />
      </div>

      <!-- Top 3-5 列表 -->
      <div class="space-y-8">
        <h3 class="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3 mb-6">
          <span class="w-2 h-8 bg-brand-500 rounded-full"></span>
          其他高匹配度角色
        </h3>
        <div v-for="(char, index) in otherResults" :key="char.name"
             class="card p-6 flex items-center gap-6 hover:shadow-xl transition-all cursor-pointer group border-l-4"
             :class="getFactionBorderClass(char.name)">
          <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md bg-gray-100">
            <img :src="char.avatar" :alt="char.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h4 class="text-xl font-bold text-gray-800">{{ char.name }}</h4>
              <span class="text-lg font-black italic text-brand-500 tracking-tighter">
                {{ char.matchScore }}%
              </span>
            </div>
            <p class="text-sm text-gray-500 line-clamp-1 font-medium">
              {{ char.intro }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部操作 -->
    <div class="mt-32 max-w-4xl mx-auto text-center space-y-8 pb-12">
      <div class="h-[1px] w-full bg-gray-100"></div>
      <div class="flex flex-wrap justify-center gap-4">
        <button @click="handleRestart" class="btn-primary text-xl px-10 py-5 rounded-2xl group">
          <svg class="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重新测试
        </button>
        <button @click="handleShare" class="btn-secondary text-xl px-10 py-5 rounded-2xl group flex items-center gap-2">
          <svg class="w-5 h-5 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          分享结果
        </button>
      </div>
      <p class="text-gray-400 font-medium">
        分享你的结果，让更多引航者加入测试
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../store/quiz'
import ResultCard from '../components/ResultCard.vue'
import PieChart from '../components/PieChart.vue'

const router = useRouter()
const quizStore = useQuizStore()

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

const getFactionBorderClass = (name) => {
  const faction = factionMap[name]
  switch (faction) {
    case 'Opal': return 'border-blue-500'
    case 'Scissors': return 'border-red-500'
    case 'Urbino': return 'border-yellow-500'
    default: return 'border-gray-500'
  }
}

onMounted(() => {
  if (!quizStore.isFinished) {
    router.push('/')
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const topResult = computed(() => {
  return quizStore.results ? quizStore.results[0] : null
})

const otherResults = computed(() => {
  return quizStore.results ? quizStore.results.slice(1) : []
})

const handleRestart = () => {
  quizStore.resetQuiz()
  router.push('/')
}

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: '卡拉彼丘人格测试',
      text: `我在卡拉彼丘人格测试中匹配到了【${topResult.value.name}】，匹配度高达 ${topResult.value.matchScore}%！快来测测你像谁吧！`,
      url: window.location.origin
    }).catch(console.error)
  } else {
    alert('复制链接成功！快去分享给好友吧！')
  }
}
</script>
