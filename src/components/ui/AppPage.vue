<template>
	<div class="card">
		<h1 class="card-title">
			{{ title }}
			<slot name="title"></slot>
		</h1>
		
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	},
	beforeCreate() {
		document.title = `${this.title} | Клон Банка`
	}
}
</script>

<style>

</style>