<template>
    <div>
<toubu shenying="神影电影"></toubu>
<chenshi></chenshi>
<div>
    <router-view></router-view>
</div>

<dibu></dibu>
    </div>
</template>

<script>
import toubu from '../components/toubu'
import chenshi from '../components/chenshi'
import dibu from '../components/dibu'
import reying from '../components/reying'
    export default {
        components:{
            toubu,
            chenshi,
            dibu,
            reying
        }
    }
</script>
<style scoped>

</style>