<script setup>
import router from '@/router';

function goToSignup () {
  router.push({ name: "signup"})
}

function goToLogin () {
  router.push({ name: "login"})
}

</script>

<template>
  <main class="home-main">
    <img src="../assets/images/visuel-projet.jpg" alt="visuel">
    <div class="container-text">
      <p>Bienvenue !</p>
      <p>Vous avez déjà un compte ?</p>
      <button @click="goToLogin">Se connecter</button>
      <p>Vous souhaitez créer un compte ?</p>
      <button @click="goToSignup">Créer un compte</button>
    </div>

  </main>
</template>

<style>
.home-main {
  .container-text {
    margin-top: 10px;
    text-align: center;
  }
  p {
    margin: 17px auto;
  }
 
  img {
    width: 100%;
  }
}

</style>
