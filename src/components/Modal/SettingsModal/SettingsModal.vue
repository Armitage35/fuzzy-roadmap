<template>
	<div class="modal-content">
		<div class="modal-data">
			<div class="modal-form">
				<label for="email">Your email</label>
				<br />
				<input
					type="text"
					name="email"
					placeholder="ron@hogwarts.com"
					spellcheck="true"
					class="modal-form-title"
					v-model="email">
			</div>
			<div class="modal-form">
				<label for="epicStatus">Preferred theme</label>
				<br />
				<select name="epicStatus" v-model="theme">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</div>
			<div class="modal-form">
				<label for="epicStatus">Language</label>
				<br />
				<select name="epicStatus" v-model="language">
					<option value="light">English</option>
					<option value="dark">French</option>
				</select>
			</div>
			<div class="modal-form">
				<label for="tracking">Language</label>
				<br />
				<input type="checkbox" name="tracking">I agree be tracked to help improve this app
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
