import { reactive } from 'vue';
import { defineStore } from 'pinia';
import api from '@/services/api';

export const useProjectsStore = defineStore('projects', () => {
  
  const projects = reactive([]);
  
  async function fetchProjects(userId) {
    try {
      const response = await api.get(`/user/${userId}/projects`);
      projects.length = 0;
      response.data.forEach(project => projects.push(project));

    } catch (error) {
      console.error(error);
    }
  }

  async function createProject(project) {
    try {
      const response = await api.post('/create-project', project);
      console.log(project);
      console.log(response.data);
      projects.push(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProject(userId, projectId) {
    try {
      await api.delete(`/user/${userId}/project/${projectId}/update`);
      const index = projects.findIndex(project => project.id === projectId);
      if (index !== -1) {
        projects.splice(index, 1);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function updateProject(userId, projectId, project) {
    try {
      const response = await api.put(`/user/${userId}/project/${projectId}/update`, project);
      const index = projects.findIndex(p => p.id === projectId);
      if (index !== -1) {
        projects[index] = response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { fetchProjects, createProject, deleteProject, updateProject, projects };
})
