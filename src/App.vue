<template>
	<div class="app">
		<Modal
			v-if="appState.modal.showModal"
			:modalType="appState.modal.modalType"
			:epics="this.demoEpics"
			:userSettings="this.userDetails"
			:selectedEpic="this.demoEpics[this.appState.selectedEpic]"
			@toggleModal="toggleModal($event)"
			@updateSettings="updateSettings($event)"
			@updateEpic="updateEpic($event)"
			@deleteEpic="deleteEpic($event)"
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
			<Toolbar @toggleModal="toggleModal($event)"></Toolbar>
	</div>
</template>

<script>
	// General imports
	import './master.scss';
	const demoEpics = require( './utilities/demo.js');

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
		data: function () {
			return {
				lanes: [
						{title: 'in progress', type: "inProgress"},
						{title: 'soon', type: "soon"},
						{title: 'later', type: "later"},
						{title: 'done', type: "done"}
					],
				demoEpics: demoEpics.demoEpics,
				userDetails: {
					id: Math.floor(Math.random() * 200),
					email: 'ron@hogwarts.com',
					profilePicture: 'https://fr.gravatar.com/userimage/26960800/576f0907a4ed387626f1c211c4b11942.png',
					userName: 'New User',
					createdOn: new Date(),
					lastLoginDate: new Date(),
					preferences: {
						theme: 'light',
						language: 'en',
						tracking: true
					}
				},
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
				for (let i = 0; i < this.demoEpics.length; i++){
					if (this.demoEpics[i].status == status) {
						this.demoEpics[i].id = i;
						epics.push(this.demoEpics[i])
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

				iziToast.success({
					title: 'Settings updated',
					message: 'Your profile has a newfound gleam',
					position: "topRight"
				});
			},
			selectEpic(event) {
				this.appState.selectedEpic = event;
				this.appState.modal.showModal = true;
				this.appState.modal.modalType = "epicDetails";
			},
			deleteEpic(event) {
				this.demoEpics.splice(event, 1);
				iziToast.success({
					title: 'Epic deleted',
					message: 'This one\'s a goner',
					position: "topRight"
				});
			},
			updateEpic(event) {
				// @TODO: display name shoud not be a string but a computed property
				event.epicName.displayName = event.epicName.fullName;
				this.demoEpics.splice(event.id, 1, event);
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
