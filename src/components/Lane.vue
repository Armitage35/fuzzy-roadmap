<template>
	<div class="lane">
		<div class="laneTitle">{{ laneStatus }}</div>
		<Epic :epicTitle="this.epicTitle" :epicStatus="this.epicStatus"></Epic>
	</div>
</template>

<script>
	import Epic from './Epic.vue'

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
	.lane {
		width: 20vw
	}

	.laneTitle {
		width: 250px;
		height: 80px;
		border: 1px solid #D6B656;
		background-color: #FFF2CC;
		text-align: center;
		margin: auto
	}
</style>
