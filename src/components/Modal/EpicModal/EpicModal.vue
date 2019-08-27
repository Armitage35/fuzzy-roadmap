<template>
	<div class="modal-content">
		<div class="modal-data">
			<div class="modal-form">
				<label for="epicName">Epic name</label>
				<br />
				<input
					type="text"
					name="epicName"
					placeholder="A great epic name" spellcheck="true"
					class="modal-form-title"
					v-model="epicName">
			</div>
			<div class="modal-form">
				<label for="epicStatus">Epic status</label>
				<br />
				<select name="epicStatus" v-model="epicStatus">
					<option value="inProgress" class="modal-form-epicStatus">In progress</option>
					<option value="soon">Soon</option>
					<option value="later">Later</option>
					<option value="done">Done</option>
				</select>
			</div>
		</div>
		<div class="modal-actions">
			<button type="button" class="bttn-secondary" @click="closeModal">Cancel changes</button>
			<button type="button" class="bttn-primary" @click="saveEpic">Save</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['epics'],
		data: function() {
			return {
				epicName: "",
				epicStatus: "inProgress"
			}
		},
		methods: {
			// @TODO: this should be in an event bus to share it directly to the App component
			closeModal() {
				this.$emit('toggleModal', "");
			},
			saveEpic() {
				let newEpic = {
					name: {
						displayName: this.epicName,
						fullName: this.epicName,
					},
					status: this.epicStatus,
					creationDate: new Date(),
					order: 1,
					resolution: {
						resolved: false,
						resolutionDate: null
					},
					author: 'Adrien D. Ahlqvist'
				}
				this.epics.push(newEpic);
			}
		}
	}
</script>
