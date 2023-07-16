<template>
  <div class="box4" ref="map"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import chinaJSON from './china.json'
let map = ref()
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  let mycharts = echarts.init(map.value)
  mycharts.setOption({
    geo: {
      map: 'china',
      roam: true,
      left: 100,
      top: 100,
      right: 100,
      bottom: 0,
      label: {
        color: 'white',
        show: true,
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'skyblue', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'blue', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        opacity: 0.5,
      },
      emphasis: {
        itemStyle: {
          color: 'skyblue',
        },
        label: {
          fontSize: 40,
          color: 'skyblue',
        },
      },
    },
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        type: 'lines',
        data: [
          {
            coords: [
              [116.405285, 39.904989],
              [91.132212, 29.660361],
            ],
            lineStyle: {
              color: 'skyblue',
              width: 5,
            },
          },
        ],
        // 开启东华特效
        effect: {
          show: true,
          symbol: 'arrow',
          color: 'red',
          symbolSize: 10,
        },
      },
      {
        type: 'lines',
        data: [
          {
            coords: [
              [116.405285, 39.904989],
              [121.472644, 31.231706],
            ],
            lineStyle: {
              color: 'skyblue',
              width: 5,
            },
          },
        ],
        // 开启东华特效
        effect: {
          show: true,
          symbol: 'arrow',
          color: 'red',
          symbolSize: 10,
        },
      },
      {
        type: 'lines',
        data: [
          {
            coords: [
              [116.405285, 39.904989],
              [104.065735, 30.659462],
            ],
            lineStyle: {
              color: 'skyblue',
              width: 5,
            },
          },
        ],
        // 开启东华特效
        effect: {
          show: true,
          symbol: 'arrow',
          color: 'red',
          symbolSize: 10,
        },
      },
      {
        type: 'lines',
        data: [
          {
            coords: [
              [104.065735, 30.659462],
              [87.617733, 43.792818],
            ],
            lineStyle: {
              color: 'skyblue',
              width: 5,
            },
          },
        ],
        // 开启东华特效
        effect: {
          show: true,
          symbol: 'arrow',
          color: 'red',
          symbolSize: 10,
        },
      },
      {
        type: 'lines',
        data: [
          {
            coords: [
              [87.617733, 43.792818],
              [115.892151, 28.676493],
            ],
            lineStyle: {
              color: 'skyblue',
              width: 5,
            },
          },
        ],
        // 开启东华特效
        effect: {
          show: true,
          symbol: 'arrow',
          color: 'red',
          symbolSize: 10,
        },
      },
      {
        type: 'lines',
        data: [
          {
            coords: [
              [115.892151, 28.676493],
              [91.132212, 29.660361],
            ],
            lineStyle: {
              color: 'skyblue',
              width: 5,
            },
          },
        ],
        // 开启东华特效
        effect: {
          show: true,
          symbol: 'arrow',
          color: 'red',
          symbolSize: 10,
        },
      },
    ],
  })
})
</script>

<style scoped lang="scss"></style>
