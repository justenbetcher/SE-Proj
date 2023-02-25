<script setup lang="ts">
  //someone needs to come up with something less cringe
  const messages: String[] = [
    "we're glad you're back",
    "we missed you",
    "uh-oh, what did you buy?",
    "tell us your secrets"
  ];
</script>

<template>
  <main>
    <div class="box is-centered has-text-centered">
        <div class="title has-text-primary">sign in</div>
        <div class="subtitle has-text-info"> {{ messages[Math.floor(Math.random() * messages.length)] }} </div>

        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input is-primary has-text-info" type="email" placeholder="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-primary has-text-info" type="password" placeholder="password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div class="button is-light is-primary" @click="">go</div>

        <div class="container level-right">
          <div class="button is-link is-underlined is-inverted" @click="">sign up</div>
        </div>
      </div>
  </main>
</template>

<style>
</style>