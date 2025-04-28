<script setup lang="ts">
import { computed } from 'vue'
import './assets/styles/styles.scss'
import { RouterView, useRoute } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'

const route = useRoute()

console.log(route)

const layout = computed(() => {
  if (route.meta.layout === 'auth') {
    return AuthLayout
  } else {
    return MainLayout
  }
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
