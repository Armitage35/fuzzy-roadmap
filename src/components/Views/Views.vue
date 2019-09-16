<template>
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
		props: ['epics', 'lanes', 'userDetails'],
	}
</script>
