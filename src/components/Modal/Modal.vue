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
				:author="userSettings.userName"
				:selectedStatus="selectedStatus"
			></CreateEpicModal>
			<SettingsModal
				v-if="modalType === 'settings'"
				:userSettings="this.userSettings"
				></SettingsModal>
			<EpicDetailsModal
				v-if="modalType === 'epicDetails'"
				:selectedEpic="selectedEpic"
			></EpicDetailsModal>
			<ImportRoadmapModal
				v-if="modalType === 'importRoadmap'"
			></ImportRoadmapModal>
			<OnboardingModal
				v-if="modalType === 'onboarding'"
			></OnboardingModal>
			<ExportRoadmapModal
				v-if="modalType === 'exportRoadmap'"
				:epics="epics"
			></ExportRoadmapModal>
			<ResetRoadmapModal
				v-if="modalType === 'resetRoadmapModal'"
			></ResetRoadmapModal>
		</div>
	</div>
</template>

<script>
	import { bus } from '../../main.js';

	import CreateEpicModal from './CreateEpicModal/CreateEpicModal.vue';
	import EpicDetailsModal from './EpicDetailsModal/EpicDetailsModal.vue';
	import ExportRoadmapModal from './ExportRoadmapModal/ExportRoadmapModal'
	import ImportRoadmapModal from './ImportRoadmapModal/ImportRoadmapModal.vue'
	import OnboardingModal from './OnboardingModal/OnboardingModal.vue';
	import ResetRoadmapModal from './ResetRoadmapModal/ResetRoadmapModal.vue';
	import SettingsModal from './SettingsModal/SettingsModal.vue';

	export default {
		props: ['modalType', 'epics', 'userSettings', 'selectedEpic', 'selectedStatus'],
		components: {
			CreateEpicModal,
			EpicDetailsModal,
			ExportRoadmapModal,
			ImportRoadmapModal,
			OnboardingModal,
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
					case 'onboarding':
						return 'Welcome to Fuzzy Roadmap';
					default:
						return 'Hum, this is rather embarassing...'
				}
			}
		},
		methods: {
			closeModal () {
				bus.$emit('toggleModal');
			}
		}
	}
</script>
