<template>
	<div class="modal-backdrop" @click="$emit('close')">
		<div class="modal">
			<h3>{{ title }}</h3>

			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	emits: ['close'],
	props: {
		title: {
			type: String
		}
	}
}
</script>

<style>

</style>