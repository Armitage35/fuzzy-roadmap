<template>
	<div class="backlog-epicCard">
		<input type="checkbox">
		<div>Epic status: {{ epic.status }}</div>
		<div>Epic Name: {{ epic.epicName }}</div>
		<div>Created date: {{ dateResolver(epic.creationDate) }}</div>
		<div>Update date:  {{ dateResolver(epic.updateDate) }}</div>
		<div>Author: {{ epic.author }}</div>
	</div>
</template>

<script>
	export default {
		props: ['epic'],
		methods: {
			dateResolver(date) {
				date = new Date(date);
				return date.toLocaleDateString('en-CA');
			}
		}
	}
</script>
