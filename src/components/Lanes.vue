<template>
	<div>
		<h1>{{content}}</h1>
		<Epic></Epic>
	</div>
</template>

<script>
	import Epic from './Epic.vue'

	export default {
		components: {
			Epic
		},
		props: ['content']
	}
</script>
