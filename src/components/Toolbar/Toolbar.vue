<template>
	<div class="toolbar">
		<div class="toolbar-roadmapName">
			<span>My roadmap</span>
			<i class="fas fa-pencil-alt"
				 data-tippy="Rename this roadmap"></i>
		</div>
		<div class="toolbar-tools">
			<i class="fas fa-plus-circle"
				@click="requestEpicCreationModal"
				data-tippy="Create a new epic"></i>
			<i class="fas fa-stream"
				data-tippy="Backlog"></i>
			<i class="fas fa-chart-line"
				data-tippy="Reports"></i>
		</div>
		<div class="toolbar-advancedFeatures">
			<i class="fas fa-file-download"
				data-tippy="Download roadmap"></i>
			<i class="fas fa-upload"
				data-tippy="Import roadmap"></i>
			<i class="fas fa-trash"
				data-tippy="Reset roadmap"></i>
			<i class="fas fa-cog"
				data-tippy="Settings"></i>
		</div>
	</div>
</template>

<script>
	import tippy from 'tippy.js';

	// @TODO: load FA as svg to save on load time
	export default {
		methods: {
			requestEpicCreationModal() {
				this.$emit('toggleModal', "epic")
			}
		}
	}
</script>
