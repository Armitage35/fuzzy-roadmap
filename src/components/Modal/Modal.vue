<template>
	<div class="modal-mask" tabindex="0" @keydown.esc="closeModal">
		<div class="modal-container">
			<div class="modal-header">
				<h2 class="modal-title">{{modalTitle}}</h2>
				<i class="fas fa-times modal-close"
					@click="closeModal"
				></i>
			</div>
			<CreateEpicModal
				v-if="modalType === 'epic'"
				@toggleModal="closeModal"
				:epics="this.epics"
				:author="userSettings.userName"
			></CreateEpicModal>
			<SettingsModal
				v-if="modalType === 'settings'"
				:userSettings="this.userSettings"
				@toggleModal="closeModal"
				@updateSettings="updateSettings($event)"
				></SettingsModal>
		</div>
	</div>
</template>

<script>
	import CreateEpicModal from './CreateEpicModal/CreateEpicModal.vue';
	import SettingsModal from './SettingsModal/SettingsModal.vue';
	import EpicDetailsModal from './EpicDetailsModal/EpicDetailsModal.vue';

	export default {
		props: ['modalType', 'epics', 'userSettings'],
		components: {
			CreateEpicModal,
			SettingsModal
		},
		computed: {
			modalTitle (){
				if (this.modalType === "epic"){
					return "Create your epic";
				} else if (this.modalType === "settings"){
					return "Set your preferences";
				} else {
					return "Edit epic";
				}
			}
		},
		methods: {
			closeModal () {
				this.$emit('toggleModal', "");
			},
			updateSettings (event) {
				this.$emit('updateSettings', event);
			}
		}
	}
</script>
