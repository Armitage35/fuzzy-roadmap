<template>
	<Lane :laneStatus="this.laneStatus"></Lane>
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
				laneStatus: 'In progress'
			}
		}
	}
</script>
