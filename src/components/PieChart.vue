<template>
  <div class="card p-8 shadow-xl">
    <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      <svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
      人格成分占比
    </h3>
    <div ref="chartRef" class="w-full h-[400px]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  results: {
    type: Array,
    required: true
  }
})

const chartRef = ref(null)
let chart = null

const initChart = () => {
  if (!chartRef.value) return
  
  chart = echarts.init(chartRef.value)
  const data = props.results.map(item => ({
    name: item.name,
    value: item.matchScore
  }))

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      padding: [20, 0, 0, 0]
    },
    series: [
      {
        name: '匹配度',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 24,
            fontWeight: 'bold',
            formatter: '{b}\n{c}%'
          }
        },
        labelLine: {
          show: false
        },
        data: data,
        color: [
          '#8b5cf6', // brand-500
          '#3b82f6', // blue-500
          '#ef4444', // red-500
          '#10b981', // emerald-500
          '#f59e0b'  // amber-500
        ]
      }
    ]
  }

  chart.setOption(option)
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => chart?.resize())
})

watch(() => props.results, () => {
  initChart()
}, { deep: true })
</script>
