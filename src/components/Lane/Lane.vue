<template>
	<div class="lane">
		<div class="laneHeader" :class="classNameCalculation()">
			<span class="laneTitle">{{ laneTitle }}</span>
		</div>
		<div class="laneContent">
			<Epic :epicTitle="this.epicTitle" :epicStatus="this.epicStatus"></Epic>
		</div>
	</div>
</template>

<script>
	import Epic from '../Epic/Epic.vue'

	export default {
		components: {
			Epic
		},
		props: ['laneStatus', 'laneTitle'],
		data: function(){
			return {
				epicTitle: "Cameras in Jogogo",
				epicStatus: "epicInProgress"
			}
		},
		methods: {
			classNameCalculation(){
				return "lane" + this.laneStatus.charAt(0).toUpperCase() + this.laneStatus.slice(1)
			}
		}
	}
</script>

<style>
</style>
