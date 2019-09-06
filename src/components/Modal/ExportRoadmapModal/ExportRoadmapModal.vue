<template>
	<div class="modal-content">
		<div class="modal-data">
			<p class="modal-export-description">Select the format you want to get your data in</p>
			<div class="modal-export-bttnGroup">
				<button type="button" class="bttn-primary" @click="exportJson">
					<i class="fas fa-file-code"></i>
					Export as .JSON</button>
				<button type="button" class="bttn-primary" @click="exportJPG">
					<i class="fas fa-file-image"></i>
					Export as .PNG (beta)
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import iziToast from 'izitoast';
	import html2canvas from 'html2canvas';

	export default {
		props: ['epics'],
		methods: {
			exportJson(){
				const blob = new Blob([JSON.stringify(this.epics)], {type: 'application/json'});
				this.exportRoadmap(blob, 'fuzzyRoadmap.json')
				this.exportSuccess();
			},
			async exportJPG () {
				let picture = await html2canvas(document.querySelector('.roadmap'));
				let self = this;

				picture.toBlob(function(blob){
					self.exportRoadmap(blob, 'fuzzyRoadmap.png')
				});

				this.exportSuccess();
			},
			exportRoadmap(blob, filename) {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			},
			exportSuccess() {
				this.$emit('toggleModal');
				iziToast.success({
					title: 'Export generated',
					message: 'Your file is ready for you',
					position: 'topRight'
				})
			}
		}
	}
</script>
