<template>
	<div class="modal-content">
		<div class="modal-data">
			<div class="epicDetails-layout">
				<div class="epicDetails-left">
					<div>
						<p class="modal-epicDetails-epicDetailsLabel">Epic ID</p>
						<p class="modal-epicDetails-epicDetailsValue">{{ 'FZ' + (selectedEpic.id  + 1)}}</p>
					</div>
					<div>
						<p class="modal-epicDetails-epicDetailsLabel">Author</p>
						<p class="modal-epicDetails-epicDetailsValue">{{ selectedEpic.author }}</p>
					</div>
					<div>
						<p class="modal-epicDetails-epicDetailsLabel">Creation date</p>
						<p class="modal-epicDetails-epicDetailsValue">{{ dateResolver(selectedEpic.creationDate) }}</p>
					</div>
					<div>
						<p class="modal-epicDetails-epicDetailsLabel">Update date</p>
						<p class="modal-epicDetails-epicDetailsValue">{{ dateResolver(selectedEpic.creationDate) }}</p>
					</div>
					<div>
						<p class="modal-epicDetails-epicDetailsLabel">Resolved</p>
						<p class="modal-epicDetails-epicDetailsValue">{{ resolutionStatus }}</p>
					</div>
					<div>
						<p v-if="selectedEpic.resolution.resolved" class="modal-epicDetails-epicDetailsLabel">Resolution date</p>
						<p v-if="selectedEpic.resolution.resolved" class="modal-epicDetails-epicDetailsValue">{{ dateResolver(selectedEpic.resolution.resolutionDate) }}</p>
					</div>
				</div>
				<div class="epicDetails-right">
					<div class="modal-form">
						<label for="epicName">Epic name</label>
						<br />
						<input
							type="text"
							name="epicName"
							spellcheck="true"
							class="modal-form-title"
							autocomplete="off"
							v-model="selectedEpic.epicName">
					</div>
					<div class="modal-form">
						<label for="epicStatus">Epic status</label>
						<br />
						<select name="epicStatus" v-model="status">
							<option value="inProgress">In progress</option>
							<option value="soon">Soon</option>
							<option value="later">Later</option>
							<option value="done">Done</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-actions">
			<button type="button" class="bttn-danger epicDetails-delete" @click="deleteEpic">
				<i class="fas fa-trash-alt"></i>
				Delete epic
			</button>
			<button type="button" class="bttn-secondary" @click="$emit('toggleModal')">Cancel changes</button>
			<button type="button" class="bttn-primary" @click="saveEpic">Save</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['selectedEpic'],
		computed:{
			resolutionStatus() {
				if (this.selectedEpic.status === 'done') {
					return 'Resolved';
				} else {
					return 'Unresolved';
				}
			}
		},
		methods: {
			dateResolver(date) {
				date = new Date(date);
				return date.toLocaleDateString('en-CA');
			},
			deleteEpic() {
				this.$emit('deleteEpic', this.selectedEpic.id);
				this.$emit('toggleModal', '');
			},
			saveEpic() {
				this.selectedEpic.status = this.status;
				this.$emit('updateEpic', this.selectedEpic);
				this.$emit('toggleModal', '');
			}
		},
		data: function() {
			return {
				status: this.selectedEpic.status
			}
		}
	}
</script>
