<template>
	<div class="epic" @click="toggleModal(id)">
		<div class="epicStatusMarker" :class="classNameCalculation()"></div>
		<div class="epicTitle">{{this.EpicName}}</div>
	</div>
</template>

<script>
	import { bus } from '../../../../main.js';

	export default {
		props: ['EpicName', 'epicStatus', 'id'],
		methods: {
			classNameCalculation(){
				return "epic" + this.epicStatus.charAt(0).toUpperCase() + this.epicStatus.slice(1)
			},
			toggleModal(id) {
				bus.$emit('epicSelectd', id);
			}
		}
	}
</script>

<style>
</style>
