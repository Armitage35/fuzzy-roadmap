<template>
	<div class="modal-content">
		<div class="modal-data">
			<label for="epicName">Paste your roadmap here</label>
			<br/>
			<textarea name="roadmap" placeholder="Epic name...	Epic status..." wrap="off" cols="30" rows="5" spellcheck="false" v-model="epicsImport"></textarea>
			<div v-if="importError.status">{{ importError.message }}</div>
			<div class="modal-import-hint">Hint: paste your content from a .CSV (comma separated) file to add them to your current roadmap. We will only import your epics names and statuses. The accepted statuses can be either 'inProgress', 'soon', 'later' or 'done', anything else will be rejected.</div>
		</div>
		<div class="modal-actions">
			<button type="button" class="bttn-secondary" @click="$emit('toggleModal')">Close</button>
			<button type="button" class="bttn-primary" @click="runVerification">Launch import</button>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				epicsImport: '',
				importError: {
					status: false,
					message: ''
				}
			}
		},
		methods: {
			runVerification() {
				if (this.isRoadmapEven() && this.verifyEpicStatuses()) {
					this.importRoadmap();
				} else {
					return this.importError.message
				}
			},
			importRoadmap() {
				this.$emit('createEpic', this.importedRoadmap)
			},
			isRoadmapEven() {
				if (Number.isInteger(this.importedRoadmap.length / 2)) {
					return true
				} else {
					this.importError.status = true;
					this.importError.message = 'You are missing statuses for your epics';
					return false
				}
			},
			verifyEpicStatuses() {
				let statuses = true;

				for (let i = 0; i < this.importedRoadmap.length; i += 2) {
					if (statuses){
						if (this.importedRoadmap[i + 1] === 'inProgress' && statuses) {
							statuses = true;
						} else if (this.importedRoadmap[i + 1] === 'soon' && statuses) {
							statuses = true;
						} else if (this.importedRoadmap[i + 1] === 'later' && statuses) {
							statuses = true;
						} else if (this.importedRoadmap[i + 1] === 'done' && statuses) {
							statuses = true;
						} else {
							this.importError.status = true;
							this.importError.message = 'Some of your statuses are wrong';
							statuses = false;
						};
					}
				};
				return statuses;
			},
		},
		computed: {
			importedRoadmap() {
				return this.epicsImport.replace(/\n/g, ', ').split(', ');
			}
		},
		watch: {
			epicsImport: function () {
				if (this.epicsImport === ''){
					this.importError.status = false;
					this.importError.message = '';
				}
			}
		}
	}
</script>
