<script setup lang="ts">
import './assets/styles/styles.scss'
import Header from './components/Header.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
