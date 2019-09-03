<template>
	<div class="app">
		<Modal
			v-if="appState.modal.showModal"
			:modalType="appState.modal.modalType"
			:epics="this.userEpics"
			:userSettings="this.userDetails"
			:selectedEpic="this.userEpics[this.appState.selectedEpic]"
			@createEpic="createEpic($event)"
			@deleteEpic="deleteEpic($event)"
			@deleteRoadmap="resetRoadmap"
			@toggleModal="toggleModal($event)"
			@updateEpic="updateEpic($event)"
			@updateSettings="updateSettings($event)"
		></Modal>
		<div class="roadmap">
			<Lane
				v-for="lane in lanes"
				:laneStatus="lane.type"
				:laneTitle="lane.title"
				:key="lane.type"
				:epics="findLane(lane.type)"
				@epicSelected="selectEpic($event)"
				></Lane>
		</div>
			<Toolbar
				@toggleModal="toggleModal($event)"
				@exportRoadmap="toggleModal($event)"
				@openResetRoadmapModal="toggleModal($event)"></Toolbar>
	</div>
</template>

<script>
	// General imports
	import './master.scss';
	const demoEpics = require( './utilities/demoRoadmap.js');
	const defaultUser = require( './utilities/defaultUser.js');

	// Importing external modules
	import iziToast from 'izitoast';
	import 'izitoast/dist/css/iziToast.min.css';

	// Components
	import Lane from './components/Lane/Lane.vue';
	import Toolbar from './components/Toolbar/Toolbar.vue';
	import Modal from './components/Modal/Modal.vue';

	export default {
		components: {
			Lane, Toolbar, Modal
		},
		created: function() {
			if (localStorage.getItem('roadmap') === null) {
				this.userEpics = demoEpics.demoEpics;
				this.saveRoadmapInClient();
			} else {
				this.userEpics = JSON.parse(localStorage.getItem('roadmap'));
			}

			if (localStorage.getItem('user') === null) {
				this.userDetails = defaultUser.defaultUser;
				this.saveRoadmapInClient();
			} else {
				this.userDetails = JSON.parse(localStorage.getItem('user'));
			}
		},
		data: function () {
			return {
				lanes: [
						{title: 'in progress', type: 'inProgress'},
						{title: 'soon', type: 'soon'},
						{title: 'later', type: 'later'},
						{title: 'done', type: 'done'}
					],
				userEpics: demoEpics.demoEpics,
				userDetails: {},
				appState: {
					modal:{
						showModal: false,
						modalType: ''
					},
					activeView: 'roadmap',
					selectedEpic: 0
				}
			}
		},
		methods: {
			toggleModal(event){
				this.appState.modal.showModal = !this.appState.modal.showModal;
				this.appState.modal.modalType = event;
			},
			filterEpic(status){
				let epics = [];
				for (let i = 0; i < this.userEpics.length; i++){
					if (this.userEpics[i].status == status) {
						this.userEpics[i].id = i;
						epics.push(this.userEpics[i])
					}
				}
				return epics;
			},
			findLane(lane) {
				switch(lane) {
					case 'inProgress':
							return this.epicsInProgress;
						case 'soon':
							return this.epicsSoon;
						case 'later':
							return this.epicsLater;
						case 'done':
							return this.epicsDone;
						default:
							null;
				}
			},
			updateSettings(event) {
				this.userDetails.userName = event.userName;
				this.userDetails.email = event.email;
				this.userDetails.profilePicture = event.pictureUrl;
				this.userDetails.preferences.language = event.language;
				this.userDetails.preferences.theme = event.theme;
				this.userDetails.preferences.tracking = event.tracking;

				localStorage.setItem('user', JSON.stringify(this.userDetails));

				iziToast.success({
					title: 'Settings updated',
					message: 'Your profile has a newfound gleam',
					position: 'topRight'
				});
			},
			selectEpic(event) {
				this.appState.selectedEpic = event;
				this.appState.modal.showModal = true;
				this.appState.modal.modalType = 'epicDetails';
			},
			deleteEpic(event) {
				this.userEpics.splice(event, 1);

				this.saveRoadmapInClient();

				iziToast.success({
					title: 'Epic deleted',
					message: 'This one\'s a goner',
					position: 'topRight'
				});
			},
			updateEpic(event) {
				// @TODO: display name shoud not be a string but a computed property
				// @TODO: the whole resolution system should also be a computed property
				event.epicName.displayName = event.epicName.fullName;
				event.updated = new Date();
				this.userEpics.splice(event.id, 1, event);

				this.saveRoadmapInClient();

				iziToast.success({
					title: 'Epic updated',
					message: 'It feels much better  already!',
					position: 'topRight'
				});
			},
			resetRoadmap() {
				this.userEpics = [];

				localStorage.clear();

				iziToast.success({
					title: 'Roadmap reset',
					message: 'Well, we did warn you',
					position: 'topRight'
				});
			},
			saveRoadmapInClient() {
				localStorage.setItem('roadmap', JSON.stringify(this.userEpics));
			},
			createEpic(newEpic) {
				this.userEpics.unshift(newEpic);
				this.toggleModal();

				this.saveRoadmapInClient();

				iziToast.success({
					title: 'Epic created',
					message: 'You are getting the hang of this',
					position: "topRight"
				});

			}
		},
		computed: {
			epicsInProgress() {
				return this.filterEpic('inProgress');
			},
			epicsSoon() {
				return this.filterEpic('soon');
			},
			epicsLater() {
				return this.filterEpic('later');
			},
			epicsDone() {
				return this.filterEpic('done');
			}
		}
	}
</script>
