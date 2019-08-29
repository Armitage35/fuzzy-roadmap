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
	// Importing external modules
	import iziToast from 'izitoast';
	import 'izitoast/dist/css/iziToast.min.css';

	export default {
		props: ['epics', 'author'],
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
					name: {
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
				this.epics.unshift(newEpic);
				this.closeModal();
				iziToast.success({
					title: 'Epic created',
					message: 'You are getting the hang of this',
					position: "topRight"
				});
			}
		}
	}
</script>
