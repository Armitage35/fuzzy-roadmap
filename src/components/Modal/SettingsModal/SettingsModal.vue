<template>
	<div class="modal-content">
		<div class="settings-layout">
			<div class="setting-left">
				<div class="settings-picture" :style="{'background-image': 'url(' + pictureUrl + ')'}"></div>
			</div>
			<div class="setting-right">
				<div class="modal-data">
					<div class="modal-form">
						<label for="userName">Your name</label>
						<br />
						<input
							type="text"
							name="userName"
							spellcheck="true"
							class="modal-form-title"
							v-model="userName">
					</div>
					<div class="modal-form">
						<label for="email">Your email</label>
						<br />
						<input
							type="text"
							name="email"
							spellcheck="true"
							class="modal-form-title"
							v-model="email">
					</div>
					<div class="modal-form">
						<label for="theme">Preferred theme *</label>
						<br />
						<select name="theme" v-model="theme">
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</div>
					<div class="modal-form">
						<label for="language">Language *</label>
						<br />
						<select name="language" v-model="language">
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
							v-model="pictureUrl">
					</div>
					<div class="modal-form">
						<label for="tracking">Tracking</label>
						<br />
						<label class="modal-settings-checkboxLabel"><input
							type="checkbox"
							name="tracking"
							v-model="tracking">I agree be tracked to help improve this app</label>
						<a href="https://github.com/Armitage35/fuzzy-roadmap/wiki/Privacy" target="_blank" class="modal-settings-trackingInfo">Learn what happens when you agree to be tracked</a>
					</div>
					<p class="settings-disclaimer">* This is still an early version, some of these features are not implemented yet</p>
				</div>
			</div>
		</div>
		<div class="modal-actions">
			<button type="button" class="bttn-secondary" @click="closeModal">Cancel changes</button>
			<button type="button" class="bttn-primary" @click="updateSettings">Save</button>
		</div>
	</div>
</template>

<script>
	import { bus } from '../../../main.js';

	export default {
		props: ['userSettings'],
		data: function(){
			// @TODO: add format validation
			return {
				userName: this.userSettings.userName,
				email: this.userSettings.email,
				theme: this.userSettings.preferences.theme,
				language: this.userSettings.preferences.language,
				pictureUrl: this.userSettings.profilePicture,
				tracking: this.userSettings.preferences.tracking
			}
		},
		methods: {
			updateSettings() {
				bus.$emit('updateSettings', {
					userName: this.userName,
					email: this.email.toLowerCase(),
					theme: this.theme,
					language: this.language,
					pictureUrl: this.pictureUrl.toLowerCase(),
					tracking: this.tracking
				});
				bus.$emit('toggleModal');
			},
			closeModal () {
				bus.$emit('toggleModal');
			}
		}
	}
</script>
