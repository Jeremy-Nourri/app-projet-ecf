import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
  
  const user = ref(null);

  const isLoggedIn = ref(false);

  async function login({ email, password }) {

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      if (response.status === 200) {
        isLoggedIn.value = true;
        user.value = response.data.user;
      } else {
        throw new Error("Erreur lors de l'authentification");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function logout() {
    user.value = null;
  }

  return { user, isLoggedIn, login, logout }
})