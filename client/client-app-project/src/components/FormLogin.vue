<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
const { login } = useAuthStore();


const formData = reactive({ email: '', password: '' });

const submitLogin = async () => {
  await login(formData);
};

</script>

<template>
    <form @submit.prevent="submitLogin">
        <label for="email">Email</label>
        <input type="email" v-model="formData.email" name="email" id="email" placeholder="pierre.paul@jacques.com" required>
        <label for="password">Mot de passe</label>
        <input type="password" v-model="formData.password" name="password" id="password" required>
        <button @click="submitLogin">Se connecter</button>
    </form>
</template>

<style>
form {
    max-width: 300px;
    font-size: 0.8rem;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }
    input::placeholder {
        font-size: 0.8rem;
    }
}
</style>


