import { ref, computed } from 'vue';
import router from '../router';
import { defineStore } from 'pinia';
import api from '@/services/api';

export const useAuthStore = defineStore('auth', () => {

  const user = ref(null);

  const isAuthenticated = computed(() => {
    return !!user.value;
  });

  async function login({ email, password }) {
    try {
      const response = await api.post(`/login`, { email, password });
      user.value = response.data;
      if (response.status === 200) {  
        router.push('/account');
      }
      console.log(user.value);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    user.value = null;
  }

  return { user, isAuthenticated, login, logout };
})