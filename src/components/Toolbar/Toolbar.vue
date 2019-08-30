<template>
	<div class="toolbar">
		<div class="toolbar-roadmapName">
			<span>My roadmap</span>
			<i class="fas fa-pencil-alt"
				data-tippy="Rename this roadmap"></i>
		</div>
		<div class="toolbar-tools">
			<i class="fas fa-plus-circle"
				data-tippy="Create a new epic"
				@click="requestEpicCreationModal"></i>
			<i class="fas fa-stream"
				data-tippy="Backlog"
				@click="featureNotReady"></i>
			<i class="fas fa-chart-line"
				data-tippy="Reports"
				@click="featureNotReady"></i>
		</div>
		<div class="toolbar-advancedFeatures">
			<i class="fas fa-file-download"
				data-tippy="Download roadmap"
				@click="featureNotReady"></i>
			<i class="fas fa-upload"
				data-tippy="Import roadmap"
				@click="featureNotReady"></i>
			<i class="fas fa-trash"
				data-tippy="Reset roadmap"
				@click="$emit('openResetRoadmapModal', 'resetRoadmapModal')"></i>
			<i class="fas fa-cog"
				data-tippy="Settings"
				@click="$emit('toggleModal', 'settings')"></i>
		</div>
	</div>
</template>

<script>
	// eslint-disable-next-line
	import tippy from 'tippy.js';
	import iziToast from 'izitoast';

	export default {
		methods: {
			requestEpicCreationModal() {
				this.$emit('toggleModal', 'epic')
			},
			featureNotReady() {
				iziToast.error({
					title: 'Yikes!',
					message: 'Sorry, I\'ve not gotten around this one yet, but be sure it\'s coming along soon!',
					position: 'topRight'
				});
			}
		}
	}
</script>
