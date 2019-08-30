<template>
	<div class="modal-content">
		<div class="modal-data">
			<p>Select the format you want to get your data in</p>
			<div class="modal-export-bttnGroup">
				<button type="button" class="bttn-primary" @click="exportJson">
					<i class="fas fa-file-code"></i>
					Export as .JSON</button>
				<button type="button" class="bttn-primary">
					<i class="fas fa-file-image"></i>
					Export as .PNG
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import iziToast from 'izitoast';

export default {
	props: ['epics'],
	methods: {
		exportJson(){
			const blob = new Blob([JSON.stringify(this.epics)], {type: 'application/json'});
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = 'fuzzyRoadmap.json';
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);

			this.exportSuccess();
		},
		exportSuccess() {
			this.$emit('toggleModal');
			iziToast.success({
				title: 'Export generated',
				message: 'Your file is ready for you',
				position: 'topRight'
			});
		}
	}
}
</script>
