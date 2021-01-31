<template>
	<div v-if="message" :class="['alert', message.type]">
		<p v-if="title" class="alert-title">{{ title }}</p>
		<p>{{ message.value }}</p>
		<span class="alert-close" @click="close">&times;</span>
	</div>
</template>

<script>
export default {
	computed: {
		message() {
			return this.$store.state.message
		},
		title(){
			if (this.message.type == 'danger') {
				return 'Ошибка!'
			} else if (this.message.type == 'primary') {
				return 'Успешно!'
			} else if (this.message.type == 'warning') {
				return 'Предупреждение!'
			}
		}
	},
	methods: {
		close() {
			this.$store.commit('clearMessage')
		}
	}
}
</script>

<style>

</style>
