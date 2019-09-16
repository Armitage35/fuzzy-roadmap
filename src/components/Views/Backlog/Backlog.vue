<template>
	<div class="backlog">
		<h2>Backlog</h2>
		<div class="backlog-main">
			<div class="backlog-filters">
				<div
					class="backlog-filter"
					:class="isActive(filter.type)"
					v-for="filter in filters"
					:key="filter.type"
					@click="updateFilter(filter.type)"
					>{{ filter.title }}
				</div>
			</div>
			<div class="backlog-tableHeader">
				<input type="checkbox">
				<div class="backlog-tableHeader-id" @click="featureNotReady">ID
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-epicName" @click="featureNotReady">Epic name
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-status" @click="featureNotReady">Status
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-author" @click="featureNotReady">Author
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-creationDate" @click="featureNotReady">Created on
					<i class="fas fa-sort"></i>
				</div>
				<div class="backlog-tableHeader-updateDate" @click="featureNotReady">Updated on
					<i class="fas fa-sort"></i>
				</div>
			</div>
			<draggable group="people" @end="sortEpic">
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
	import { bus } from '../../../main.js';
	import iziToast from 'izitoast';
	import draggable from 'vuedraggable';
	import EpicList from './EpicList/EpicList.vue';

	export default {
		props: [ 'epics', 'userDetails', 'lanes'],
		components: { EpicList, draggable },
		created() {
			this.buildFilterList();
		},
		data: () => {
			return {
				filters: [
					{title:'all', type: 'all'},
					{title: 'active', type: 'active'}
				],
				activeFilter: 'all'
			}
		},
		methods: {
			updateFilter (newFilter) {
				this.activeFilter = newFilter;
			},
			isActive (filterType) {
				if (filterType === this.activeFilter) {
					return 'active'
				}
			},
			sortEpic (event) {
				bus.$emit('epicReorder', [event.oldIndex, event.newIndex])
			},
			featureNotReady() {
				iziToast.error({
					title: 'Yikes!',
					message: 'Sorry, I\'ve not gotten around this one yet, but be sure it\'s coming along soon!',
					position: 'topRight'
				});
			},
			buildFilterList() {
				for (let i = 0; i < this.lanes.length; i++){
					this.filters.push(this.lanes[i])
				}

				this.filters.push({title: 'archived', type: 'archived'});
			}
		}
	}
</script>
