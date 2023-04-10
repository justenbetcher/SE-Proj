<script setup lang="ts">      
  import { ref } from 'vue';

  import session from '@/stores/session';
  import router from '@/router';

  const username = ref(session.user?.username)
  const password = ref(session.user?.password)

  function signOut() {
    session.user = null;
    router.push("/")
  }
</script>

<template>
  <main>
    <div class="columns">
      <div class="column"></div>

      <div class="column is-4">
        <div class="box fades-in">
          <div class="has-text-primary has-text-centered"> You are signed in as {{ username }} with the password {{ password }} </div>

          <div class="buttons is-grouped">
            <div class="button is-bg is-fullwidth has-text-white" @click="signOut()">Sign Out</div>
          </div>
        </div>
      </div>

      <div class="column"></div>
    </div>
  </main>
</template>