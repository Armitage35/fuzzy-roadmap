<template>
	<div class="modal-content">
		<div class="modal-data">
			<p class="modal-export-description">Select the format you want to get your data in</p>
			<div class="modal-export-bttnGroup">
				<button type="button" class="bttn-primary" @click="exportJson">
					<i class="fas fa-file-code"></i>
					Export as .JSON</button>
				<button type="button" class="bttn-primary" @click="exportCsv">
					<i class="fas fa-file-csv"></i>
					Export as .CSV</button>
				<button type="button" class="bttn-primary" @click="exportJPG">
					<i class="fas fa-file-image"></i>
					Export as .PNG (beta)
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { bus } from '../../../main.js';

	import iziToast from 'izitoast';
	import html2canvas from 'html2canvas';

	export default {
		props: ['epics'],
		methods: {
			exportCsv() {
				let epicInCsv = [];

				for (let i = 0; i < this.epics.length; i++) {
					let newItem = [];
					newItem.push(this.epics[i].epicName);
					newItem.push(this.epics[i].status);

					epicInCsv.push(newItem);
				}

				const blob = new Blob([epicInCsv], {type: 'application/json'});
				this.exportRoadmap(blob, 'fuzzyRoadmap.csv')
				this.exportSuccess();
			},
			exportJson() {
				const blob = new Blob([JSON.stringify(this.epics)], {type: 'application/csv'});
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
				bus.$emit('toggleModal');

				iziToast.success({
					title: 'Export generated',
					message: 'Your file is ready for you',
					position: 'topRight'
				})
			}
		}
	}
</script>
