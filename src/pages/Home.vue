<template>
    <div>11111</div>
    <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'

const count = ref(0);

const increate = ():void => {
    count.value++;
}

onMounted(()=>{
    console.log(`The initial count is ${count.value}.`)
})
</script>

<style>

</style>