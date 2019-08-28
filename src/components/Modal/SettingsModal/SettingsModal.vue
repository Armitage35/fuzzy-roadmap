<template>
	<div class="modal-content">
		<div class="settings-layout">
			<div class="setting-left">
				<div class="settings-picture"></div>
			</div>
			<div class="setting-right">
				<div class="modal-data">
					<div class="modal-form">
						<label for="email">Your email</label>
						<br />
						<input
							type="text"
							name="email"
							spellcheck="true"
							class="modal-form-title"
							:value="this.userSettings.email">
					</div>
					<div class="modal-form">
						<label for="theme">Preferred theme</label>
						<br />
						<select name="theme" :value="this.userSettings.preferences.theme">
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</div>
					<div class="modal-form">
						<label for="language">Language</label>
						<br />
						<select name="language" :value="this.userSettings.preferences.language">
							<option value="en">English</option>
							<option value="fr">French</option>
						</select>
					</div>
					<div class="modal-form">
						<label for="profilePicture">Your picture</label>
						<br />
						<input
							type="text"
							name="profilePicture"
							spellcheck="false"
							class="modal-form-title"
							:value="this.userSettings.profilePicture">
					</div>
					<div class="modal-form">
						<label for="tracking">Language</label>
						<br />
						<input
							type="checkbox"
							name="tracking"
							:value="this.userSettings.preferences.tracking">
							I agree be tracked to help improve this app
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
		props: ['userSettings']
	}
</script>
