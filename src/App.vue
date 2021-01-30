<template>
	<component v-if="layout" :is="`${layout}-layout`">
	</component>
</template>

<script>
import AuthLayout from '@/layout/AuthLayout.vue'
import MainLayout from '@/layout/MainLayout.vue'

export default {
	computed: {
		layout() {
			return this.$route.meta.layout
		}
	},
	components: {
		AuthLayout,
		MainLayout
	}
}
</script>

<style>

</style>
