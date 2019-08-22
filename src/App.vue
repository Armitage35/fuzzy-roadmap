<template>
	<Lane :laneStatus="this.laneStatus"></Lane>
</template>

<script>
	import Lane from './components/Lane.vue'

	export default {
		components: {
			Lane
		},
		data: function() {
			return {
				laneStatus: 'In progress'
			}
		}
	}
</script>

<style lang="scss">
	$primary-color: #333;

	body {
		background-color: $primary-color
	}

</style>
