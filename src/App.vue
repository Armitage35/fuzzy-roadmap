<template>
	<Lanes :content="this.placeholder"></Lanes>
</template>

<script>
	import Lanes from './components/Lanes.vue'

	export default {
		components: {
			Lanes
		},
		data: function() {
			return {
				placeholder: 'Hello'
			}
		}
	}
</script>
