<script setup>

    // props
    const props = defineProps({
        user: {
            type: Object,
            default: {}
        }
    });

    // emit
    const emit = defineEmits(['delete', 'edit']);

    // user first character for avatar
    const FirstChar = () => {
        return props.user.name[0].toUpperCase();
    };
    

</script>

<template>
    <li v-if="!user.matched">
        <div class="avatar">
            <h2>{{ FirstChar() }}</h2>
        </div>
        <div class="content">
            <h4>{{ user.name }}</h4>
            <p>{{ user.thread }}</p>
        </div>
        <div class="delete">
            <img @click="emit('delete', user)" src="./../../images/chat-list/delete.svg" alt="delete">
        </div>
        <div class="edit">
            <img @click="emit('edit', user)" src="./../../images/chat-list/edit.svg" alt="edit">
        </div>
    </li>
</template>