<template>
	<div class="backlog-epicCard">
		<input type="checkbox">
		<div class="epicCard-id">12763</div>
		<div class="epicCard-epicName">{{ epicNameResolver(epic.epicName) }}</div>
		<div :class="badgeResolver(epic.status)">{{ epic.status }}</div>
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
		props: ['epic', 'userDetails'],
		methods: {
			dateResolver(date) {
				date = new Date(date);
				return date.toLocaleDateString('en-CA');
			},
			badgeResolver(status) {
				return 'epicList-statusBadge ' + 'badge' + status;
			},
			epicNameResolver(epicName) {
				return epicName.toLowerCase();
			}
		}
	}
</script>
