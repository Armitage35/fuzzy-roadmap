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
				epicsImport: 'Hello there'
			}
		},
		methods: {
			runVerification() {
				let test = this.epicsImport;
				item.value.split('||');
				// console.log(test.split('{{sensor}}')[1]})
				// test = [test];
			}
		}
	}
</script>
