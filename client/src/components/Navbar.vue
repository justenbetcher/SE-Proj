<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useSession } from '../model/session';

const session = useSession();

</script>

<template>
    <div>

        <nav class="navbar is-primary">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <strong>Daily Dollars</strong>
                </a>
                <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <RouterLink to="/" class="navbar-item" href="#">
                        Home
                    </RouterLink>
                    
                    <RouterLink class="navbar-item" to='/entry'>
                        Make Entry
                    </RouterLink>
                    
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                    <span class="icon">
                                        <i class="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                            <p class="control">
                                <RouterLink to="/login" class="button is-dark" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip" @click="session.currentUser = null">
                                    <span class="icon">
                                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                    </span>
                                    <span>Log Out</span>
                                </RouterLink>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </nav>

    </div>
</template>



<style scoped>
    strong {
        font-size: 1.5em;
        font-weight: bolder;
    }
</style>