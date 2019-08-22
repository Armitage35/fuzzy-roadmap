<template>
	<div>
		<Lane v-for="lane in lanes" :laneStatus="lane.type" :laneTitle="lane.title" :key="lane.type"></Lane>
	</div>
</template>

<script>
	import Lane from './components/Lane/Lane.vue';
	import './main.scss'

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
					]
			}
		}
	}
</script>
