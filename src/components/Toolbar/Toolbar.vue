<template>
	<div class="toolbar">
		<div class="toolbar-roadmapName">
			<span>My roadmap</span>
			<i class="fas fa-pencil-alt"
				data-tippy="Rename this roadmap"
				@click="featureNotReady"></i>
		</div>
		<div class="toolbar-tools">
			<i class="fas fa-project-diagram"
				data-tippy="Roadmap"
				@click="$emit('changeView', 'roadmap')"></i>
			<i class="fas fa-stream"
				data-tippy="Backlog"
				@click="toggleModal('backlog')"></i>
			<i class="fas fa-chart-line"
				data-tippy="Reports"
				@click="featureNotReady"></i>
		</div>
		<div class="toolbar-advancedFeatures">
			<i class="fas fa-file-download"
				data-tippy="Download roadmap"
				@click="toggleModal('exportRoadmap')"></i>
			<i class="fas fa-upload"
				data-tippy="Import roadmap"
				@click="toggleModal('importRoadmap')"></i>
			<i class="fas fa-trash"
				data-tippy="Reset roadmap"
				@click="toggleModal('resetRoadmapModal')"></i>
			<i class="fas fa-cog"
				data-tippy="Settings"
				@click="toggleModal('settings')"></i>
		</div>
	</div>
</template>

<script>
	// eslint-disable-next-line
	import tippy from 'tippy.js';
	import iziToast from 'izitoast';

	import { bus } from '../../main.js';

	export default {
		methods: {
			featureNotReady() {
				iziToast.error({
					title: 'Yikes!',
					message: 'Sorry, I\'ve not gotten around this one yet, but be sure it\'s coming along soon!',
					position: 'topRight'
				});
			},
			toggleModal(modalType) {
				bus.$emit('toggleModal', modalType);
			}
		}
	}
</script>
