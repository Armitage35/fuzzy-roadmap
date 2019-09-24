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
				<div class="backlog-tableHeader-status"  @click="featureNotReady">Status
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
			<draggable @end="sortEpic">
				<EpicList
					v-for="epic in epics"
					:activeFilter="validStatuses"
					:epic="epic"
					:key="epic.id"
					:userDetails="userDetails"
				></EpicList>
			</draggable>
		</div>
	</div>
</template>

<script>
	import { bus } from '../../../main.js';
	import draggable from 'vuedraggable';
	import iziToast from 'izitoast';
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
		},
		computed: {
			validStatuses() {
				let laneStatuses = [];

				for (let i = 0; i < this.lanes.length; i++) {
					laneStatuses.push(this.lanes[i].type);
				}

				let activeStatuses = ['inProgress', 'soon', 'later'];

				switch (this.activeFilter) {
					case 'all':
						return laneStatuses;
					case 'active':
						return activeStatuses;
					case 'inProgress':
						return 'inProgress';
					case 'soon':
						return 'soon';
					case 'later':
						return 'later';
					case 'done':
						return 'done';
					case 'archived':
						return 'done';
					default:
						return laneStatuses;
				}
			}
		}
	}
</script>
