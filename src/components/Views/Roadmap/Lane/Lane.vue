<template>
	<div class="lane">
		<div class="laneHeader" :class="classNameCalculation()">
			<span class="laneTitle">{{ laneTitle }}</span>
		</div>

		<div class="laneContent">
			<draggable @end="sortEpic">
				<EpicCard
					v-for="epic in epics"
					:EpicName="epic.epicName"
					:epicStatus="epic.status"
					:key="epic.id"
					:id="epic.id"
				></EpicCard>
			</draggable>
			<div class="lane-ghostEpic" @click="toggleModal">
				<i class="fas fa-plus-circle"></i>
				<span>Create a new epic</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { bus } from '../../../../main.js';
	import draggable from 'vuedraggable';
	import EpicCard from './EpicCard/EpicCard.vue';

	export default {
		components: { EpicCard, draggable },
		props: ['laneStatus', 'laneTitle', 'epics'],
		methods: {
			classNameCalculation(){
				return "lane" + this.laneStatus.charAt(0).toUpperCase() + this.laneStatus.slice(1)
			},
			toggleModal() {
				bus.$emit('toggleCreateEpicModal', ['epic', this.laneStatus]);
			},
			sortEpic (event) {

				bus.$emit('epicReorder', [event.clone.id, event.newIndex])
			}
		}
	}
</script>
