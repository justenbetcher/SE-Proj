<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="hero is-fullheight">
    <div class="hero-head">
    </div>
    
    <div class="hero-body">
      <div class="container">
          <RouterView />
      </div>
    </div>

    <div class="hero-foot">
    </div>
  </div>

</template>

<style>
</style>