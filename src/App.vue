<template>
	<div class="app">
		<Modal
			v-if="appState.modal.showModal"
			:modalType="appState.modal.modalType"
		></Modal>
		<div class="roadmap">
			<Lane
				v-for="lane in lanes"
				:laneStatus="lane.type"
				:laneTitle="lane.title"
				:key="lane.type"
				:epics="epics[lane.type]"
				></Lane>
		</div>
			<Toolbar></Toolbar>
	</div>
</template>

<script>
	// general imports
	import './master.scss';
	const demoEpics = require( './utilities/demo.js');

	// components
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

				// @TODO: make those into computed properties
				epics: {
					inProgress: [],
					soon: [],
					later: [],
					done:[]
				},
				appState: {
					modal:{
						showModal: true,
						modalType: "epic"
					},
					activeView: "roadmap"
				}
			}
		},
		methods: {
			sortEpics(){
				for (let i = 0; i < this.demoEpics.length; i++){
					switch (this.demoEpics[i].status){
						case 'inProgress':
							this.epics.inProgress.push(this.demoEpics[i]);
							break;
						case 'soon':
							this.epics.soon.push(this.demoEpics[i]);
							break;
						case 'later':
							this.epics.later.push(this.demoEpics[i]);
							break;
						case 'done':
							this.epics.done.push(this.demoEpics[i]);
							break;
						default:
							null;
					}
				}
			}
		},
		created(){
			this.sortEpics()
		}
	}
</script>
