<script setup lang="ts">
import './assets/styles/styles.scss'
import { RouterView, useRoute } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'

const route = useRoute()

console.log(route)

const isAuthLayout = route.meta.layout === 'auth' ? true : false
</script>

<template>
  <div v-if="isAuthLayout">
    <AuthLayout>
      <RouterView />
    </AuthLayout>
  </div>
  <div v-else>
    <MainLayout>
      <RouterView />
    </MainLayout>
  </div>
</template>
