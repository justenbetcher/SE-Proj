<script setup lang="ts">
  import { ref } from 'vue';

  import { addUser } from "../stores/users"

  const joinUsTab = ref(false)
  const username = ref("")
  const password = ref("")

  function action() {
    addUser(username.value, password.value)
  }
</script>

<template>
  <main>
    <div class="columns">
      <div class="column"></div>

      <div class="column is-3">
          <div class="box fades-in">

            <div class="columns has-text-centered has-text-primary">
              <div class="column">
                <div class="hoverable" :class="{'border-tab-active': !joinUsTab}" @click="joinUsTab = false"> Sign in </div>
              </div>
              <div class="column">
                <div class="hoverable" :class="{'border-tab-active': joinUsTab}" @click="joinUsTab = true"> Join us </div>
              </div>
              <div class="column"></div>

            </div>

              <div class="has-text-primary has-text-centered"> message </div>
              <div class="field has-text-primary">
                Username
                <input class="input has-text-primary" type="" placeholder="" v-model.trim="username">
              </div>

              <div class="field has-text-primary">
                Password
                <input class="input has-text-primary" type="password" placeholder="" v-model.trim="password">
              </div>


              <div class="buttons is-grouped">
                <div class="button is-bg is-fullwidth has-text-white" @click="action()">Continue</div>
              </div>
          </div>
      </div>
      
      <div class="column"></div>
    </div>
  </main>
</template>