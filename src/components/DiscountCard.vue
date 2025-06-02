<script setup>

    // props define
    let props = defineProps({
        item: {
            type: Object,
            default: {}
        }
    });

    // emit define
    let emits = defineEmits(['buttonclicked']);


</script>

<template>
    <li>
        <img :src="item.image" />
        <span>{{ item.discount }}%</span>
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <button @click="emits('buttonclicked', item)">Buy Now</button>
    </li>
</template>