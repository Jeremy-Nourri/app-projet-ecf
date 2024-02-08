import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
  
  const user = ref(null);
  const status = ref('idle');

  const isLoggedIn = computed(() => !!user.value);

  async function login({ email, password }) {
    status.value = 'loading';
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      if (response.status === 200) {
        user.value = response.data.user;
        status.value = 'success';
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      status.value = 'error';
      console.error(error);
    }
  }

  function logout() {
    user.value = null;
  }

  return { user, isLoggedIn, login, logout }
})