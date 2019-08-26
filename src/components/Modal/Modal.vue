<template>
	<div class="modal-mask">
		<div class="modal-container">
			<div class="modal-header">
				<span class="modal-title">{{modalTitle}}</span>
				<i class="fas fa-times modal-close"></i>
			</div>
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
		},
		computed: {
			modalTitle(){
				if (this.modalType === "epic"){
					return "Create your epic"
				}
			}
		}
	}
</script>
