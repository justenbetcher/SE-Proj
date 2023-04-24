<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import session from './stores/session'

import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="block bg">
    <div class="container mx-3 flex">
      <NavBar/>
    </div>  
        
    
    <div class="container center-contents flex">
        <RouterView />
    </div>

    <div :class="{'is-invisible': session.loading==0}" class="container has-text-centered has-text-white">
      <i class="fa-solid fa-satellite-dish fa-beat"></i>
    </div>
  </div>
</template>

<style>
</style>