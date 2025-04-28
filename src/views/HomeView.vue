<script setup lang="ts">
const title = 'Home'
import { ref, onMounted } from 'vue'

interface Image {
  url: string
}

interface Product {
  id: number
  name: string
  price: number
  image: Image
}

const products = ref<Product[]>([])

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=image')
    const { data } = await response.json()
    products.value = data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <TitlePage :title="title" />
  <div class="products__grid">
    <div class="product__card" v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <img :src="'http://localhost:1337' + product.image?.url" alt="Product Image" />
    </div>
  </div>
</template>
