<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'
import { RouterLink } from 'vue-router'
interface MenuItem {
  name: string
  path: string
}

const menu: MenuItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]
</script>

<template>
  <header class="header__main">
    <div class="header__logo">
      <!-- Le deux points est une indication pour dire que je
      souhaite intégrer une données provenant de mon script/logique -->
      <RouterLink to="/">
        <img :src="Logo" alt="NIke" />
      </RouterLink>
    </div>
    <nav class="header__nav">
      <ul>
        <li v-for="(item, index) in menu" :key="index">
          <RouterLink :to="item.path">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__main {
    padding: 10px 15px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    width: 150px;
    img {
      width: 100%;
    }
  }
  &__nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 20px;
      li {
        font-family: var(--font-secondary);
        text-transform: uppercase;
      }
    }
  }
}
</style>
