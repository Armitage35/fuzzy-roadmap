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
			<div class="backlog-tableHeader">
				<input type="checkbox">
				<div class="backlog-tableHeader-checkbox">ID</div>
				<div class="backlog-tableHeader-epicName">Epic name</div>
				<div class="backlog-tableHeader-status">Status</div>
				<div class="backlog-tableHeader-author">Author</div>
				<div class="backlog-tableHeader-creationDate">Creation date</div>
				<div class="backlog-tableHeader-updateDate">Update Date</div>
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
		props: [ 'epics', 'userDetails', 'lane'],
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
