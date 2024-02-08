<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { RouterLink } from 'vue-router';
const { login } = useAuthStore();


const formData = reactive({ email: '', password: '' });

const submitLogin = async () => {
    await login(formData);
};

</script>

<template>
    <main>
        <form @submit.prevent="submitLogin">
            <h2>Authentification</h2>
            <label for="email">Email</label>
            <input type="email" v-model="formData.email" name="email" id="email" placeholder="pierre.paul@jacques.com"
                required>
            <label for="password">Mot de passe</label>
            <input type="password" v-model="formData.password" name="password" id="password" required>
            <button @click="submitLogin">Se connecter</button>
            <RouterLink to="/"><p class="back-homepage">Revenir à l'accueil</p></RouterLink>
        </form>
    </main>
</template>

<style>
form {
    max-width: 230px;
    font-size: 0.8rem;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 40px;
    border-radius: 8px;

    h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 1rem;
        font-weight: bold;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }

    input,
    button {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 0.8rem;
    }

    button {
        margin-top: 10px;
    }

    .back-homepage {
        text-align: right;
    }
}
</style>


