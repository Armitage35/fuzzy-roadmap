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
			<EpicDetailsModal
				v-if="modalType === 'epicDetails'"
				:selectedEpic="selectedEpic"
				@toggleModal="closeModal"
				@deleteEpic="deleteEpic($event)"
				@updateEpic="updateEpic($event)"
			></EpicDetailsModal>
			<ResetRoadmapModal
				v-if="modalType === 'resetRoadmapModal'"
				@toggleModal="closeModal"
			></ResetRoadmapModal>
		</div>
	</div>
</template>

<script>
	import CreateEpicModal from './CreateEpicModal/CreateEpicModal.vue';
	import EpicDetailsModal from './EpicDetailsModal/EpicDetailsModal.vue';
	import ResetRoadmapModal from './ResetRoadmapModal/ResetRoadmapModal.vue';
	import SettingsModal from './SettingsModal/SettingsModal.vue';

	export default {
		props: ['modalType', 'epics', 'userSettings', 'selectedEpic'],
		components: {
			CreateEpicModal,
			EpicDetailsModal,
			ResetRoadmapModal,
			SettingsModal
		},
		computed: {
			modalTitle (){
				if (this.modalType === "epic"){
					return "Create your epic";
				} else if (this.modalType === "settings"){
					return "Set your preferences";
				} else if (this.modalType === "resetRoadmapModal"){
					return "HERE BE DRAGONS!";
				}
				else if (this.modalType === "epicDetails"){
					return "Epic details";
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
			},
			deleteEpic(event) {
				this.$emit('deleteEpic', event);
			},
			updateEpic(event) {
				this.$emit('updateEpic', event);
			}
		}
	}
</script>
