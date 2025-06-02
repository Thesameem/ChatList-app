<script setup>

    import { ref } from 'vue';

    // reactive data 
    // ref and reactive
    let Counter = ref(5);


    let Increment = () => {
        
    }



</script>

<template>

    <button @click="Counter--">-</button>
    <h1>{{ Counter }}</h1>
    <button @click="Counter++">+</button>

</template>

<style>

    button {
        padding: 20px;
        font-size: 32px;
    }

</style>