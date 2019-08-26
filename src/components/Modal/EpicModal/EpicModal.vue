<template>
	<div class="modal-content">
		<div class="modal-data">
			<div class="modal-form">
				<label for="epicName">Epic name</label>
				<br />
				<input type="text" name="epicName" placeholder="A great epic name" spellcheck="true" class="modal-form-title">
			</div>
			<div class="modal-form">
				<label for="epicStatus">Epic status</label>
				<br />
				<select name="epicStatus">
					<option value="inProgress" class="modal-form-epicStatus">In progress</option>
					<option value="soon">Soon</option>
					<option value="later">Later</option>
					<option value="done">Done</option>
				</select>
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

	}
</script>
