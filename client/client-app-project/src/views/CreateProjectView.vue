<script setup>
import { useProjectsStore } from '@/stores/projects';
import { useAuthStore } from '@/stores/auth';
import { reactive } from 'vue';

const { createProject } = useProjectsStore();
const { user } = useAuthStore();

const formData = reactive({
  denomination: '',
  details: '',
  userId: user.id
});

const submitProject = async () => {
  await createProject(formData);
}

</script>

<template>
  <main class="create-project-main">
    <form @submit.prevent="submitProject">
      <h2>Créer un projet</h2>
      <label for="title">Titre</label>
      <input type="text" v-model="formData.denomination" name="title" id="title" placeholder="Mon super projet" required>
      <label for="description">Description</label>
      <textarea v-model="formData.details" name="description" id="description" placeholder="Description de mon super projet" required></textarea>
      <button>Créer le projet</button>
      <router-link to="/account">Retour à mon compte</router-link>
    </form>
  </main>

</template>

<style>

</style>