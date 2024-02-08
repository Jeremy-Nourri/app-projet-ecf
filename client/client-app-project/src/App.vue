<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>Application de gestion de projet</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  background-color: rgb(30, 30, 136);
  color: white;
}
</style>
