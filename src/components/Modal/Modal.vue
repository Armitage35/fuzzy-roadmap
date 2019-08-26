<template>
	<div class="modal">
		<EpicModal v-if="modalType === 'epic'"></EpicModal>
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
