<template>
  <div class="min-h-screen flex flex-col" @click="spawnMeow">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

    <div
      v-for="m in meows"
      :key="m.id"
      class="meow pointer-events-none fixed text-pink-400 font-bold select-none z-50 animate-float-up"
      :style="{ left: m.x + 'px', top: m.y + 'px' }"
    >
      喵~
    </div>
</template>

<script setup>
// Root component
import { ref } from 'vue'
const meows = ref([])


function spawnMeow(e) {
  const id = Date.now() + Math.random()

  meows.value.push({
    id,
    x: e.clientX,
    y: e.clientY
  })

  setTimeout(() => {
    meows.value = meows.value.filter(m => m.id !== id)
  }, 900)
}

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<style scoped>
@keyframes float-up {
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  50% { opacity: 0.7; transform: translate(0, -30px) scale(1.1); }
  100% { opacity: 0; transform: translate(0, -50px) scale(0.9); }
}

.animate-float-up {
  animation: float-up 0.9s ease-out forwards;
}

.meow {
  font-size: 16px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
</style>
