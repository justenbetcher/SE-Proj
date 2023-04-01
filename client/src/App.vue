<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useSession } from './model/session';
import SignInView from './views/SignInView.vue';
import Navbar from './components/Navbar.vue';

const session = useSession();
</script>

<template>
	<!--<div class="hero is-fullheight">-->
		
		<div  v-if="session.currentUser != null">

			<Navbar />

			<div class="container">
				<RouterView />
			</div>

		</div>
		
		
		<div class="container sign-in" v-else>
			<SignInView />
		</div>
		
		
		
	<!--</div>-->
</template>

<style scoped>
.sign-in {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
</style>