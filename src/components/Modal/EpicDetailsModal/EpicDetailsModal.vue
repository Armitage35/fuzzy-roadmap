<template>
	<div class="modal-content">
		<div class="modal-data">
			<div class="settings-layout">
				<div class="setting-left">
					<p>ID: {{ selectedEpic.id }}</p>
					<p>Creation date: {{ selectedEpic.creationDate.toLocaleDateString('en-CA') }}</p>
					<p>Update date: {{ selectedEpic.creationDate.toLocaleDateString('en-CA') }}</p>
					<p>Resolution: {{ selectedEpic.resolution.resolved }}</p>
					<p v-if="selectedEpic.resolution.resolved">Resolution date:
						{{ selectedEpic.resolution.resolutionDate.toLocaleDateString('en-CA') }}</p>
				</div>
				<div class="setting-right">
					<div class="modal-form">
						<label for="epicName">Epic name</label>
						<br />
						<input type="text" name="userName" spellcheck="true" class="modal-form-title"
							:value="selectedEpic.name.fullName">
					</div>
					<div class="modal-form">
						<label for="epicStatus">Epic status</label>
						<br />
						<select name="epicStatus" :value="selectedEpic.status">
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
			<button type="button" class="bttn-secondary">Cancel changes</button>
			<button type="button" class="bttn-primary">Save</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['selectedEpic']
	}
</script>
