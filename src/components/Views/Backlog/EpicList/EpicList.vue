<template>
	<div class="backlog-epicCard" :class="filterHandler(epic.status)">
		<input type="checkbox">
		<div class="epicCard-id">{{ 'FZ' + (epic.id  + 1)}}</div>
		<div class="epicCard-epicName">{{ epicNameResolver(epic.epicName) }}</div>
		<div class="epicCard-status">
			<div :class="badgeResolver(epic.status)">{{ epic.status }}</div>
		</div>
		<div class="epicList-author">
			<img :src="userDetails.profilePicture" :alt="userDetails.userName" class="epicList-userProfilePicture">
			{{ epic.author }}
		</div>
		<div class="epicCard-creationDate">{{ dateResolver(epic.creationDate) }}</div>
		<div class="epicCard-updateDate">{{ dateResolver(epic.updateDate) }}</div>
	</div>
</template>

<script>
	export default {
		props: ['activeFilter', 'epic', 'userDetails'],
		methods: {
			badgeResolver(status) {
				return 'epicList-statusBadge ' + 'badge' + status;
			},
			dateResolver(date) {
				date = new Date(date);
				return date.toLocaleDateString('en-CA');
			},
			filterHandler(epicStatus) {
				if (!this.activeFilter.includes(epicStatus)) {
					return 'backlog-epicHidden'
				}
			},
			epicNameResolver(epicName) {
				return epicName.toLowerCase();
			}
		}
	}
</script>
