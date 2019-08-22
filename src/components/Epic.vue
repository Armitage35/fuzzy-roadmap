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
    .epic {
        border: 1px solid black;
        height: 70px;
        width: 180px;
        display: flex;
    }

    .epicStatusMarker {
        border-right: 1px solid black;
        background-color: rgb(89, 89, 95);
        height: 100%;
        width: 10px;
    }

    .epicTitle {
        text-align: center;
        margin: auto
    }

    .inProgress {
        background-color: #FFF2CC;
    }
</style>
