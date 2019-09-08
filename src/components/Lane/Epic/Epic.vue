<template>
	<div class="epic" @click="$emit('epicSelectd', id)">
		<div class="epicStatusMarker" :class="classNameCalculation()"></div>
		<div class="epicTitle">{{this.EpicName}}</div>
	</div>
</template>

<script>
export default {
	props: ['EpicName', 'epicStatus', 'id'],
	methods: {
			classNameCalculation(){
				return "epic" + this.epicStatus.charAt(0).toUpperCase() + this.epicStatus.slice(1)
			}
		}
}
</script>

<style>
</style>
