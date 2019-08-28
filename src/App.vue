<template>
	<div class="app">
		<Modal
			v-if="appState.modal.showModal"
			:modalType="appState.modal.modalType"
			:epics="this.demoEpics"
			@toggleModal="toggleModal($event)"
		></Modal>
		<div class="roadmap">
			<Lane
				v-for="lane in lanes"
				:laneStatus="lane.type"
				:laneTitle="lane.title"
				:key="lane.type"
				:epics="findLane(lane.type)"
				></Lane>
		</div>
			<Toolbar @toggleModal="toggleModal($event)"></Toolbar>
	</div>
</template>

<script>
	// General imports
	import './master.scss';
	const demoEpics = require( './utilities/demo.js');

	// Components
	import Lane from './components/Lane/Lane.vue';
	import Toolbar from './components/Toolbar/Toolbar.vue';
	import Modal from './components/Modal/Modal.vue';

	export default {
		components: {
			Lane, Toolbar, Modal
		},
		data: function() {
			return {
				lanes: [
					{title: 'in progress', type: "inProgress"},
					{title: 'soon', type: "soon"},
					{title: 'later', type: "later"},
					{title: 'done', type: "done"}
					],
				demoEpics: demoEpics.demoEpics,
				appState: {
					modal:{
						showModal: false,
						modalType: ""
					},
					activeView: "roadmap"
				},
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
