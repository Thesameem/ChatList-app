<script setup>

    // vue import
    import { ref } from 'vue';

    // local storage
    import { SetChatList, GetChatList } from './chat-list/scripts/Storage';

    // components
    import { UserCard, AddModal, EditModal, EmptyCard } from './../classes/chat-list/index';


    let ShowModal = ref(false);
    let ShowEditModal = ref(false);
    let EditUserData = ref({});
    let SearchKeyword = '';

    // chat list user data
    let ChatListUsers = ref(GetChatList());

    // dark and light theme
    const UpdateTheme = () => {
        document.body.classList.toggle('dark-theme');
    }

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

        // update local storage
        SetChatList(ChatListUsers.value);
    };

    /**
     * this function show the edit modal 
     * and update EditUserData object to send as props
     * @param user user object to change 
     * @returns void
    */

    const EditUser = (user) => {
        EditUserData.value = user;
        ShowEditModal.value = true;
    };

    /**
     * this function update the selected user in main object (ChatListUsers)
     * @param user new updated user data emited from EditModal Component
     * @returns void
    */

    const UpdateUser = (user) => {
        // update the selected user in main object
        ChatListUsers.value.map(element => {
            if (user.id == element.id) {
                element.name = user.name;
                element.thread = user.thread;
            }
        });

        // update local storage
        SetChatList(ChatListUsers.value);

        // hide edit modal
        ShowEditModal.value = false;
    }


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

        // update local storage
        SetChatList(ChatListUsers.value);

        // now hide the add modal
        ShowModal.value = false;
    };

    // search users
    const SearchUsers = () => {
        ChatListUsers.value.map(user => {
            let search = SearchKeyword.toLowerCase();
            let name = user.name.toLowerCase();
            
            if (name.includes(search)) user.matched = false;
            else user.matched = true;
        });
    }

    // sort user in acending order
    const AcendingOrder = () => {
        ChatListUsers.value.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            else return 0;
        });
    };  

    // sort user in decending order
    const DecendingOrder = () => {
        ChatListUsers.value.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            else if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            else return 0;
        });
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
                <span @click="AcendingOrder">A</span>
                <span @click="DecendingOrder">Z</span>
                <span @click="UpdateTheme"><img src="./../images/chat-list/theme.svg" alt="theme"></span>
                <span @click="ShowModal = true"><img src="./../images/chat-list/add.svg" alt="add"></span>
            </div>
        </div>

        <div class="search">
            <img src="./../images/chat-list/search.svg" alt="search">
            <input type="text" @keyup="SearchUsers" v-model="SearchKeyword" placeholder="Search in chat">
        </div>

        <ul>
            <UserCard v-for="user in ChatListUsers" :key="user.id" 
                        :user="user"
                        @delete="DeleteUser"
                        @edit="EditUser" />
            
            <EmptyCard v-if="ChatListUsers.length == 0" />            
        </ul>
    </div>
    <!-- chat list -->

    <!-- add user modal -->
    <AddModal v-if="ShowModal" 
            @adduser="AddNewUser"
            @close="ShowModal = false" />
    <!-- add user modal -->

    <!-- edit user modal -->
    <EditModal v-if="ShowEditModal"
                :editUser="EditUserData"
                @updateuser="UpdateUser"
                @close="ShowEditModal = false"  />
    <!-- edit user modal -->

</template>

<style scoped>

</style>