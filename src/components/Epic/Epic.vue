<template>
    <div class="epic">
        <div class="epicStatusMarker" :class="classNameCalculation()"></div>
        <div class="epicTitle">{{this.epicTitle}}</div>
    </div>
</template>

<script>
export default {
    props: ['epicTitle', 'epicStatus'],
    methods: {
			classNameCalculation(){
				return "epic" + this.epicStatus.charAt(0).toUpperCase() + this.epicStatus.slice(1)
			}
		}
}
</script>

<style>
</style>
