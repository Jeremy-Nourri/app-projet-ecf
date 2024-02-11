import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/services/api';

export const useProjectsStore = defineStore('projects', () => {
  
  const projects = ref([]);

  async function fetchProjects(userId) {
    try {
      const response = await api.get(`/user/${userId}/projects`);
      projects.value = response.data;

    } catch (error) {
      console.error(error);
    }
  }

  async function createProject(project) {
    try {
      const response = await api.post('/create-project', project);
      console.log(project);
      console.log(response.data);
      projects.value.push(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProject(userId, projectId) {
    try {
      await api.delete(`/user/${userId}/project/${projectId}/update`);
      projects.value = projects.value.filter(project => project.id !== projectId);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateProject(userId, projectId, project) {
    try {
      const response = await api.put(`/user/${userId}/project/${projectId}/update`, project);
      const index = projects.value.findIndex(p => p.id === project.id);
      projects.value[index] = response.data;
    } catch (error) {
      console.error(error);
    }
  }


  

  return { fetchProjects, createProject, deleteProject, updateProject, projects };
})