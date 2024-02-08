<script setup>

import axios from 'axios';

import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
const { user } = useAuthStore();

const projects = ref([]);

console.log(projects.value);

async function getProjectsByUser() {
    try {
        const response = await axios.get(`/user/${user.id}/projects`);
        projects.value.push(response);
    } catch (error) {
        console.error(error);
    }
}

onMounted(getProjectsByUser());

getProjectsByUser();


</script>

<template>
  <main class="account-main">
    <div class="container-profile">
      <h3 class="container-profile__title">Mes informations personnelles</h3>
      <!-- <p v-for="item in projects">
       {{ item.text }}
      </p> -->
      <p class="container-profile__first-name"></p>
      <p class="container-profile__last-name"></p>
      <p class="container-profile__email"></p>
    </div>
    <div class="container-projects">
      
    </div>
  </main>
</template> 

<style scoped>
</style>