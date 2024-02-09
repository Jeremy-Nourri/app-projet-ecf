<script setup>
import { useAuthStore } from '@/stores/auth';
import { useProjectsStore } from '@/stores/projects';
import { onMounted } from 'vue';

const { user } = useAuthStore();
const { fetchProjects } = useProjectsStore();

onMounted(() => {
  fetchProjects(user.id)
});

</script>

<template>
  <main class="project-main">
    
  </main>
</template>

<style>
</style>