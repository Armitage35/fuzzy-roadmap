<template>
	<div class="modal-content">
		<div class="modal-data">
			<p class="modal-onboarding-opening">Dear product owner,</p>
			<p>You're in quite the quagmire: you want to be agile, but your bosses are increasingly asking you about "the big picture", but you don't want to get in the business of giving dates?</p>
			<p>Fuzzy time roadmap are the best middle ground you can wish for as they will give a great deal of visibility to your bosses about where the product is headed but does not includes dates. Instead of thinking in terms of absolute time, a fuzzy time roadmap will let your company focus on priorities.</p>
			<p>They are also an excellent tool to work with other departments since they often don't have the patience to read detailed Gantt charts or even to read your well-written Confluence pages. They care about what's going on now and what will happen tomorrow.</p>
			<p class="modal-onboarding-signature">With love</p>
			<p class="modal-onboarding-signature">Adrien D. A. 😘</p>
		</div>
		<div class="modal-actions">
			<button type="button" class="bttn-primary" @click="$emit('toggleModal')">
				<i class="fas fa-drafting-compass"></i>Let's get started</button>
		</div>
	</div>
</template>

<script>
export default {

}
</script>
