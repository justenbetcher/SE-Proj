<script setup lang="ts">
    import  WelcomeView  from './HomeView.vue';
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';
    import { login } from '../model/session';


    const joinUsTab = ref(false)
</script>

<template>
  <main>
    <div class="container">
          <div class="box fades-in">

            <div class="columns has-text-centered has-text-primary">

              <div class="column">
                <div class="hoverable" :class="{'border-tab-active': !joinUsTab}" @click="joinUsTab = false"> Sign in </div>
              </div>

              <div class="column">
                <div class="hoverable" :class="{'border-tab-active': joinUsTab}" @click="joinUsTab = true"> Join us </div>
              </div>

            </div>

              <div class="has-text-primary has-text-centered"> message </div>
                <div class="field has-text-primary">
                    Email
                    <input class="input has-text-primary" type="" placeholder="">
                </div>

                <div class="field has-text-primary">
                    Password
                    <input class="input has-text-primary" type="password" placeholder="">
                </div>

                <RouterLink to="/" class="buttons is-grouped">
                    <div class="button is-bg is-fullwidth has-text-white" @click="login()">Continue</div>
                </RouterLink>
          </div>
      </div>
  </main>
</template>

<style scoped>

@media screen and (min-width: 512px){
    .box {
        min-width: 250px;
    }
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>