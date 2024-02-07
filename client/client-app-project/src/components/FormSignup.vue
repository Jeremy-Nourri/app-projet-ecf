<script setup>
import { reactive, computed, ref } from 'vue';

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
})

</script>

<template>
    <form action="">
        <label for="nom">Nom</label>
        <input type="text" v-model.trim="formData.nom" name="nom" id="nom" placeholder="Paul" required>
        <label for="prenom">Prénom</label>
        <input type="text" v-model.trim="formData.prenom" name="prenom" id="prenom" placeholder="Pierre" required>
        <label for="email">Email</label>
        <input type="email" v-model.trim="formData.email" name="email" id="email" placeholder="pierre.paul@jacques.com" required>
        <label for="email-confirm">Confirmation email</label>
        <input type="email"  v-model="emailConfirm" name="email-confirm" id="email-confirm" placeholder="pierre.paul@jacques.com" required>
        <p v-if="!isValidPassword">Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.</p>
        <label for="password">Mot de passe</label>
        <input type="password" v-model="formData.password" name="password" id="password" required>
        <label for="password-confirm">Confirmation mot de passe</label>
        <input type="password" v-model="passwordConfirm" name="password-confirm" id="password-confirm" required>
        <button :disabled="!isValidForm">Enregistrer</button>
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
