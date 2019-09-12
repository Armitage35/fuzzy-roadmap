<template>
	<div class="backlog">
		<div class="backlog-main">
			<div class="backlog-filters">
			<div
				class="backlog-filter"
				v-for="(filter, index) in filters"
				:key="index"
				@click="updateFilter (index)"
				>{{ filter }}</div>
			</div>
			<EpicList
				v-for="epic in epics"
				:key="epic.id"
				:epic="epic"
				:userDetails="userDetails"
			></EpicList>
		</div>
	</div>
</template>

<script>
	import EpicList from './EpicList/EpicList.vue';

	export default {
		props: [ 'epics', 'userDetails'],
		components: { EpicList },
		data: () => {
			return {
				filters: ['all', 'active', 'in progress', 'soon', 'later', 'done', 'archived'],
				activeFilter: 'all'
			}
		},
		methods: {
			updateFilter (newFilter) {
				this.activeFilter = this.filters[newFilter];
			}
		}
	}
</script>
