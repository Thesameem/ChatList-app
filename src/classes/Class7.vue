<script setup>

    // vue import
    import { ref } from 'vue';

    // components
    import UserCard from './chat-list/UserCard.vue';
    import AddModal from './chat-list/AddModal.vue';
    import EmptyCard from './chat-list/EmptyCard.vue';

    let ShowModal = ref(false);

    let ChatListUsers = ref([
        {
            id:  1,
            name: 'Arjun Kandel',
            thread: 'Earum explicabo repellat aspernatur id est' 
        },
        {
            id: 2,
            name: 'Bishal',
            thread: 'Porro autem eius reiciendis odio temporibus'
        },
        {
            id: 3,
            name: 'Bishowrup',
            thread: 'Perferendis ratione obcaecati neque qui nesciunt sequi aperiam'
        },
        {
            id: 4,
            name: 'Jone Doe',
            thread: 'Perferendis ratione obcaecati neque qui nesciunt sequi aperiam'
        }
    ]);

    /**
     * delete selected user from ChatListUsers
     * @param user selected user to delete
     * @returns delete user and update ChatListUsers
    */

    const DeleteUser = (user) => {
        ChatListUsers.value = ChatListUsers.value.filter(element => {
            if (user.id == element.id) return false;
            else return true;
        });
    };


    /**
     * This function add new user to the ChatListUsers
     * @param username emited from AddModal, name of new user
     * @param message emited data, message of new user
     * @returns void
    */

    const AddNewUser = (username, message) => {
        // add new user to the first index of ChatListUsers
        ChatListUsers.value.unshift({
            id:  Math.floor(Math.random() * 1000),
            name: username,
            thread: message 
        });

        // now hide the add modal
        ShowModal.value = false;
    };

</script>

<template>
    <!-- chat list -->
    <div class="chat-list">
        <div class="header">
            <h2>
                <img class="network" src="./../images/chat-list/chat-list/network.svg" alt="network">
                <span>Chats ({{ ChatListUsers.length }})</span>
            </h2>
            <div class="action">
                <span><img src="./../images/chat-list/theme.svg" alt="theme"></span>
                <span @click="ShowModal = true"><img src="./../images/chat-list/add.svg" alt="add"></span>
            </div>
        </div>

        <div class="search">
            <img src="./../images/chat-list/search.svg" alt="search">
            <input type="text" placeholder="Search in chat">
        </div>

        <ul>
            <UserCard v-for="user in ChatListUsers" :key="user.id" 
                        :user="user"
                        @delete="DeleteUser" />
            
            <EmptyCard v-if="ChatListUsers.length == 0" />            
        </ul>
    </div>
    <!-- chat list -->

    <!-- add user modal -->
    <AddModal v-if="ShowModal" 
            @adduser="AddNewUser"
            @close="ShowModal = false" />
    <!-- add user modal -->

</template>

<style scoped>

</style>