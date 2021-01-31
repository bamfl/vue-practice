<template>
	<nav class="navbar">
		<h3>MyBank</h3>
		<ul class="navbar-menu">
			<li>
				<router-link to="/">Заявки</router-link>
			</li>
			<li>
				<router-link to="/help">Помощь</router-link>
			</li>
			<li>
				<router-link to="/messages">Сообщения</router-link>
			</li>
			<li>
				<a href="#" @click.prevent="logout">Выход</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.commit('AuthModule/logout')
			this.$router.push('/auth')
		}
	}
}
</script>

<style>

</style>
