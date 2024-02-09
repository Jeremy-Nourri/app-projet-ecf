<script>
import { useProjectsStore } from '@/stores/projects';
import { reactive } from 'vue';

const formData = reactive({
  title: '',
  description: ''
});

const { createProject } = useProjectsStore();

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
      <button @click="submitProject">Créer le projet</button>
      <router-link to="/account">Retour à mon compte</router-link>
    </form>
  </main>

</template>

<style>

</style>