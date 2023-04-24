<script setup lang="ts">
  import { ref } from 'vue';

  import { addUser, signIn } from "../stores/users"
  import router from '@/router';
import session, { setUser } from '@/stores/session';
import { getServerTime } from '@/stores/time';

  const joinUsTab = ref(false)
  const username = ref("")
  const password = ref("")
  const confirmPassword = ref("")

  const nonmatchingPassword = ref(false)
  const userExisting = ref(false)

  const invalidSignIn = ref(false)

  function action() {
    if (joinUsTab.value) {
      nonmatchingPassword.value = false
      userExisting.value = false

      if (password.value === confirmPassword.value) {
        addUser(username.value, password.value).then(result => {
          if (!result) {
            userExisting.value = true
          } else {
            username.value = ""
            password.value = ""
            confirmPassword.value = ""
          }
        })
      } else {
        nonmatchingPassword.value = true
      }
    } else {
      signIn(username.value, password.value).then(user => {
        if (user) {
          username.value = ""
          password.value = ""
          
          getServerTime().then(time=> {
                setUser(user, Number(time));
                router.push("/budget")
            })
        } else {
          invalidSignIn.value = true
        }
      })
    }
  }
</script>

<template>
  <main>
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

      <div class="input-group">
        <div class="field has-text-primary">
          Username
          <input class="input has-text-primary" type="" placeholder="" v-model.trim="username">
        </div>

        <div class="field has-text-primary">
          Password
          <input class="input has-text-primary" type="password" placeholder="" v-model.trim="password">
        </div>

        <div v-if="joinUsTab" class="field has-text-primary">
          Confirm Password
          <input class="input has-text-primary" type="password" placeholder="" v-model.trim="confirmPassword">
        </div>         
        
        <div v-if="nonmatchingPassword && joinUsTab" class="has-text-danger has-text-centered"> Passwords dont match! </div>
        <div v-if="userExisting && joinUsTab" class="has-text-danger has-text-centered"> Username taken! </div>
        <div v-if="invalidSignIn && !joinUsTab" class="has-text-danger has-text-centered"> Sign in failed! </div>

        <div class="buttons is-grouped">
          <div class="button is-bg is-fullwidth has-text-white" @click="action()">Continue</div>
        </div>
      </div>
    </div>
  </main>
</template>