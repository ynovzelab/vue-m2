<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="title__page">
    <h1>
      {{ title }}
    </h1>
  </div>
</template>
