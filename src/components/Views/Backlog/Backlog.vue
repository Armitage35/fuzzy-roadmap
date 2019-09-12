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
					@click="featureNotReady"
					>{{ filter }}
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
	import EpicList from './EpicList/EpicList.vue';
	import draggable from 'vuedraggable';
	import { bus } from '../../../main.js';
	import iziToast from 'izitoast';

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
			},
			featureNotReady() {
				iziToast.error({
					title: 'Yikes!',
					message: 'Sorry, I\'ve not gotten around this one yet, but be sure it\'s coming along soon!',
					position: 'topRight'
				});
			},
		}
	}
</script>
