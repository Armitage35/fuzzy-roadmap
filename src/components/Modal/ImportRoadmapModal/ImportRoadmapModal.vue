<template>
	<div class="modal-content">
		<div class="modal-data">
			<label for="epicName">Paste your roadmap here</label>
			<br/>
			<textarea name="roadmap" placeholder="Epic name...	Epic status..." wrap="off" cols="30" rows="5" spellcheck="false" v-model="epicsImport"></textarea>
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
				importError: []
			}
		},
		methods: {
			runVerification() {
				this.importError = [];

				if (this.isRoadmapEven && this.verifyEpicStatuses) {
					this.importRoadmap();
				} else {
					console.log('not yet pal')
				}
			},
			importRoadmap() {
				console.log('wait up')
			}
		},
		computed: {
			isRoadmapEven() {
				if (Number.isInteger(this.importedRoadmap.length / 2)) {
					return true
				} else {
					// this.importError.push('You are missing statuses for your epics');
					return false
				}
			},
			verifyEpicStatuses() {
				for (let i = 0; i < this.importedRoadmap.length ; i += 2) {
					switch(this.importedRoadmap[i + 1]) {
						case 'inProgress':
							return true;
						case 'soon':
							return true;
						case 'later':
							return true;
						case 'done':
							return true;
						default:
							// this.importError.push('Your epic statuses are incorrect');
							return false;
					}
				}
			},
			importedRoadmap() {
				return this.epicsImport.replace('\n', ', ').split(',');
			}
		}
	}
</script>
