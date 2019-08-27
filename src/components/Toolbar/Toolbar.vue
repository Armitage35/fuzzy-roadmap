<template>
	<div class="toolbar">
		<div class="toolbar-roadmapName">
			<span>My roadmap</span>
			<i class="fas fa-pencil-alt"></i>
		</div>
		<div class="toolbar-tools">
			<i class="fas fa-plus-circle" @click="requestEpicCreationModal"></i>
			<i class="fas fa-stream"></i>
			<i class="fas fa-chart-line"></i>
		</div>
		<div class="toolbar-advancedFeatures">
			<i class="fas fa-file-download"></i>
			<i class="fas fa-upload"></i>
			<i class="fas fa-trash"></i>
			<i class="fas fa-cog"></i>
		</div>
	</div>
</template>

<script>
	// @TODO: load FA as svg to save on load time
	export default {
		methods: {
			requestEpicCreationModal() {
				this.$emit('toggleModal', "epic")
			}
		}
	}
</script>
