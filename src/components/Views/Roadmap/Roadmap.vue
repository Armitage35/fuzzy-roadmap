<template>
	<div class="roadmap">
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
</template>

<script>
	import Lane from './Lane/Lane.vue';

	export default {
		components: {
			Lane
		},
		props: ['lanes', 'epics'],
		methods: {
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
			filterEpic(status) {
				let epics = [];
				for (let i = 0; i < this.epics.length; i++){
					if (this.epics[i].status == status && this.epics[i].isDisplayedInRoadmap) {
						this.epics[i].id = i;
						epics.push(this.epics[i])
					}
				}
				return epics;
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
