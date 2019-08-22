<template>
	<div class="lane">
		<div class="laneTitle">{{ laneStatus }}</div>
		<Epic :epicTitle="this.epicTitle" :epicStatus="this.epicStatus"></Epic>
	</div>
</template>

<script>
	import Epic from '../Epic/Epic.vue'

	export default {
		components: {
			Epic
		},
		props: ['laneStatus'],
		data: function(){
			return {
				epicTitle: "Cameras in Jogogo",
				epicStatus: "inProgress"
			}
		}
	}
</script>

<style>

</style>
