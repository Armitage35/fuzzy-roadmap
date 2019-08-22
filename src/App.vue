<template>
	<div class="app">
		<Lane v-for="lane in lanes" :laneStatus="lane.type" :laneTitle="lane.title" :key="lane.type"></Lane>
	</div>
</template>

<script>
	import Lane from './components/Lane/Lane.vue';
	import './main.scss';
	const demoEpics = require( './utilities/demo.js');

	console.log(demoEpics.demoEpics)

	export default {
		components: {
			Lane
		},
		data: function() {
			return {
				lanes: [
					{title: 'in progress', type: "inProgress"},
					{title: 'soon', type: "soon"},
					{title: 'later', type: "later"},
					{title: 'done', type: "done"}
					],
				demoEpics: demoEpics.demoEpics
				}
		},
		methods: {
			sortEpics(){
				let epicsInProgress = [];
				let epicsSoon = [];
				let epicLater = [];
				let epicDone = [];

				for (let i = 0; i < this.demoEpics.length; i++){
					switch (this.demoEpics[i].status){
						case 'inProgress':
							epicsInProgress.push(this.demoEpics[i]);
							break;
						case 'soon':
							epicsSoon.push(this.demoEpics[i]);
							break;
						case 'later':
							epicLater.push(this.demoEpics[i]);
							break;
						case 'done':
							epicDone.push(this.demoEpics[i]);
							break;
						default:
							console.log('merde')
					}
				};
			}
		},
		created(){
			this.sortEpics()
		}
	}
</script>
