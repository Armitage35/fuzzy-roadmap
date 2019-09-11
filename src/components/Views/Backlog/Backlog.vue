<template>
	<div class="backlog">
		<div class="backlog-sidepanel"></div>
		<div class="backlog-main">
			<div
				class="backlog-filters"
				v-for="(filter, index) in filters"
				:key="index"
				@click="updateFilter(index)"
				>{{ filter }}</div>
			<EpicList></EpicList>
		</div>
	</div>
</template>

<script>
	import EpicList from './EpicList/EpicList.vue';

	export default {
		components: { EpicList },
		data: () => {
			return {
				filters: ['all', 'active', 'in progress', 'soon', 'later', 'done', 'archived'],
				activeFilter: 'all'
			}
		},
		methods: {
			updateFilter (newFilter) {
				this.activeFilter = newFilter;
			}
		}
	}
</script>
