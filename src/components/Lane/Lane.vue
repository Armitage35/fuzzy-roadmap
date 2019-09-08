<template>
	<div class="lane">
		<div class="laneHeader" :class="classNameCalculation()">
			<span class="laneTitle">{{ laneTitle }}</span>
		</div>
		<div class="laneContent">
			<EpicCard
				v-for="epic in epics"
				:EpicName="epic.epicName"
				:epicStatus="epic.status"
				:key="epic.id"
				:id="epic.id"
				@epicSelectd="$emit('epicSelected', $event)"
				></EpicCard>
			<div class="lane-ghostEpic" @click="$emit('toggleModal', 'epic')">
				<i class="fas fa-plus-circle"></i>
				Create a new epic
			</div>
		</div>
	</div>
</template>

<script>
	import EpicCard from './EpicCard/EpicCard.vue'

	export default {
		components: {
			EpicCard
		},
		props: ['laneStatus', 'laneTitle', 'epics'],
		methods: {
			classNameCalculation(){
				return "lane" + this.laneStatus.charAt(0).toUpperCase() + this.laneStatus.slice(1)
			}
		}
	}
</script>

<style>
</style>
