<template>
	<div class="modal-content">
		<div class="modal-data">
			<div class="modal-form">
				<label for="epicName">Epic name</label>
				<br />
				<input
					type="text"
					name="epicName"
					placeholder="A great epic name"
					spellcheck="true"
					class="modal-form-title"
					autocomplete="off"
					v-model="epicName">
			</div>
			<div class="modal-form">
				<label for="epicStatus">Epic status</label>
				<br />
				<select name="epicStatus" v-model="epicStatus">
					<option value="inProgress">In progress</option>
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
		props: ['author'],
		data: function() {
			return {
				epicName: "",
				epicStatus: "inProgress"
			}
		},
		methods: {
			closeModal() {
				this.$emit('toggleModal', "");
			},
			saveEpic() {
				let newEpic = {
					epicName: {
						displayName: this.epicName,
						fullName: this.epicName,
					},
					status: this.epicStatus,
					creationDate: new Date(),
					order: 1,
					resolution: {
						resolved: this.epicStatus === 'done' ? true : false,
						resolutionDate: this.epicStatus === 'done' ? new Date() : null,
					},
					author: this.author
				}

				this.$emit('createEpic', newEpic);

			}
		}
	}
</script>
