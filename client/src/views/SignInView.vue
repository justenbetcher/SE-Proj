<script setup lang="ts">
  import { ref } from 'vue';


  const joinUsTab = ref(false)
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
                Email
                <input class="input has-text-primary" type="" placeholder="">
              </div>

              <div class="field has-text-primary">
                Password
                <input class="input has-text-primary" type="password" placeholder="">
              </div>


              <div class="buttons is-grouped">
                <div class="button is-bg is-fullwidth has-text-white" @click="">Continue</div>
              </div>
          </div>
      </div>
      
      <div class="column"></div>
    </div>
  </main>
</template>