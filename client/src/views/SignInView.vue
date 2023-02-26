<script setup lang="ts">
  import { ref } from 'vue';

  //someone needs to come up with something less cringe
  const signInMessages: String[] = [
    "we're glad you're back",
    "we missed you",
    "uh-oh, what did you buy?",
    "tell us your secrets",
    "we need to see some ID"
  ];
  const joinUsMessages: String[] = [
    "we'd be happy to have you",
    "we are a perfect fit",
    "yeehaw",
    "tell us who you are"
  ];

  const signInMessage = signInMessages[Math.floor(Math.random() * signInMessages.length)];
  const joinUsMessage = joinUsMessages[Math.floor(Math.random() * joinUsMessages.length)];

  const joinUsTab = ref(true);

  const signInUsername = ref("")
  const signInPassword = ref("")
  const joinUsUsername = ref("")
  const joinUsPassword = ref("")
</script>

<template>
  <main>
    <div class="div is-centered">
      <div class="box">
        <div class="buttons is-grouped is-left">
          <div class="button is-info" :class="{'is-inverted': joinUsTab}" @click="joinUsTab=false">Sign in</div>
          <div class="button is-info" :class="{'is-inverted': !joinUsTab}" @click="joinUsTab=true">Join us</div>
        </div>
      </div>
      <div class="box p-6">
        <div v-if="!joinUsTab">
          <div class="subtitle has-text-info has-text-centered is-size-6"> {{ signInMessage }} </div>
          <!--
              sign in:
          -->

          <div class="field">
            <p class="has-text-primary">Username</p>
            <div class="control">
              <input class="input has-text-primary" type="text" placeholder="" v-model="signInUsername">
            </div>
          </div>

          <div class="field">
            <p class="has-text-primary">Password</p>
            <div class="control">
              <input class="input has-text-primary" type="password" placeholder="" v-model="signInPassword">
            </div>
          </div>

          <div class="buttons is-grouped is-right">
            <div class="button is-primary is-light is-fullwidth" @click="">Continue</div>
          </div>
        </div>

        <div v-else>
          <div class="subtitle has-text-info has-text-centered is-size-6"> {{ joinUsMessage }} </div>
          <!--
              join us:
          -->

          <div class="field">
            <p class="has-text-primary">Username</p>
            <div class="control">
              <input class="input has-text-primary" type="text" placeholder="" v-model="joinUsUsername">
            </div>
          </div>

          <div class="field">
            <p class="has-text-primary">Password</p>
            <div class="control">
              <input class="input has-text-primary" type="password" placeholder="" v-model="joinUsPassword">
            </div>
          </div>

          <div class="buttons is-grouped is-right">
            <div class="button is-primary is-light is-fullwidth" @click="">Continue</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
</style>