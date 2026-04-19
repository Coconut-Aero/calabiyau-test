import { defineStore } from 'pinia';
import { QUESTIONS } from '../utils/questions';
import { parseCharacters, getCharacterVectors } from '../utils/parser';
import { calculateScores, getTopResults } from '../utils/scoring';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    characters: [],
    characterVectors: {},
    currentQuestionIndex: 0,
    responses: [],
    results: null,
    testLevel: 20, // 20, 50, 80
    shuffledQuestions: [],
    isStarted: false,
    isFinished: false,
    loading: false
  }),

  actions: {
    async initQuiz() {
      this.loading = true;
      try {
        // 加载并解析角色数据
        const response = await fetch('/character.md');
        const mdContent = await response.text();
        this.characters = parseCharacters(mdContent);
        this.characterVectors = getCharacterVectors(this.characters);
      } catch (error) {
        console.error('Failed to initialize quiz data:', error);
      } finally {
        this.loading = false;
      }
    },

    startQuiz(level = 20) {
      this.testLevel = level;
      // 随机打乱题目并选取对应数量
      this.shuffledQuestions = [...QUESTIONS]
        .sort(() => Math.random() - 0.5)
        .slice(0, level);
      
      this.currentQuestionIndex = 0;
      this.responses = [];
      this.results = null;
      this.isStarted = true;
      this.isFinished = false;
    },

    answerQuestion(option) {
      this.responses.push(option);
      if (this.currentQuestionIndex < this.shuffledQuestions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.finishQuiz();
      }
    },

    finishQuiz() {
      const scores = calculateScores(this.responses, this.characterVectors);
      this.results = getTopResults(scores, this.characters);
      this.isFinished = true;
    },

    resetQuiz() {
      this.isStarted = false;
      this.isFinished = false;
      this.currentQuestionIndex = 0;
      this.responses = [];
      this.results = null;
    }
  },

  getters: {
    currentQuestion: (state) => state.shuffledQuestions[state.currentQuestionIndex],
    progress: (state) => {
      if (!state.shuffledQuestions.length) return 0;
      return Math.round((state.currentQuestionIndex / state.shuffledQuestions.length) * 100);
    }
  }
});
