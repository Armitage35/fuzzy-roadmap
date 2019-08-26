<template>
	<div class="modal-mask">
		<div class="modal-container">
			<EpicModal v-if="modalType === 'epic'"></EpicModal>
		</div>
	</div>
</template>

<script>
	import EpicModal from './EpicModal/EpicModal'

	export default {
		props: ['modalType'],
		components: {
			EpicModal
		}
	}
</script>
