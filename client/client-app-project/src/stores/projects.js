import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjectsStore = defineStore('projects', () => {
  
  const projects = ref([]);

  async function fetchProjects(userId) {

    try {
      const response = await axios.get(`/user/${userId}/projects`);
      projects.value = response.data;

    } catch (error) {
      console.error(error);
    }
  }

  async function createProject(project) {
    try {
      const response = await axios.post('http://localhost:3000/create-project', project);
      projects.value.push(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProject(projectId) {
    try {
      await axios.delete(`/projects/${projectId}`);
      projects.value = projects.value.filter(project => project.id !== projectId);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateProject(project) {
    try {
      const response = await axios.put(`/projects/${project.id}`, project);
      const index = projects.value.findIndex(p => p.id === project.id);
      projects.value[index] = response.data;
    } catch (error) {
      console.error(error);
    }
  }


  

  return { fetchProjects, createProject, deleteProject, updateProject, projects };
})