<script setup>
import { useAuthStore } from '@/stores/auth';
import { useProjectsStore } from '@/stores/projects';
import { onMounted } from 'vue';

const { user } = useAuthStore();
const { fetchProjects, projects } = useProjectsStore();

onMounted(() => {
  fetchProjects(user.id)
});

</script>

<template>
  <main class="account-main">
    <div class="container-profile">
      <h3 class="container-profile__title">Mes informations personnelles</h3>
      <p class="container-profile__first-name">Nom: {{ user.nom }}</p>
      <p class="container-profile__last-name">Prénom: {{ user.prenom }}</p>
      <p class="container-profile__email">Email: {{ user.email }}</p>

    </div>
    <div class="container-projects">
      <h3 class="container-profile__title">Mes projets</h3>
        <div v-for="project in projects" :key="project.id" class="container-projects__project">
          <p class="container-projects__project-title">{{ project.title }}</p>
          <p class="container-projects__project-description">{{ project.description }}</p>
          <p class="container-projects__project-date">{{ project.created_at }}</p>
        </div>
      
    </div>

    <div>
      <router-link to="/create-project">Créer un projet</router-link>
    </div>
  </main>
</template> 

<style scoped>
</style>