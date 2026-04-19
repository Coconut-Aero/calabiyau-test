<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute top-1/2 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute -bottom-24 left-1/2 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50"></div>
    </div>

    <div class="relative z-10 max-w-4xl w-full text-center space-y-12">
      <!-- 头部 -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-full text-sm font-bold tracking-widest uppercase mb-4 animate-fade-in shadow-sm border border-brand-100">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
          Calabiyau Personality Test
        </div>
        <h1 class="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none mb-6">
          测测你最像<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-500 to-red-500">
            《卡拉彼丘》
          </span><br/>
          里的哪个角色？
        </h1>
        <p class="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          基于人格匹配引擎与 80 道深度场景化题目，<br/>
          探索你灵魂深处的卡丘次元共鸣。
        </p>
      </div>

      <!-- 模式选择 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div 
          v-for="mode in modes" 
          :key="mode.id"
          @click="selectedLevel = mode.level"
          class="card p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2"
          :class="selectedLevel === mode.level ? 'border-brand-500 bg-brand-50 shadow-brand-500/10' : 'border-transparent bg-white'"
        >
          <div class="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center"
               :class="selectedLevel === mode.level ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-400'">
            <component :is="mode.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold mb-1 text-gray-800">{{ mode.title }}</h3>
          <p class="text-sm text-gray-500 mb-4">{{ mode.desc }}</p>
          <div class="text-xs font-black tracking-widest uppercase py-1 px-2 rounded-lg inline-block"
               :class="selectedLevel === mode.level ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-400'">
            {{ mode.level }} Questions
          </div>
        </div>
      </div>

      <!-- 开始按钮 -->
      <div class="flex flex-col items-center gap-4">
        <button 
          @click="handleStart"
          class="btn-primary text-2xl px-12 py-6 rounded-3xl shadow-glow active:scale-95 group relative overflow-hidden"
          :disabled="quizStore.loading"
        >
          <span class="relative z-10 flex items-center gap-3">
            <span v-if="quizStore.loading" class="animate-spin">🌀</span>
            {{ quizStore.loading ? '正在同步数据...' : '立刻开启测试' }}
            <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-brand-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
        <p class="text-sm text-gray-400 font-medium">已有 1,248,390 人参与测试</p>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="mt-24 text-gray-300 text-xs font-medium tracking-widest  z-10">
      Designed by Coconut Aero with ❤️ @ 2026
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../store/quiz'
import { Zap, Timer, Brain } from 'lucide-vue-next'

const router = useRouter()
const quizStore = useQuizStore()

const selectedLevel = ref(20)

const modes = [
  { id: 1, level: 20, title: '快速测试', desc: '5分钟快速匹配，适合茶余饭后。', icon: Zap },
  { id: 2, level: 50, title: '标准测试', desc: '全方位人格建模，具有极高准确度。', icon: Timer },
  { id: 3, level: 80, title: '深度测试', desc: '触碰灵魂深处的禁忌，完全解析。', icon: Brain },
]

onMounted(async () => {
  await quizStore.initQuiz()
})

const handleStart = () => {
  quizStore.startQuiz(selectedLevel.value)
  router.push('/quiz')
}
</script>
