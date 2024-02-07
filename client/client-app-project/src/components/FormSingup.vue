<script setup>
import { reactive } from 'vue';

const formData = reactive(
    {
        nom: '',
        prenom: '',
        email: '',
        password: ''
    }
);


</script>

<template>
    <form action="">
        <label for="nom">Nom</label>
        <input type="text" v-model.trim="formData.nom" name="nom" id="nom" placeholder="Paul">
        <label for="prenom">Prénom</label>
        <input type="text" v-model.trim="formData.prenom" name="prenom" id="prenom" placeholder="Pierre">
        <label for="email">Email</label>
        <input type="email" v-model.trim="formData.email" name="email" id="email" placeholder="pierre.paul@jacques.com">
        <label for="email-confirm">Confirmation email</label>
        <input type="email" name="email-confirm" id="email-confirm" placeholder="pierre.paul@jacques.com">
        <label for="password">Mot de passe</label>
        <input type="password" v-model.trim="formData.password" name="password" id="password">
        <label for="password-confirm">Confirmation mot de passe</label>
        <input type="password" name="password-confirm" id="password-confirm">
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
