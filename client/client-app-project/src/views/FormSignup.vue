<script setup>
import { reactive, computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import router from '@/router';
import axios from 'axios';

const passwordConfirm = ref('');
const emailConfirm = ref('');

const formData = reactive(
    {
        nom: '',
        prenom: '',
        email: '',
        password: ''
    }
);

const isValidPassword = computed(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(formData.password);
});

const passwordsMatch = computed(() => {
    return formData.password === passwordConfirm.value;
});

const emailsMatch = computed(() => {
    return formData.email === emailConfirm.value;
});

const isValidForm = computed(() => {
    return emailsMatch.value && isValidPassword.value && passwordsMatch;
});

async function submitForm() {
    try {
        const response = await axios.post(
            'http://localhost:3000/signup',
            {
                email: formData.email,
                password: formData.password,
                nom: formData.nom,
                prenom: formData.prenom
            }
        );
        if (response.status === 201) {
            return router.push({ name: "home" })
        }

    } catch (error) {
        console.error(error);
    }
}



</script>

<template>
    <main>
        <form @submit.prevent="submitLogin">
            <h2>Formulaire d'inscription</h2>
            <label for="nom">Nom</label>
            <input type="text" v-model.trim="formData.nom" name="nom" id="nom" placeholder="Paul" required>
            <label for="prenom">Prénom</label>
            <input type="text" v-model.trim="formData.prenom" name="prenom" id="prenom" placeholder="Pierre" required>
            <label for="email">Email</label>
            <input type="email" v-model.trim="formData.email" name="email" id="email" placeholder="pierre.paul@jacques.com"
                required>
            <label for="email-confirm">Confirmation email</label>
            <input type="email" v-model="emailConfirm" name="email-confirm" id="email-confirm"
                placeholder="pierre.paul@jacques.com" required>
            <label for="password">Mot de passe</label>
            <input type="password" v-model="formData.password" name="password" id="password" required>
            <p class="password-message" v-if="!isValidPassword">Le mot de passe doit contenir au moins 8 caractères, une
                majuscule, une minuscule, un chiffre et un caractère spécial.</p>
            <label for="password-confirm">Confirmation mot de passe</label>
            <input type="password" v-model="passwordConfirm" name="password-confirm" id="password-confirm" required>
            <p class="password-message" v-if="!passwordsMatch">Les mots de passe ne sont pas identiques</p>
            <button :disabled="!isValidForm" @click="submitForm">Enregistrer</button>
            <RouterLink to="/">
                <p class="back-homepage">Revenir à l'accueil</p>
            </RouterLink>
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
        cursor: pointer;
    }

    .password-message {
        margin-bottom: 12px;
        font-size: 0.6rem;
    }

    .back-homepage {
        text-align: right;
    }
}</style>
