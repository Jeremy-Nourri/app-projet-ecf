<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>Bienvenue !</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: darkblue;
  color: azure;
}
</style>
