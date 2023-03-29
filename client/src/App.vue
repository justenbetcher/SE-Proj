<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import session from './stores/session'
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
      <div :class="{'is-invisible': session.loading==0}" class="container has-text-centered has-text-white">
        <i class="fa-solid fa-satellite-dish fa-beat"></i>
      </div>
    </div>
  </div>

</template>

<style>
</style>