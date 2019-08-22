<template>
    <div class="epic">
        <div class="epicStatusMarker" :class="this.epicStatus"></div>
        <div class="epicTitle">{{this.epicTitle}}</div>
    </div>
</template>

<script>
export default {
    props: ['epicTitle', 'epicStatus']
}
</script>

<style>
</style>
