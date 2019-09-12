<template>
	<div class="backlog">
		<h2>Backlog</h2>
		<div class="backlog-main">
			<div class="backlog-filters">
				<div
					class="backlog-filter"
					:class="isActive(index)"
					v-for="(filter, index) in filters"
					:key="index"
					@click="updateFilter(index)"
					>{{ filter }}
				</div>
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
			<draggable group="people" @end="sortEpic" @change="sortEpic">
				<EpicList
					v-for="epic in epics"
					:key="epic.id"
					:epic="epic"
					:userDetails="userDetails"
				></EpicList>
			</draggable>
		</div>
	</div>
</template>

<script>
	import EpicList from './EpicList/EpicList.vue';
	import draggable from 'vuedraggable';
	import { bus } from '../../../main.js'

	export default {
		props: [ 'epics', 'userDetails', 'lane'],
		components: { EpicList, draggable },
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
			isActive (index) {
				if (index === this.activeFilter) {
					return 'active'
				}
			},
			sortEpic (event) {
				bus.$emit('epicReorder', [event.oldIndex, event.newIndex])
			}
		}
	}
</script>
