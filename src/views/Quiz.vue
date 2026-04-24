<template>
  <div class="min-h-screen bg-gray-50 flex flex-col p-6">
    <!-- 顶部导航 -->
    <div class="max-w-4xl w-full mx-auto flex items-center justify-between mb-8">
      <div class="flex items-center gap-4">
        <button 
          @click="goToPreviousQuestion" 
          :disabled="quizStore.currentQuestionIndex === 0"
          :class="[
            'p-2 rounded-full transition-colors',
            quizStore.currentQuestionIndex === 0 
              ? 'text-gray-200 cursor-not-allowed' 
              : 'text-gray-400 hover:bg-white hover:text-blue-500'
          ]"
          title="返回上一题"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button @click="confirmQuit" class="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-red-500" title="退出测试">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="h-6 w-[1px] bg-gray-200"></div>
        <div class="text-sm font-bold text-gray-400 uppercase tracking-widest">
          {{ modeName }} Mode
        </div>
      </div>
      
      <div class="flex flex-col items-end gap-1">
        <div class="text-xs font-black text-brand-500 tracking-tighter uppercase">Progress</div>
        <div class="text-xl font-black text-gray-900 tracking-tighter">
          {{ quizStore.currentQuestionIndex + 1 }} <span class="text-gray-300">/ {{ quizStore.shuffledQuestions.length }}</span>
        </div>
      </div>
    </div>

    <!-- 进度条 -->
    <div class="max-w-4xl w-full mx-auto mb-12">
      <ProgressBar :progress="quizStore.progress" />
    </div>

    <!-- 题目卡片 -->
    <div class="flex-grow flex items-start justify-center overflow-y-auto pt-4 pb-12">
      <transition name="slide" mode="out-in">
        <QuestionCard 
          v-if="quizStore.currentQuestion"
          :key="quizStore.currentQuestionIndex"
          :question="quizStore.currentQuestion"
          :index="quizStore.currentQuestionIndex"
          :total="quizStore.shuffledQuestions.length"
          @select="handleAnswer"
        />
      </transition>
    </div>

    <!-- 底部激励 -->
    <div class="max-w-4xl w-full mx-auto text-center text-gray-400 text-xs font-medium tracking-widest uppercase py-4">
      保持专注，听从你内心的声音
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../store/quiz'
import ProgressBar from '../components/ProgressBar.vue'
import QuestionCard from '../components/QuestionCard.vue'

const router = useRouter()
const quizStore = useQuizStore()

const modeName = computed(() => {
  if (quizStore.testLevel === 20) return 'Quick'
  if (quizStore.testLevel === 50) return 'Standard'
  return 'Deep'
})

onMounted(() => {
  if (!quizStore.isStarted) {
    router.push('/')
  }
})

const handleAnswer = (option) => {
  quizStore.answerQuestion(option)
  if (quizStore.isFinished) {
    router.push('/result')
  }
}

const goToPreviousQuestion = () => {
  quizStore.previousQuestion()
}

const confirmQuit = () => {
  if (confirm('确定要放弃本次测试吗？进度将不会被保存。')) {
    quizStore.resetQuiz()
    router.push('/')
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
