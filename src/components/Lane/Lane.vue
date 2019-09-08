<template>
	<div class="lane">
		<div class="laneHeader" :class="classNameCalculation()">
			<span class="laneTitle">{{ laneTitle }}</span>
		</div>
		<div class="laneContent">
			<Epic
				v-for="epic in epics"
				:EpicName="epic.epicName"
				:epicStatus="epic.status"
				:key="epic.id"
				:id="epic.id"
				@epicSelectd="$emit('epicSelected', $event)"
				></Epic>
		</div>
	</div>
</template>

<script>
	import Epic from '../Epic/Epic.vue'

	export default {
		components: {
			Epic
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
