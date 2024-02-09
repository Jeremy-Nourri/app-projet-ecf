import { ref, computed } from 'vue';
import router from '../router';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {

  const user = ref(null);

  const isAuthenticated = computed(() => {
    return !!user.value;
  });

  async function login({ email, password }) {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      user.value = response.data;
      if (response.status === 200) {  
      router.push('/account');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    user.value = null;
  }

  return { user, isAuthenticated, login, logout };
})