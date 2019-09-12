<template>
	<!-- @TODO: lazyload backlog to improve on performance -->
	<router-view :lanes="lanes" :epics="epics" :userDetails="userDetails">
		<Roadmap></Roadmap>
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
		props: ['lanes', 'epics', 'userDetails'],

	}
</script>
