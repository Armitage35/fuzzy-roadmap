<template>
	<router-view>
		<Roadmap
			:lanes="lanes"
			:epics="epics"
		></Roadmap>
		<Backlog></Backlog>
	</router-view>
</template>

<script>
	import Roadmap from './Roadmap/Roadmap.vue';
	import Backlog from './Backlog/Backlog.vue';

	export default {
		components: {
			Roadmap, Backlog
		},
		props: ['lanes', 'epics'],

	}
</script>
