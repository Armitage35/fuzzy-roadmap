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
				@createEpic="$emit('createEpic', $event)"
				@toggleModal="closeModal"
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
			<ImportRoadmapModal
				v-if="modalType === 'importRoadmap'"
				@toggleModal="closeModal"
			></ImportRoadmapModal>
			<ExportRoadmapModal
				v-if="modalType === 'exportRoadmap'"
				:epics="epics"
				@toggleModal="closeModal"
			></ExportRoadmapModal>
			<ResetRoadmapModal
				v-if="modalType === 'resetRoadmapModal'"
				@deleteRoadmap="deleteRoadmap"
				@toggleModal="closeModal"
			></ResetRoadmapModal>
		</div>
	</div>
</template>

<script>
	import CreateEpicModal from './CreateEpicModal/CreateEpicModal.vue';
	import EpicDetailsModal from './EpicDetailsModal/EpicDetailsModal.vue';
	import ExportRoadmapModal from './ExportRoadmapModal/ExportRoadmapModal'
	import ImportRoadmapModal from './ImportRoadmapModal/ImportRoadmapModal.vue'
	import ResetRoadmapModal from './ResetRoadmapModal/ResetRoadmapModal.vue';
	import SettingsModal from './SettingsModal/SettingsModal.vue';

	export default {
		props: ['modalType', 'epics', 'userSettings', 'selectedEpic'],
		components: {
			CreateEpicModal,
			EpicDetailsModal,
			ExportRoadmapModal,
			ImportRoadmapModal,
			ResetRoadmapModal,
			SettingsModal
		},
		computed: {
			modalTitle (){
				switch (this.modalType) {
					case 'epic':
						return 'Create your epic';
					case 'settings':
						return 'Set your preferences';
					case 'resetRoadmapModal':
						return 'HERE BE DRAGONS!';
					case 'epicDetails':
						return 'Epic details';
					case 'exportRoadmap':
						return 'Export roadmap';
					case 'importRoadmap':
						return 'Import roadmap';
					default:
						return 'Hum, this is rather embarassing...'
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
			},
			deleteRoadmap() {
				this.$emit('deleteRoadmap');
				this.$emit('toggleModal', "");
			}
		}
	}
</script>
