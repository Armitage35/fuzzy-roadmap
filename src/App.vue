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
			@importRoadmap="batchAddEpics($event)"
			@toggleModal="toggleModal($event)"
			@updateEpic="updateEpic($event)"
			@updateSettings="updateSettings($event)"
		></Modal>
		<div class="roadmap" v-if="appState.activeView === 'roadmap'">
			<Lane
				v-for="lane in lanes"
				:laneStatus="lane.type"
				:laneTitle="lane.title"
				:key="lane.type"
				:epics="findLane(lane.type)"
				@changeView="changeView($event)"
				@epicSelected="selectEpic($event)"
				@toggleModal="toggleModal($event)"
				></Lane>
		</div>
			<Toolbar
				@toggleModal="toggleModal($event)"
			></Toolbar>
	</div>
</template>

<script>
	// General imports
	import { bus } from './main.js';
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
			// initialize roadmap
			if (localStorage.getItem('roadmap') === null) {
				this.userEpics = demoEpics.demoEpics;
				this.saveRoadmapInClient();
			} else {
				this.userEpics = JSON.parse(localStorage.getItem('roadmap'));
			}

			// initialize user
			if (localStorage.getItem('user') === null) {
				this.userDetails = defaultUser.defaultUser;
				this.saveUserInClient();
				this.toggleModal('onboarding');
			} else {
				this.userDetails = JSON.parse(localStorage.getItem('user'));
				this.userDetails.lastLoginDate = new Date();
			}

			bus.$on('toggleModal', (state) => {
				this.toggleModal(state);
			})

			bus.$on('epicSelectd', (id) => {
				this.selectEpic(id)
			})
		},
		mounted: function() {
			// segment tracking library
			if (this.userDetails.preferences.tracking) {
				// eslint-disable-next-line
				!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
				analytics.load("1RIT6LUKH0GmiuFYdtpf1Yz5oz4mrsO5");
				analytics.page();
				}}();

				// eslint-disable-next-line
				analytics.identify(this.userDetails.id, {
					name: this.userDetails.username,
					email: this.userDetails.email
				});
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
			changeView(view) {
				this.appState.activeView = view;
			},
			filterEpic(status){
				let epics = [];
				for (let i = 0; i < this.userEpics.length; i++){
					if (this.userEpics[i].status == status && this.userEpics[i].isDisplayedInRoadmap) {
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

				this.saveUserInClient();

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
			saveUserInClient() {
				localStorage.setItem('user', JSON.stringify(this.userDetails));
			},
			createEpic(epicData) {
				let newEpic = {
					epicName: epicData[0],
					status: epicData[1],
					creationDate: new Date(),
					updateDate: new Date(),
					order: 1,
					resolution: {
						resolved: epicData[1] === 'done' ? true : false,
						resolutionDate: epicData[1] === 'done' ? new Date() : null,
					},
					author: this.userDetails.userName
				}

				this.userEpics.unshift(newEpic);
				this.toggleModal();

				this.saveRoadmapInClient();

				iziToast.success({
					title: 'Epic created',
					message: 'You are getting the hang of this',
					position: 'topRight'
				});
			},
			batchAddEpics(batch) {
				for (let i = 0; i < batch.length; i++) {
					this.createEpic(batch[i]);
				}
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
