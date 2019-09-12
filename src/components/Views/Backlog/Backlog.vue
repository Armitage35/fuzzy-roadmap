<template>
	<div class="backlog">
		<div class="backlog-main">
			<div class="backlog-filters">
			<div
				class="backlog-filter"
				:class="isActive(index)"
				v-for="(filter, index) in filters"
				:key="index"
				@click="updateFilter (index)"
				>{{ filter }}</div>
			</div>
			<div class="backlog-tableHeader">
				<input type="checkbox">
				<div class="backlog-tableHeader-id">ID
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-epicName">Epic name
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-status">Status
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-author">Author
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-creationDate">Created on
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-updateDate">Updated on
					<i class="fas fa-sort"></i>
				</div>
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
			},
			isActive(index) {
				if (index === 0) {
					return 'active'
				}
			}
		}
	}
</script>
