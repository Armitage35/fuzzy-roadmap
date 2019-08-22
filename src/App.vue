<template>
	<div>
		<Lane v-for="lane in lanes" :laneStatus="lane.type" :laneTitle="lane.title" :key="lane.type"></Lane>
	</div>
</template>

<script>
	import Lane from './components/Lane/Lane.vue';
	import './main.scss';
	var demoEpics = require( './utilities/demo.js');

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
				demoEpics: demoEpics
				}
		}
	}
</script>
