<template>
	<app-page title="Список заявок">
		<template #title>
			<button class="btn primary" @click="create">Создать</button>
		</template>

		<request-table :requests="[]"></request-table>

		<teleport to="body">
			<app-modal v-if="modal" title="Создать заявку" @close="close">
				<request-modal></request-modal>
			</app-modal>
		</teleport>
	</app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import AppModal from '@/components/ui/AppModal'
import RequestTable from '@/components/request/RequestTable'
import RequestModal from '@/components/request/RequestModal'

export default {
	data() {
		return {
			modal: false
		}
	},
	methods: {
		create() {
			this.modal = true
		},
		close() {
			this.modal = false
		}
	},
	components: {
		AppPage,
		RequestTable,
		AppModal,
		RequestModal
	}
}
</script>

<style>

</style>