import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjectsStore = defineStore('auth', () => {
  
  const projects = ref([]);

  async function fetchProjects() {
    try {
      const response = await axios.post(`http://localhost:3000/projects`);
      if (response.status === 200) {
        projects.value = response.data.projets;
      } else {
        throw new Error('Erreur lors de la récupération des projets');
      }
    } catch (error) {
      console.error(error);
    }
  }



  return { fetchProjects }
})