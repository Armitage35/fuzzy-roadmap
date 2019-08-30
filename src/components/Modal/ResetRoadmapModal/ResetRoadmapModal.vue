<template>
	<div class="modal-content">
		<div class="modal-data">
			<p class="modal-reset-warning">WHOAH THERE!</p>
			<p class="modal-reset-warning">You are about to delete your entire roadmap. Only use this feature if you are sure that you actually want to start from scratch.</p>
			<p class="modal-reset-warning">Just so you know, unless you exported your roadmap prior to deleting it, there is no way back from here.</p>
		</div>
		<div class="modal-actions">
			<button type="button" class="bttn-secondary" @click="$emit('toggleModal')">Cancel</button>
			<button type="button" class="bttn-danger epicDetails-delete" @click="deleteEpic">
				<i class="fas fa-dragon"></i>
				Reset roadmap
			</button>
		</div>
	</div>
</template>

<script>
export default {

}
</script>
