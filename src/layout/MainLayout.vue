<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>
