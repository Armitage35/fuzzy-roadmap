<template>
	<div class="modal-mask" tabindex="0" @keydown.esc="closeModal">
		<div class="modal-container">
			<div class="modal-header">
				<h2 class="modal-title">{{modalTitle}}</h2>
				<i class="fas fa-times modal-close"
					@click="closeModal"
				></i>
			</div>
			<EpicModal
				v-if="modalType === 'epic'"
				@toggleModal="closeModal"
				:epics="this.epics"
			></EpicModal>
			<SettingsModal
				v-if="modalType === 'settings'"></SettingsModal>
		</div>
	</div>
</template>

<script>
	import EpicModal from './EpicModal/EpicModal.vue';
	import SettingsModal from './SettingsModal/SettingsModal.vue';

	export default {
		props: ['modalType', 'epics'],
		components: {
			EpicModal, SettingsModal
		},
		computed: {
			modalTitle(){
				if (this.modalType === "epic"){
					return "Create your epic"
				} else if (this.modalType === "settings"){
					return "Set your preferences"
				} else {
					return "Edit epic"
				}
			}
		},
		methods: {
			closeModal() {
				this.$emit('toggleModal', "");
			}
		}
	}
</script>
